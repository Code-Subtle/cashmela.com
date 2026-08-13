'use client';

import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { useEffect, useRef, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { FaArrowRight, FaCheckCircle, FaCheckSquare, FaChevronRight, FaCoins, FaDownload, FaFilePdf, FaMagic, FaTimesCircle, FaWallet, FaWhatsapp } from 'react-icons/fa';

ChartJS.register(ArcElement, Tooltip, Legend);

const SmartLoanCalculator = () => {
    // State matching the provided JS structure
    const [calcMode, setCalcMode] = useState('emi'); // 'emi', 'bt', 'prepay'
    const [calcType, setCalcType] = useState('personal'); // 'personal', 'home', 'business'
    
    const [state, setState] = useState({
        amount: 1000000, rate: 9.99, tenure: 6, income: 60000,
        currentBalance: 1500000, currentRate: 11.5, newRate: 9.99, remTenure: 6,
        origAmount: 2000000, origTenure: 15, prepayAmt: 200000, paidEmis: 24
    });

    const [chartData, setChartData] = useState(null);
    const [results, setResults] = useState(null); // Holds display data
    const [amortData, setAmortData] = useState([]);
    const [amortView, setAmortView] = useState('yearly');
    const [insight, setInsight] = useState(null);
    const [prepayData, setPrepayData] = useState(null); // Specific for prepay comparison
    const chartRef = useRef(null);

    const defaults = {
        personal: { amount: 1000000, rate: 9.99, tenure: 6, maxTenure: 9 }, 
        home: { amount: 3000000, rate: 7.5, tenure: 20, maxTenure: 30 },
        business: { amount: 2500000, rate: 13.0, tenure: 3, maxTenure: 7 }
    };

    // Helper: Number to Words
    const numToWords = (n) => {
        if (!n || n === 0) return "";
        n = Math.round(n);
        const units = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
        const teens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
        const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
        function convert(num) {
            if (num < 10) return units[num];
            if (num < 20) return teens[num - 10];
            if (num < 100) return tens[Math.floor(num / 10)] + (num % 10 !== 0 ? " " + convert(num % 10) : "");
            if (num < 1000) return units[Math.floor(num / 100)] + " Hundred" + (num % 100 !== 0 ? " " + convert(num % 100) : "");
            return "";
        }
        let str = "";
        if (n >= 10000000) { str += convert(Math.floor(n / 10000000)) + " Crore "; n %= 10000000; }
        if (n >= 100000) { str += convert(Math.floor(n / 100000)) + " Lakh "; n %= 100000; }
        if (n >= 1000) { str += convert(Math.floor(n / 1000)) + " Thousand "; n %= 1000; }
        if (n > 0) { str += convert(n); }
        return str.trim() + " Rupees";
    };

    // Recalculate effect
    useEffect(() => {
        calculate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state, calcMode, calcType]);

    const updateState = (key, value) => {
        setState(prev => ({ ...prev, [key]: parseFloat(value) || 0 }));
    };

    const handleLoanTypeChange = (type) => {
        setCalcType(type);
        if(calcMode === 'emi') {
            const defs = defaults[type];
            setState(prev => ({ ...prev, amount: defs.amount, rate: defs.rate, tenure: defs.tenure }));
        }
    };

    const switchMode = (mode) => {
        setCalcMode(mode);
        if (mode === 'prepay') {
             // Let's keep it smooth
        } else if (mode === 'bt') {
             // Let's keep it smooth
        } else {
             const defs = defaults[calcType];
             setState(prev => ({ ...prev, amount: defs.amount, rate: defs.rate, tenure: defs.tenure }));
        }
    };

    // --- Calculation Logic ---

    const calculate = () => {
        if (calcMode === 'emi') doEMI();
        else if (calcMode === 'bt') doBT();
        else if (calcMode === 'prepay') doPrepay();
    };

    const doEMI = () => {
        const { amount, rate, tenure, income } = state;
        const r = rate / 12 / 100;
        const n = tenure * 12;
        const emi = (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1) || 0;
        const totalAmt = emi * n;
        const totalInt = totalAmt - amount;

        setResults({
            mainLabel: 'Monthly EMI',
            mainVal: emi,
            details: [
                { l: 'Principal Amount', v: Math.round(amount) },
                { l: 'Total Interest', v: Math.round(totalInt), c: 'text-orange-500 font-semibold' },
                { l: 'Total Payment', v: Math.round(totalAmt), c: 'font-extrabold' }
            ]
        });

        generateChart([amount, totalInt], ['Principal', 'Interest'], ['#2b80ff', '#f97316']);

        // AI Insight
        const dti = income > 0 ? (emi / income) * 100 : 0;
        const isSafe = dti <= 42;
        const ratio = totalAmt > 0 ? Math.round((totalInt / totalAmt) * 100) : 0;
        const intPerLakh = amount > 0 ? Math.round((totalInt / amount) * 100000) : 0;

        setInsight(
            <div className="text-xs text-slate-600 leading-relaxed">
                <ul className="list-none p-0 m-0 flex flex-col gap-2">
                    <li className={isSafe ? 'text-green-600 font-bold' : 'text-red-600 font-bold'}>
                        <strong>Budget Check (42% Rule):</strong> Your EMI consumes <strong>{dti.toFixed(1)}%</strong> of your income. 
                        {isSafe ? <span className="text-green-600"> Safe!</span> : <span className="text-red-600"> Caution! High debt ratio.</span>}
                    </li>
                    <li><FaCoins className="text-blue-500 inline mr-1"/> <strong>Interest Burden:</strong> For every ₹1 Lakh, you pay approx. <strong className="text-slate-800">{intPerLakh.toLocaleString('en-IN')}</strong> interest.</li>
                    <li><FaCheckSquare className="text-orange-600 inline mr-1"/> <strong>Ratio Analysis:</strong> Interest is <strong className="text-orange-600">{ratio}%</strong> of total repayment.</li>
                </ul>
                <div className="mt-2 pt-2 border-t border-blue-100">
                    <p className="italic text-[10px] text-slate-500">• Opt for a tenure where interest doesn't exceed 25% of principal.</p>
                </div>
            </div>
        );

        genAmort(amount, r, n, emi);
    };

    const doBT = () => {
        const { currentBalance, currentRate, newRate, remTenure } = state;
        const n = remTenure * 12;
        const r1 = currentRate / 12 / 100;
        const r2 = newRate / 12 / 100;
        const oldEMI = (currentBalance * r1 * Math.pow(1+r1, n)) / (Math.pow(1+r1, n)-1) || 0;
        const newEMI = (currentBalance * r2 * Math.pow(1+r2, n)) / (Math.pow(1+r2, n)-1) || 0;
        const totalOldCost = oldEMI * n;
        const totalNewCost = newEMI * n;
        const savings = totalOldCost - totalNewCost;
        const monthlySave = oldEMI - newEMI;
        const estimatedFee = currentBalance * 0.01;
        const netGain = savings - estimatedFee;

        setResults({
            mainLabel: 'Total Savings',
            mainVal: savings,
            details: [
                { l: 'Current EMI', v: Math.round(oldEMI) },
                { l: 'New EMI', v: Math.round(newEMI), c: 'text-green-600 font-bold' },
                { l: 'Monthly Benefit', v: Math.round(oldEMI - newEMI) }
            ]
        });

        generateChart([totalNewCost, Math.max(0, savings)], ['New Cost', 'Savings'], ['#cbd5e1', '#10b981']);

        if (savings > 0) {
            setInsight(
                <div className="text-xs text-slate-600 leading-relaxed">
                    <ul className="list-none p-0 m-0 flex flex-col gap-2">
                        <li className="text-green-600 font-bold"><FaCheckCircle className="inline mr-1"/> <strong>Switch Recommended:</strong> Save <strong className="text-green-600">{Math.round(savings).toLocaleString('en-IN')}</strong> over {remTenure} years.</li>
                        <li><FaWallet className="inline mr-1"/> <strong>Cash Flow:</strong> Free up <strong>{Math.round(monthlySave).toLocaleString()}</strong> monthly.</li>
                        <li className="text-orange-600 font-medium">Note: Net profit ~{Math.round(netGain).toLocaleString()} (after 1% est. fee).</li>
                    </ul>
                </div>
            );
        } else {
             setInsight(<div className="text-red-500 text-xs font-bold"><FaTimesCircle className="inline mr-1"/> No transfer benefit detected.</div>);
        }

        genAmort(currentBalance, r2, n, newEMI);
    };

    const doPrepay = () => {
        const { origAmount, rate, origTenure, paidEmis, prepayAmt } = state;
        const r = rate / 12 / 100;
        const n = origTenure * 12;
        const emi = (origAmount * r * Math.pow(1+r, n)) / (Math.pow(1+r, n)-1) || 0;
        
        // Balance calculation
        let bal = origAmount;
        for(let i=0; i<paidEmis; i++) bal = bal - (emi - (bal*r));
        if(bal < 0) bal = 0;
        
        let newBal = bal - prepayAmt;
        if(newBal < 0) newBal = 0;

        const remMonthsOrig = Math.max(0, n - paidEmis);
        const totalPayOrig = emi * remMonthsOrig;
        const totalIntOrig = Math.max(0, totalPayOrig - bal);

        // Opt A: Tenure Reduction
        let monthsA = 0, tempA = newBal;
        while(tempA > 0 && monthsA < 600) { tempA = tempA - (emi - (tempA*r)); monthsA++; }
        const totalPayA = emi * monthsA;
        const totalIntA = Math.max(0, totalPayA - newBal);
        const netSavingA = totalPayOrig - (totalPayA + prepayAmt);

        // Opt B: EMI Reduction
        let newEMIB = remMonthsOrig > 0 ? (newBal * r * Math.pow(1+r, remMonthsOrig)) / (Math.pow(1+r, remMonthsOrig)-1) : 0;
        const totalPayB = newEMIB * remMonthsOrig;
        const totalIntB = Math.max(0, totalPayB - newBal);
        const netSavingB = totalPayOrig - (totalPayB + prepayAmt);

        const pData = {
            orig: { int: totalIntOrig, tenure: remMonthsOrig, emi: emi, total: totalPayOrig },
            optA: { int: totalIntA, save: totalIntOrig - totalIntA, tenure: monthsA, emi: emi, total: totalPayA + prepayAmt, totalSave: netSavingA },
            optB: { int: totalIntB, save: totalIntOrig - totalIntB, emi: newEMIB, tenure: remMonthsOrig, total: totalPayB + prepayAmt, totalSave: netSavingB }
        };
        setPrepayData(pData);

        const maxSaving = Math.max(pData.optA.totalSave, pData.optB.totalSave);
        const maxIntSaved = Math.max(pData.optA.save, pData.optB.save);
        
        setResults({
            mainLabel: 'Total Net Saving',
            mainVal: maxSaving,
            details: [
                { l: 'Orig. Balance', v: Math.round(bal) },
                { l: 'Prepayment', v: Math.round(prepayAmt), c: 'font-extrabold' },
                { l: 'Max Interest Saved', v: Math.round(maxIntSaved), c: 'text-green-600 font-bold' }
            ]
        });

        generateChart([pData.orig.total, pData.optA.total, pData.optB.total], ['Current', 'Opt A', 'Opt B'], ['#ef4444', '#2b80ff', '#22c55e']);

        const isTenureBetter = pData.optA.totalSave > pData.optB.totalSave;
        
        setInsight(
            <div className="text-xs text-slate-600 leading-relaxed">
                 <div className="font-bold text-blue-700 mb-1 flex items-center gap-1">
                    <FaCheckSquare /> RECOMMENDED: {isTenureBetter ? 'Reduce Tenure (Opt A)' : 'Reduce EMI (Opt B)'}
                </div>
                <p>Net saving of <strong className="text-green-600 font-bold">{Math.round(maxSaving).toLocaleString('en-IN')}</strong>.</p>
                <div className="mt-2 text-[10px] text-gray-500 italic">
                    • Option A saves {((remMonthsOrig - monthsA)/12).toFixed(1)} years.<br/>
                    • Prepay early for max impact.
                </div>
            </div>
        );

        genAmort(newBal, r, monthsA, emi);
    };

    const genAmort = (P, r, n, emi) => {
        let data = [];
        let bal = P;
        for(let i=1; i<=n; i++) {
             if(bal <= 0) break;
             const int = bal * r;
             let prin = Math.min(bal, emi - int);
             data.push({ i, open: bal, emi, prin, int, close: bal - prin });
             bal -= prin;
        }
        setAmortData(data);
    };

    const generateChart = (data, labels, colors) => {
        setChartData({
            labels,
            datasets: [{
                data,
                backgroundColor: colors,
                borderWidth: 0,
                hoverOffset: 4
            }]
        });
    };

    // --- Actions ---

    const addWatermark = (doc) => {
        const pageCount = doc.internal.getNumberOfPages();
        for(let i=1; i<=pageCount; i++) {
            doc.setPage(i);
            doc.setGState(new doc.GState({ opacity: 0.15 }));
            doc.setFontSize(60); 
            doc.setTextColor(50, 50, 50); 
            doc.setFont(undefined, 'bold');
            doc.text("CASHMELA.COM", 105, 150, { align: 'center', angle: 30 }); 
            doc.setGState(new doc.GState({ opacity: 1 }));
            doc.setFontSize(8); 
            doc.setTextColor(150); 
            doc.text("CashMela - India's Trusted Loan Advisor | www.cashmela.com", 105, 285, { align: 'center' });
        }
    };

    const downloadAmortizationPDFOnly = (event) => {
        event.stopPropagation();
        try {
            const doc = new (jsPDF.default || jsPDF)();
            doc.setFillColor(43, 128, 255); 
            doc.rect(0, 0, 210, 20, 'F');
            doc.setTextColor(255, 255, 255); 
            doc.setFontSize(18); 
            doc.setFont(undefined, 'bold');
            doc.text('CashMela', 15, 13);
            doc.setTextColor(0,0,0); 
            doc.setFontSize(10);
            doc.text(calcMode === 'prepay' ? 'Revised Repayment Schedule' : 'Repayment Schedule', 15, 30);
            
            const tableData = amortData.map(r => [`Month ${r.i}`, Math.round(r.open).toLocaleString(), Math.round(r.emi).toLocaleString(), Math.round(r.prin).toLocaleString(), Math.round(r.int).toLocaleString(), Math.round(r.close).toLocaleString()]);
            
            autoTable(doc, { 
                startY: 35, 
                head: [['Period', 'Opening', 'EMI', 'Principal', 'Interest', 'Closing']], 
                body: tableData, 
                theme: 'grid', 
                headStyles: { fillColor: [43, 128, 255] }, 
                styles: { fontSize: 8 }, 
                columnStyles: { 0: { halign: 'left' }, 1: { halign: 'right' }, 2: { halign: 'right' }, 3: { halign: 'right' }, 4: { halign: 'right' }, 5: { halign: 'right' } } 
            });
            
            addWatermark(doc);
            doc.save(`Financial_Amortization_${new Date().toLocaleDateString()}.pdf`);
        } catch (e) {
            console.error("PDF Download Error:", e);
            alert(`Failed to download PDF: ${e.message}`);
        }
    };

    const downloadCalculationPDF = () => {
        try {
            const doc = new (jsPDF.default || jsPDF)();
            doc.setFillColor(43, 128, 255); 
            doc.rect(0, 0, 210, 25, 'F');
            doc.setTextColor(255, 255, 255); 
            doc.setFontSize(16); 
            doc.setFont(undefined, 'bold');
            doc.text('CashMela', 15, 17);
            
            doc.setTextColor(0, 0, 0); 
            doc.setFontSize(11); 
            doc.setFont(undefined, 'bold');
            doc.text(`${calcMode === 'prepay' ? 'PREPAY' : calcMode.toUpperCase()} Analysis`, 15, 40);
            
            doc.setFontSize(9); 
            doc.setFont(undefined, 'bold');
            doc.text(`Date: ${new Date().toLocaleDateString()}`, 170, 40);

            if (chartRef.current) {
                try {
                    const chartImg = chartRef.current.toBase64Image();
                    doc.addImage(chartImg, 'PNG', 150, 28, 45, 45);
                } catch (err) {
                    console.warn("Chart export failed", err);
                }
            }

            let y = 50;
            if (calcMode === 'prepay' && prepayData) {
                 doc.setFont(undefined, 'bold'); doc.text("Strategic Comparison", 15, y); 
                 y += 5;
                 autoTable(doc, { 
                    startY: y, 
                    head: [['Metric', 'Current', 'Option A (Time)', 'Option B (EMI)']],
                    body: [
                        ['Monthly EMI', Math.round(prepayData.orig.emi).toLocaleString(), Math.round(prepayData.optA.emi).toLocaleString(), Math.round(prepayData.optB.emi).toLocaleString()],
                        ['Tenure', `${prepayData.orig.tenure} Mon`, `${prepayData.optA.tenure} Mon`, `${prepayData.optB.tenure} Mon`],
                        ['Int. Saved', '-', Math.round(prepayData.optA.save).toLocaleString(), Math.round(prepayData.optB.save).toLocaleString()],
                        ['Net Saving', '-', Math.round(prepayData.optA.totalSave).toLocaleString(), Math.round(prepayData.optB.totalSave).toLocaleString()]
                    ],
                    theme: 'grid', 
                    headStyles: { fillColor: [30, 30, 30], textColor: 255, fontStyle: 'bold' },
                    styles: { fontSize: 9, cellPadding: 1.5 },
                    margin: { right: 70 }
                 });
                 y = doc.lastAutoTable.finalY + 15;
            } else {
                 doc.text(`Result: ${results?.mainVal ? Math.round(results.mainVal).toLocaleString('en-IN') : ''}`, 15, y);
                 y += 15;
            }

            doc.setFont(undefined, 'bold'); doc.text('Repayment Summary', 15, y); y += 6;
            
            let tableRows = [];
            if (amortView === 'yearly' && calcMode !== 'prepay') { 
                 const map = {};
                 amortData.forEach(r => {
                     const yr = Math.ceil(r.i/12);
                     if(!map[yr]) map[yr] = { i: `Year ${yr}`, open: r.open, emi: 0, prin: 0, int: 0, close: r.close };
                     map[yr].emi += r.emi; map[yr].prin += r.prin; map[yr].int += r.int; map[yr].close = r.close;
                 });
                 tableRows = Object.values(map);
            } else {
                 tableRows = amortData.map(d => ({ ...d, i: `Month ${d.i}` }));
            }

            autoTable(doc, {
                startY: y,
                head: [['Period', 'Opening', 'EMI', 'Principal', 'Interest', 'Closing']],
                body: tableRows.map(r => [r.i, Math.round(r.open).toLocaleString(), Math.round(r.emi).toLocaleString(), Math.round(r.prin).toLocaleString(), Math.round(r.int).toLocaleString(), Math.round(r.close).toLocaleString()]),
                theme: 'grid', 
                headStyles: { fillColor: [43, 128, 255] },
                styles: { fontSize: 8, cellPadding: 1.5 }
            });

            addWatermark(doc);
            doc.save(`Financial_Report_${new Date().toLocaleDateString()}.pdf`);
        } catch (e) {
            console.error("PDF Download Error:", e);
            alert(`Failed to download PDF: ${e.message}`);
        }
    };

    const shareWhatsApp = () => {
        const text = `Check my loan calculation on CashMela! Result: ₹${Math.round(results?.mainVal || 0).toLocaleString()}.`;
        window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
    };

    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    const handleSliderInput = (label, valStr, onChange) => {
        let numeric = parseInt(valStr.replace(/\D/g, ''), 10);
        if (isNaN(numeric)) numeric = 0;
        onChange(numeric);
    };

    const Slider = ({ label, val, min, max, step, suffix, onChange }) => {
        const getPrefix = () => (suffix === '%' || suffix === ' Years' || suffix === ' Months') ? '' : '₹';
        const getSuffix = () => suffix || '';
        
        return (
            <div className="flex flex-col gap-2">
                <div className="flex justify-between items-end">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-tight">{label}</label>
                    <div className="relative group flex items-center justify-end w-32">
                        <span className="text-slate-400 text-sm font-bold pointer-events-none group-focus-within:text-blue-500 transition-colors mr-0.5">{getPrefix()}</span>
                        <input 
                            type="text" 
                            value={mounted ? val.toLocaleString('en-IN') : val}
                            onChange={(e) => handleSliderInput(label, e.target.value, onChange)}
                            className="text-right text-base font-bold text-slate-800 bg-transparent border-none p-0 w-24 outline-none focus:text-blue-600 transition-colors"
                        />
                        <span className="text-slate-400 text-sm font-bold pointer-events-none ml-0.5">{getSuffix()}</span>
                    </div>
                </div>
                <input 
                    type="range" min={min} max={max} step={step} value={val} 
                    onChange={(e) => onChange(Number(e.target.value))}
                    style={{ backgroundSize: `${((val - min) * 100) / (max - min)}% 100%` }}
                    className="w-full accent-blue-600 cursor-pointer bg-slate-200 appearance-none h-1.5 rounded-full outline-none bg-gradient-to-r from-blue-600 to-indigo-500 bg-no-repeat [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-600 [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:transition-all hover:[&::-webkit-slider-thumb]:scale-125 focus:[&::-webkit-slider-thumb]:scale-125"
                />
                {['amount', 'income', 'origAmount', 'prepayAmt', 'currentBalance'].includes(label) && 
                    <div className="text-[9px] text-blue-600/80 font-medium h-3 text-right whitespace-nowrap overflow-hidden text-ellipsis">{mounted ? numToWords(val) : ''}</div>
                }
            </div>
        );
    };

    return (
        <div className="w-full bg-[radial-gradient(circle_at_top_right,#f8fafc,#e2e8f0)] text-slate-800 flex justify-center items-start py-6 px-4 md:px-6">
            <div className="w-full max-w-7xl mx-auto flex flex-col">
                
                {/* Header */}
                <div className="bg-white/70 backdrop-blur-md rounded-xl shadow-sm p-2 flex flex-col gap-4 z-10 mb-4 md:flex-row md:items-center">
                    <div className="text-center px-2 md:w-1/4 md:text-left">
                        <h1 className="text-xl font-extrabold text-slate-900 tracking-tight">Smart Financial Dashboard</h1>
                        <p className="text-xs font-medium text-slate-500">Real-time Loan Analysis & Optimization</p>
                    </div>

                    <div className="flex-grow flex justify-center w-full">
                        <div className="flex gap-1 p-1 bg-gray-200/50 rounded-lg w-full max-w-2xl">
                            <button onClick={() => switchMode('emi')} className={`flex-1 py-1.5 px-4 rounded-md text-xs font-bold transition-all whitespace-nowrap border-none cursor-pointer bg-transparent hover:text-gray-700 hover:bg-gray-50 ${calcMode === 'emi' ? 'bg-white !text-blue-600 shadow-sm' : 'text-gray-500'}`}>EMI Calculator</button>
                            <button onClick={() => switchMode('bt')} className={`flex-1 py-1.5 px-4 rounded-md text-xs font-bold transition-all whitespace-nowrap border-none cursor-pointer bg-transparent hover:text-gray-700 hover:bg-gray-50 ${calcMode === 'bt' ? 'bg-white !text-blue-600 shadow-sm' : 'text-gray-500'}`}>Balance Transfer</button>
                            <button onClick={() => switchMode('prepay')} className={`flex-1 py-1.5 px-4 rounded-md text-xs font-bold transition-all whitespace-nowrap border-none cursor-pointer bg-transparent hover:text-gray-700 hover:bg-gray-50 ${calcMode === 'prepay' ? 'bg-white !text-blue-600 shadow-sm' : 'text-gray-500'}`}>Pre-Payment</button>
                        </div>
                    </div>

                    <div className="hidden md:block w-1/4"></div>
                </div>

                {/* Main Content */}
                <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6">
                    
                    {/* Col 1: Inputs */}
                    <div className="col-span-12 lg:col-span-3 flex flex-col gap-4">
                        
                        {/* Card 1: Loan Parameters */}
                        <div className="bg-white p-5 rounded-2xl shadow-lg flex flex-col flex-shrink-0">
                            <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Loan Parameters</span>
                            
                            <div className="flex gap-1 mb-6 bg-slate-100 p-1 rounded-xl">
                            {['personal', 'home', 'business'].map(type => (
                                <label key={type} className="flex-1 cursor-pointer">
                                    <input type="radio" checked={calcType === type} onChange={() => handleLoanTypeChange(type)} className="hidden" />
                                    <div className={`w-full text-center py-2 rounded-lg text-[10px] font-bold transition-all ${calcType === type ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-500 hover:text-slate-800'}`}>
                                        {type.charAt(0).toUpperCase() + type.slice(1)}
                                    </div>
                                </label>
                            ))}
                        </div>

                        <div className="flex flex-col gap-6">
                            {calcMode === 'emi' && (
                                <>
                                    <Slider label="Loan Amount" val={state.amount} min={50000} max={10000000} step={10000} suffix="" onChange={v => updateState('amount', v)} />
                                    <Slider label="Interest Rate" val={state.rate} min={1} max={25} step={0.1} suffix="%" onChange={v => updateState('rate', v)} />
                                    <Slider label="Tenure (Years)" val={state.tenure} min={1} max={defaults[calcType].maxTenure} step={1} suffix=" Years" onChange={v => updateState('tenure', v)} />
                                    <Slider label="Net Income" val={state.income} min={10000} max={1000000} step={5000} suffix="" onChange={v => updateState('income', v)} />
                                </>
                            )}
                            {calcMode === 'bt' && (
                                <>
                                    <Slider label="Outstanding Balance" val={state.currentBalance} min={10000} max={5000000} step={10000} suffix="" onChange={v => updateState('currentBalance', v)} />
                                    <Slider label="Remaining Tenure" val={state.remTenure} min={1} max={defaults[calcType].maxTenure} step={0.5} suffix=" Years" onChange={v => updateState('remTenure', v)} />
                                    <Slider label="Current Rate" val={state.currentRate} min={5} max={25} step={0.1} suffix="%" onChange={v => updateState('currentRate', v)} />
                                    <Slider label="New Rate" val={state.newRate} min={5} max={25} step={0.1} suffix="%" onChange={v => updateState('newRate', v)} />
                                </>
                            )}
                            {calcMode === 'prepay' && (
                                <>
                                    <Slider label="Original Loan" val={state.origAmount} min={100000} max={10000000} step={10000} suffix="" onChange={v => updateState('origAmount', v)} />
                                    <Slider label="Interest Rate" val={state.rate} min={1} max={20} step={0.1} suffix="%" onChange={v => updateState('rate', v)} />
                                    <Slider label="Original Tenure" val={state.origTenure} min={1} max={defaults[calcType].maxTenure} step={1} suffix=" Years" onChange={v => updateState('origTenure', v)} />
                                    <Slider label="EMIs Paid" val={state.paidEmis} min={1} max={120} step={1} suffix=" Months" onChange={v => updateState('paidEmis', v)} />
                                    <Slider label="Prepayment Amount" val={state.prepayAmt} min={5000} max={5000000} step={5000} suffix="" onChange={v => updateState('prepayAmt', v)} />
                                </>
                            )}
                        </div>

                            <button onClick={calculate} className="mt-6 w-full flex-shrink-0 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold p-3.5 rounded-xl shadow-[0_4px_14px_0_rgba(37,99,235,0.39)] transition-all flex items-center justify-center gap-2 text-sm border-none cursor-pointer hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] hover:-translate-y-0.5">
                                Calculate <FaArrowRight />
                            </button>
                        </div> {/* End Card 1 */}

                        {/* Card 2: AI Insight */}
                        {insight && (
                            <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-950 text-white p-5 rounded-2xl shadow-[0_12px_32px_-5px_rgba(30,58,138,0.6)] border border-indigo-500/40 relative overflow-hidden flex-shrink-0 transition-all hover:border-indigo-400/60">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/25 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
                                <div className="absolute bottom-0 left-0 w-36 h-36 bg-indigo-500/25 rounded-full blur-3xl -ml-10 -mb-10 pointer-events-none"></div>
                                
                                <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2.5 relative z-10">
                                    <div className="flex items-center gap-2">
                                        <span className="w-6.5 h-6.5 rounded-lg bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-400 text-xs shadow-inner">
                                            <FaMagic />
                                        </span>
                                        <span className="text-xs font-black tracking-wider uppercase text-blue-300">AI Financial Insights</span>
                                    </div>
                                </div>
                                
                                <div className="relative z-10 text-xs leading-relaxed [&_*]:text-slate-200 [&_strong]:text-white [&_strong.text-blue-800]:text-blue-300 [&_strong.text-slate-800]:text-white [&_strong.text-green-600]:text-green-400 [&_strong.text-orange-600]:text-amber-300 [&_li.text-green-600]:text-green-400 [&_li.text-red-600]:text-red-400 [&_p.text-slate-500]:text-slate-400 [&_div.text-slate-600]:text-slate-200">
                                    {insight}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Col 2: Results */}
                    <div className="col-span-12 lg:col-span-5 bg-white/70 p-5 rounded-2xl shadow-xl flex flex-col h-fit">
                        <div className="flex justify-between items-center mb-4 border-b border-gray-100 pb-3">
                            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-tight border-l-4 border-blue-500 pl-3">Summary & Analysis</h3>
                            <div className="flex gap-2">
                                <button onClick={downloadCalculationPDF} className="w-8 h-8 rounded-full bg-gray-50 border border-gray-200 text-gray-500 flex items-center justify-center transition-all shadow-sm cursor-pointer hover:text-red-500" title="Download PDF"><FaFilePdf /></button>
                                <button onClick={shareWhatsApp} className="w-8 h-8 rounded-full bg-gray-50 border border-gray-200 text-gray-500 flex items-center justify-center transition-all shadow-sm cursor-pointer hover:text-green-500" title="WhatsApp"><FaWhatsapp /></button>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            {/* Hero Card */}
                            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
                                <div>
                                    <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">{results?.mainLabel}</p>
                                    <h2 className="text-3xl font-black text-slate-800 tracking-tight">₹{results?.mainVal ? Math.round(results.mainVal).toLocaleString('en-IN') : 0}</h2>
                                    <p className="text-xs text-blue-500 font-medium mt-1">{numToWords(results?.mainVal)}</p>
                                </div>
                                <div className="w-20 h-20 md:w-28 md:h-28 flex-shrink-0">
                                    {chartData && <Doughnut ref={chartRef} data={chartData} options={{ maintainAspectRatio: false, cutout: '80%', plugins: { legend: { display: false } } }} />}
                                </div>
                            </div>

                            {/* Detailed List */}
                            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                                {results?.details.map((d, i) => (
                                    <div key={i} className="flex justify-between items-center border-b border-gray-50 pb-1.5 mb-1.5 last:border-b-0 last:pb-0 last:mb-0">
                                        <span className="text-xs text-gray-500 font-medium">{d.l}</span>
                                        <span className={`text-xs font-bold text-slate-800 ${d.c || ''}`}>{typeof d.v === 'number' ? d.v.toLocaleString('en-IN') : d.v}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Prepay Comparison Table - Only in Prepay Mode */}
                            {calcMode === 'prepay' && prepayData && (
                                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                                    <h4 className="text-xs font-bold text-gray-700 uppercase tracking-tight mb-3 pb-2 border-b border-gray-200">Comparison</h4>
                                    <table className="w-full text-left text-[10px]">
                                        <thead>
                                            <tr>
                                                <th className="text-gray-500 font-semibold uppercase p-1 border-b border-gray-100">Metric</th>
                                                <th className="text-center text-red-500 p-1 border-b border-gray-100">Current</th>
                                                <th className="text-center text-blue-600 p-1 border-b border-gray-100">Opt A</th>
                                                <th className="text-center text-green-600 p-1 border-b border-gray-100">Opt B</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="p-1 text-gray-600 border-b border-gray-50">EMI</td>
                                                <td className="text-center p-1 text-gray-600 border-b border-gray-50">{Math.round(prepayData.orig.emi).toLocaleString()}</td>
                                                <td className="text-center font-bold text-blue-600 p-1 border-b border-gray-50">{Math.round(prepayData.optA.emi).toLocaleString()}</td>
                                                <td className="text-center font-bold text-green-600 p-1 border-b border-gray-50">{Math.round(prepayData.optB.emi).toLocaleString()}</td>
                                            </tr>
                                            <tr>
                                                <td className="p-1 text-gray-600 border-b border-gray-50">Tenure</td>
                                                <td className="text-center p-1 text-gray-600 border-b border-gray-50">{prepayData.orig.tenure}m</td>
                                                <td className="text-center font-bold text-blue-600 p-1 border-b border-gray-50">{prepayData.optA.tenure}m</td>
                                                <td className="text-center p-1 text-gray-600 border-b border-gray-50">{prepayData.optB.tenure}m</td>
                                            </tr>
                                            <tr>
                                                <td className="p-1 text-gray-600 border-b border-gray-50">Saving</td>
                                                <td className="text-center p-1 text-gray-600 border-b border-gray-50">-</td>
                                                <td className="text-center font-bold text-green-600 p-1 border-b border-gray-50">{Math.round(prepayData.optA.totalSave).toLocaleString()}</td>
                                                <td className="text-center font-bold text-green-600 p-1 border-b border-gray-50">{Math.round(prepayData.optB.totalSave).toLocaleString()}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            )}

                            {/* Salary Affordability Check Card - Only in EMI Mode */}
                            {calcMode === 'emi' && state.income > 0 && results?.mainVal && (
                                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mt-1">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Salary Affordability Check</span>
                                        {((results.mainVal / state.income) * 100) <= 40 ? (
                                            <span className="text-[10px] bg-green-100 text-green-700 font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">🟢 Safe Ratio ({((results.mainVal / state.income) * 100).toFixed(1)}%)</span>
                                        ) : (
                                            <span className="text-[10px] bg-red-100 text-red-700 font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">🔴 High Burden ({((results.mainVal / state.income) * 100).toFixed(1)}%)</span>
                                        )}
                                    </div>
                                    <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden flex mb-2">
                                        <div style={{ width: `${Math.min(((results.mainVal / state.income) * 100), 100)}%` }} className={`h-full rounded-full transition-all ${((results.mainVal / state.income) * 100) <= 40 ? 'bg-blue-600' : 'bg-red-500'}`}></div>
                                    </div>
                                    <div className="flex justify-between text-[11px] font-medium text-gray-500">
                                        <span>EMI: <strong className="text-slate-800">₹{Math.round(results.mainVal).toLocaleString('en-IN')}</strong></span>
                                        <span>Leftover Salary: <strong className="text-slate-800">₹{Math.max(0, Math.round(state.income - results.mainVal)).toLocaleString('en-IN')}</strong></span>
                                    </div>
                                </div>
                            )}

                        </div>

                        <button className="mt-4 w-full flex-shrink-0 bg-blue-600 text-white font-bold p-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-sm border-none cursor-pointer hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-lg">
                            Apply for this Loan <FaChevronRight />
                        </button>
                    </div>

                    {/* Col 3: Schedule */}
                    <div className="col-span-12 lg:col-span-4 bg-white p-4 rounded-2xl shadow-xl flex flex-col h-fit">
                        <div className="flex items-center justify-between pb-3 border-b border-gray-100 mb-2">
                            <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest">Repayment Schedule</span>
                            <div className="flex items-center gap-2">
                                <div className="flex bg-gray-100 rounded-lg p-0.5 shadow-sm">
                                    <button onClick={() => setAmortView('yearly')} className={`px-2 py-0.5 text-[10px] font-bold rounded transition-all cursor-pointer border-none ${amortView === 'yearly' ? 'bg-blue-100 text-blue-800' : 'bg-transparent text-gray-500 hover:bg-gray-200'}`}>Yearly</button>
                                    <button onClick={() => setAmortView('monthly')} className={`px-2 py-0.5 text-[10px] font-bold rounded transition-all cursor-pointer border-none ${amortView === 'monthly' ? 'bg-blue-100 text-blue-800' : 'bg-transparent text-gray-500 hover:bg-gray-200'}`}>Monthly</button>
                                </div>
                                <button onClick={downloadAmortizationPDFOnly} className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer bg-none border-none"><FaDownload /></button>
                            </div>
                        </div>

                        <div className="max-h-[500px] overflow-y-auto overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                            <table className="w-full text-left text-[10px] border-collapse">
                                <thead className="sticky top-0 bg-white/95 backdrop-blur-sm text-gray-500 font-semibold uppercase tracking-wider z-10 shadow-sm">
                                    <tr>
                                        <th className="px-3 py-2 border-b border-gray-100">Period</th>
                                        <th className="px-3 py-2 border-b border-gray-100 text-right">Open</th>
                                        <th className="px-3 py-2 border-b border-gray-100 text-right">EMI</th>
                                        <th className="px-3 py-2 border-b border-gray-100 text-right">Prin</th>
                                        <th className="px-3 py-2 border-b border-gray-100 text-right">Int</th>
                                        <th className="px-3 py-2 border-b border-gray-100 text-right">Close</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Aggregation Logic for Yearly View */}
                                    {(() => {
                                        let dataToShow = [];
                                        if (amortView === 'yearly') {
                                            const map = {};
                                            amortData.forEach(r => {
                                                const y = Math.ceil(r.i/12);
                                                if(!map[y]) map[y] = { i: `Yr ${y}`, open: r.open, emi:0, prin:0, int:0, close: r.close };
                                                map[y].emi += r.emi; map[y].prin += r.prin; map[y].int += r.int; map[y].close = r.close;
                                            });
                                            dataToShow = Object.values(map);
                                        } else {
                                            dataToShow = amortData.map(d => ({ ...d, i: `Mo ${d.i}` }));
                                        }

                                        return dataToShow.map((row, i) => (
                                            <tr key={i} className="hover:bg-blue-50/50">
                                                <td className="px-3 py-2 border-b border-gray-50 text-gray-600">{row.i}</td>
                                                <td className="px-3 py-2 border-b border-gray-50 text-gray-600 text-right">{Math.round(row.open).toLocaleString()}</td>
                                                <td className="px-3 py-2 border-b border-gray-50 text-gray-600 text-right font-medium">{Math.round(row.emi).toLocaleString()}</td>
                                                <td className="px-3 py-2 border-b border-gray-50 text-gray-600 text-right font-bold text-blue-600">{Math.round(row.prin).toLocaleString()}</td>
                                                <td className="px-3 py-2 border-b border-gray-50 text-gray-600 text-right text-orange-500">{Math.round(row.int).toLocaleString()}</td>
                                                <td className="px-3 py-2 border-b border-gray-50 text-gray-600 text-right font-bold">{Math.round(row.close).toLocaleString()}</td>
                                            </tr>
                                        ));
                                    })()}
                                </tbody>
                            </table>
                        </div>

                        {/* Visual Repayment Progress Trend */}
                        {results?.totalPayment > 0 && (
                            <div className="mt-4 pt-3 border-t border-gray-100 flex flex-col gap-2">
                                <div className="flex justify-between items-center">
                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Repayment Share Trend</span>
                                    <span className="text-[10px] text-gray-500 font-semibold">{amortView === 'yearly' ? 'Yearly View' : 'Monthly View'}</span>
                                </div>
                                <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden flex">
                                    <div style={{ width: `${Math.round(((results.totalPayment - (results.totalInterest || 0)) / results.totalPayment) * 100)}%` }} className="bg-blue-600 h-full" title="Principal Portion"></div>
                                    <div style={{ width: `${Math.round(((results.totalInterest || 0) / results.totalPayment) * 100)}%` }} className="bg-orange-400 h-full" title="Interest Portion"></div>
                                </div>
                                <div className="flex justify-between text-[10px] text-gray-500 font-medium pt-0.5">
                                    <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-blue-600 inline-block"></span> Principal ({Math.round(((results.totalPayment - (results.totalInterest || 0)) / results.totalPayment) * 100)}%)</span>
                                    <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-400 inline-block"></span> Interest ({Math.round(((results.totalInterest || 0) / results.totalPayment) * 100)}%)</span>
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SmartLoanCalculator;
