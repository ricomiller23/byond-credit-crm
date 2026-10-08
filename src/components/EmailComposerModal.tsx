import React, { useState } from 'react';
import { X, Send, Copy, Check, Paperclip, Video, Music, ExternalLink, ShieldCheck } from 'lucide-react';
import { LenderTarget } from '../types/crm';
import { DEAL_TERMS, MASTER_PITCH_EMAIL } from '../data/dealTerms';

interface EmailComposerModalProps {
  lender: LenderTarget | null;
  onClose: () => void;
  onLogSend: (lenderId: string, emailSubject: string, recipientEmail: string) => void;
}

export const EmailComposerModal: React.FC<EmailComposerModalProps> = ({
  lender,
  onClose,
  onLogSend
}) => {
  if (!lender) return null;

  const primaryContact = lender.contacts.find(c => c.isPrimary) || lender.contacts[0];
  const [selectedContactEmail, setSelectedContactEmail] = useState(primaryContact?.email || '');
  const [subject, setSubject] = useState(MASTER_PITCH_EMAIL.subject);
  
  const currentContact = lender.contacts.find(c => c.email === selectedContactEmail) || primaryContact;
  const initialBody = MASTER_PITCH_EMAIL.generateBody(
    currentContact?.name || "Lending Team",
    lender.firm,
    lender.pitchAngle
  );
  
  const [body, setBody] = useState(initialBody);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`Subject: ${subject}\n\n${body}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDispatch = () => {
    onLogSend(lender.id, subject, selectedContactEmail);
    onClose();
  };

  const handleOpenInMailClient = () => {
    const mailtoUrl = `mailto:${selectedContactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl, '_blank');
    onLogSend(lender.id, subject, selectedContactEmail);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="glass-panel w-full max-w-4xl rounded-2xl border border-slate-700 bg-slate-950 shadow-2xl max-h-[92vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 border-b border-slate-800 bg-slate-900/60 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400">
              <Send className="h-4 w-4" />
            </span>
            <div>
              <h2 className="text-base font-bold text-white">Outbound Credit Pitch Console</h2>
              <span className="text-xs text-slate-400">
                Target: <strong className="text-white">{lender.firm}</strong> ({lender.id} • Tier {lender.tier})
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Form Fields */}
        <div className="p-5 overflow-y-auto space-y-4 text-xs text-slate-300">
          {/* Sender & Recipient */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="text-slate-400 font-semibold uppercase text-[10px] tracking-wider block mb-1">
                Sender Identity
              </label>
              <div className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl font-mono text-slate-300 text-xs">
                Eric Miller &lt;ricomiller@icloud.com&gt;
              </div>
            </div>

            <div>
              <label className="text-slate-400 font-semibold uppercase text-[10px] tracking-wider block mb-1">
                Select Recipient Channel
              </label>
              <select
                value={selectedContactEmail}
                onChange={(e) => {
                  setSelectedContactEmail(e.target.value);
                  const newC = lender.contacts.find(c => c.email === e.target.value);
                  if (newC) {
                    setBody(MASTER_PITCH_EMAIL.generateBody(newC.name, lender.firm, lender.pitchAngle));
                  }
                }}
                className="w-full p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-white font-mono text-xs focus:outline-none focus:border-indigo-500"
              >
                {lender.contacts.map((c, i) => (
                  <option key={i} value={c.email}>
                    {c.name} ({c.title}) — {c.email}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Subject Line */}
          <div>
            <label className="text-slate-400 font-semibold uppercase text-[10px] tracking-wider block mb-1">
              Subject Line
            </label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-white font-mono text-xs focus:outline-none focus:border-indigo-500 font-medium"
            />
          </div>

          {/* Email Body */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-slate-400 font-semibold uppercase text-[10px] tracking-wider">
                Full Outbound Copy (With Collateral & Proof Plan Integration)
              </label>
              <button
                onClick={handleCopy}
                className="text-indigo-400 hover:text-indigo-300 text-[11px] font-medium flex items-center space-x-1"
              >
                {copied ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
                <span>{copied ? "Copied" : "Copy Copy"}</span>
              </button>
            </div>
            <textarea
              rows={12}
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="w-full p-3 bg-slate-900/90 border border-slate-800 rounded-xl font-mono text-xs text-slate-200 leading-relaxed focus:outline-none focus:border-indigo-500"
            />
          </div>

          {/* Integrated Assets & Attachments Bar */}
          <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800/80 space-y-3">
            <span className="text-slate-400 font-semibold uppercase text-[10px] tracking-wider block">
              Integrated Media & Transaction Enclosures
            </span>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {/* Samply link */}
              <a
                href={DEAL_TERMS.samplyUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-indigo-950/30 border border-indigo-500/30 hover:border-indigo-400 flex items-center justify-between transition-colors group"
              >
                <div className="flex items-center space-x-2">
                  <Music className="h-4 w-4 text-indigo-400" />
                  <div>
                    <div className="font-medium text-white group-hover:text-indigo-300">Samply Audio Deck</div>
                    <div className="text-[10px] text-slate-400">onli.ai audio presentation</div>
                  </div>
                </div>
                <ExternalLink className="h-3.5 w-3.5 text-slate-500 group-hover:text-white" />
              </a>

              {/* Video 1 */}
              <div className="p-2.5 rounded-lg bg-slate-800/40 border border-slate-700/60 flex items-center space-x-2">
                <Video className="h-4 w-4 text-amber-400" />
                <div>
                  <div className="font-medium text-white">FUCKYEAH.mov</div>
                  <div className="text-[10px] text-slate-400">95s Architecture Walkthrough</div>
                </div>
              </div>

              {/* Video 2 */}
              <div className="p-2.5 rounded-lg bg-slate-800/40 border border-slate-700/60 flex items-center space-x-2">
                <Video className="h-4 w-4 text-emerald-400" />
                <div>
                  <div className="font-medium text-white">IMG_0397.MP4</div>
                  <div className="text-[10px] text-slate-400">186s OnliYou Settlement Demo</div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-1 border-t border-slate-800/60 text-[11px] text-slate-400">
              <span className="flex items-center text-slate-300">
                <Paperclip className="h-3 w-3 mr-1 text-slate-500" />
                Attached:
              </span>
              <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                BYOND_OnliBitcoin_Patent_Teaser.docx
              </span>
              <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                BYOND_1Lender_Deal_Points_with_Objections.docx
              </span>
              <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                Teknos Valuation Opinion ($340M–$460M)
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/60 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            Cancel
          </button>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleOpenInMailClient}
              className="px-4 py-2 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs flex items-center space-x-1.5 transition-colors"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              <span>Open in Apple Mail</span>
            </button>

            <button
              onClick={handleDispatch}
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-xs flex items-center space-x-2 shadow-lg shadow-emerald-600/30 transition-all"
            >
              <Send className="h-3.5 w-3.5" />
              <span>Mark as Dispatched & Log CRM</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
