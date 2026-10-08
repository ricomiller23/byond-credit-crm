export type LenderTier = 'A' | 'B' | 'C';

export type OutreachStatus = 
  | 'Drafted'
  | 'Ready to Dispatch'
  | 'Queued'
  | 'Sent'
  | 'Under Review'
  | 'Follow-Up Scheduled'
  | 'Bounced / Address Invalid';

export type OrderFlowStage = 
  | 'outreach_sent'       // Outbound Dispatched (All 25 Targets)
  | 'in_dialogue'         // In Dialogue / Connected
  | 'call_scheduled'      // 20-Min Call Scheduled
  | 'diligence'           // Data Room / Collateral Diligence
  | 'term_sheet'          // Term Sheet Issued / Credit Committee
  | 'passed'              // Passed / Declined (e.g. Michael Balkin @ Horizon)
  | 'closed';             // Committed / Closed ($30M Funded)

export interface CrmInteraction {
  id: string;
  date: string;
  type: 'call' | 'email' | 'meeting' | 'note' | 'response';
  contactName: string;
  outcome: string;
  notes: string;
  nextFollowUpDate?: string;
}

export interface LenderContact {
  name: string;
  title: string;
  email: string;
  secondaryEmail?: string;
  phone?: string;
  linkedin?: string;
  isPrimary: boolean;
}

export interface LenderTarget {
  id: string; // e.g. A1, B6, C16
  tier: LenderTier;
  firm: string;
  location: string;
  checkSize: string;
  whyTheyFit: string;
  howToWorkThem: string;
  pitchAngle: string;
  precedentDeal?: string;
  precedentFitAnalysis?: string;
  contacts: LenderContact[];
  status: OutreachStatus;
  orderFlowStage: OrderFlowStage;
  interactions: CrmInteraction[];
  priority?: 'critical' | 'high' | 'medium' | 'low';
  lastContactedAt?: string;
  notes?: string;
  customSubject?: string;
  customBody?: string;
  deliveryState?: 'Delivered' | 'Bounced' | 'Re-Routed & Delivered';
  originalBouncedEmail?: string;
  bounceError?: string;
}

export interface ActivityLogItem {
  id: string;
  lenderId: string;
  firm: string;
  action: string;
  timestamp: string;
  details: string;
  status: 'info' | 'success' | 'warning' | 'error';
}
