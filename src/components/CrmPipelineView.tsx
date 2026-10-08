import React, { useState, useMemo } from 'react';
import { 
  Building2, 
  Users, 
  Phone, 
  Mail, 
  Send, 
  FileText, 
  Plus, 
  CheckCircle2, 
  AlertCircle, 
  PhoneCall, 
  Kanban, 
  Table as TableIcon, 
  Search, 
  ArrowRight,
  ShieldCheck,
  Calendar,
  Clock,
  ExternalLink,
  DollarSign
} from 'lucide-react';
import { LenderTarget, OrderFlowStage, LenderContact } from '../types/crm';

interface CrmPipelineViewProps {
  lenders: LenderTarget[];
  onOpenDrawer: (lender: LenderTarget) => void;
  onOpenEmailComposer: (lender: LenderTarget) => void;
  onOpenLogCall: (lender: LenderTarget, contact?: LenderContact) => void;
  onUpdateStage: (lenderId: string, stage: OrderFlowStage) => void;
}

export const CrmPipelineView: React.FC<CrmPipelineViewProps> = ({
  lenders,
  onOpenDrawer,
  onOpenEmailComposer,
  onOpenLogCall,
  onUpdateStage,
}) => {
  const [viewMode, setViewMode] = useState<'kanban' | 'table'>('kanban');
  const [crmSearchQuery, setCrmSearchQuery] = useState('');

  const stages: { id: OrderFlowStage; title: string; color: string; badgeBg: string }[] = [
    { id: 'outreach_sent', title: 'Outreach Sent', color: 'border-blue-500/40 text-blue-400', badgeBg: 'bg-blue-500/10 text-blue-300 border-blue-500/30' },
    { id: 'in_dialogue', title: 'Active Dialogue', color: 'border-cyan-500/40 text-cyan-400', badgeBg: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30' },
    { id: 'call_scheduled', title: 'Call Scheduled', color: 'border-purple-500/40 text-purple-400', badgeBg: 'bg-purple-500/10 text-purple-300 border-purple-500/30' },
    { id: 'diligence', title: 'In Diligence / VDR', color: 'border-amber-500/40 text-amber-400', badgeBg: 'bg-amber-500/10 text-amber-300 border-amber-500/30' },
    { id: 'term_sheet', title: 'Term Sheet Issued', color: 'border-emerald-500/40 text-emerald-400', badgeBg: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30' },
    { id: 'passed', title: 'Passed / Declined', color: 'border-rose-500/40 text-rose-400', badgeBg: 'bg-rose-500/10 text-rose-300 border-rose-500/30' },
    { id: 'closed', title: 'Closed / Committed', color: 'border-green-500/40 text-green-400', badgeBg: 'bg-green-500/10 text-green-300 border-green-500/30' },
  ];

  const filteredLenders = useMemo(() => {
    const q = crmSearchQuery.trim().toLowerCase();
    if (!q) return lenders;

    return lenders.filter(l => {
      const matchFirm = l.firm.toLowerCase().includes(q) || l.location.toLowerCase().includes(q);
      const matchContact = l.contacts.some(c => 
        c.name.toLowerCase().includes(q) || 
        c.title.toLowerCase().includes(q) || 
        c.email.toLowerCase().includes(q) ||
        (c.phone && c.phone.includes(q))
      );
      const matchNote = l.interactions?.some(i => i.notes.toLowerCase().includes(q) || i.outcome.toLowerCase().includes(q));
      return matchFirm || matchContact || matchNote;
    });
  }, [lenders, crmSearchQuery]);

  const totalContacts = lenders.reduce((acc, l) => acc + l.contacts.length, 0);

  return (
    <div className="space-y-6">
      {/* Top Banner & Pipeline Telemetry */}
      <div className="glass-panel p-6 rounded-2xl border border-slate-800 bg-slate-900/40">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold mb-2">
              <Kanban className="h-3.5 w-3.5" />
              <span>Syndication Order Flow & Pipeline Desk</span>
            </div>
            <h2 className="text-xl font-extrabold text-white">
              Institutional Order Flow Pipeline & Interaction CRM
            </h2>
            <p className="text-xs text-slate-400 mt-1 max-w-2xl leading-relaxed">
              Track real-time progress across all 25 institutional credit funds, log direct phone calls, record inbound committee feedback, and advance target lenders from initial outreach to closing.
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-xs font-mono text-slate-400 hidden sm:inline">VIEW:</span>
            <div className="flex rounded-xl bg-slate-950 p-1 border border-slate-800 text-xs">
              <button
                onClick={() => setViewMode('kanban')}
                className={`flex items-center space-x-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                  viewMode === 'kanban'
                    ? 'bg-indigo-600 text-white font-bold shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Kanban className="h-3.5 w-3.5" />
                <span>Kanban Flow</span>
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`flex items-center space-x-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                  viewMode === 'table'
                    ? 'bg-indigo-600 text-white font-bold shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <TableIcon className="h-3.5 w-3.5" />
                <span>Table Flow</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Metric Counters */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 font-mono">
        <div className="glass-panel p-4 rounded-xl border border-slate-800">
          <span className="text-[10px] text-slate-500 uppercase font-semibold block">Total Institutions</span>
          <span className="text-lg font-bold text-white">{lenders.length} Targets</span>
          <span className="text-[10px] text-slate-400 block mt-0.5">Tiers A, B, and C</span>
        </div>

        <div className="glass-panel p-4 rounded-xl border border-slate-800">
          <span className="text-[10px] text-slate-500 uppercase font-semibold block">Senior Debt Facility</span>
          <span className="text-lg font-bold text-emerald-400">$30,000,000</span>
          <span className="text-[10px] text-emerald-500/80 block mt-0.5">6.5%–8.8% Appraised LTV</span>
        </div>

        <div className="glass-panel p-4 rounded-xl border border-slate-800">
          <span className="text-[10px] text-slate-500 uppercase font-semibold block">Collateral Valuation</span>
          <span className="text-lg font-bold text-cyan-400">$340M – $460M</span>
          <span className="text-[10px] text-slate-400 block mt-0.5">Teknos Appraisal (4 Granted Patents)</span>
        </div>

        <div className="glass-panel p-4 rounded-xl border border-slate-800">
          <span className="text-[10px] text-slate-500 uppercase font-semibold block">Decision Makers Active</span>
          <span className="text-lg font-bold text-amber-400">{totalContacts} Executives</span>
          <span className="text-[10px] text-amber-500/80 block mt-0.5">Primary & Secondary Desks</span>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-900/60 p-3 rounded-2xl border border-slate-800">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-2.5 h-3.5 w-3.5 text-slate-400" />
          <input
            type="text"
            value={crmSearchQuery}
            onChange={(e) => setCrmSearchQuery(e.target.value)}
            placeholder="Search CRM by lender, executive name, email, phone, or notes..."
            className="w-full rounded-xl border border-slate-800 bg-slate-950 pl-9 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none"
          />
          {crmSearchQuery && (
            <button
              onClick={() => setCrmSearchQuery('')}
              className="absolute right-3 top-2 text-slate-400 hover:text-white text-xs"
            >
              ✕
            </button>
          )}
        </div>
        <div className="text-xs text-slate-400 font-mono">
          Showing {filteredLenders.length} of {lenders.length} lenders in pipeline
        </div>
      </div>

      {/* KANBAN BOARD VIEW */}
      {viewMode === 'kanban' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-3.5 overflow-x-auto pb-4">
          {stages.map((stage) => {
            const columnLenders = filteredLenders.filter(l => (l.orderFlowStage || 'outreach_sent') === stage.id);
            return (
              <div 
                key={stage.id}
                className="glass-panel rounded-2xl border border-slate-800 bg-slate-950/60 flex flex-col min-w-[280px] xl:min-w-0"
              >
                {/* Column Header */}
                <div className="p-3 border-b border-slate-800/80 flex items-center justify-between bg-slate-900/70 rounded-t-2xl">
                  <div className="flex items-center space-x-1.5">
                    <span className={`h-2 w-2 rounded-full ${
                      stage.id === 'passed' ? 'bg-rose-500' :
                      stage.id === 'closed' ? 'bg-green-500' :
                      stage.id === 'term_sheet' ? 'bg-emerald-500' :
                      stage.id === 'diligence' ? 'bg-amber-500' :
                      stage.id === 'call_scheduled' ? 'bg-purple-500' :
                      stage.id === 'in_dialogue' ? 'bg-cyan-500' : 'bg-blue-500'
                    }`} />
                    <h3 className="font-bold text-white text-xs tracking-tight">{stage.title}</h3>
                  </div>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold border ${stage.badgeBg}`}>
                    {columnLenders.length}
                  </span>
                </div>

                {/* Column Cards */}
                <div className="p-2.5 flex-1 space-y-2.5 min-h-[300px]">
                  {columnLenders.map((lender) => {
                    const primary = lender.contacts.find(c => c.isPrimary) || lender.contacts[0];
                    const latestInteraction = lender.interactions?.[0];

                    return (
                      <div
                        key={lender.id}
                        className={`p-3 rounded-xl border bg-slate-900/90 hover:bg-slate-850 hover:border-slate-700 transition shadow-sm flex flex-col justify-between ${
                          stage.id === 'passed' ? 'border-rose-900/40 bg-rose-950/10' : 'border-slate-800'
                        }`}
                      >
                        <div>
                          {/* Card Top: ID & Tier & Check Size */}
                          <div className="flex items-center justify-between text-[10px] font-mono mb-1.5">
                            <span className="text-indigo-400 font-bold">[{lender.id}] Tier {lender.tier}</span>
                            <span className="text-slate-400">{lender.checkSize}</span>
                          </div>

                          {/* Firm Title */}
                          <h4 
                            onClick={() => onOpenDrawer(lender)}
                            className="font-bold text-white text-xs hover:text-indigo-300 transition cursor-pointer flex items-center justify-between"
                          >
                            <span>{lender.firm}</span>
                            <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 text-slate-400" />
                          </h4>

                          {/* Primary Contact */}
                          {primary && (
                            <div className="mt-2 text-[11px] text-slate-300">
                              <div className="font-semibold text-white flex items-center justify-between">
                                <span>{primary.name}</span>
                                {primary.phone && (
                                  <a href={`tel:${primary.phone}`} className="text-slate-400 hover:text-emerald-400">
                                    <Phone className="h-3 w-3 inline" />
                                  </a>
                                )}
                              </div>
                              <div className="text-[10px] text-slate-400 truncate">{primary.title}</div>
                              <div className="text-[10px] font-mono text-indigo-400 truncate mt-0.5">{primary.email}</div>
                            </div>
                          )}

                          {/* Latest Interaction Note / Feedback */}
                          {latestInteraction && (
                            <div className={`mt-2.5 p-2 rounded-lg text-[10px] border ${
                              stage.id === 'passed' 
                                ? 'bg-rose-950/30 border-rose-800/40 text-rose-300' 
                                : 'bg-slate-950 border-slate-850 text-slate-400'
                            }`}>
                              <div className="font-semibold flex items-center justify-between text-slate-300 mb-0.5">
                                <span className="truncate">{latestInteraction.outcome}</span>
                                <span className="font-mono text-[9px] text-slate-500">{latestInteraction.date.split(' ')[0]}</span>
                              </div>
                              <p className="line-clamp-2 leading-relaxed">{latestInteraction.notes}</p>
                            </div>
                          )}
                        </div>

                        {/* Card Bottom: Quick Actions */}
                        <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between gap-1 text-[10px]">
                          <button
                            onClick={() => onOpenLogCall(lender, primary)}
                            className="px-2 py-1 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-semibold flex items-center space-x-1 transition"
                            title="Log call with this lender"
                          >
                            <PhoneCall className="h-3 w-3" />
                            <span>Log Call</span>
                          </button>

                          {/* Stage Transition Selector */}
                          <select
                            value={lender.orderFlowStage || 'outreach_sent'}
                            onChange={(e) => onUpdateStage(lender.id, e.target.value as OrderFlowStage)}
                            className="rounded-lg bg-slate-950 border border-slate-800 text-[10px] text-slate-300 px-1.5 py-1 focus:outline-none focus:border-indigo-500"
                          >
                            <option value="outreach_sent">Outreach Sent</option>
                            <option value="in_dialogue">Active Dialogue</option>
                            <option value="call_scheduled">Call Scheduled</option>
                            <option value="diligence">In Diligence</option>
                            <option value="term_sheet">Term Sheet</option>
                            <option value="passed">Passed</option>
                            <option value="closed">Closed</option>
                          </select>
                        </div>
                      </div>
                    );
                  })}

                  {columnLenders.length === 0 && (
                    <div className="h-32 border border-dashed border-slate-800 rounded-xl flex items-center justify-center text-[11px] text-slate-600">
                      No lenders in this stage
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* TABLE VIEW */
        <div className="glass-panel rounded-2xl border border-slate-800 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-950/80 text-slate-400 uppercase text-[10px] font-mono tracking-wider border-b border-slate-800">
                <tr>
                  <th className="p-3">Target Institution</th>
                  <th className="p-3">Primary Decision Maker</th>
                  <th className="p-3">Order Flow Stage</th>
                  <th className="p-3">Latest Interaction / Feedback</th>
                  <th className="p-3">Next Action</th>
                  <th className="p-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-sans text-xs">
                {filteredLenders.map((lender) => {
                  const primary = lender.contacts.find(c => c.isPrimary) || lender.contacts[0];
                  const latest = lender.interactions?.[0];
                  const stageObj = stages.find(s => s.id === (lender.orderFlowStage || 'outreach_sent'));

                  return (
                    <tr key={lender.id} className="hover:bg-slate-900/40 transition">
                      <td className="p-3">
                        <div className="font-bold text-white flex items-center space-x-1.5">
                          <span className="text-indigo-400 font-mono text-[11px]">[{lender.id}]</span>
                          <span>{lender.firm}</span>
                        </div>
                        <div className="text-[10px] text-slate-400 font-mono">{lender.location} · {lender.checkSize}</div>
                      </td>

                      <td className="p-3">
                        {primary ? (
                          <div>
                            <div className="font-semibold text-white">{primary.name}</div>
                            <div className="text-[10px] text-slate-400">{primary.title}</div>
                            <div className="text-[10px] font-mono text-indigo-400">{primary.email}</div>
                          </div>
                        ) : (
                          <span className="text-slate-500">Unassigned</span>
                        )}
                      </td>

                      <td className="p-3">
                        <select
                          value={lender.orderFlowStage || 'outreach_sent'}
                          onChange={(e) => onUpdateStage(lender.id, e.target.value as OrderFlowStage)}
                          className={`rounded-lg text-[10px] font-bold px-2 py-1 border ${stageObj?.badgeBg} bg-slate-950 focus:outline-none`}
                        >
                          {stages.map(s => (
                            <option key={s.id} value={s.id}>{s.title}</option>
                          ))}
                        </select>
                      </td>

                      <td className="p-3 max-w-xs">
                        {latest ? (
                          <div className="text-[11px]">
                            <div className="font-semibold text-slate-300">{latest.outcome}</div>
                            <div className="text-slate-400 truncate">{latest.notes}</div>
                          </div>
                        ) : (
                          <span className="text-slate-500 text-[11px]">None logged</span>
                        )}
                      </td>

                      <td className="p-3">
                        <div className="text-[11px] text-slate-300 font-mono">
                          {latest?.nextFollowUpDate ? latest.nextFollowUpDate : 'Next week'}
                        </div>
                      </td>

                      <td className="p-3 text-right">
                        <div className="flex items-center justify-end space-x-1.5">
                          <button
                            onClick={() => onOpenLogCall(lender, primary)}
                            className="p-1.5 rounded-lg bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 transition"
                            title="Log Call"
                          >
                            <PhoneCall className="h-3.5 w-3.5" />
                          </button>
                          <button
                            onClick={() => onOpenDrawer(lender)}
                            className="px-2 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-[10px] font-medium transition"
                          >
                            Details
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
