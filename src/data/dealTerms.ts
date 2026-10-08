export const DEAL_TERMS = {
  facilityName: "$30M Senior Secured Acquisition Facility",
  borrower: "Byond Holdings, LLC (Wyoming)",
  sellerLicensor: "The Onli Corporation (Delaware)",
  facilityAmount: "$30,000,000",
  facilityAmountNum: 30000000,
  totalConsideration: "$300,000,000",
  seniorPercentage: "10%", // $30M / $300M
  juniorCapital: "$280,000,000 convertible seller note; 5%, 5-year; ~30% equity at qualified financing",
  collateral: "First-priority perfected lien on the OnliBitcoin Patent Family and proceeds (USPTO recordation at close)",
  independentValuation: "Teknos Associates: $340M–$460M (Opinion dated September 3, 2026)",
  valuationFloorNum: 340000000,
  valuationCeilingNum: 460000000,
  appraisedLtv: "6.5% – 8.8%",
  stressedLiquidation: "~$85M at 25% of the $340M appraisal floor (~2.8x coverage against $30M senior)",
  stressedCoverageMultiplier: "2.8x",
  targetClose: "December 15, 2026",
  tenor: "48 months",
  amortization: "Interest-only during months 1–18; amortizing months 19–48, or cash sweep to a balloon",
  interestReserve: "$3.6M reserved at closing (12 months IO debt service at 12% illustrative coupon)",
  sellerCashClose: "$18.9M to seller at close ($1.1M deposit paid May 18, 2026 credited)",
  operatingSleeve: "$7.5M dedicated capital to open and operate BYOND marketplace",
  covenants: "No DSCR test in months 1–12; springing 1.25x minimum DSCR starting month 13; minimum cash covenant; annual IP revaluation; negative pledge on patents",
  operatingProofPlan: "10 members, 5–10 BTC each, 1 trade per month, 5 BTC minimum ticket, full lifecycle (title → list → buy → unmake)",
  dataRoomUrl: "dealflow.onlibtc.com/investor",
  samplyUrl: "https://samply.app/p/WtNAIwo9p8A4TsMWzgJU?si=LEhOhNSucnVZgRkbcDUel9cx8Oi2",
  videoAssets: [
    {
      name: "Executive Mobile Architecture & Trading Venue Demo",
      filename: "Presentation 1.mov",
      duration: "95 seconds",
      aspect: "720x1280 (Mobile Portrait)",
      description: "Direct walk-through of the BYOND private trading venue, demonstrating title verification, non-custodial custody, and order-matching."
    },
    {
      name: "OnliYou Tangible Settlement & Patent Finality Walkthrough",
      filename: "Presentation 2.mp4",
      duration: "186 seconds",
      aspect: "720x1280 (Mobile Portrait)",
      description: "Complete technical demo of off-chain possession, single identifiable owner protocol, and instant settlement without public mempool slippage."
    }
  ],
  documentsAttached: [
    {
      title: "BYOND OnliBitcoin Patent Teaser",
      filename: "BYOND_OnliBitcoin_Patent_Teaser.docx",
      category: "Executive Teaser"
    },
    {
      title: "Lender Deal Points & Credit Committee Objections",
      filename: "BYOND_1Lender_Deal_Points_with_Objections.docx",
      category: "Credit Term Sheet & Defense Memo"
    },
    {
      title: "Teknos Independent Transaction Opinion",
      filename: "Onli Corporation - Transaction Opinion - Patents Jun'26 (Sep 3).pdf",
      category: "Independent Appraisal ($340M–$460M)"
    }
  ]
};

export const LENDER_OBJECTIONS = [
  {
    id: 1,
    question: "What is this collateral really worth in a forced sale?",
    counter: "Do not rely only on the $340M–$460M appraisal. The credit underwriting stresses the estate down to 25% of the $340M floor, or roughly $85M. Against a $30M senior facility, that provides ~2.8x liquidation coverage. Even after a catastrophic 75% haircut, principal recovery remains fully protected."
  },
  {
    id: 2,
    question: "Patents may protect recovery, but what pays my interest?",
    counter: "The structure completely decouples early debt service from marketplace operating ramp. Exactly $3.6M of facility proceeds is ring-fenced at closing for 12 months of interest-only debt service (at a 12% illustrative coupon), the loan is IO for 18 months, and DSCR covenants do not spring until month 13."
  },
  {
    id: 3,
    question: "Why is the seller willing to finance $280M of the purchase price?",
    counter: "This is profound institutional alignment, not weakness. The Onli Corporation is absorbing the deeply subordinated risk position with a $280M 5-year seller note behind the lender. Senior debt represents only 10% of total $300M consideration. The seller has 9.3x more capital at risk behind the senior facility than the lender has in front."
  },
  {
    id: 4,
    question: "Is the lender financing an acquisition or funding a startup?",
    counter: "Both, but risk is partitioned into clear sleeves: $18.9M satisfies seller consideration, $3.6M funds the interest reserve, and $7.5M provides a dedicated operating sleeve. The senior perfected lien covers the entire acquired patent estate and all proceeds; the operating sleeve activates commercialization."
  },
  {
    id: 5,
    question: "What evidence is there that the business will actually work?",
    counter: "We do not ask the credit committee to buy into an aggressive hockey-stick forecast. The opening plan is intentionally micro-scale and proof-focused: 10 institutional members, 5–10 BTC each, 1 trade per month, 5 BTC minimum ticket, proving the full title → list → buy → unmake lifecycle. Immediate objective is operational validation, not speculative scale."
  },
  {
    id: 6,
    question: "What happens if the marketplace takes longer than expected?",
    counter: "The credit structure is built specifically for that scenario: 12 months of interest pre-funded in escrow, 18-month interest-only runway, zero DSCR covenant tests during year one, and a hard minimum-cash covenant. The lender has ample time for the asset to season without jeopardizing its first-priority recovery position."
  },
  {
    id: 7,
    question: "Why should I make this loan instead of waiting until the business is proven?",
    counter: "Because you are capturing senior debt yields at the precise point where collateral coverage is highest relative to loan balance (6.5%–8.8% LTV, 2.8x stressed liquidation backstop), while sitting ahead of $280M of junior paper. The lender does not need the operating growth case to be right for the credit to be safe."
  }
];

export const MASTER_PITCH_EMAIL = {
  firstLine: "$30M senior, first lien on a granted U.S. patent family independently valued at $340–460M (6.5–8.8% LTV). 48-month, 18-month IO, year-one interest reserved. $280M seller note junior. Close Dec 15. Teaser attached. 20 minutes on collateral and LTV.",
  subject: "CONFIDENTIAL // $30M Senior Secured Credit Facility — OnliBitcoin Granted U.S. Patent Estate (6.5%–8.8% LTV // $340–460M Valuation)",
  generateBody: (
    recipientName: string, 
    firmName: string, 
    customAngle: string,
    precedentDeal?: string,
    precedentFitAnalysis?: string
  ) => `Dear ${recipientName},

$30M senior, first lien on a granted U.S. patent family independently valued at $340–460M (6.5–8.8% LTV). 48-month, 18-month IO, year-one interest reserved. $280M seller note junior. Close Dec 15. Teaser attached. 20 minutes on collateral and LTV.

I am reaching out specifically to ${firmName} regarding Byond Holdings' $30 million senior secured acquisition facility.${precedentDeal ? `

PRECEDENT DEAL ALIGNMENT & STRUCTURAL FIT:
We have tracked ${firmName}'s leadership across asset-backed credit structures, notably ${precedentDeal}. ${precedentFitAnalysis || `This facility mirrors that exact credit archetype: senior debt secured by a defensible patent estate with conservative LTV and pre-funded debt service.`}` : ` Given ${customAngle}, this facility sits directly within your target underwriting criteria.`}

INDEPENDENT PATENT VALUATION & COLLATERAL COVERAGE:
1. Teknos Associates Independent Valuation: The OnliBitcoin Patent Family (4 granted U.S. patents, 1 granting, 1 pending) was independently appraised by Teknos Associates on September 3, 2026 at $340,000,000 to $460,000,000.
2. Ultra-Low Appraised LTV (6.5% – 8.8%): A $30M senior facility against a $340M valuation floor produces an extraordinarily conservative 8.8% LTV (or 6.5% against the $460M ceiling).
3. 2.8x Stressed Liquidation Coverage: Under an extreme 75% haircut to the $340M valuation floor (~$85M liquidation value), the $30M senior facility retains 2.8x full cash recovery coverage.
4. $280M Subordinated Seller Note: The seller (The Onli Corporation) carries $280M of subordinated 5-year junior paper behind your senior position. Senior debt represents only 10% of total $300M transaction capital.
5. Pre-Funded 12-Month Debt Service Reserve: Exactly $3.6M of facility proceeds is ring-fenced at closing into an interest reserve (12 months IO at 12% illustrative coupon). The credit does not rely on early marketplace operating cash flow to support debt service.
6. Tenor & Covenants: 48-month term with 18 months interest-only. No DSCR testing during Year 1; springing 1.25x DSCR beginning Month 13.

INTEGRATED DEMOS, VIDEO ENCLOSURES & AUDIO PRESENTATION:
To review the technology, patent mechanics, and trading infrastructure in action, please access the following materials:
• Interactive Audio/Video Presentation & Architecture Walkthrough (Dhryl Anton):
  https://samply.app/p/WtNAIwo9p8A4TsMWzgJU?si=LEhOhNSucnVZgRkbcDUel9cx8Oi2
• Enclosed Video 1 (Presentation 1.mov): 95-second executive demonstration of the BYOND private trading venue, non-custodial custody, and off-chain order flow.
• Enclosed Video 2 (Presentation 2.mp4): 186-second deep-dive into OnliYou tangible Bitcoin possession, single identifiable owner protocol, and instant settlement finality.
• Institutional Virtual Data Room: dealflow.onlibtc.com/investor

TRANSACTION DOCUMENTS ATTACHED:
1. BYOND_OnliBitcoin_Patent_Teaser.docx (Executive Credit Teaser & Metrics)
2. BYOND_1Lender_Deal_Points_with_Objections.docx (Credit Committee Defense Memo & Term Sheet)
3. Teknos Independent Valuation Opinion (Dated September 3, 2026 — $340M to $460M)

Target close is December 15, 2026. Are you available for a brief 20-minute call next week to review the patent valuation, collateral package, and term sheet?

Sincerely,

Eric Miller
Managing Principal
Special Situations & Credit Syndication Desk
Direct: (480) 287-2227
ricomiller@icloud.com`
};
