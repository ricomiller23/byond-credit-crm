import React, { useState, useEffect } from 'react';
import { PhoneCall, X, Calendar, CheckCircle2, Clock, AlertTriangle, ArrowRight, UserPlus, Building2 } from 'lucide-react';
import { LenderTarget, OrderFlowStage, LenderContact } from '../types/crm';

interface LogCallModalProps {
  isOpen: boolean;
  onClose: () => void;
  target: LenderTarget | null;
  initialContact?: LenderContact | null;
  onLogCall: (
    targetId: string,
    callDetails: {
      contactName: string;
      outcome: string;
      notes: string;
      nextFollowUpDate?: string;
      suggestedStage?: OrderFlowStage;
    }
  ) => void;
}

export const LogCallModal: React.FC<LogCallModalProps> = ({
  isOpen,
  onClose,
  target,
  initialContact,
  onLogCall,
}) => {
  const [selectedContactName, setSelectedContactName] = useState('');
  const [customContactName, setCustomContactName] = useState('');
  const [outcome, setOutcome] = useState('Connected - Meaningful Dialogue');
  const [notes, setNotes] = useState('');
  const [followUpDate, setFollowUpDate] = useState('');
  const [suggestedStage, setSuggestedStage] = useState<OrderFlowStage | 'keep'>('keep');

  useEffect(() => {
    if (initialContact) {
      setSelectedContactName(initialContact.name);
    } else if (target && target.contacts.length > 0) {
      setSelectedContactName(target.contacts[0].name);
    } else {
      setSelectedContactName('custom');
    }
    setCustomContactName('');
    setOutcome('Connected - Meaningful Dialogue');
    setNotes('');
    setFollowUpDate('');
    setSuggestedStage('keep');
  }, [initialContact, target, isOpen]);

  if (!isOpen || !target) return null;

  const resolvedContactName = selectedContactName === 'custom'
    ? customContactName.trim() || 'New Decision Maker'
    : selectedContactName;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogCall(target.id, {
      contactName: resolvedContactName,
      outcome,
      notes: notes.trim(),
      nextFollowUpDate: followUpDate || undefined,
      suggestedStage: suggestedStage === 'keep' ? undefined : suggestedStage,
    });
    onClose();
  };

  const outcomePresets = [
    { label: 'Connected - Meaningful Dialogue', nextStage: 'in_dialogue' },
    { label: 'Left Voicemail / Gateway Message', nextStage: 'keep' },
    { label: '20-Min Call Scheduled', nextStage: 'call_scheduled' },
    { label: 'Email Response Received', nextStage: 'in_dialogue' },
    { label: 'Data Room / Diligence Requested', nextStage: 'diligence' },
    { label: 'Passed / Out of Mandate (Declined)', nextStage: 'passed' },
    { label: 'Term Sheet Issued / In Credit Committee', nextStage: 'term_sheet' },
  ];

  const handleOutcomeChange = (newOutcome: string) => {
    setOutcome(newOutcome);
    const found = outcomePresets.find(p => p.label === newOutcome);
    if (found && found.nextStage !== 'keep') {
      setSuggestedStage(found.nextStage as OrderFlowStage);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="w-full max-w-lg glass-panel bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Modal Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
              <PhoneCall className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-mono font-bold text-indigo-400">[{target.id}]</span>
                <h3 className="font-bold text-white text-base">{target.firm}</h3>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">Log syndication call, meeting notes & pipeline stage update</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="p-5 space-y-4 text-xs">
          {/* Contact Selection */}
          <div>
            <label className="block text-slate-400 font-semibold mb-1.5">
              Contact / Decision Maker
            </label>
            <select
              value={selectedContactName}
              onChange={(e) => setSelectedContactName(e.target.value)}
              className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-white text-xs focus:border-indigo-500 focus:outline-none"
            >
              {target.contacts.map((c) => (
                <option key={c.email} value={c.name}>
                  {c.name} ({c.title}) — {c.email}
                </option>
              ))}
              <option value="custom">+ Other / New Contact</option>
            </select>

            {selectedContactName === 'custom' && (
              <input
                type="text"
                value={customContactName}
                onChange={(e) => setCustomContactName(e.target.value)}
                placeholder="Enter executive name & title..."
                className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-white text-xs focus:border-indigo-500 focus:outline-none"
                required
              />
            )}
          </div>

          {/* Outcome Dropdown */}
          <div>
            <label className="block text-slate-400 font-semibold mb-1.5">
              Call / Interaction Outcome
            </label>
            <select
              value={outcome}
              onChange={(e) => handleOutcomeChange(e.target.value)}
              className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-white text-xs focus:border-indigo-500 focus:outline-none font-medium"
            >
              {outcomePresets.map((p) => (
                <option key={p.label} value={p.label}>
                  {p.label}
                </option>
              ))}
            </select>
          </div>

          {/* Detailed Notes */}
          <div>
            <label className="block text-slate-400 font-semibold mb-1.5">
              Notes & Verbatim Feedback
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={4}
              placeholder="Record feedback, underwriting questions, loan structure reaction, or exact quotes..."
              className="w-full rounded-xl border border-slate-800 bg-slate-950 p-3 text-white text-xs focus:border-indigo-500 focus:outline-none leading-relaxed placeholder-slate-600 font-sans"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            {/* Follow-up Date */}
            <div>
              <label className="block text-slate-400 font-semibold mb-1.5 flex items-center">
                <Calendar className="h-3.5 w-3.5 mr-1 text-slate-400" />
                Next Follow-Up Date
              </label>
              <input
                type="date"
                value={followUpDate}
                onChange={(e) => setFollowUpDate(e.target.value)}
                className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-white text-xs focus:border-indigo-500 focus:outline-none"
              />
            </div>

            {/* Advance Order Flow Stage */}
            <div>
              <label className="block text-slate-400 font-semibold mb-1.5 flex items-center">
                <ArrowRight className="h-3.5 w-3.5 mr-1 text-indigo-400" />
                Pipeline Order Flow Stage
              </label>
              <select
                value={suggestedStage}
                onChange={(e) => setSuggestedStage(e.target.value as any)}
                className="w-full rounded-xl border border-slate-800 bg-slate-950 px-3 py-2 text-white text-xs focus:border-indigo-500 focus:outline-none font-bold"
              >
                <option value="keep">Keep Current ({target.orderFlowStage})</option>
                <option value="outreach_sent">Outreach Sent</option>
                <option value="in_dialogue">Active Dialogue</option>
                <option value="call_scheduled">20-Min Call Scheduled</option>
                <option value="diligence">In Diligence / VDR</option>
                <option value="term_sheet">Term Sheet Issued</option>
                <option value="passed">Passed / Declined</option>
                <option value="closed">Closed / Committed</option>
              </select>
            </div>
          </div>

          {/* Form Actions */}
          <div className="pt-3 border-t border-slate-800 flex items-center justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 font-medium transition text-xs"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/30 flex items-center space-x-1.5 transition"
            >
              <CheckCircle2 className="h-4 w-4" />
              <span>Log Interaction & Update Stage</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
