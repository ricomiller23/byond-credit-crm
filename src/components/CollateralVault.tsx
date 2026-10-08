import React from 'react';
import { Award, Shield, FileText, CheckCircle2, Lock, ExternalLink, Video, Music, Layers } from 'lucide-react';
import { DEAL_TERMS } from '../data/dealTerms';

export const CollateralVault: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Overview Card */}
      <div className="glass-panel p-6 rounded-2xl border border-slate-800 bg-slate-900/50">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-2">
              <Shield className="h-3.5 w-3.5" />
              <span>Perfected USPTO Lien Collateral</span>
            </div>
            <h2 className="text-xl font-extrabold text-white">
              OnliBitcoin Patent Estate & Valuation Backstop
            </h2>
            <p className="text-xs text-slate-400 mt-1 max-w-2xl leading-relaxed">
              Fifteen years of proprietary deep-tech development. 4 granted U.S. patents, 1 granting, 1 pending. Grants legal possession, settlement finality, and off-chain private transfers to institutional Bitcoin holdings.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <div className="text-right">
              <span className="text-[10px] text-slate-500 uppercase font-semibold block">Teknos Independent Appraisal</span>
              <span className="text-xl font-mono font-extrabold text-emerald-400">$340M – $460M</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3 Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Pillar 1 */}
        <div className="glass-panel p-5 rounded-xl border border-slate-800">
          <div className="flex items-center space-x-2 text-indigo-400 mb-2">
            <Lock className="h-4 w-4" />
            <h3 className="font-bold text-white text-xs uppercase tracking-wider">Collateral Perfection</h3>
          </div>
          <ul className="space-y-2 text-xs text-slate-300">
            <li className="flex items-start">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 mr-2 flex-shrink-0 mt-0.5" />
              <span>First-priority perfected lien on the entire patent estate & proceeds</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 mr-2 flex-shrink-0 mt-0.5" />
              <span>Recorded directly at the U.S. Patent & Trademark Office (USPTO) at close</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 mr-2 flex-shrink-0 mt-0.5" />
              <span>Negative pledge against any future liens or encumbrances</span>
            </li>
          </ul>
        </div>

        {/* Pillar 2 */}
        <div className="glass-panel p-5 rounded-xl border border-slate-800">
          <div className="flex items-center space-x-2 text-emerald-400 mb-2">
            <Award className="h-4 w-4" />
            <h3 className="font-bold text-white text-xs uppercase tracking-wider">Valuation & Recovery</h3>
          </div>
          <ul className="space-y-2 text-xs text-slate-300">
            <li className="flex items-start">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 mr-2 flex-shrink-0 mt-0.5" />
              <span>Independent appraisal by Teknos Associates: $340M floor, $460M ceiling</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 mr-2 flex-shrink-0 mt-0.5" />
              <span>6.5%–8.8% LTV ratio (10% senior slice of $300M transaction value)</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 mr-2 flex-shrink-0 mt-0.5" />
              <span>Stressed 75% liquidation haircut yields ~$85M floor (2.8x senior coverage)</span>
            </li>
          </ul>
        </div>

        {/* Pillar 3 */}
        <div className="glass-panel p-5 rounded-xl border border-slate-800">
          <div className="flex items-center space-x-2 text-amber-400 mb-2">
            <Layers className="h-4 w-4" />
            <h3 className="font-bold text-white text-xs uppercase tracking-wider">Subordination & Escrow</h3>
          </div>
          <ul className="space-y-2 text-xs text-slate-300">
            <li className="flex items-start">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 mr-2 flex-shrink-0 mt-0.5" />
              <span>$280M seller note subordinate to senior credit (seller carries 93% risk)</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 mr-2 flex-shrink-0 mt-0.5" />
              <span>$3.6M pre-funded escrow reserve covering 12 months debt service</span>
            </li>
            <li className="flex items-start">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 mr-2 flex-shrink-0 mt-0.5" />
              <span>18 months interest-only with zero DSCR covenant tests during year one</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Multimedia Review Platform */}
      <div className="glass-panel p-6 rounded-2xl border border-slate-800 bg-slate-900/60">
        <h3 className="text-sm font-bold text-white mb-4 flex items-center">
          <Video className="h-4 w-4 mr-2 text-indigo-400" />
          Interactive Diligence Enclosures & Video Assets
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Samply Link */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 hover:border-indigo-500/40 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <span className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                <Music className="h-4 w-4" />
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300">
                Online Deck
              </span>
            </div>
            <h4 className="font-bold text-white text-xs mb-1">Samply Presentation</h4>
            <p className="text-[11px] text-slate-400 mb-3">
              Interactive audio walkthrough of onli.ai technology by Dhryl Anton.
            </p>
            <a
              href={DEAL_TERMS.samplyUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold flex items-center justify-center space-x-1 transition-colors"
            >
              <span>Open onli.ai Deck</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          {/* Video 1 */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
            <div className="flex items-center justify-between mb-2">
              <span className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                <Video className="h-4 w-4" />
              </span>
              <span className="text-[10px] font-mono text-slate-400">95s • 720x1280</span>
            </div>
            <h4 className="font-bold text-white text-xs mb-1">Presentation 1.mov</h4>
            <p className="text-[11px] text-slate-400 mb-3">
              Executive demo of the BYOND private trading venue, non-custodial Bitcoin wallet, and order flow.
            </p>
            <div className="p-2 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-400 truncate">
              Path: ~/Downloads/Presentation 1.mov
            </div>
          </div>

          {/* Video 2 */}
          <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
            <div className="flex items-center justify-between mb-2">
              <span className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                <Video className="h-4 w-4" />
              </span>
              <span className="text-[10px] font-mono text-slate-400">186s • 720x1280</span>
            </div>
            <h4 className="font-bold text-white text-xs mb-1">Presentation 2.mp4</h4>
            <p className="text-[11px] text-slate-400 mb-3">
              Technical demonstration of single-owner off-chain settlement finality and tangible possession.
            </p>
            <div className="p-2 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-400 truncate">
              Path: ~/Downloads/Presentation 2.mp4
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
