import { NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const ip_address = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || null;

    const {
      lead_id,
      full_name,
      mobile_number,
      email_address,
      pincode,
      date_of_birth,
      city,
      pan_number,
      employment_type,
      monthly_income,
      company_name,
      current_emi,
      loan_amount,
      loan_purpose,
      desired_tenure,
      loan_type,
      status
    } = body;

    // Rigid server-side validation
    if (!full_name || !mobile_number || !pincode || !loan_type) {
      return NextResponse.json(
        { error: 'Missing mandatory fields (Full Name, Mobile Number, Pincode, Loan Type).' },
        { status: 400 }
      );
    }

    const adminSupabase = await createAdminClient();

    // Prepare lead payload
    const payload = {
      user_id: null,
      full_name: full_name.trim(),
      mobile_number: mobile_number.trim(),
      email_address: email_address ? email_address.trim() : null,
      pincode: pincode.trim(),
      date_of_birth: date_of_birth ? date_of_birth.trim() : null,
      city: city ? city.trim() : null,
      pan_number: pan_number ? pan_number.trim().toUpperCase() : null,
      employment_type: employment_type || null,
      monthly_income: monthly_income ? parseFloat(monthly_income) : null,
      company_name: company_name ? company_name.trim() : null,
      current_emi: current_emi ? parseFloat(current_emi) : 0,
      loan_amount: loan_amount ? parseFloat(loan_amount) : null,
      loan_purpose: loan_purpose || null,
      desired_tenure: desired_tenure || null,
      loan_type: loan_type || 'Personal',
      status: status || 'pending',
      ip_address: ip_address,
      updated_at: new Date().toISOString()
    };

    let data, error;

    if (lead_id) {
      // Update existing draft / abandoned lead
      const res = await adminSupabase
        .from('leads')
        .update(payload)
        .eq('id', lead_id)
        .select()
        .single();
      data = res.data;
      error = res.error;
    } else {
      // Insert new lead
      payload.created_at = new Date().toISOString();
      const res = await adminSupabase
        .from('leads')
        .insert(payload)
        .select()
        .single();
      data = res.data;
      error = res.error;
    }

    if (error) {
      console.error('Supabase Lead Insert/Update Error:', error);
      // Fallback: If desired_tenure column is missing (PGRST204) or 'abandoned' constraint fails (23514) on unmigrated DB
      if (error.code === 'PGRST204' || error.code === '23514' || error.message?.includes('column') || error.message?.includes('constraint')) {
        const safeStatus = (error.code === '23514' || error.message?.includes('constraint')) && status === 'abandoned' ? 'stuck' : (status || 'pending');
        const fallbackPayload = {
          user_id: null,
          full_name: full_name.trim(),
          mobile_number: mobile_number.trim(),
          email_address: email_address ? email_address.trim() : null,
          pincode: pincode.trim(),
          date_of_birth: date_of_birth ? date_of_birth.trim() : null,
          city: city ? city.trim() : null,
          pan_number: pan_number ? pan_number.trim().toUpperCase() : null,
          employment_type: employment_type || null,
          monthly_income: monthly_income ? parseFloat(monthly_income) : null,
          company_name: company_name ? company_name.trim() : null,
          current_emi: current_emi ? parseFloat(current_emi) : 0,
          loan_amount: loan_amount ? parseFloat(loan_amount) : null,
          loan_purpose: loan_purpose || null,
          loan_type: loan_type || 'Personal',
          status: safeStatus,
          ip_address: ip_address
        };

        let fallbackRes;
        if (lead_id) {
          fallbackRes = await adminSupabase
            .from('leads')
            .update(fallbackPayload)
            .eq('id', lead_id)
            .select()
            .single();
        } else {
          fallbackRes = await adminSupabase
            .from('leads')
            .insert(fallbackPayload)
            .select()
            .single();
        }

        if (fallbackRes.error) {
          console.error('Fallback Lead Insert Error:', fallbackRes.error);
          // Ultimate safety net: use standard 'pending' status if 'stuck' or custom status also fails
          const corePayload = { ...fallbackPayload, status: 'pending' };
          let coreRes;
          if (lead_id) {
            coreRes = await adminSupabase.from('leads').update(corePayload).eq('id', lead_id).select().single();
          } else {
            coreRes = await adminSupabase.from('leads').insert(corePayload).select().single();
          }
          if (coreRes.error) throw coreRes.error;
          data = coreRes.data;
        } else {
          data = fallbackRes.data;
        }
      } else {
        throw error;
      }
    }

    // Forward lead data to Google Sheet Webhook for both abandoned draft updates and final submissions
    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL || process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL;
    const redirectUrl = process.env.GOOGLE_SHEET_REDIRECT_URL || process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL;

    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            Timestamp: payload.updated_at || new Date().toISOString(),
            Action_Type: payload.status === 'abandoned' ? 'abandoned_draft_update' : 'submission_and_email',
            Status: payload.status === 'abandoned' ? 'Abandoned' : 'Submitted',
            triggerEmail: 'true',
            notificationEmail: 'info@cashmela.com,adilpatel3110@gmail.com',
            Product: payload.loan_type,
            Customer_Name: payload.full_name,
            Customer_Mobile: payload.mobile_number,
            Customer_Email: payload.email_address || '',
            Current_Pincode: payload.pincode,
            Date_of_Birth: payload.date_of_birth || '',
            PAN_Number: payload.pan_number || '',
            Employment_Type: payload.employment_type || '',
            Monthly_Net_Income: payload.monthly_income || '',
            Total_Existing_EMI: payload.current_emi || 0,
            Required_Loan_Amount: payload.loan_amount || '',
            Loan_Purpose: payload.loan_purpose || '',
            Desired_Tenure: payload.desired_tenure || ''
          })
        });
      } catch (sheetErr) {
        console.error('Google Sheets Webhook Error:', sheetErr);
      }
    }

    return NextResponse.json({ 
      success: true, 
      lead: data
    });
  } catch (err) {
    console.error('API /api/leads Error:', err);
    return NextResponse.json(
      { error: err.message || 'Failed to submit loan application.' },
      { status: 500 }
    );
  }
}
