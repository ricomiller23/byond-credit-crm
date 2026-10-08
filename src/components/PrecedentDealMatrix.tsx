import React, { useState } from 'react';
import { Layers, ArrowRight, ShieldCheck, Award, DollarSign, Mail, CheckCircle2 } from 'lucide-react';
import { LenderTarget } from '../types/crm';
import { DEAL_TERMS } from '../data/dealTerms';

interface PrecedentDealMatrixProps {
  lenders: LenderTarget[];
  onOpenComposer: (lender: LenderTarget) => void;
}

export const PrecedentDealMatrix: React.FC<PrecedentDealMatrixProps> = ({
  lenders,
  onOpenComposer
}) => {
  const [selectedLenderId, setSelectedLenderId] = useState<string>("A1");

  const selectedLender = lenders.find(l => l.id === selectedLenderId) || lenders[0];

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="glass-panel p-6 rounded-2xl border border-indigo-500/30 bg-gradient-to-r from-indigo-950/30 via-slate-900/60 to-slate-950">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold mb-2">
              <Layers className="h-3.5 w-3.5" />
              <span>Institutional Precedent Deal Comps & Pattern Matching</span>
            </div>
            <h2 className="text-xl font-extrabold text-white">
              Precedent Deal Architecture: Why Lenders Buy This Paper
            </h2>
            <p className="text-xs text-slate-300 mt-1 max-w-2xl leading-relaxed">
              Credit committees underwrite by precedent analogy. Below is the direct structural mapping between each target firm's documented past transactions and the BYOND $30M OnliBitcoin facility.
            </p>
          </div>

          <button
            onClick={() => onOpenComposer(selectedLender)}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-bold text-xs flex items-center space-x-2 shadow-lg shadow-indigo-600/30 transition-all self-start md:self-auto"
          >
            <Mail className="h-4 w-4" />
            <span>Pitch Precedent to {selectedLender.firm.split(' ')[0]}</span>
          </button>
        </div>
      </div>

      {/* Target Tabs */}
      <div className="flex overflow-x-auto space-x-2 pb-2 scrollbar-none">
        {lenders.slice(0, 10).map((l) => (
          <button
            key={l.id}
            onClick={() => setSelectedLenderId(l.id)}
            className={`px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center space-x-1.5 ${
              selectedLenderId === l.id
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <span className="font-mono text-[10px] opacity-75">{l.id}</span>
            <span>{l.firm.split(' ')[0]}</span>
          </button>
        ))}
      </div>

      {/* Detailed Precedent Comparison Card */}
      <div className="glass-panel rounded-2xl border border-slate-800 bg-slate-950 p-6 shadow-xl space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div>
            <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              Target {selectedLender.id} • Tier {selectedLender.tier}
            </span>
            <h3 className="text-lg font-bold text-white mt-1">{selectedLender.firm}</h3>
          </div>
          <div className="text-right">
            <span className="text-[10px] text-slate-500 uppercase font-semibold block">Underwriting Mandate</span>
            <span className="text-xs font-mono text-emerald-400 font-bold">{selectedLender.checkSize}</span>
          </div>
        </div>

        {/* 2-Column Comparison: Their Precedent vs BYOND Facility */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Box 1: Their Past Deal */}
          <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
            <div className="flex items-center space-x-2 text-amber-400">
              <Award className="h-4 w-4" />
              <h4 className="font-bold text-xs uppercase tracking-wider">Documented Precedent Transaction</h4>
            </div>
            <p className="text-slate-200 text-xs leading-relaxed font-mono bg-slate-950 p-3 rounded-lg border border-slate-800/80">
              {selectedLender.precedentDeal || "Senior secured technology and intellectual property credit facilities."}
            </p>
            <div className="text-[11px] text-slate-400">
              Underwriting Focus: {selectedLender.pitchAngle}
            </div>
          </div>

          {/* Box 2: BYOND Deal Fit */}
          <div className="p-5 rounded-xl bg-indigo-950/20 border border-indigo-500/30 space-y-3">
            <div className="flex items-center space-x-2 text-indigo-400">
              <ShieldCheck className="h-4 w-4" />
              <h4 className="font-bold text-xs uppercase tracking-wider">How BYOND Matches This Deal</h4>
            </div>
            <p className="text-indigo-100 text-xs leading-relaxed font-mono bg-slate-950 p-3 rounded-lg border border-indigo-900/40">
              {selectedLender.precedentFitAnalysis || "Matches senior loan structure with 6.5%–8.8% LTV and pre-funded interest reserve."}
            </p>
            <div className="text-[11px] text-emerald-400 font-medium flex items-center">
              <CheckCircle2 className="h-3 w-3 mr-1" />
              Exact LTV and Collateral Alignment
            </div>
          </div>
        </div>

        {/* Comparison Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
          <div className="p-3 bg-slate-900/40 rounded-xl border border-slate-800/60">
            <span className="text-[10px] text-slate-500 uppercase font-semibold block">Facility Size</span>
            <span className="text-sm font-mono font-bold text-white">{DEAL_TERMS.facilityAmount}</span>
            <span className="text-[10px] text-slate-400 block mt-0.5">10% of $300M Total</span>
          </div>

          <div className="p-3 bg-slate-900/40 rounded-xl border border-slate-800/60">
            <span className="text-[10px] text-slate-500 uppercase font-semibold block">Independent Appraisal</span>
            <span className="text-sm font-mono font-bold text-emerald-400">$340M–$460M</span>
            <span className="text-[10px] text-slate-400 block mt-0.5">Teknos (Sep 3, 2026)</span>
          </div>

          <div className="p-3 bg-slate-900/40 rounded-xl border border-slate-800/60">
            <span className="text-[10px] text-slate-500 uppercase font-semibold block">Appraised LTV</span>
            <span className="text-sm font-mono font-bold text-cyan-400">{DEAL_TERMS.appraisedLtv}</span>
            <span className="text-[10px] text-slate-400 block mt-0.5">Ultra-Conservative</span>
          </div>

          <div className="p-3 bg-slate-900/40 rounded-xl border border-slate-800/60">
            <span className="text-[10px] text-slate-500 uppercase font-semibold block">Stressed Liquidation</span>
            <span className="text-sm font-mono font-bold text-amber-400">2.8x Coverage</span>
            <span className="text-[10px] text-slate-400 block mt-0.5">$85M floor (75% haircut)</span>
          </div>
        </div>
      </div>
    </div>
  );
};
