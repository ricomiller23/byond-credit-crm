import React from 'react';
import { DollarSign, ShieldAlert, Award, Layers, Lock, Percent } from 'lucide-react';
import { DEAL_TERMS } from '../data/dealTerms';

export const MetricCards: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
      {/* 1. Facility Size */}
      <div className="glass-panel rounded-xl p-3.5 border-l-4 border-l-indigo-500 shadow-sm">
        <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
          <span className="font-semibold uppercase tracking-wider">Facility Size</span>
          <DollarSign className="h-4 w-4 text-indigo-400" />
        </div>
        <div className="text-xl font-extrabold text-white font-mono">
          {DEAL_TERMS.facilityAmount}
        </div>
        <div className="text-[11px] text-slate-400 mt-1">
          1st Lien Senior Term Loan
        </div>
      </div>

      {/* 2. Teknos Valuation */}
      <div className="glass-panel rounded-xl p-3.5 border-l-4 border-l-emerald-500 shadow-sm">
        <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
          <span className="font-semibold uppercase tracking-wider">Independent Appraisal</span>
          <Award className="h-4 w-4 text-emerald-400" />
        </div>
        <div className="text-xl font-extrabold text-emerald-400 font-mono">
          $340M–$460M
        </div>
        <div className="text-[11px] text-slate-400 mt-1">
          Teknos Opinion (Sep 3, 2026)
        </div>
      </div>

      {/* 3. Conservative LTV */}
      <div className="glass-panel rounded-xl p-3.5 border-l-4 border-l-cyan-500 shadow-sm">
        <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
          <span className="font-semibold uppercase tracking-wider">Appraised LTV</span>
          <Percent className="h-4 w-4 text-cyan-400" />
        </div>
        <div className="text-xl font-extrabold text-cyan-300 font-mono">
          {DEAL_TERMS.appraisedLtv}
        </div>
        <div className="text-[11px] text-slate-400 mt-1">
          Senior Debt / Appraisal
        </div>
      </div>

      {/* 4. Stressed Liquidation */}
      <div className="glass-panel rounded-xl p-3.5 border-l-4 border-l-amber-500 shadow-sm">
        <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
          <span className="font-semibold uppercase tracking-wider">Stressed Liquidation</span>
          <ShieldAlert className="h-4 w-4 text-amber-400" />
        </div>
        <div className="text-xl font-extrabold text-amber-300 font-mono">
          {DEAL_TERMS.stressedCoverageMultiplier} Coverage
        </div>
        <div className="text-[11px] text-slate-400 mt-1">
          $85M floor (75% haircut)
        </div>
      </div>

      {/* 5. Subordinated Seller Note */}
      <div className="glass-panel rounded-xl p-3.5 border-l-4 border-l-purple-500 shadow-sm">
        <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
          <span className="font-semibold uppercase tracking-wider">Junior Seller Paper</span>
          <Layers className="h-4 w-4 text-purple-400" />
        </div>
        <div className="text-xl font-extrabold text-purple-300 font-mono">
          $280M
        </div>
        <div className="text-[11px] text-slate-400 mt-1">
          Deeply subordinated (90%)
        </div>
      </div>

      {/* 6. Pre-Funded Interest Reserve */}
      <div className="glass-panel rounded-xl p-3.5 border-l-4 border-l-rose-500 shadow-sm">
        <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
          <span className="font-semibold uppercase tracking-wider">Interest Reserve</span>
          <Lock className="h-4 w-4 text-rose-400" />
        </div>
        <div className="text-xl font-extrabold text-rose-300 font-mono">
          $3.6M / 12 mo
        </div>
        <div className="text-[11px] text-slate-400 mt-1">
          Pre-funded in escrow at close
        </div>
      </div>
    </div>
  );
};
