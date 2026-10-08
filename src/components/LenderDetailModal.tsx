import React, { useState } from 'react';
import { X, Mail, Phone, ExternalLink, ShieldCheck, MapPin, DollarSign, Send, Check } from 'lucide-react';
import { LenderTarget, OutreachStatus } from '../types/crm';
import { DEAL_TERMS } from '../data/dealTerms';

interface LenderDetailModalProps {
  lender: LenderTarget | null;
  onClose: () => void;
  onOpenComposer: (lender: LenderTarget) => void;
  onUpdateStatus: (lenderId: string, newStatus: OutreachStatus) => void;
  onSaveNotes: (lenderId: string, notes: string) => void;
}

export const LenderDetailModal: React.FC<LenderDetailModalProps> = ({
  lender,
  onClose,
  onOpenComposer,
  onUpdateStatus,
  onSaveNotes
}) => {
  if (!lender) return null;

  const [notes, setNotes] = useState(lender.notes || '');
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div 
        className="glass-panel w-full max-w-3xl rounded-2xl border border-slate-700 bg-slate-950 shadow-2xl max-h-[90vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-900/50">
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                Target {lender.id}
              </span>
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                Tier {lender.tier}
              </span>
              <span className="text-xs text-slate-400 flex items-center">
                <MapPin className="h-3 w-3 mr-1 text-slate-500" />
                {lender.location}
              </span>
            </div>
            <h2 className="text-xl font-bold text-white mt-1">{lender.firm}</h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs text-slate-300">
          {/* Key Deal Fit & Sizing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
              <span className="text-slate-400 font-semibold uppercase text-[10px] tracking-wider block mb-1">
                Typical Check Size
              </span>
              <div className="text-lg font-mono font-bold text-emerald-400 flex items-center">
                <DollarSign className="h-4 w-4 mr-1 text-emerald-500" />
                {lender.checkSize}
              </div>
              <p className="text-slate-400 mt-2 text-[11px] leading-relaxed">
                Matches the {DEAL_TERMS.facilityAmount} senior debt tranche.
              </p>
            </div>

            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800">
              <span className="text-slate-400 font-semibold uppercase text-[10px] tracking-wider block mb-1">
                Outreach Status
              </span>
              <select
                value={lender.status}
                onChange={(e) => onUpdateStatus(lender.id, e.target.value as OutreachStatus)}
                className="w-full mt-1 px-3 py-1.5 bg-slate-950 border border-slate-700 rounded-lg text-xs font-semibold text-white focus:outline-none focus:border-indigo-500"
              >
                <option value="Ready to Dispatch">Ready to Dispatch</option>
                <option value="Queued">Queued</option>
                <option value="Sent">Sent</option>
                <option value="Under Review">Under Review</option>
                <option value="Follow-Up Scheduled">Follow-Up Scheduled</option>
                <option value="Bounced / Address Invalid">Bounced / Address Invalid</option>
              </select>
            </div>
          </div>

          {/* Underwriting Thesis & Pitch Rationale */}
          <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-800/80 space-y-3">
            <div>
              <span className="text-indigo-400 font-bold uppercase text-[10px] tracking-wider block mb-1">
                Why They Fit
              </span>
              <p className="text-slate-200 leading-relaxed text-xs">
                {lender.whyTheyFit}
              </p>
            </div>

            <div>
              <span className="text-amber-400 font-bold uppercase text-[10px] tracking-wider block mb-1">
                How to Work Them
              </span>
              <p className="text-slate-300 leading-relaxed text-xs">
                {lender.howToWorkThem}
              </p>
            </div>

            <div>
              <span className="text-emerald-400 font-bold uppercase text-[10px] tracking-wider block mb-1">
                Custom Angle in Pitch
              </span>
              <p className="text-slate-300 leading-relaxed text-xs italic">
                "{lender.pitchAngle}"
              </p>
            </div>
          </div>

          {/* Researched Decision Makers */}
          <div>
            <h3 className="text-sm font-bold text-white mb-3 flex items-center">
              <ShieldCheck className="h-4 w-4 mr-1.5 text-indigo-400" />
              Verified Key Decision Makers ({lender.contacts.length})
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {lender.contacts.map((contact, idx) => (
                <div 
                  key={idx}
                  className={`p-3.5 rounded-xl border transition-all ${
                    contact.isPrimary 
                      ? 'bg-indigo-950/20 border-indigo-500/30' 
                      : 'bg-slate-900/40 border-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-white text-xs">{contact.name}</span>
                    {contact.isPrimary && (
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300">
                        Primary
                      </span>
                    )}
                  </div>
                  <div className="text-slate-400 text-[11px] mb-2">{contact.title}</div>
                  
                  <div className="space-y-1 font-mono text-[11px]">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">{contact.email}</span>
                      <button
                        onClick={() => handleCopy(contact.email)}
                        className="text-slate-500 hover:text-white p-1"
                        title="Copy"
                      >
                        {copied === contact.email ? <Check className="h-3 w-3 text-emerald-400" /> : <Mail className="h-3 w-3" />}
                      </button>
                    </div>

                    {contact.secondaryEmail && (
                      <div className="flex items-center justify-between text-slate-500">
                        <span>Sec: {contact.secondaryEmail}</span>
                        <button
                          onClick={() => handleCopy(contact.secondaryEmail!)}
                          className="hover:text-white p-1"
                          title="Copy"
                        >
                          {copied === contact.secondaryEmail ? <Check className="h-3 w-3 text-emerald-400" /> : <Mail className="h-3 w-3" />}
                        </button>
                      </div>
                    )}

                    {contact.phone && (
                      <div className="text-slate-500 flex items-center">
                        <Phone className="h-3 w-3 mr-1" />
                        {contact.phone}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Deal Notes */}
          <div>
            <label className="text-slate-400 font-semibold uppercase text-[10px] tracking-wider block mb-1.5">
              Internal Deal Notes & Activity Log
            </label>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add internal deal notes, credit committee feedback, or call dates..."
              className="w-full p-3 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500"
            />
            <div className="flex justify-end mt-2">
              <button
                onClick={() => onSaveNotes(lender.id, notes)}
                className="px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-medium transition-colors"
              >
                Save Notes
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/60 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            Close
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenComposer(lender);
            }}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-bold text-xs flex items-center space-x-2 shadow-lg shadow-indigo-600/30 transition-all"
          >
            <Send className="h-3.5 w-3.5" />
            <span>Open Email Dispatcher</span>
          </button>
        </div>
      </div>
    </div>
  );
};
