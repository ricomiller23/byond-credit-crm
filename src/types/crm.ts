export type LenderTier = 'A' | 'B' | 'C';

export type OutreachStatus = 
  | 'Drafted'
  | 'Ready to Dispatch'
  | 'Queued'
  | 'Sent'
  | 'Under Review'
  | 'Follow-Up Scheduled'
  | 'Bounced / Address Invalid';

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
  contacts: LenderContact[];
  status: OutreachStatus;
  lastContactedAt?: string;
  notes?: string;
  customSubject?: string;
  customBody?: string;
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
