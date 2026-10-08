import { spawnSync } from 'child_process';
import fs from 'fs';
import { MASTER_PITCH_EMAIL } from '../src/data/dealTerms';

interface ReplacementTarget {
  id: string;
  firm: string;
  name: string;
  email: string;
  title: string;
  pitchAngle: string;
  precedentDeal?: string;
  precedentFitAnalysis?: string;
}

const replacements: ReplacementTarget[] = [
  {
    id: "A2",
    firm: "Aon IP Solutions / Intellectual Property Finance",
    name: "Aon IP Solutions Team",
    email: "intellectualproperty@aon.com",
    title: "Institutional IP Capital & Advisory Desk",
    pitchAngle: "Specializes in patent valuation and IP-backed credit",
    precedentDeal: "$1B+ IP-backed debt program (Position Imaging $110M, Anonos $50M, Leia $50M)",
    precedentFitAnalysis: "Matches Aon's insured IP collateral model with $340M–$460M independent appraisal and 6.5%–8.8% LTV."
  },
  {
    id: "B8",
    firm: "Horizon Technology Finance",
    name: "Horizon Tech Finance Deal Desk",
    email: "info@horizontechfinance.com",
    title: "Senior Tech Lending & Originations",
    pitchAngle: "Direct venture lending for IP-rich and technology assets",
    precedentDeal: "$5M–$50M venture debt facilities for technology companies",
    precedentFitAnalysis: "Provides 1st lien senior debt with 18-month IO and $3.6M pre-funded interest reserve."
  },
  {
    id: "B12",
    firm: "Oxford Finance",
    name: "Austin Szafranski",
    email: "aszafranski@oxfordfinance.com",
    title: "Executive Director, Technology Originations",
    pitchAngle: "Senior debt with recurring revenue and asset backing",
    precedentDeal: "$10M–$75M enterprise technology and asset-backed credit facilities",
    precedentFitAnalysis: "Senior debt accounts for only 10% of $300M total capital with 2.8x stressed liquidation coverage."
  },
  {
    id: "B14",
    firm: "Comerica Bank (Technology & Life Sciences)",
    name: "Grant Simon",
    email: "gsimon@comerica.com",
    title: "SVP, Group Manager, Technology & Life Sciences",
    pitchAngle: "Senior bank lines and growth credit for proprietary tech estates",
    precedentDeal: "$5M–$40M technology and IP asset lines",
    precedentFitAnalysis: "1st lien security interest with $280M subordinated seller paper and full interest reserve."
  },
  {
    id: "B15",
    firm: "CIBC Innovation Banking",
    name: "Paul McKinlay",
    email: "paul.mckinlay@cibc.com",
    title: "Executive Managing Director",
    pitchAngle: "Cross-border tech debt and collateralized credit facilities",
    precedentDeal: "$10M–$50M innovation debt facilities",
    precedentFitAnalysis: "48-month tenor, 18-month IO, and 6.5%–8.8% appraised LTV."
  },
  {
    id: "C22",
    firm: "Montage Partners",
    name: "Rob Wolfman",
    email: "rwolfman@montagepartners.com",
    title: "Managing Partner",
    pitchAngle: "Scottsdale-based private equity and structured debt",
    precedentDeal: "Scottsdale/Phoenix growth capital and asset acquisitions ($10M–$40M)",
    precedentFitAnalysis: "Local Arizona borrower/sponsor alignment with $30M senior facility against $340M+ asset."
  }
];

const teaserPath = '/Users/ericmiller/Downloads/BYOND_OnliBitcoin_Patent_Teaser.docx';
const objectionsPath = '/Users/ericmiller/Downloads/BYOND_1Lender_Deal_Points_with_Objections.docx';

function sendViaAppleMail(toEmail: string, subject: string, bodyContent: string) {
  const attachmentStatements = [teaserPath, objectionsPath]
    .filter(filePath => fs.existsSync(filePath))
    .map(filePath => `make new attachment with properties {file name:(POSIX file "${filePath}")} at after the last paragraph`)
    .join('\n    ');

  const appleScript = `
tell application "Mail"
  set newMessage to make new outgoing message with properties {subject:${JSON.stringify(subject)}, content:${JSON.stringify(bodyContent)}, visible:false}
  tell newMessage
    set sender to "Eric Miller <ricomiller@icloud.com>"
    make new to recipient at end of to recipients with properties {address:${JSON.stringify(toEmail)}}
    ${attachmentStatements}
  end tell
  send newMessage
end tell
`;

  const res = spawnSync('osascript', ['-'], { input: appleScript, encoding: 'utf8' });
  return res.status === 0;
}

function sleep(ms: number) {
  const end = Date.now() + ms;
  while (Date.now() < end) {}
}

console.log(`Starting replacement outreach to 6 verified decision makers...`);

for (let i = 0; i < replacements.length; i++) {
  const r = replacements[i];
  const subject = MASTER_PITCH_EMAIL.subject;
  const body = MASTER_PITCH_EMAIL.generateBody(
    r.name,
    r.firm,
    r.pitchAngle,
    r.precedentDeal,
    r.precedentFitAnalysis
  );

  process.stdout.write(`[${i + 1}/${replacements.length}] Dispatching to ${r.name} (${r.firm}) <${r.email}>... `);
  const ok = sendViaAppleMail(r.email, subject, body);
  if (ok) {
    console.log(`✓ SENT`);
  } else {
    console.log(`✗ FAILED`);
  }
  sleep(1800);
}

console.log(`Replacement dispatch completed successfully!`);
