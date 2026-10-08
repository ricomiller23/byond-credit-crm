import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, ShieldCheck, Scale, Award } from 'lucide-react';
import { LENDER_OBJECTIONS, DEAL_TERMS } from '../data/dealTerms';

export const ObjectionVault: React.FC = () => {
  const [openIds, setOpenIds] = useState<number[]>([1, 2, 3]);

  const toggleAccordion = (id: number) => {
    setOpenIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-6">
      <div className="glass-panel p-6 rounded-2xl border border-slate-800 bg-slate-900/40">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold mb-2">
              <Scale className="h-3.5 w-3.5" />
              <span>Credit Committee Defense Playbook</span>
            </div>
            <h2 className="text-xl font-extrabold text-white">
              Lender Objections & Defensible Counterarguments
            </h2>
            <p className="text-xs text-slate-400 mt-1 max-w-2xl leading-relaxed">
              Synthesized directly from <code className="text-indigo-400">BYOND_1Lender_Deal_Points_with_Objections.docx</code>. The underwriting thesis is security first, repayment second, and operating upside third.
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setOpenIds([1, 2, 3, 4, 5, 6, 7])}
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-medium text-slate-300 transition-colors"
            >
              Expand All
            </button>
            <button
              onClick={() => setOpenIds([])}
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-medium text-slate-300 transition-colors"
            >
              Collapse All
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {LENDER_OBJECTIONS.map((obj) => {
          const isOpen = openIds.includes(obj.id);
          return (
            <div
              key={obj.id}
              className={`glass-panel rounded-xl border transition-all overflow-hidden ${
                isOpen ? 'border-indigo-500/40 bg-slate-900/70 shadow-lg' : 'border-slate-800/80 bg-slate-950 hover:border-slate-700'
              }`}
            >
              <button
                onClick={() => toggleAccordion(obj.id)}
                className="w-full p-4.5 flex items-center justify-between text-left transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <span className="flex-shrink-0 h-7 w-7 rounded-lg bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 font-mono text-xs font-bold flex items-center justify-center">
                    0{obj.id}
                  </span>
                  <span className="text-sm font-bold text-white tracking-tight">
                    "{obj.question}"
                  </span>
                </div>

                <div className="flex-shrink-0 ml-4 text-slate-400">
                  {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </div>
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 border-t border-slate-800/60 bg-slate-950/60 text-xs text-slate-300 space-y-2">
                  <div className="flex items-center space-x-1.5 text-emerald-400 font-bold uppercase text-[10px] tracking-wider pt-2">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    <span>Underwriting Counterargument & Structural Defense</span>
                  </div>
                  <p className="leading-relaxed text-slate-200 pl-5 border-l-2 border-emerald-500/40 text-[13px]">
                    {obj.counter}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
