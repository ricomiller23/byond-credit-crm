import { spawnSync } from 'child_process';
import fs from 'fs';
import { MASTER_PITCH_EMAIL } from '../src/data/dealTerms';

interface SecondaryContact {
  lenderId: string;
  firm: string;
  name: string;
  title: string;
  email: string;
  customAngle: string;
  precedentDeal?: string;
  precedentFitAnalysis?: string;
}

const secondaryContacts: SecondaryContact[] = [
  // --- Dedicated Secondary Decision Makers ---
  {
    lenderId: "A1",
    firm: "Fortress Investment Group (IP Finance)",
    name: "James O'Brien",
    title: "Managing Director, IP Finance & Credit",
    email: "jobrien@fortress.com",
    customAngle: "Fortress's dedicated IP finance and patent-backed credit underwriting",
    precedentDeal: "$100M IP convertible term loan to Imagination Technologies and Aymium patent facility",
    precedentFitAnalysis: "Matches Fortress's liquidation recovery mandate with 6.5%–8.8% LTV and $85M stressed recovery floor (2.8x coverage)."
  },
  {
    lenderId: "B7",
    firm: "Trinity Capital (Nasdaq: TRIN)",
    name: "Ron Kundich",
    title: "Chief Credit Officer / SVP Tech Lending",
    email: "rkundich@trincapinvestment.com",
    customAngle: "Trinity's Phoenix HQ presence and direct credit committee oversight",
    precedentDeal: "$30M senior secured credit facility for Core Scientific digital asset infrastructure",
    precedentFitAnalysis: "Provides 1st lien security over granted patent estate with $280M seller subordination and 18-month IO."
  },
  {
    lenderId: "B10",
    firm: "TriplePoint Venture Growth (NYSE: TPVG)",
    name: "Sajal Srivastava",
    title: "President & Chief Investment Officer",
    email: "ssrivastava@triplepointcapital.com",
    customAngle: "TriplePoint's senior secured venture debt and IP pledge requirements",
    precedentDeal: "$5M–$50M senior growth loans with 36–60 month maturity and front IO",
    precedentFitAnalysis: "Direct alignment on 48-month tenor, 18-month IO, and pre-funded 12-month interest escrow."
  },
  {
    lenderId: "B6",
    firm: "Hercules Capital (NYSE: HTGC)",
    name: "Seth Meyer",
    title: "Chief Financial Officer & Senior Managing Director",
    email: "smeyer@htgc.com",
    customAngle: "Hercules's senior debt underwriting and credit committee standards",
    precedentDeal: "$25M–$50M software and intellectual-property-heavy growth term loans",
    precedentFitAnalysis: "Delivers senior secured priority over 4 granted patents with $3.6M interest reserve and 18-month IO."
  },
  {
    lenderId: "C22",
    firm: "Montage Partners",
    name: "Kelly McGowan",
    title: "Manager, Deal Origination",
    email: "kmcgowan@montagepartners.com",
    customAngle: "Montage Partners' Scottsdale headquarters and Southwest origination network",
    precedentDeal: "Regional middle-market growth financings and technology-enabled investments",
    precedentFitAnalysis: "Local Arizona execution advantage with deep structural downside protection."
  },
  {
    lenderId: "B12",
    firm: "Oxford Finance",
    name: "Kevin Harbour",
    title: "Senior Managing Director",
    email: "kharbour@oxfordfinance.com",
    customAngle: "Oxford's senior term lending and asset-heavy credit structures",
    precedentDeal: "$10M–$75M+ senior secured facilities alongside bank and private credit partners",
    precedentFitAnalysis: "6.5%–8.8% LTV against independently appraised collateral satisfies senior credit thresholds."
  },
  {
    lenderId: "C25",
    firm: "Vistara Growth",
    name: "Noah Shipman",
    title: "Partner",
    email: "noah@vistaragrowth.com",
    customAngle: "Vistara's flexible growth debt and structured term facilities",
    precedentDeal: "$10M–$30M tailored tech growth loans across North America",
    precedentFitAnalysis: "Term sheet structure matches Vistara's focus on high-margin IP platforms with junior paper cushion."
  },
  {
    lenderId: "B11",
    firm: "Runway Growth Capital (Nasdaq: RWAY)",
    name: "Greg Greifeld",
    title: "Managing Director & Deputy CIO",
    email: "ggreifeld@runwaygrowth.com",
    customAngle: "Runway's senior secured growth loan underwriting and credit risk mitigation",
    precedentDeal: "$10M–$75M senior secured term facilities for tech leaders",
    precedentFitAnalysis: "Fully addressed liquidity ramp via $3.6M pre-funded interest reserve and 18-month IO."
  },
  {
    lenderId: "B14",
    firm: "Western Alliance Bank (Innovation Banking)",
    name: "Jeff Brown",
    title: "Managing Director, Innovation Banking",
    email: "jbrown@westernalliancebank.com",
    customAngle: "Western Alliance's Phoenix headquarters and rapid expansion in commercial innovation credit",
    precedentDeal: "Western Alliance Bank innovation debt and tech commercial credit facilities ($10M–$50M)",
    precedentFitAnalysis: "Phoenix proximity, conservative 6.5%–8.8% LTV, and $3.6M cash interest escrow at closing."
  },
  {
    lenderId: "B9",
    firm: "WTI (Western Technology Investment)",
    name: "David Wanek",
    title: "Managing Director",
    email: "dwanek@westerntech.com",
    customAngle: "WTI's pioneer venture debt practice and intangible asset underwriting",
    precedentDeal: "$2M–$25M senior debt facilities with warrants and IP pledge",
    precedentFitAnalysis: "8%–12% pricing corridor fits WTI target returns with 2.8x liquidation safety net."
  },
  {
    lenderId: "B15",
    firm: "CIBC Innovation Banking",
    name: "Amy Olah",
    title: "Managing Director",
    email: "amy.olah@cibc.com",
    customAngle: "CIBC Innovation's North American technology lending practice",
    precedentDeal: "$10M–$50M innovation debt facilities",
    precedentFitAnalysis: "48-month tenor, 18-month IO, and 6.5%–8.8% appraised LTV."
  },
  {
    lenderId: "B8",
    firm: "Horizon Technology Finance",
    name: "Dan Trolio",
    title: "EVP & Chief Financial Officer",
    email: "dtrolio@horizontechfinance.com",
    customAngle: "Horizon's venture lending credit portfolio and capital management",
    precedentDeal: "$5M–$50M venture debt facilities for technology companies",
    precedentFitAnalysis: "Provides 1st lien senior debt with 18-month IO and $3.6M pre-funded interest reserve."
  },
  {
    lenderId: "C17",
    firm: "Ares Management (Mid-Market Credit)",
    name: "Mark Affolter",
    title: "Partner & Co-Head of US Direct Lending",
    email: "maffolter@aresmgmt.com",
    customAngle: "Ares's software and technology direct lending platform",
    precedentDeal: "Ares's mid-market direct lending facilities and asset-backed credit deals ($20M–$100M)",
    precedentFitAnalysis: "Pre-funded interest reserve and 2.8x stressed liquidation backstop on independent appraisal."
  },
  {
    lenderId: "C18",
    firm: "Sixth Street (Specialty Lending)",
    name: "Michael Horvath",
    title: "Partner, Credit Opportunities",
    email: "mhorvath@sixthstreet.com",
    customAngle: "Sixth Street's specialty lending and bespoke asset-backed credit underwriting",
    precedentDeal: "Sixth Street's structured credit and specialty term facilities ($25M–$150M)",
    precedentFitAnalysis: "Acquisition facility with 1st lien perfected security interest on institutional patent estate."
  },
  {
    lenderId: "C19",
    firm: "Golub Capital",
    name: "Gregory Cashman",
    title: "Senior Managing Director",
    email: "gcashman@golubcapital.com",
    customAngle: "Golub's middle-market tech debt and acquisition financing desk",
    precedentDeal: "Golub's middle-market tech and software term loan facilities ($15M–$75M)",
    precedentFitAnalysis: "Deep subordination with $280M seller paper junior to $30M senior facility."
  },
  {
    lenderId: "C20",
    firm: "White Oak Global Advisors",
    name: "Tom Otte",
    title: "Partner & Head of Specialty Lending",
    email: "totte@whiteoaksf.com",
    customAngle: "White Oak's asset-based lending and collateral recovery focus",
    precedentDeal: "White Oak's asset-backed term facilities and intangible collateral financings ($10M–$250M)",
    precedentFitAnalysis: "Independent Teknos appraisal ($340M–$460M) delivers extraordinary asset backing."
  },
  {
    lenderId: "C21",
    firm: "North Atlantic Capital",
    name: "Mark H. Morris",
    title: "Managing Director",
    email: "mmorris@northatlanticcapital.com",
    customAngle: "North Atlantic's technology subordinated and senior co-lending",
    precedentDeal: "North Atlantic's structured tech debt and junior capital co-investments ($5M–$20M)",
    precedentFitAnalysis: "Conservative 6.5%–8.8% LTV provides institutional safety margin."
  },
  {
    lenderId: "C23",
    firm: "HSBC Innovation Banking",
    name: "Katherine Andersen",
    title: "Head of US Tech & Life Sciences",
    email: "katherine.andersen@us.hsbc.com",
    customAngle: "HSBC's international corporate banking reach and institutional digital asset platform",
    precedentDeal: "HSBC Innovation Banking global technology debt and commercial credit facilities",
    precedentFitAnalysis: "Cross-border market infrastructure debt facility backed by USPTO patents and pre-funded interest reserve."
  },
  {
    lenderId: "C24",
    firm: "Banc of California (PWB Tech Debt)",
    name: "Scott Peters",
    title: "Managing Director, Venture Banking",
    email: "scott.peters@bancofcal.com",
    customAngle: "Banc of California's dedicated venture banking and asset-backed credit team",
    precedentDeal: "Banc of California / PWB venture loans and commercial debt for intellectual-property-rich companies",
    precedentFitAnalysis: "Matches classic venture banking standards with $3.6M interest reserve and high liquidation coverage."
  },
  {
    lenderId: "A5",
    firm: "ipCapital Group",
    name: "General Deal Advisory Desk",
    title: "IP Advisory & Valuations",
    email: "info@ipcg.com",
    customAngle: "ipCapital's IP valuation and institutional transaction advisory network",
    precedentDeal: "Advisory and transaction opinions for patent monetization and institutional credit",
    precedentFitAnalysis: "Independent Teknos valuation ($340M–$460M) and patent monetization alignment."
  },

  // --- Alternate Executive & Secondary Inboxes ---
  {
    lenderId: "A1",
    firm: "Fortress Investment Group (IP Finance)",
    name: "Fortress IP Finance Group",
    title: "Private Credit Desk",
    email: "privatewealth@fortress.com",
    customAngle: "Fortress's dedicated IP credit portfolio and collateral management",
    precedentDeal: "Patent-backed term financings ($10M–$100M+)",
    precedentFitAnalysis: "Teknos appraisal ($340M–$460M) and 6.5%–8.8% LTV."
  },
  {
    lenderId: "A2",
    firm: "Aon IP Solutions / Intellectual Property Finance",
    name: "Brian Hinman",
    title: "Chief Commercial Officer, IP Solutions",
    email: "brian.hinman@aon.com",
    customAngle: "Aon's IP transaction structuring and commercial IP finance leadership",
    precedentDeal: "Aon IP debt and valuation wrap facilities ($5M–$50M)",
    precedentFitAnalysis: "Granted U.S. patent portfolio valued at $340M–$460M with 1st lien UCC perfection."
  },
  {
    lenderId: "A2",
    firm: "Aon IP Solutions / Intellectual Property Finance",
    name: "Aon IP Solutions Team",
    title: "IP Debt & Solutions Desk",
    email: "ipsolutions@aon.com",
    customAngle: "Aon IP Solutions underwriting and credit enablement",
    precedentDeal: "IP-backed debt structuring and lender insurance programs",
    precedentFitAnalysis: "Senior collateralized patent financing with 2.8x stressed liquidation coverage."
  },
  {
    lenderId: "A3",
    firm: "BlueIron IP",
    name: "Russ Krajec",
    title: "Founder & Chief Executive Officer (Direct Alternate)",
    email: "russ@blueironip.com",
    customAngle: "BlueIron's patent-collateral-first lending and IP underwriting discipline",
    precedentDeal: "BlueIron IP loans ($2M–$50M) underwriting patent claims directly",
    precedentFitAnalysis: "8.8% LTV sits far below BlueIron's typical 20–35% band."
  },
  {
    lenderId: "B6",
    firm: "Hercules Capital (NYSE: HTGC)",
    name: "Christian Faloppa",
    title: "Executive Managing Director",
    email: "cfaloppa@htgc.com",
    customAngle: "Hercules's senior secured debt portfolio and venture loan structuring",
    precedentDeal: "Senior secured tech loans ($10M–$75M+)",
    precedentFitAnalysis: "Senior priority, $3.6M interest reserve, and $280M seller subordination."
  },
  {
    lenderId: "B7",
    firm: "Trinity Capital (Nasdaq: TRIN)",
    name: "Kyle Brown",
    title: "Chief Executive Officer & CIO (Trinity Direct)",
    email: "kbrown@trinitycap.com",
    customAngle: "Trinity's executive credit committee leadership in Phoenix",
    precedentDeal: "Trinity Capital senior secured tech and infrastructure facilities ($5M–$50M+)",
    precedentFitAnalysis: "Arizona HQ proximity and conservative 6.5%–8.8% LTV."
  },
  {
    lenderId: "B7",
    firm: "Trinity Capital (Nasdaq: TRIN)",
    name: "Ron Kundich",
    title: "Chief Credit Officer (Trinity Direct)",
    email: "rkundich@trinitycap.com",
    customAngle: "Trinity's tech lending credit committee and risk governance",
    precedentDeal: "Trinity Capital equipment and senior debt facilities ($10M–$50M)",
    precedentFitAnalysis: "First lien over granted patent estate with $280M junior paper."
  },
  {
    lenderId: "B8",
    firm: "Horizon Technology Finance (Nasdaq: HRZN)",
    name: "Robert D. Pomeroy, Jr.",
    title: "Chief Executive Officer & Chairman",
    email: "rpomeroy@horizontechfinance.com",
    customAngle: "Horizon's senior venture loan underwriting and IP pledge structures",
    precedentDeal: "Horizon venture loans ($5M–$50M) with 18–24 month IO periods",
    precedentFitAnalysis: "Exact match on 18-month IO, 48-month tenor, and 1-year pre-funded interest reserve."
  },
  {
    lenderId: "C16",
    firm: "Blue Owl Technology Finance",
    name: "Blue Owl Tech Credit Team",
    title: "Technology Direct Lending",
    email: "techcredit@blueowl.com",
    customAngle: "Blue Owl's dedicated technology credit and acquisition lending book",
    precedentDeal: "Blue Owl technology term debt ($25M–$100M+ hold)",
    precedentFitAnalysis: "Single hold $30M senior facility against $340M–$460M independent patent valuation."
  },
  {
    lenderId: "C17",
    firm: "Ares Management (Mid-Market Credit)",
    name: "Ares Credit IR Desk",
    title: "Direct Lending Desk",
    email: "creditir@aresmgmt.com",
    customAngle: "Ares's mid-market software and technology credit origination",
    precedentDeal: "Ares mid-market technology term facilities ($20M–$100M)",
    precedentFitAnalysis: "Senior secured debt with $280M seller subordination and ring-fenced interest reserve."
  },
  {
    lenderId: "C18",
    firm: "Sixth Street (Specialty Lending)",
    name: "Sixth Street Credit Team",
    title: "Credit Opportunities Desk",
    email: "info@sixthstreet.com",
    customAngle: "Sixth Street's opportunistic credit and structured IP facilities",
    precedentDeal: "Specialty asset-backed term credit ($25M–$150M)",
    precedentFitAnalysis: "Underwritten against $340M–$460M Teknos appraisal and 2.8x liquidation backstop."
  },
  {
    lenderId: "C19",
    firm: "Golub Capital",
    name: "Golub Tech Lending Team",
    title: "Middle-Market Credit Desk",
    email: "info@golubcapital.com",
    customAngle: "Golub Capital's technology lending and acquisition financing desk",
    precedentDeal: "Middle-market technology term loans ($15M–$75M)",
    precedentFitAnalysis: "Acquisition facility with $280M subordinated seller paper behind senior lender."
  },
  {
    lenderId: "C20",
    firm: "White Oak Global Advisors",
    name: "White Oak Specialty Lending Desk",
    title: "Asset-Based & Specialty Lending",
    email: "info@whiteoaksf.com",
    customAngle: "White Oak's asset-backed and intellectual property credit underwriting",
    precedentDeal: "Asset-based term loans and specialty financings ($10M–$250M)",
    precedentFitAnalysis: "Patent estate independently appraised at $340M–$460M provides 2.8x stressed liquidation coverage."
  }
];

const patentSummaryDoc = '/Users/ericmiller/Downloads/BYOND_OnliBitcoin_Patent.docx';
const dealPointsDoc = '/Users/ericmiller/Downloads/BYOND_1Lender_Deal_Points.docx';
const video1Path = '/Users/ericmiller/.gemini/antigravity-ide/scratch/byond-credit-crm/public/videos/Presentation_1.mp4';
const video2Path = '/Users/ericmiller/.gemini/antigravity-ide/scratch/byond-credit-crm/public/videos/Presentation_2.mp4';

function sendViaAppleMail(toEmail: string, subject: string, bodyContent: string) {
  const attachmentStatements = [patentSummaryDoc, dealPointsDoc, video1Path, video2Path]
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

async function runSecondaryDispatch() {
  console.log(`======================================================================`);
  console.log(`BYOND HOLDINGS LLC — DISPATCHING TO ALL SECONDARY DECISION MAKERS & EMAILS`);
  console.log(`======================================================================`);
  console.log(`Sender: Eric Miller <ricomiller@icloud.com>`);
  console.log(`Total Secondary Targets: ${secondaryContacts.length}`);
  console.log(`Enclosed: 2 Word Docs + 2 Video MP4s (10MB & 9.7MB) + Streaming Links\n`);

  let sentCount = 0;
  let failCount = 0;
  const dispatchResults: Array<{ name: string; firm: string; email: string; status: string }> = [];

  for (let i = 0; i < secondaryContacts.length; i++) {
    const contact = secondaryContacts[i];
    const subject = MASTER_PITCH_EMAIL.subject;
    const body = MASTER_PITCH_EMAIL.generateBody(
      contact.name,
      contact.firm,
      contact.customAngle,
      contact.precedentDeal,
      contact.precedentFitAnalysis
    );

    process.stdout.write(`[${i + 1}/${secondaryContacts.length}] Dispatching to ${contact.name} (${contact.firm}) <${contact.email}>... `);
    const ok = sendViaAppleMail(contact.email, subject, body);

    if (ok) {
      console.log(`✓ SENT (4 Attachments + Links)`);
      sentCount++;
      dispatchResults.push({ name: contact.name, firm: contact.firm, email: contact.email, status: 'Delivered' });
    } else {
      console.log(`✗ FAILED`);
      failCount++;
      dispatchResults.push({ name: contact.name, firm: contact.firm, email: contact.email, status: 'Failed' });
    }

    if (i < secondaryContacts.length - 1) {
      sleep(1800);
    }
  }

  console.log(`\n======================================================================`);
  console.log(`SECONDARY DISPATCH COMPLETE: ${sentCount} SENT, ${failCount} FAILED out of ${secondaryContacts.length}`);
  console.log(`======================================================================\n`);

  fs.writeFileSync(
    '/Users/ericmiller/.gemini/antigravity-ide/scratch/byond-credit-crm/scripts/secondary_dispatch_results.json',
    JSON.stringify({ sentCount, failCount, total: secondaryContacts.length, timestamp: new Date().toISOString(), results: dispatchResults }, null, 2)
  );
}

runSecondaryDispatch();
