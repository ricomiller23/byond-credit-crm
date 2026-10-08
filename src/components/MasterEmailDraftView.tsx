import React, { useState } from 'react';
import { Copy, Check, Send, Paperclip, Music, Video, ExternalLink, ShieldCheck, FileText } from 'lucide-react';
import { DEAL_TERMS, MASTER_PITCH_EMAIL } from '../data/dealTerms';
import { LenderTarget } from '../types/crm';

interface MasterEmailDraftViewProps {
  lenders: LenderTarget[];
  onOpenComposerForTarget: (lender: LenderTarget) => void;
}

export const MasterEmailDraftView: React.FC<MasterEmailDraftViewProps> = ({
  lenders,
  onOpenComposerForTarget
}) => {
  const [selectedTargetId, setSelectedTargetId] = useState<string>("A1");
  const [copied, setCopied] = useState(false);

  const targetLender = lenders.find(l => l.id === selectedTargetId) || lenders[0];
  const primaryContact = targetLender.contacts.find(c => c.isPrimary) || targetLender.contacts[0];

  const fullEmailBody = MASTER_PITCH_EMAIL.generateBody(
    primaryContact.name,
    targetLender.firm,
    targetLender.pitchAngle
  );

  const handleCopyFull = () => {
    navigator.clipboard.writeText(`Subject: ${MASTER_PITCH_EMAIL.subject}\n\n${fullEmailBody}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="glass-panel p-6 rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-950/20 via-slate-900/60 to-slate-950 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold mb-2">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Institutional Syndication Pitch Draft</span>
            </div>
            <h2 className="text-xl font-extrabold text-white">
              Master Outbound Deal Memo & Executive Teaser
            </h2>
            <p className="text-xs text-slate-300 mt-1 max-w-2xl leading-relaxed">
              Synthesized from <code className="text-amber-300 font-mono">BYOND_1Lender_Deal_Points.docx</code>, the <code className="text-amber-300 font-mono">BYOND_OnliBitcoin_Patent.docx</code>, and the Teknos Valuation Opinion. Includes direct video walk-through enclosures and the interactive Samply audio player.
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleCopyFull}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs flex items-center space-x-2 transition-all shadow-sm"
            >
              {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
              <span>{copied ? "Copied Full Draft" : "Copy Complete Email"}</span>
            </button>

            <button
              onClick={() => onOpenComposerForTarget(targetLender)}
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white font-bold text-xs flex items-center space-x-2 shadow-lg shadow-amber-600/30 transition-all"
            >
              <Send className="h-4 w-4" />
              <span>Open in Dispatch Console</span>
            </button>
          </div>
        </div>
      </div>

      {/* Target Selector Dropdown */}
      <div className="flex items-center justify-between bg-slate-900/40 p-3 rounded-xl border border-slate-800 text-xs">
        <div className="flex items-center space-x-2">
          <span className="text-slate-400 font-semibold uppercase text-[10px] tracking-wider">
            Preview Personalization For:
          </span>
          <select
            value={selectedTargetId}
            onChange={(e) => setSelectedTargetId(e.target.value)}
            className="px-3 py-1.5 bg-slate-950 border border-slate-700 rounded-lg text-white font-medium focus:outline-none focus:border-amber-500"
          >
            {lenders.map(l => (
              <option key={l.id} value={l.id}>
                {l.id}: {l.firm} ({l.contacts[0]?.name})
              </option>
            ))}
          </select>
        </div>

        <div className="text-slate-400 text-[11px] hidden sm:block">
          Recipient: <strong className="text-white font-mono">{primaryContact.email}</strong>
        </div>
      </div>

      {/* Email Container (Styled like a modern executive message) */}
      <div className="glass-panel rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden shadow-2xl">
        {/* Email Header Bar */}
        <div className="p-4 border-b border-slate-800/80 bg-slate-900/70 space-y-2 text-xs">
          <div className="flex items-center">
            <span className="w-16 font-semibold text-slate-500 uppercase text-[10px]">From:</span>
            <span className="font-mono text-slate-200">Eric Miller &lt;ricomiller@icloud.com&gt;</span>
          </div>
          <div className="flex items-center">
            <span className="w-16 font-semibold text-slate-500 uppercase text-[10px]">To:</span>
            <span className="font-mono text-indigo-300 font-medium">
              {primaryContact.name} &lt;{primaryContact.email}&gt;
            </span>
            <span className="ml-2 text-slate-500 text-[11px]">({primaryContact.title}, {targetLender.firm})</span>
          </div>
          <div className="flex items-center">
            <span className="w-16 font-semibold text-slate-500 uppercase text-[10px]">Subject:</span>
            <span className="font-mono text-amber-300 font-semibold">{MASTER_PITCH_EMAIL.subject}</span>
          </div>
        </div>

        {/* Email Body */}
        <div className="p-6 md:p-8 font-mono text-xs leading-relaxed text-slate-200 whitespace-pre-wrap selection:bg-amber-500 selection:text-black">
          {fullEmailBody}
        </div>

        {/* Enclosures & Verified Assets Drawer */}
        <div className="p-5 border-t border-slate-800 bg-slate-900/60">
          <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center">
            <Paperclip className="h-3.5 w-3.5 mr-1.5 text-slate-400" />
            Verified Email Enclosures & Integrated Multimedia
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Samply link */}
            <a
              href={DEAL_TERMS.samplyUrl}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center space-x-2.5">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                  <Music className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-bold text-white group-hover:text-indigo-300 text-xs">
                    Samply Audio / Deck
                  </div>
                  <div className="text-[10px] text-slate-400">onli.ai audio presentation</div>
                </div>
              </div>
              <ExternalLink className="h-3.5 w-3.5 text-slate-500 group-hover:text-white" />
            </a>

            {/* Video 1 */}
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center space-x-2.5">
              <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                <Video className="h-4 w-4" />
              </div>
              <div>
                <div className="font-bold text-white text-xs">Presentation 1 (Attached & Streamable)</div>
                <div className="text-[10px] text-slate-400">95s Architecture Walkthrough</div>
              </div>
            </div>

            {/* Video 2 */}
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center space-x-2.5">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                <Video className="h-4 w-4" />
              </div>
              <div>
                <div className="font-bold text-white text-xs">Presentation 2 (Attached & Streamable)</div>
                <div className="text-[10px] text-slate-400">186s OnliYou Tangible Settlement Demo</div>
              </div>
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-slate-800/80 flex flex-wrap gap-2 text-[11px] text-slate-400">
            <span className="font-semibold text-slate-300">Transaction Files Attached:</span>
            {DEAL_TERMS.documentsAttached.map((doc, idx) => (
              <span key={idx} className="px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60 flex items-center space-x-1">
                <FileText className="h-3 w-3 text-slate-500" />
                <span>{doc.filename}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
