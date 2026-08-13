# CashMela Platform Implementation Guide & Prompt

This document serves as a detailed prompt and architecture guide for developing the CashMela web application, backend, and admin panel. It covers the product structure, authentication flow, admin dashboard, and critical security measures without including code implementations.

## 1. Product Overview & Frontend Structure (Next.js)
**Platform Purpose**: A loan-comparison and debt-consolidation platform.
**Loan Offerings**: Personal, Debt Consolidation, Business, Overdraft.
**Core Pages**: Homepage, Calculators, Blog, FAQ, and a "Get Started" lead funnel.
**Brand Positioning**: Compares offers from RBI-regulated banks and NBFCs (does not sell loans directly). Warns users against upfront fees.

### Lead Generation Funnel
Transform the existing application flow into a tightened, guided 3–4 step funnel:
- **Step 1**: Work Profile → Loan Category
- **Step 2**: Pincode → Debt/Salary/Mobile/Name
- **Step 3**: Personal Details → Financial Details
- **Step 4**: Submission & Success Screen ("Application received. Our team will connect with you soon.")

**Key UX/UI Requirements**:
- Implement a clear progress bar.
- Add autosave functionality for the form state.
- Make form fields dynamic based on the selected loan type (only show relevant fields).
- **Trust Elements**: Display partner bank logos. Replace the homepage "Trusted by Thousands" placeholders (zeros) with real metrics, or hide the section until verified numbers are available.

## 2. Backend & Database (Supabase Postgres)
- **Database Structure**: Store leads, user profiles, and admin roles using Supabase Postgres.
- **Access Control**: Enable Row Level Security (RLS) on every exposed table. Supabase strongly recommends this for row-based secure access.
- **Service Keys**: Ensure the Supabase service role key is kept securely on the server and never exposed to the frontend.

## 3. User Login & OTP Flow (Supabase Auth)
Implement a robust, secure mobile-first authentication flow.

**Authentication Flow Steps**:
1. User enters their mobile number.
2. Backend creates an OTP request record.
3. Backend sends the OTP.
4. User inputs the OTP on the frontend.
5. Backend verifies the OTP.
6. Upon successful verification, create/retrieve a Supabase user/profile record and issue a session.

**Security & Throttling (OWASP Compliant)**:
- Rate limit OTP requests and login attempts by both mobile number and IP address.
- Add a cooldown timer after repeated failed attempts to prevent brute force and abuse.
- Ensure Supabase Auth endpoint rate limits are properly configured.
- **OTP Rules**: Single-use, short-lived, never logged in plaintext, and cap the number of resend attempts.

## 4. Admin Panel Architecture
**Domain Setup**: Host the admin panel on a separate subdomain (e.g., `admin.yourdomain.com`).
**Authentication**:
- Implement a completely separate authentication flow using Email/Password.
- Do NOT reuse the end-user login session for administrators.
- Implement Role-Based Access Control (RBAC).

**Admin Dashboard Features**:
- **Core Metrics**: Total leads, leads broken down by loan type, funnel step conversion rates.
- **System Metrics**: OTP sent/verified/fail rates.
- **Lead Analytics**: Lead source tracking, pincode/state distribution.
- **Operations Management**: Assignment to agents, lead status tracking, follow-up notes.
- **Advanced Tools**: Lender matching rules, SLA tracking, campaign/source tracking, tracking reasons for rejected leads, and a dedicated queue for "stuck leads".
- **Data Utilities**: CSV export capabilities and comprehensive audit logs.

## 5. Security & Compliance Precautions
- **Data Minimization**: Collect and store only the minimum personal data required for loan matching.
- **Consent**: Obtain explicit user consent before sharing any data with partner lenders.
- **Encryption**: Enforce HTTPS everywhere.
- **Disclaimer Integration**: Reinforce the site's disclaimer throughout the funnel, reminding users that the platform is a comparison tool and will never ask for upfront fees.

## Tech Stack Summary
- **Frontend**: Next.js (App Router/Pages)
- **Backend/Database**: Supabase (Postgres, Auth, RLS)
- **Server APIs**: Server-side logic for OTP verification, secure lead creation, and admin reports.
