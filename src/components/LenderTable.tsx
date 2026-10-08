import React, { useState } from 'react';
import { Search, Mail, ExternalLink, ChevronRight, CheckCircle2, Clock, AlertCircle, Copy, Check } from 'lucide-react';
import { LenderTarget, LenderTier, OutreachStatus } from '../types/crm';

interface LenderTableProps {
  lenders: LenderTarget[];
  onSelectLender: (lender: LenderTarget) => void;
  onOpenComposer: (lender: LenderTarget) => void;
  onUpdateStatus: (lenderId: string, newStatus: OutreachStatus) => void;
}

export const LenderTable: React.FC<LenderTableProps> = ({
  lenders,
  onSelectLender,
  onOpenComposer,
  onUpdateStatus
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTier, setSelectedTier] = useState<string>('ALL');
  const [selectedStatus, setSelectedStatus] = useState<string>('ALL');
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const handleCopyEmail = (email: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  const filteredLenders = lenders.filter(l => {
    const matchesSearch = 
      l.firm.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      l.contacts.some(c => 
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    
    const matchesTier = selectedTier === 'ALL' || l.tier === selectedTier;
    const matchesStatus = selectedStatus === 'ALL' || l.status === selectedStatus;

    return matchesSearch && matchesTier && matchesStatus;
  });

  const getTierBadge = (tier: LenderTier) => {
    switch (tier) {
      case 'A':
        return <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">Tier A (IP Credit)</span>;
      case 'B':
        return <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">Tier B (Venture Debt)</span>;
      case 'C':
        return <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-slate-700/40 text-slate-300 border border-slate-600/30">Tier C (Specialty Credit)</span>;
    }
  };

  const getStatusBadge = (status: OutreachStatus) => {
    switch (status) {
      case 'Ready to Dispatch':
        return <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"><CheckCircle2 className="h-3 w-3" /><span>Ready</span></span>;
      case 'Sent':
        return <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded text-[11px] font-medium bg-blue-500/10 text-blue-400 border border-blue-500/30"><Check className="h-3 w-3" /><span>Sent</span></span>;
      case 'Queued':
        return <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded text-[11px] font-medium bg-slate-800 text-slate-400 border border-slate-700"><Clock className="h-3 w-3" /><span>Queued</span></span>;
      case 'Under Review':
        return <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded text-[11px] font-medium bg-purple-500/10 text-purple-400 border border-purple-500/30"><Clock className="h-3 w-3" /><span>In Review</span></span>;
      case 'Bounced / Address Invalid':
        return <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded text-[11px] font-medium bg-rose-500/10 text-rose-400 border border-rose-500/30"><AlertCircle className="h-3 w-3" /><span>Bounced</span></span>;
      default:
        return <span className="px-2 py-0.5 rounded text-[11px] bg-slate-800 text-slate-400">{status}</span>;
    }
  };

  return (
    <div className="glass-panel rounded-2xl border border-slate-800/80 overflow-hidden shadow-xl">
      {/* Controls Bar */}
      <div className="p-4 border-b border-slate-800/80 bg-slate-900/40 flex flex-col md:flex-row md:items-center justify-between gap-3">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search firm, key executive, email, or geography..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-slate-950/80 border border-slate-700/80 rounded-xl text-xs text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
          />
        </div>

        {/* Filters */}
        <div className="flex items-center flex-wrap gap-2">
          {/* Tier Buttons */}
          <div className="inline-flex rounded-xl bg-slate-950/80 p-0.5 border border-slate-800 text-xs">
            {['ALL', 'A', 'B', 'C'].map((tier) => (
              <button
                key={tier}
                onClick={() => setSelectedTier(tier)}
                className={`px-3 py-1 rounded-lg font-medium transition-all ${
                  selectedTier === tier
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tier === 'ALL' ? 'All Tiers' : `Tier ${tier}`}
              </button>
            ))}
          </div>

          {/* Status Dropdown */}
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-3 py-1.5 bg-slate-950/80 border border-slate-800 rounded-xl text-xs text-slate-300 focus:outline-none focus:border-indigo-500"
          >
            <option value="ALL">All Statuses</option>
            <option value="Ready to Dispatch">Ready to Dispatch</option>
            <option value="Queued">Queued</option>
            <option value="Sent">Sent</option>
            <option value="Under Review">Under Review</option>
            <option value="Bounced / Address Invalid">Bounced</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs text-slate-300">
          <thead className="bg-slate-950/60 text-slate-400 uppercase font-semibold text-[10px] tracking-wider border-b border-slate-800">
            <tr>
              <th className="py-3 px-4 w-12 text-center">#</th>
              <th className="py-3 px-4">Lender / Institution</th>
              <th className="py-3 px-4">Check Size & Region</th>
              <th className="py-3 px-4">Key Credit Contact</th>
              <th className="py-3 px-4">Primary Email</th>
              <th className="py-3 px-4">Why They Fit</th>
              <th className="py-3 px-4 text-center">Status</th>
              <th className="py-3 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {filteredLenders.length === 0 ? (
              <tr>
                <td colSpan={8} className="py-12 text-center text-slate-500">
                  No institutional lenders found matching your filter criteria.
                </td>
              </tr>
            ) : (
              filteredLenders.map((lender) => {
                const primaryContact = lender.contacts.find(c => c.isPrimary) || lender.contacts[0];
                return (
                  <tr
                    key={lender.id}
                    onClick={() => onSelectLender(lender)}
                    className="hover:bg-slate-900/60 cursor-pointer transition-colors group"
                  >
                    <td className="py-3.5 px-4 font-mono font-bold text-slate-400 text-center">
                      {lender.id}
                    </td>

                    <td className="py-3.5 px-4">
                      <div className="font-semibold text-white group-hover:text-indigo-300 transition-colors">
                        {lender.firm}
                      </div>
                      <div className="mt-1">
                        {getTierBadge(lender.tier)}
                      </div>
                    </td>

                    <td className="py-3.5 px-4">
                      <div className="font-mono text-emerald-400 font-medium">{lender.checkSize}</div>
                      <div className="text-[11px] text-slate-400">{lender.location}</div>
                    </td>

                    <td className="py-3.5 px-4">
                      <div className="font-medium text-slate-200">{primaryContact?.name}</div>
                      <div className="text-[11px] text-slate-400 truncate max-w-[180px]">{primaryContact?.title}</div>
                    </td>

                    <td className="py-3.5 px-4 font-mono text-[11px]">
                      <div className="flex items-center space-x-1.5">
                        <span className="text-slate-300 hover:text-indigo-400 transition-colors">
                          {primaryContact?.email}
                        </span>
                        <button
                          onClick={(e) => handleCopyEmail(primaryContact?.email, e)}
                          title="Copy Email"
                          className="p-1 hover:bg-slate-800 rounded text-slate-500 hover:text-slate-300 transition-colors"
                        >
                          {copiedEmail === primaryContact?.email ? (
                            <Check className="h-3 w-3 text-emerald-400" />
                          ) : (
                            <Copy className="h-3 w-3" />
                          )}
                        </button>
                      </div>
                    </td>

                    <td className="py-3.5 px-4 max-w-xs">
                      <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                        {lender.whyTheyFit}
                      </p>
                    </td>

                    <td className="py-3.5 px-4 text-center whitespace-nowrap">
                      {getStatusBadge(lender.status)}
                    </td>

                    <td className="py-3.5 px-4 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end space-x-2">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenComposer(lender);
                          }}
                          className="px-2.5 py-1 rounded-lg bg-indigo-600/80 hover:bg-indigo-600 text-white font-medium text-[11px] flex items-center space-x-1 shadow-sm transition-all"
                        >
                          <Mail className="h-3 w-3" />
                          <span>Pitch</span>
                        </button>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectLender(lender);
                          }}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                        >
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
