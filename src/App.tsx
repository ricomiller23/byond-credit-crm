import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { MetricCards } from './components/MetricCards';
import { LenderTable } from './components/LenderTable';
import { LenderDetailModal } from './components/LenderDetailModal';
import { EmailComposerModal } from './components/EmailComposerModal';
import { ObjectionVault } from './components/ObjectionVault';
import { CollateralVault } from './components/CollateralVault';
import { BounceAuditor } from './components/BounceAuditor';
import { MasterEmailDraftView } from './components/MasterEmailDraftView';
import { PrecedentDealMatrix } from './components/PrecedentDealMatrix';
import { INITIAL_LENDERS } from './data/lenders';
import { DEAL_TERMS } from './data/dealTerms';
import { LenderTarget, OutreachStatus, ActivityLogItem } from './types/crm';
import { ShieldCheck } from 'lucide-react';

export const App: React.FC = () => {
  const [lenders, setLenders] = useState<LenderTarget[]>(() => {
    const saved = localStorage.getItem('byond_lenders_v1');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return INITIAL_LENDERS;
  });

  const [activeTab, setActiveTab] = useState<string>('master-email'); // default to master-email draft per user request
  const [selectedLender, setSelectedLender] = useState<LenderTarget | null>(null);
  const [composerLender, setComposerLender] = useState<LenderTarget | null>(null);
  const [activityLogs, setActivityLogs] = useState<ActivityLogItem[]>([]);

  useEffect(() => {
    localStorage.setItem('byond_lenders_v1', JSON.stringify(lenders));
  }, [lenders]);

  const handleUpdateStatus = (lenderId: string, newStatus: OutreachStatus) => {
    setLenders(prev => prev.map(l => {
      if (l.id === lenderId) {
        return {
          ...l,
          status: newStatus,
          lastContactedAt: newStatus === 'Sent' ? new Date().toISOString() : l.lastContactedAt
        };
      }
      return l;
    }));

    const firm = lenders.find(l => l.id === lenderId)?.firm || lenderId;
    addActivityLog(lenderId, firm, `Status updated to ${newStatus}`, `Updated status in pipeline CRM`, 'info');
  };

  const handleSaveNotes = (lenderId: string, notes: string) => {
    setLenders(prev => prev.map(l => {
      if (l.id === lenderId) {
        return { ...l, notes };
      }
      return l;
    }));
    const firm = lenders.find(l => l.id === lenderId)?.firm || lenderId;
    addActivityLog(lenderId, firm, `Deal notes saved`, notes.substring(0, 40) + '...', 'info');
  };

  const handleLogSend = (lenderId: string, emailSubject: string, recipientEmail: string) => {
    handleUpdateStatus(lenderId, 'Sent');
    const firm = lenders.find(l => l.id === lenderId)?.firm || lenderId;
    addActivityLog(
      lenderId,
      firm,
      `Outreach Dispatched to ${recipientEmail}`,
      `Subject: ${emailSubject}`,
      'success'
    );
  };

  const handleMarkBounced = (lenderId: string, email: string) => {
    handleUpdateStatus(lenderId, 'Bounced / Address Invalid');
    const firm = lenders.find(l => l.id === lenderId)?.firm || lenderId;
    addActivityLog(
      lenderId,
      firm,
      `Address Flagged as Bounced (${email})`,
      `Requires replacement contact discovery`,
      'error'
    );
  };

  const handleAddContact = (
    lenderId: string, 
    contact: { name: string; title: string; email: string; isPrimary: boolean }
  ) => {
    setLenders(prev => prev.map(l => {
      if (l.id === lenderId) {
        const updatedContacts = l.contacts.map(c => ({ ...c, isPrimary: false }));
        return {
          ...l,
          contacts: [contact, ...updatedContacts],
          status: 'Ready to Dispatch'
        };
      }
      return l;
    }));

    const firm = lenders.find(l => l.id === lenderId)?.firm || lenderId;
    addActivityLog(
      lenderId,
      firm,
      `Added New Contact: ${contact.name}`,
      `Email: ${contact.email} (${contact.title})`,
      'success'
    );
  };

  const addActivityLog = (
    lenderId: string,
    firm: string,
    action: string,
    details: string,
    status: 'info' | 'success' | 'warning' | 'error'
  ) => {
    const newItem: ActivityLogItem = {
      id: Math.random().toString(36).substring(2, 9),
      lenderId,
      firm,
      action,
      details,
      status,
      timestamp: new Date().toLocaleTimeString()
    };
    setActivityLogs(prev => [newItem, ...prev.slice(0, 30)]);
  };

  const sentCount = lenders.filter(l => l.status === 'Sent').length;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        sentCount={sentCount}
        totalCount={lenders.length}
        onRefresh={() => {
          setLenders([...INITIAL_LENDERS]);
          localStorage.removeItem('byond_lenders_v1');
        }}
      />

      {/* Main Body */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Deal Sizing & Key Covenants Cards */}
        <MetricCards />

        {/* Dynamic Tab Views */}
        {activeTab === 'master-email' && (
          <MasterEmailDraftView
            lenders={lenders}
            onOpenComposerForTarget={(target) => setComposerLender(target)}
          />
        )}

        {activeTab === 'precedent-deals' && (
          <PrecedentDealMatrix
            lenders={lenders}
            onOpenComposer={(target) => setComposerLender(target)}
          />
        )}

        {activeTab === 'pipeline' && (
          <LenderTable
            lenders={lenders}
            onSelectLender={(target) => setSelectedLender(target)}
            onOpenComposer={(target) => setComposerLender(target)}
            onUpdateStatus={handleUpdateStatus}
          />
        )}

        {activeTab === 'collateral' && (
          <CollateralVault />
        )}

        {activeTab === 'objections' && (
          <ObjectionVault />
        )}

        {activeTab === 'auditor' && (
          <BounceAuditor
            lenders={lenders}
            onMarkBounced={handleMarkBounced}
            onAddContact={handleAddContact}
          />
        )}
      </main>

      {/* Modals */}
      {selectedLender && (
        <LenderDetailModal
          lender={selectedLender}
          onClose={() => setSelectedLender(null)}
          onOpenComposer={(target) => setComposerLender(target)}
          onUpdateStatus={handleUpdateStatus}
          onSaveNotes={handleSaveNotes}
        />
      )}

      {composerLender && (
        <EmailComposerModal
          lender={composerLender}
          onClose={() => setComposerLender(null)}
          onLogSend={handleLogSend}
        />
      )}

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-900 bg-slate-950/80 py-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="h-4 w-4 text-emerald-500" />
            <span>BYOND Holdings, LLC • Senior Secured Acquisition Facility Desk</span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="font-mono text-slate-400">Data Room: {DEAL_TERMS.dataRoomUrl}</span>
            <span>•</span>
            <span className="text-slate-400">Target Close: {DEAL_TERMS.targetClose}</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
