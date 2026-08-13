
'use client';
import { useEffect, useRef } from 'react';
import Head from 'next/head';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

export default function SmartTaxPlanner() {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const loadScript = (src) => new Promise((resolve) => {
            if (document.querySelector(`script[src="${src}"]`)) {
                resolve();
                return;
            }
            const s = document.createElement('script');
            s.src = src;
            s.onload = resolve;
            document.head.appendChild(s);
        });

        loadScript('https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js').then(() => {
            
        // Constants & Logic (Same as before)
        const CESS_RATE = 0.04;
        const OLD_STD_DEDUCTION = 50000;
        const NEW_STD_DEDUCTION = 75000; 
        const MAX_80C = 150000;
        const MAX_24B = 200000;
        const MAX_NPS = 50000; 
        const MAX_80D_SELF = 25000; 
        const MAX_80D_PARENTS = 50000;

        let taxChart;
        const OLD_SLABS = [{ limit: 250000, rate: 0.00 }, { limit: 500000, rate: 0.05 }, { limit: 1000000, rate: 0.20 }, { limit: Infinity, rate: 0.30 }];
        const NEW_SLABS = [{ limit: 400000, rate: 0.00 }, { limit: 800000, rate: 0.05 }, { limit: 1200000, rate: 0.10 }, { limit: 1600000, rate: 0.15 }, { limit: 2000000, rate: 0.20 }, { limit: 2400000, rate: 0.25 }, { limit: Infinity, rate: 0.30 }];

        // Name Input Logic
        document.getElementById('userNameInput').addEventListener('input', function(e) {
            const btn = document.getElementById('downloadBtn');
            if (e.target.value.trim().length > 0) {
                btn.classList.remove('hidden');
            } else {
                btn.classList.add('hidden');
            }
        });

        // PDF Generation Logic
        function downloadPDF() {
            const name = document.getElementById('userNameInput').value || "Customer";
            document.getElementById('reportUserName').textContent = name;
            
            // Populate Report Data from Main Dashboard
            document.getElementById('reportGross').textContent = document.getElementById('tblOldGross').textContent;
            document.getElementById('reportDeductions').textContent = document.getElementById('tblOldDed').textContent;
            
            // Replicate Table
            const tbody = document.getElementById('reportTableBody');
            tbody.innerHTML = '';
            const rows = [
                ['Gross Income', document.getElementById('tblOldGross').textContent, document.getElementById('tblNewGross').textContent],
                ['Deductions', document.getElementById('tblOldDed').textContent, document.getElementById('tblNewDed').textContent],
                ['Taxable Income', document.getElementById('tblOldTaxable').textContent, document.getElementById('tblNewTaxable').textContent],
                ['Tax Amount', document.getElementById('tblOldBase').textContent, document.getElementById('tblNewBase').textContent],
                ['Cess (4%)', document.getElementById('tblOldCessDisplay').textContent, document.getElementById('tblNewCessDisplay').textContent],
                ['Net Payable', document.getElementById('tblOldFinal').textContent, document.getElementById('tblNewFinal').textContent]
            ];
            
            rows.forEach(r => {
                const tr = document.createElement('tr');
                tr.innerHTML = `<td class="p-3 border border-slate-200">${r[0]}</td><td class="p-3 border border-slate-200 text-right">${r[1]}</td><td class="p-3 border border-slate-200 text-right">${r[2]}</td>`;
                tbody.appendChild(tr);
            });

            // Get Best Regime
            const oldTax = parseFloat(document.getElementById('tblOldFinal').textContent.replace(/[^0-9.-]+/g,""));
            const newTax = parseFloat(document.getElementById('tblNewFinal').textContent.replace(/[^0-9.-]+/g,""));
            const savings = Math.abs(oldTax - newTax);
            
            if (newTax < oldTax) {
                document.getElementById('reportBestRegime').textContent = "New Regime (Budget 2025)";
                document.getElementById('reportBestRegime').className = "text-2xl font-bold text-green-700";
            } else {
                document.getElementById('reportBestRegime').textContent = "Old Regime";
                document.getElementById('reportBestRegime').className = "text-2xl font-bold text-blue-700";
            }
            document.getElementById('reportSavings').textContent = "₹" + savings.toLocaleString('en-IN');

            // AI Content
            document.getElementById('reportAIContent').innerHTML = document.getElementById('aiRecBox').innerHTML + "<br/><br/>" + document.getElementById('aiWhyText').textContent;

            // Generate
            const element = document.getElementById('printable-report');
            element.style.display = 'block';
            html2pdf().from(element).set({
                margin: 10,
                filename: `TaxReport_${name}.pdf`,
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2, useCORS: true },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
            }).save().then(() => {
                element.style.display = 'none';
            });
        }

        // Tooltip Logic
        document.addEventListener('DOMContentLoaded', () => {
            const tooltip = document.getElementById('global-tooltip');
            const triggers = document.querySelectorAll('.tooltip-trigger');
            triggers.forEach(el => {
                el.addEventListener('mouseenter', (e) => {
                    tooltip.textContent = el.getAttribute('data-tip');
                    tooltip.classList.add('visible');
                    const x = e.clientX; const y = e.clientY;
                    tooltip.style.left = `${x + 15}px`; tooltip.style.top = `${y}px`;
                });
                el.addEventListener('mousemove', (e) => {
                    if (tooltip.classList.contains('visible')) {
                        const x = e.clientX; const y = e.clientY;
                        tooltip.style.left = `${x + 15}px`; tooltip.style.top = `${y}px`;
                    }
                });
                el.addEventListener('mouseleave', () => { tooltip.classList.remove('visible'); });
            });
        });

        // Init Chart
        function initChart() {
            let existingChart = Chart.getChart('mainChart');
            if (existingChart) {
                existingChart.destroy();
            }
            const ctx = document.getElementById('mainChart').getContext('2d');
            Chart.defaults.font.family = "'Outfit', sans-serif";
            taxChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Old', 'New'],
                    datasets: [{
                        label: 'Tax',
                        data: [0, 0],
                        backgroundColor: ['#94a3b8', '#34d399'],
                        borderRadius: 6,
                        barThickness: 45,
                        hoverBackgroundColor: ['#64748b', '#10b981']
                    }]
                },
                options: {
                    responsive: true, maintainAspectRatio: false,
                    plugins: { legend: { display: false }, tooltip: { backgroundColor: '#1e293b', padding: 12, cornerRadius: 8 } },
                    scales: { y: { beginAtZero: true, grid: { color: '#f1f5f9', drawBorder: false }, ticks: { font: { size: 11 } } }, x: { grid: { display: false }, ticks: { font: { weight: 'bold', size: 12 } } } }
                }
            });
        }

        // Calc Logic
        function calculateRawTax(taxableIncome, slabs) {
            let tax = 0;
            let remainingIncome = Math.max(0, taxableIncome);
            let previousLimit = 0;
            for (const slab of slabs) {
                const slabStart = previousLimit;
                const slabEnd = slab.limit;
                const rate = slab.rate;
                if (remainingIncome > slabStart) {
                    const incomeInSlab = Math.min(remainingIncome, slabEnd) - slabStart;
                    tax += incomeInSlab * rate;
                }
                previousLimit = slabEnd;
                if (remainingIncome <= slabEnd) break;
            }
            return tax;
        }

        function calculateSurchargeNew(tax, taxableIncome) {
            let rate = 0;
            if (taxableIncome > 5000000 && taxableIncome <= 10000000) rate = 0.10;
            else if (taxableIncome > 10000000 && taxableIncome <= 20000000) rate = 0.15;
            else if (taxableIncome > 20000000) rate = 0.25;
            return tax * rate;
        }
        function calculateSurchargeOld(tax, taxableIncome) {
            let rate = 0;
            if (taxableIncome > 5000000 && taxableIncome <= 10000000) rate = 0.10;
            else if (taxableIncome > 10000000 && taxableIncome <= 20000000) rate = 0.15;
            else if (taxableIncome > 20000000 && taxableIncome <= 50000000) rate = 0.25;
            else if (taxableIncome > 50000000) rate = 0.37;
            return tax * rate;
        }

        function calculateTax() {
            const gross = parseFloat(document.getElementById('grossSalary').value) || 0;
            const d80c = Math.min(parseFloat(document.getElementById('deduction80C').value) || 0, MAX_80C);
            const d24b = Math.min(parseFloat(document.getElementById('homeLoanInterest').value) || 0, MAX_24B);
            const hra = parseFloat(document.getElementById('hraExemption').value) || 0;
            const nps = Math.min(parseFloat(document.getElementById('deductionNPS').value) || 0, MAX_NPS);
            const d80dSelf = Math.min(parseFloat(document.getElementById('deduction80DSelf').value) || 0, MAX_80D_SELF);
            const d80dParents = Math.min(parseFloat(document.getElementById('deduction80DParents').value) || 0, MAX_80D_PARENTS);

            const oldTotalDed = d80c + d24b + hra + nps + d80dSelf + d80dParents;
            const oldTaxable = Math.max(0, gross - OLD_STD_DEDUCTION - oldTotalDed);
            let oldTax = calculateRawTax(oldTaxable, OLD_SLABS);
            let oldRebate = (oldTaxable <= 500000) ? Math.min(oldTax, 12500) : 0;
            let oldTaxPostRebate = Math.max(0, oldTax - oldRebate);
            let oldSurcharge = calculateSurchargeOld(oldTaxPostRebate, oldTaxable);
            let oldFinal = (oldTaxPostRebate + oldSurcharge) * (1 + CESS_RATE);

            const newTaxable = Math.max(0, gross - NEW_STD_DEDUCTION);
            let newTax = calculateRawTax(newTaxable, NEW_SLABS);
            let newRebate = 0;
            if (newTaxable <= 1200000) { newRebate = newTax; }
            let newTaxPostRebate = Math.max(0, newTax - newRebate);
            if (newTaxable > 1200000) {
                 let excessIncome = newTaxable - 1200000;
                 if (newTaxPostRebate > excessIncome) { newTaxPostRebate = excessIncome; }
            }
            let newSurcharge = calculateSurchargeNew(newTaxPostRebate, newTaxable);
            let newFinal = (newTaxPostRebate + newSurcharge) * (1 + CESS_RATE);

            updateUI(gross, oldFinal, newFinal, oldTotalDed, d80c, nps, d80dSelf, oldTax, newTax, oldSurcharge, newSurcharge, oldTaxable, newTaxable, oldRebate, newRebate);
        }
        
        function updateUI(gross, oldFinal, newFinal, oldDeds, d80c, nps, d80dSelf, oldTax, newTax, oldSur, newSur, oldTaxable, newTaxable, oldRebate, newRebate) {
            document.getElementById('displayOldTax').textContent = formatRupee(oldFinal);
            document.getElementById('displayNewTax').textContent = formatRupee(newFinal);
            
            const effOld = gross > 0 ? ((oldFinal / gross) * 100).toFixed(1) : 0;
            const effNew = gross > 0 ? ((newFinal / gross) * 100).toFixed(1) : 0;
            document.getElementById('effRateOld').textContent = effOld + '%';
            document.getElementById('effRateNew').textContent = effNew + '%';
            document.getElementById('effRateNewDisplay').textContent = effNew + '%';

            const vsLabel = document.getElementById('aiVsLabel');
            const cOld = document.getElementById('cardOld');
            const cNew = document.getElementById('cardNew');
            const badgeOld = document.getElementById('badgeOldWin');
            const badgeNew = document.getElementById('badgeNewWin');
            
            // --- Highlight Logic: Only the WINNER gets the distinct Green Background & Text ---
            if (oldFinal < newFinal) {
                // Old Regime Wins
                cOld.classList.add('active'); cOld.classList.remove('inactive');
                cNew.classList.add('inactive'); cNew.classList.remove('active');
                
                badgeOld.classList.remove('hidden');
                badgeNew.classList.add('hidden');
                
                document.getElementById('aiEffRate').textContent = effOld + "%";
                document.getElementById('aiEffRate').className = "text-2xl font-bold text-blue-600 leading-none";
                
                document.getElementById('aiVsRate').textContent = effNew + "%";
                if(vsLabel) vsLabel.textContent = "VS NEW REGIME";
                
            } else {
                // New Regime Wins
                cNew.classList.add('active'); cNew.classList.remove('inactive');
                cOld.classList.add('inactive'); cOld.classList.remove('active');
                
                badgeNew.classList.remove('hidden');
                badgeOld.classList.add('hidden');
                
                document.getElementById('aiEffRate').textContent = effNew + "%";
                document.getElementById('aiEffRate').className = "text-2xl font-bold text-green-600 leading-none";
                
                document.getElementById('aiVsRate').textContent = effOld + "%";
                if(vsLabel) vsLabel.textContent = "VS OLD REGIME";
            }

            const badge = document.getElementById('badgeRebate');
            if (newTaxable <= 1200000 && gross > NEW_STD_DEDUCTION) { badge.classList.remove('hidden'); } else { badge.classList.add('hidden'); }

            if(taxChart) {
                taxChart.data.datasets[0].data = [Math.round(oldFinal), Math.round(newFinal)];
                taxChart.data.datasets[0].backgroundColor = oldFinal < newFinal ? ['#94a3b8', '#34d399'] : ['#6366f1', '#94a3b8'];
                taxChart.update();
            }

            document.getElementById('tblOldGross').textContent = formatRupee(gross);
            document.getElementById('tblNewGross').textContent = formatRupee(gross);
            document.getElementById('tblOldDed').textContent = `-${formatRupee(OLD_STD_DEDUCTION + oldDeds)}`;
            document.getElementById('tblNewDed').textContent = `-${formatRupee(NEW_STD_DEDUCTION)}`;
            document.getElementById('tblOldTaxable').textContent = formatRupee(oldTaxable);
            document.getElementById('tblNewTaxable').textContent = formatRupee(newTaxable);
            document.getElementById('tblOldBase').textContent = formatRupee(oldTax - oldRebate);
            document.getElementById('tblNewBase').textContent = formatRupee(newTax - newRebate);
            
            const oldCessTotal = oldFinal - (oldTax - oldRebate);
            const newCessTotal = newFinal - (newTax - newRebate);

            document.getElementById('tblOldCessDisplay').textContent = formatRupee(oldCessTotal);
            document.getElementById('tblNewCessDisplay').textContent = formatRupee(newCessTotal);
            
            const elOldFinal = document.getElementById('tblOldFinal');
            const elNewFinal = document.getElementById('tblNewFinal');
            elOldFinal.textContent = formatRupee(oldFinal);
            elNewFinal.textContent = formatRupee(newFinal);
            elOldFinal.className = "py-4 px-6 text-right font-medium text-slate-400";
            elNewFinal.className = "py-4 px-6 text-right font-medium text-slate-400";

            if (oldFinal < newFinal) {
                elOldFinal.className = "py-4 px-6 text-right font-extrabold text-blue-600 text-xl";
            } else if (newFinal < oldFinal) {
                elNewFinal.className = "py-4 px-6 text-right font-extrabold text-green-600 text-xl";
            }

            generateAIAdvisory(gross, oldFinal, newFinal, oldDeds, Math.abs(oldFinal - newFinal));
            generateOpportunities(d80c, nps, d80dSelf, gross);
        }

        function generateAIAdvisory(gross, oldFinal, newFinal, oldDeds, diff) {
            const recBox = document.getElementById('aiRecBox');
            const whyText = document.getElementById('aiWhyText');
            if (gross === 0) { recBox.innerHTML = "<p class='text-sm text-slate-500'>Enter income...</p>"; return; }

            if (newFinal < oldFinal) {
                recBox.className = "bg-green-50 border border-green-100 rounded-xl p-5 mb-5 flex items-start gap-4";
                recBox.innerHTML = `<div><p class="font-bold text-slate-800">Recommendation: New Regime</p><p class="text-green-700 font-bold text-xl mt-1">Save ${formatRupee(diff)}</p></div>`;
                whyText.innerHTML = `New tax-free limit of ₹12 Lakhs benefits you more.`;
            } else if (oldFinal < newFinal) {
                recBox.className = "bg-blue-50 border border-blue-100 rounded-xl p-5 mb-5 flex items-start gap-4";
                recBox.innerHTML = `<div><p class="font-bold text-slate-800">Recommendation: Old Regime</p><p class="text-blue-700 font-bold text-xl mt-1">Save ${formatRupee(diff)}</p></div>`;
                whyText.innerHTML = `High deductions of ${formatRupee(oldDeds)} make Old Regime better.`;
            } else {
                recBox.className = "bg-slate-50 border border-slate-200 rounded-xl p-5 mb-5";
                recBox.innerHTML = `<p class="font-bold text-slate-700">Neutral Tax Impact</p>`;
                whyText.innerHTML = "Both regimes are equal.";
            }
        }

        function generateOpportunities(d80c, nps, d80dSelf, gross) {
            const list = document.getElementById('aiOpportunitiesList');
            list.innerHTML = '';
            const createCard = (icon, title, desc) => {
                const div = document.createElement('div');
                div.className = 'opp-card';
                div.innerHTML = `<div class="text-xl flex-none">${icon}</div><div><p class="text-xs font-bold text-slate-700 uppercase mb-1">${title}</p><p class="text-xs text-slate-500 leading-relaxed">${desc}</p></div>`;
                list.appendChild(div);
            };
            if (gross > 5000000) createCard('⚠️', 'Surcharge Alert', 'Income > ₹50L attracts surcharge.');
            if (nps < MAX_NPS) createCard('💰', 'Tax-Saving:', `Invest <strong>${formatRupee(MAX_NPS - nps)}</strong> more in NPS.`);
            if (d80c < MAX_80C) createCard('💡', 'Maximize 80C:', `Unused limit: <strong>${formatRupee(MAX_80C - d80c)}</strong>.`);
            if (d80dSelf === 0) createCard('🛡️', 'Health Insurance:', `Save tax by buying health insurance (80D).`);
        }

        function formatRupee(num) { return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(Math.round(num)); }
        function syncInput(inId, slidId) {
            const el = document.getElementById(inId);
            const sl = document.getElementById(slidId);
            let val = parseFloat(el.value) || 0;
            const max = parseFloat(el.getAttribute('max'));
            if (val > max) { val = max; el.value = max; }
            sl.value = val; calculateTax();
        }
        function syncSlider(inId, slidId) {
            const val = document.getElementById(slidId).value;
            document.getElementById(inId).value = val; calculateTax();
        }
        function updateProgress(inId, progId, max) {
            const el = document.getElementById(progId);
            if (!el) return;
            const val = parseFloat(document.getElementById(inId).value) || 0;
            el.style.width = Math.min((val/max)*100, 100) + '%';
        }

        
            initChart();
            updateProgress('deduction80C', 'prog80C', 150000);
            updateProgress('deductionNPS', 'progNPS', 50000);
            updateProgress('homeLoanInterest', 'prog24b', 200000);
            calculateTax();
        
    

            window.downloadPDF = downloadPDF;
            
            setTimeout(() => {
                initChart();
                updateProgress('deduction80C', 'prog80C', 150000);
                updateProgress('deductionNPS', 'progNPS', 50000);
                updateProgress('homeLoanInterest', 'prog24b', 200000);
                calculateTax();
            }, 100);
            
            window.syncInput = syncInput;
            window.syncSlider = syncSlider;
            window.updateProgress = updateProgress;
            window.calculateTax = calculateTax;
            window.formatRupee = formatRupee;
            
            return () => {
                if (typeof taxChart !== 'undefined' && taxChart) taxChart.destroy();
                delete window.syncInput;
                delete window.syncSlider;
                delete window.updateProgress;
                delete window.calculateTax;
                delete window.formatRupee;
                delete window.downloadPDF;
            };
        });

    }, []);

    return (
        <div className="tax-planner-wrapper w-full">
            <style dangerouslySetInnerHTML={{ __html: `
                
        :root {
            --brand-blue: #2563eb;
            --brand-dark: #0f172a;
            --bg-color: #f3f6fc;
        }

        /* STRICT SINGLE SCREEN SETUP */
        .tax-planner-wrapper { 
            font-family: 'Outfit', sans-serif; 
            background-color: var(--bg-color); 
            color: var(--brand-dark); 
             
            width: 100%; 
             
            display: flex; 
            flex-direction: column; 
            margin: 0; padding: 0;
        }
        
        /* Custom Scrollbar */
        .custom-scroll::-webkit-scrollbar { width: 4px; }
        .custom-scroll::-webkit-scrollbar-track { background: transparent; }
        .custom-scroll::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 10px; }
        .custom-scroll::-webkit-scrollbar-thumb:hover { background: #94a3b8; }

        .card {
            background: white;
            border-radius: 12px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.02);
            border: 1px solid #f1f5f9;
            transition: transform 0.2s ease;
        }
        
        input[type=range] {
            -webkit-appearance: none; width: 100%; background: transparent; margin-top: 8px;
        }
        input[type=range]::-webkit-slider-thumb {
            -webkit-appearance: none; height: 16px; width: 16px; border-radius: 50%;
            background: white; border: 4px solid var(--brand-blue); cursor: pointer; margin-top: -6px;
            box-shadow: 0 1px 4px rgba(37, 99, 235, 0.3); transition: transform 0.1s;
        }
        input[type=range]::-webkit-slider-thumb:hover { transform: scale(1.1); }
        input[type=range]::-webkit-slider-runnable-track {
            width: 100%; height: 4px; cursor: pointer; background: #e2e8f0; border-radius: 999px;
        }

        .input-group {
            position: relative; background: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0; transition: all 0.2s;
        }
        .input-group:focus-within {
            border-color: var(--brand-blue); background: white; box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);
        }
        .input-field {
            background: transparent; border: none; font-weight: 600; color: #1e293b; width: 100%;
            padding: 8px 10px 8px 26px; outline: none; font-size: 0.95rem;
        }

        .info-icon { color: #94a3b8; transition: color 0.2s; cursor: help; }
        .info-icon:hover { color: var(--brand-blue); transform: scale(1.1); }

        .opp-card {
            background: white; border: 1px solid #fef3c7; border-radius: 10px; padding: 10px;
            margin-bottom: 8px; display: flex; align-items: flex-start; gap: 10px; transition: transform 0.2s;
        }
        .opp-card:hover { transform: translateY(-2px); box-shadow: 0 4px 8px rgba(251, 191, 36, 0.1); }
        
        .result-card { transition: all 0.3s; border-width: 2px; }
        
        /* Stronger Winner Highlight */
        .result-card.active { 
            border-color: #10b981; 
            background: #ecfdf5; 
            transform: scale(1.02); 
            box-shadow: 0 8px 20px -5px rgba(16, 185, 129, 0.25); 
            z-index: 20;
        }
        .result-card.active .tax-amount { color: #059669; }
        
        .result-card.inactive { 
            opacity: 0.5; 
            filter: grayscale(0.8); 
            transform: scale(0.98); 
            border-color: transparent; 
        }
        .result-card.inactive .tax-amount { color: #94a3b8; }

        /* Global Tooltip - Right Side */
        #global-tooltip {
            position: fixed;
            background-color: #1e293b;
            color: #fff;
            padding: 10px 14px;
            border-radius: 8px;
            font-size: 0.8rem;
            line-height: 1.4;
            max-width: 240px;
            z-index: 9999;
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.15s ease;
            box-shadow: 0 8px 20px -5px rgba(0, 0, 0, 0.4);
            transform: translate(0, -50%); /* Center Vertically */
        }
        #global-tooltip.visible { opacity: 1; }
        
        #global-tooltip::after {
            content: ''; position: absolute; top: 50%; left: -5px; margin-top: -5px;
            border-width: 5px; border-style: solid; 
            border-color: transparent #1e293b transparent transparent; /* Point Left */
        }

        /* PDF Report Styles (Hidden on Screen) */
        #printable-report {
            display: none; 
            font-family: 'Outfit', sans-serif;
            padding: 30px; /* Reduced padding for single page fit */
            background: white;
            color: #0f172a;
            position: relative;
            overflow: hidden;
            width: 100%;
            height: 100%; /* Ensure it fills the PDF page */
        }
        
        /* Specific compact styles for PDF to force single page */
        #printable-report h1 { font-size: 1.5rem; margin-bottom: 0.25rem; }
        #printable-report h3 { font-size: 0.9rem; margin-bottom: 0.5rem; }
        #printable-report .grid { gap: 1rem; margin-bottom: 1.5rem; }
        #printable-report .p-6 { padding: 1rem; }
        #printable-report .mb-8 { margin-bottom: 1.5rem; }
        #printable-report table th, #printable-report table td { padding: 0.5rem; font-size: 0.8rem; }
        #printable-report .analysis-text { font-size: 0.8rem; }

        @media (max-width: 1024px) {
            body { overflow: auto; height: auto; }
            .dashboard-grid { display: flex; flex-direction: column; }
            .scroll-col { height: auto; overflow: visible; }
        }
    
                
                .tax-planner-container {
                    font-family: 'Outfit', sans-serif;
                    background-color: #f3f6fc;
                    color: #0f172a;
                    width: 100%;
                    position: relative;
                }
                
                
            `}} />
            
            <div ref={containerRef} dangerouslySetInnerHTML={{ __html: `

    <!-- Global Floating Tooltip -->
    <div id="global-tooltip"></div>

    <!-- Header -->
    <div class="flex-none bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2.5 shadow-md z-30 flex items-center justify-between h-14">
        <div class="flex items-center gap-3">
            <div class="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-blue-600 font-extrabold text-xl shadow-sm">₹</div>
            <div>
                <h1 class="text-lg font-bold tracking-tight leading-none">Smart <span class="text-blue-200">Tax Planner</span></h1>
                <div class="flex items-center gap-2 mt-0.5">
                    <span class="text-[10px] bg-blue-500/40 px-1.5 py-0.5 rounded border border-blue-400/30 uppercase tracking-wide font-semibold">FY 2025-26</span>
                </div>
            </div>
        </div>
        <div class="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-1.5 border border-white/10">
            <div class="bg-green-400 w-6 h-6 rounded-full flex items-center justify-center text-green-900 font-bold shadow-sm text-sm">✓</div>
            <div>
                <p class="text-[10px] text-blue-100 uppercase font-bold tracking-wider">Tax Free Limit</p>
                <p class="text-base font-bold text-white leading-none">₹12 Lakhs</p>
            </div>
        </div>
    </div>

    <!-- Main Content -->
    <div class="p-3 w-full h-auto">
        <div class="grid grid-cols-12 gap-4 dashboard-grid">
            
            <!-- LEFT COLUMN: INPUTS -->
            <div class="col-span-3 flex flex-col gap-3 h-full overflow-y-auto custom-scroll pr-1 scroll-col">
                <!-- Income -->
                <div class="card p-4">
                    <h3 class="text-sm font-bold text-slate-800 mb-2">Income Details</h3>
                    <div class="mb-1">
                        <label class="text-[11px] font-bold text-slate-600 uppercase mb-1 flex items-center group relative w-fit">
                            Gross Salary 
                            <svg class="info-icon w-3.5 h-3.5 ml-1.5 tooltip-trigger" data-tip="Total Annual Income including Basic, HRA, Bonus, and Special Allowances." fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </label>
                        <div class="input-group">
                            <span class="absolute left-2.5 top-2 text-slate-400 text-sm">₹</span>
                            <input type="number" id="grossSalary" value="1200000" min="200000" max="30000000" step="5000" oninput="syncInput('grossSalary', 'grossSalarySlider')" class="input-field">
                        </div>
                        <input type="range" id="grossSalarySlider" min="200000" max="30000000" step="5000" value="1200000" oninput="syncSlider('grossSalary', 'grossSalarySlider')">
                    </div>
                </div>

                <!-- Deductions -->
                <div class="card p-4 border-t-4 border-yellow-400 flex-1 flex flex-col">
                    <div class="flex justify-between items-center mb-3">
                        <h3 class="text-sm font-bold text-slate-800">Old Regime Deductions</h3>
                        <p class="text-[10px] text-slate-400">Reduce taxable income.</p>
                    </div>

                    <div class="space-y-3 flex-1 overflow-y-auto custom-scroll pr-1">
                        <!-- 80C -->
                        <div>
                            <div class="flex justify-between text-[11px] font-bold text-slate-600 mb-1 group relative">
                                <span class="flex items-center">
                                    Section 80C
                                    <svg class="info-icon w-3.5 h-3.5 ml-1.5 tooltip-trigger" data-tip="PPF, EPF, ELSS, LIC. Max: ₹1.5 Lakhs." fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </span>
                                <span class="text-yellow-700 bg-yellow-100 px-1.5 py-0.5 rounded text-[10px]">Limit: 1.5L</span>
                            </div>
                            <div class="input-group">
                                <span class="absolute left-2.5 top-2 text-slate-400 text-xs">₹</span>
                                <input type="number" id="deduction80C" placeholder="0" max="150000" oninput="syncInput('deduction80C', 'deduction80CSlider')" class="input-field">
                            </div>
                            <input type="range" id="deduction80CSlider" min="0" max="150000" step="1000" value="0" oninput="syncSlider('deduction80C', 'deduction80CSlider')">
                        </div>

                        <!-- NPS -->
                        <div>
                            <div class="flex justify-between text-[11px] font-bold text-slate-600 mb-1 group relative">
                                <span class="flex items-center">
                                    NPS (80CCD 1B)
                                    <svg class="info-icon w-3.5 h-3.5 ml-1.5 tooltip-trigger" data-tip="Exclusive NPS Tier 1 deduction. Max: ₹50,000." fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </span>
                                <span class="text-yellow-700 bg-yellow-100 px-1.5 py-0.5 rounded text-[10px]">Limit: 50K</span>
                            </div>
                            <div class="input-group">
                                <span class="absolute left-2.5 top-2 text-slate-400 text-xs">₹</span>
                                <input type="number" id="deductionNPS" placeholder="0" max="50000" oninput="syncInput('deductionNPS', 'sliderNPS')" class="input-field">
                            </div>
                            <input type="range" id="sliderNPS" min="0" max="50000" step="1000" value="0" oninput="syncSlider('deductionNPS', 'sliderNPS')">
                        </div>

                        <!-- Home Loan -->
                        <div>
                            <div class="flex justify-between text-[11px] font-bold text-slate-600 mb-1 group relative">
                                <span class="flex items-center">
                                    Home Loan Int. (24b)
                                    <svg class="info-icon w-3.5 h-3.5 ml-1.5 tooltip-trigger" data-tip="Interest on self-occupied property loan. Max: ₹2 Lakhs." fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </span>
                                <span class="text-yellow-700 bg-yellow-100 px-1.5 py-0.5 rounded text-[10px]">Limit: 2.0L</span>
                            </div>
                            <div class="input-group">
                                <span class="absolute left-2.5 top-2 text-slate-400 text-xs">₹</span>
                                <input type="number" id="homeLoanInterest" placeholder="0" max="200000" oninput="syncInput('homeLoanInterest', 'homeLoanInterestSlider')" class="input-field">
                            </div>
                            <input type="range" id="homeLoanInterestSlider" min="0" max="200000" step="1000" value="0" oninput="syncSlider('homeLoanInterest', 'homeLoanInterestSlider')">
                        </div>

                        <!-- HRA -->
                        <div>
                            <label class="text-[11px] font-bold text-slate-600 mb-1 flex items-center group relative w-fit">
                                HRA Exemption
                                <svg class="info-icon w-3.5 h-3.5 ml-1.5 tooltip-trigger" data-tip="Least of: Actual HRA, 50% Basic, or Rent-10% Basic." fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            </label>
                            <div class="input-group">
                                <span class="absolute left-2.5 top-2 text-slate-400 text-xs">₹</span>
                                <input type="number" id="hraExemption" placeholder="0" max="1000000" oninput="syncInput('hraExemption', 'hraExemptionSlider')" class="input-field">
                            </div>
                            <input type="range" id="hraExemptionSlider" min="0" max="500000" step="1000" value="0" oninput="syncSlider('hraExemption', 'hraExemptionSlider')">
                        </div>

                        <!-- Medical -->
                        <div class="grid grid-cols-2 gap-3">
                            <div>
                                <label class="text-[10px] font-bold text-slate-500 uppercase mb-1 flex items-center group relative w-fit">
                                    80D (Self)
                                    <svg class="info-icon w-3.5 h-3.5 ml-1 tooltip-trigger" data-tip="Health Insurance (Self/Family). Max ₹25k (₹50k if Sr. Citizen)." fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </label>
                                <div class="input-group !rounded-lg">
                                    <input type="number" id="deduction80DSelf" placeholder="0" max="25000" oninput="syncInput('deduction80DSelf', 'slider80DSelf')" class="input-field !p-2 !pl-3 text-center text-xs">
                                </div>
                                <div class="text-[9px] text-slate-400 text-right mt-0.5">Max 25k</div>
                                <input type="range" id="slider80DSelf" min="0" max="25000" step="1000" value="0" oninput="syncSlider('deduction80DSelf', 'slider80DSelf')" class="mt-1">
                            </div>
                            <div>
                                <label class="text-[10px] font-bold text-slate-500 uppercase mb-1 flex items-center group relative w-fit">
                                    80D (Par)
                                    <svg class="info-icon w-3.5 h-3.5 ml-1 tooltip-trigger" data-tip="Health Insurance (Parents). Max ₹25k (₹50k if Sr. Citizen)." fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </label>
                                <div class="input-group !rounded-lg">
                                    <input type="number" id="deduction80DParents" placeholder="0" max="50000" oninput="syncInput('deduction80DParents', 'slider80DParents')" class="input-field !p-2 !pl-3 text-center text-xs">
                                </div>
                                <div class="text-[9px] text-slate-400 text-right mt-0.5">Max 50k</div>
                                <input type="range" id="slider80DParents" min="0" max="50000" step="1000" value="0" oninput="syncSlider('deduction80DParents', 'slider80DParents')" class="mt-1">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- MIDDLE COLUMN: RESULTS -->
            <div class="col-span-6 flex flex-col gap-3 h-full overflow-y-auto custom-scroll px-1 scroll-col">
                <!-- Comparison Cards -->
                <div class="grid grid-cols-2 gap-3 flex-none">
                    <!-- Old Regime -->
                    <div id="cardOld" class="card p-4 relative overflow-hidden flex flex-col justify-between min-h-[150px] border-2">
                        <div id="badgeOldWin" class="hidden absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-[9px] font-bold px-3 py-1 rounded-bl-lg shadow-sm z-10">LOWEST TAX 🏆</div>
                        
                        <div>
                            <div class="flex justify-between items-center mb-1">
                                <p class="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest">Old Regime</p>
                                <svg class="w-5 h-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                            </div>
                            <h3 class="text-3xl font-extrabold text-slate-800 tracking-tight tax-amount" id="displayOldTax">₹0</h3>
                        </div>
                        <div class="mt-2 pt-2 border-t border-slate-200/50 flex justify-between items-center">
                            <span class="text-[10px] text-slate-500 font-medium uppercase">Effective Rate</span>
                            <span class="text-sm font-bold text-slate-700" id="effRateOld">0%</span>
                        </div>
                    </div>

                    <!-- New Regime -->
                    <div id="cardNew" class="card p-4 relative overflow-hidden flex flex-col justify-between min-h-[150px] border-2">
                        <div id="badgeRebate" class="hidden absolute top-0 left-0 bg-green-500 text-white text-[9px] font-bold px-3 py-1 rounded-br-lg uppercase tracking-wider z-10 shadow-sm">Tax-Free (≤ 12L)</div>
                        <div id="badgeNewWin" class="hidden absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-[9px] font-bold px-3 py-1 rounded-bl-lg shadow-sm z-10">LOWEST TAX 🏆</div>
                        
                        <div class="flex justify-between items-start mb-1">
                            <p class="text-[10px] font-extrabold text-slate-500 uppercase tracking-widest">New Regime</p>
                            <span class="text-sm font-bold text-slate-400" id="effRateNew">0%</span>
                        </div>
                        <h3 class="text-3xl font-extrabold text-slate-800 tracking-tight tax-amount" id="displayNewTax">₹0</h3>
                        <div class="mt-2 pt-2 border-t border-slate-200/50 flex justify-between items-center">
                            <span class="text-[10px] text-slate-500 font-medium uppercase">Effective Rate</span>
                            <span class="text-sm font-bold text-slate-700" id="effRateNewDisplay">0%</span>
                        </div>
                    </div>
                </div>

                <!-- Chart Area -->
                <div class="card p-3 flex-none h-48">
                    <canvas id="mainChart"></canvas>
                </div>

                <!-- Detailed Table -->
                <div class="card overflow-hidden flex-1 flex flex-col">
                    <div class="bg-slate-50 px-5 py-2.5 border-b border-slate-200">
                        <h3 class="text-sm font-bold text-slate-800">Computation</h3>
                    </div>
                    <div class="overflow-auto flex-1 custom-scroll">
                        <table class="w-full text-left text-xs text-slate-600">
                            <thead class="text-[9px] uppercase font-bold text-slate-400 bg-white border-b border-slate-100 sticky top-0">
                                <tr>
                                    <th class="py-2.5 px-5 bg-white">Item</th>
                                    <th class="py-2.5 px-5 text-right bg-white">Old Regime</th>
                                    <th class="py-2.5 px-5 text-right bg-white">New Regime</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-50">
                                <tr>
                                    <td class="py-2 px-5 font-medium text-slate-800">Gross Income</td>
                                    <td class="py-2 px-5 text-right font-bold" id="tblOldGross">₹0</td>
                                    <td class="py-2 px-5 text-right font-bold" id="tblNewGross">₹0</td>
                                </tr>
                                <tr>
                                    <td class="py-2 px-5 text-blue-500">Total Deductions</td>
                                    <td class="py-2 px-5 text-right text-blue-600" id="tblOldDed">-₹0</td>
                                    <td class="py-2 px-5 text-right text-blue-600" id="tblNewDed">-₹0</td>
                                </tr>
                                <tr class="bg-slate-50/50">
                                    <td class="py-2 px-5 font-bold text-slate-900">Taxable Income</td>
                                    <td class="py-2 px-5 text-right font-bold text-slate-900" id="tblOldTaxable">₹0</td>
                                    <td class="py-2 px-5 text-right font-bold text-slate-900" id="tblNewTaxable">₹0</td>
                                </tr>
                                <tr>
                                    <td class="py-2 px-5 text-slate-500">Tax + Cess</td>
                                    <td class="py-2 px-5 text-right" id="tblOldBase">₹0</td>
                                    <td class="py-2 px-5 text-right" id="tblNewBase">₹0</td>
                                </tr>
                                <tr>
                                    <td class="py-2 px-5 text-slate-500">Cess (4%)</td>
                                    <td class="py-2 px-5 text-right text-red-400" id="tblOldCessDisplay">₹0</td>
                                    <td class="py-2 px-5 text-right text-red-400" id="tblNewCessDisplay">₹0</td>
                                </tr>
                                <tr class="bg-emerald-50/50 sticky bottom-0">
                                    <td class="py-3 px-5 font-extrabold text-slate-900">NET PAYABLE</td>
                                    <td class="py-3 px-5 text-right font-bold text-slate-600" id="tblOldFinal">₹0</td>
                                    <td class="py-3 px-5 text-right font-bold text-slate-600" id="tblNewFinal">₹0</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- RIGHT COLUMN: AI EXPERT + PDF Report -->
            <div class="col-span-3 flex flex-col gap-3 h-full overflow-y-auto custom-scroll pl-1 scroll-col">
                
                <!-- Report Generation Box -->
                <div class="card p-4 bg-gradient-to-r from-slate-800 to-slate-900 text-white flex-none">
                    <h3 class="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Detailed Report</h3>
                    <div class="flex gap-2">
                        <input type="text" id="userNameInput" placeholder="Enter your Name" class="flex-1 bg-slate-700 border-none text-xs rounded px-3 py-2 text-white placeholder-slate-400 outline-none focus:ring-1 focus:ring-blue-500">
                        <button onclick="downloadPDF()" id="downloadBtn" class="bg-blue-500 hover:bg-blue-600 text-white text-xs font-bold px-3 py-2 rounded transition-colors hidden">
                            Download PDF
                        </button>
                    </div>
                </div>

                <!-- AI Analysis -->
                <div class="card bg-white p-4 flex-1 border border-slate-100 shadow-lg flex flex-col">
                    <div class="flex items-center gap-2 mb-3">
                        <div class="bg-purple-100 p-2 rounded-full text-purple-600"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></div>
                        <h3 class="text-base font-bold text-slate-800">AI Expert Analysis</h3>
                    </div>

                    <!-- Recommendation Box -->
                    <div id="aiRecBox" class="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-3 text-sm">
                        <p class="text-slate-400">Analysis pending...</p>
                    </div>

                    <!-- Comparison Grid -->
                    <div class="grid grid-cols-2 gap-2 border-t border-b border-slate-100 py-3 mb-3">
                        <div>
                            <p class="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Your Rate</p>
                            <p class="text-xl font-bold text-green-600 leading-none" id="aiEffRate">0.0%</p>
                        </div>
                        <div>
                            <p class="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1" id="aiVsLabel">Vs Other</p>
                            <p class="text-xl font-bold text-slate-400 leading-none" id="aiVsRate">0.0%</p>
                        </div>
                    </div>

                    <div class="mb-3">
                         <p id="aiWhyText" class="text-xs text-slate-600 leading-relaxed italic"></p>
                    </div>

                    <!-- Opportunities -->
                    <div class="flex-1 overflow-y-auto custom-scroll pr-1">
                        <div class="flex items-center gap-2 mb-3 sticky top-0 bg-white py-1">
                            <span class="w-2 h-2 bg-yellow-500 rounded-full"></span>
                            <p class="text-[10px] font-bold text-yellow-600 uppercase tracking-wider">Optimization Opportunities</p>
                        </div>
                        <div id="aiOpportunitiesList" class="space-y-0 text-xs">
                            <!-- Cards Injected Here -->
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <!-- Hidden PDF Template -->
    <div id="printable-report">
        <!-- Watermark fixed to top layer of relative container but z-index 50 to float above header bg -->
        <div class="absolute inset-0 flex items-center justify-center pointer-events-none z-50 overflow-hidden">
             <div style="transform: rotate(-35deg);" class="text-center w-full">
                 <span class="text-[60px] font-black text-[#e2e8f0]/40 uppercase tracking-widest block whitespace-nowrap">CASHMELA.COM</span>
             </div>
        </div>

        <div class="relative z-10 flex flex-col h-full justify-between">
            <div>
                <div class="border-b border-slate-200 pb-4 mb-6 flex justify-between items-center">
                    <div>
                        <h1 class="text-3xl font-bold text-slate-800">Tax Report</h1>
                        <p class="text-slate-500 text-sm">Generated by CashMela TaxPlanner • Budget 2025</p>
                    </div>
                    <div class="text-right">
                        <p class="text-sm font-bold text-slate-600">Prepared For</p>
                        <h2 class="text-xl font-bold text-blue-600" id="reportUserName">Customer</h2>
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-8 mb-8">
                    <div class="bg-slate-50 p-6 rounded-xl border border-slate-100">
                        <h3 class="text-sm font-bold text-slate-500 uppercase tracking-wide mb-2">Income Summary</h3>
                        <div class="flex justify-between mb-1">
                            <span class="text-slate-600">Gross Income:</span>
                            <span class="font-bold text-slate-800" id="reportGross">₹0</span>
                        </div>
                        <div class="flex justify-between">
                            <span class="text-slate-600">Total Deductions (Old):</span>
                            <span class="font-bold text-slate-800" id="reportDeductions">₹0</span>
                        </div>
                    </div>
                    <div class="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
                        <h3 class="text-sm font-bold text-emerald-600 uppercase tracking-wide mb-2">Best Regime</h3>
                        <p class="text-2xl font-bold text-emerald-800" id="reportBestRegime">New Regime</p>
                        <p class="text-sm text-emerald-600 mt-1">Savings: <span id="reportSavings" class="font-bold">₹0</span></p>
                    </div>
                </div>

                <div class="mb-8">
                    <h3 class="text-lg font-bold text-slate-800 mb-4 border-b pb-2">Detailed Calculation</h3>
                    <table class="w-full text-left text-sm border-collapse">
                        <thead>
                            <tr class="bg-slate-100">
                                <th class="p-3 border border-slate-200">Component</th>
                                <th class="p-3 border border-slate-200 text-right">Old Regime</th>
                                <th class="p-3 border border-slate-200 text-right">New Regime</th>
                            </tr>
                        </thead>
                        <tbody id="reportTableBody">
                            <!-- JS Populated -->
                        </tbody>
                    </table>
                </div>

                <div class="mb-8">
                    <h3 class="text-lg font-bold text-slate-800 mb-4 border-b pb-2">Analysis</h3>
                    <div id="reportAIContent" class="text-sm text-slate-600 bg-white p-4 border rounded-lg"></div>
                </div>
            </div>

            <div class="text-center pt-4">
                 <p class="text-xs text-slate-400 mb-4">Disclaimer: This report is for estimation purposes only. Please consult a CA for official filing.</p>
                 <div class="border-t border-slate-200 pt-4">
                     <p class="text-sm font-bold text-slate-700">CashMela - India's Trusted Loan Advisor | <span class="font-normal text-blue-600">www.cashmela.com</span></p>
                 </div>
            </div>
        </div>
    </div>

    ` }} />
        </div>
    );
}
