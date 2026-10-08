import { spawnSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { INITIAL_LENDERS } from '../src/data/lenders';
import { MASTER_PITCH_EMAIL } from '../src/data/dealTerms';

interface DispatchResult {
  id: string;
  firm: string;
  recipientName: string;
  title: string;
  email: string;
  subject: string;
  status: 'SENT' | 'FAILED';
  error?: string;
  timestamp: string;
}

const teaserPath = '/Users/ericmiller/Downloads/BYOND_OnliBitcoin_Patent_Teaser.docx';
const objectionsPath = '/Users/ericmiller/Downloads/BYOND_1Lender_Deal_Points_with_Objections.docx';

function sendViaAppleMail(
  toEmail: string,
  subject: string,
  bodyContent: string,
  attachments: string[]
): { success: boolean; error?: string } {
  const attachmentStatements = attachments
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
  if (res.error || res.status !== 0) {
    return { success: false, error: res.stderr || res.error?.message };
  }
  return { success: true };
}

function sleep(ms: number) {
  const end = Date.now() + ms;
  while (Date.now() < end) {}
}

async function runDispatch() {
  console.log(`======================================================================`);
  console.log(`BYOND HOLDINGS LLC — $30M SENIOR FACILITY CREDIT SYNDICATION DISPATCH`);
  console.log(`======================================================================`);
  console.log(`Sender: Eric Miller <ricomiller@icloud.com>`);
  console.log(`Total Targets: ${INITIAL_LENDERS.length}`);
  console.log(`Teaser Attachment: ${teaserPath} (${fs.existsSync(teaserPath) ? 'EXISTS' : 'MISSING'})`);
  console.log(`Defense Memo Attachment: ${objectionsPath} (${fs.existsSync(objectionsPath) ? 'EXISTS' : 'MISSING'})`);
  console.log(`Starting dispatch sequence...\n`);

  const results: DispatchResult[] = [];
  let sentCount = 0;
  let failedCount = 0;

  for (let i = 0; i < INITIAL_LENDERS.length; i++) {
    const lender = INITIAL_LENDERS[i];
    const primaryContact = lender.contacts.find(c => c.isPrimary) || lender.contacts[0];

    const subject = MASTER_PITCH_EMAIL.subject;
    const body = MASTER_PITCH_EMAIL.generateBody(
      primaryContact.name,
      lender.firm,
      lender.pitchAngle,
      lender.precedentDeal,
      lender.precedentFitAnalysis
    );

    process.stdout.write(`[${i + 1}/${INITIAL_LENDERS.length}] Dispatching to ${primaryContact.name} (${lender.firm}) <${primaryContact.email}>... `);

    const res = sendViaAppleMail(
      primaryContact.email,
      subject,
      body,
      [teaserPath, objectionsPath]
    );

    const now = new Date().toISOString();

    if (res.success) {
      console.log(`✓ SENT`);
      sentCount++;
      results.push({
        id: lender.id,
        firm: lender.firm,
        recipientName: primaryContact.name,
        title: primaryContact.title,
        email: primaryContact.email,
        subject,
        status: 'SENT',
        timestamp: now
      });
    } else {
      console.log(`✗ FAILED: ${res.error}`);
      failedCount++;
      results.push({
        id: lender.id,
        firm: lender.firm,
        recipientName: primaryContact.name,
        title: primaryContact.title,
        email: primaryContact.email,
        subject,
        status: 'FAILED',
        error: res.error,
        timestamp: now
      });
    }

    if (i < INITIAL_LENDERS.length - 1) {
      sleep(1800); // 1.8 second delay between sends for graceful Apple Mail queuing
    }
  }

  console.log(`\n======================================================================`);
  console.log(`DISPATCH COMPLETE: ${sentCount} SENT, ${failedCount} FAILED out of ${INITIAL_LENDERS.length} targets`);
  console.log(`======================================================================\n`);

  // Write Executive Dispatch Report to ~/Downloads
  const reportPath = '/Users/ericmiller/Downloads/BYOND_Outbound_Syndication_Dispatch_Report_2026-10-08.md';
  let md = `# BYOND Holdings, LLC — Outbound Credit Syndication Dispatch Report

**Date:** Thursday, October 8, 2026  
**Sender:** Eric Miller \`<ricomiller@icloud.com>\`  
**Channel:** Apple Mail (Mail.app) Native Subsystem  
**Total Recipients:** ${results.length}  
**Successful Transmissions:** ${sentCount}  
**Failed Transmissions:** ${failedCount}  
**Enclosed Collateral:**
- Executive Teaser: \`BYOND_OnliBitcoin_Patent_Teaser.docx\`
- Defense & Objections Memo: \`BYOND_1Lender_Deal_Points_with_Objections.docx\`
- Video Presentations: \`Presentation 1.mov\` & \`Presentation 2.mp4\`
- Interactive Audio Presentation: \`https://samply.app/p/WtNAIwo9p8A4TsMWzgJU?si=LEhOhNSucnVZgRkbcDUel9cx8Oi2\`
- Live Syndication Terminal: [https://byond-credit-crm.vercel.app](https://byond-credit-crm.vercel.app)

---

## Individual Recipient Dispatch Telemetry

| # | ID | Target Institution | Contact Name | Title | Target Email | Status | Timestamp |
| :-: | :-: | :--- | :--- | :--- | :--- | :---: | :--- |
`;

  results.forEach((r, idx) => {
    const statusBadge = r.status === 'SENT' ? '🟢 **SENT**' : '🔴 **FAILED**';
    md += `| ${idx + 1} | \`${r.id}\` | **${r.firm}** | ${r.recipientName} | ${r.title} | \`${r.email}\` | ${statusBadge} | \`${r.timestamp.split('T')[1].replace('Z','')}\` |\n`;
  });

  md += `\n---\n*Report generated autonomously by Antigravity Credit Terminal Desk on October 8, 2026.*\n`;

  fs.writeFileSync(reportPath, md, 'utf8');
  console.log(`✓ Executive dispatch report exported to: ${reportPath}`);

  // Write JSON state to scratch for CRM update
  fs.writeFileSync('/tmp/byond_dispatch_results.json', JSON.stringify(results, null, 2), 'utf8');
}

runDispatch();
