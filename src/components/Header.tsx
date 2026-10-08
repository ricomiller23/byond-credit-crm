import React from 'react';
import { ShieldCheck, Database, Send, AlertTriangle, ExternalLink, RefreshCw } from 'lucide-react';
import { DEAL_TERMS } from '../data/dealTerms';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  sentCount: number;
  totalCount: number;
  onRefresh: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  sentCount,
  totalCount,
  onRefresh
}) => {
  return (
    <header className="sticky top-0 z-40 bg-slate-950/85 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Deal Badge */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-indigo-600 via-indigo-500 to-amber-400 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <ShieldCheck className="h-5 w-5 text-white" />
              </div>
              <div>
                <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                  BYOND CREDIT TERMINAL
                </span>
                <span className="hidden sm:inline-block ml-2 px-2 py-0.5 text-xs font-semibold rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  {DEAL_TERMS.facilityAmount} Senior Facility
                </span>
              </div>
            </div>

            <div className="hidden lg:flex items-center space-x-2 text-xs text-slate-400 border-l border-slate-800 pl-4">
              <span className="font-mono text-emerald-400 font-medium">6.5%–8.8% LTV</span>
              <span>•</span>
              <span>Teknos Appraised $340M–$460M</span>
              <span>•</span>
              <span className="text-amber-400 font-mono">Close: {DEAL_TERMS.targetClose}</span>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center space-x-1 sm:space-x-2">
            <button
              onClick={() => setActiveTab('pipeline')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'pipeline'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              Lender Directory ({totalCount})
            </button>

            <button
              onClick={() => setActiveTab('master-email')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center space-x-1.5 ${
                activeTab === 'master-email'
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30'
                  : 'text-amber-400/90 hover:text-amber-300 hover:bg-amber-950/30 border border-amber-500/20'
              }`}
            >
              <Send className="h-3.5 w-3.5" />
              <span>Master Email Draft</span>
            </button>

            <button
              onClick={() => setActiveTab('collateral')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'collateral'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              Collateral Vault
            </button>

            <button
              onClick={() => setActiveTab('objections')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === 'objections'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              Credit Committee Defense
            </button>

            <button
              onClick={() => setActiveTab('auditor')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center space-x-1 ${
                activeTab === 'auditor'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <AlertTriangle className="h-3.5 w-3.5 text-amber-400" />
              <span>Bounce Auditor</span>
            </button>

            <button
              onClick={onRefresh}
              title="Refresh Pipeline Telemetry"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
            >
              <RefreshCw className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
