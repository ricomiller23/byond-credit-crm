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
  independentValuation: "Teknos: $340M–$460M, dated September 3, 2026",
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
      name: "Executive Mobile Architecture Demo",
      filename: "FUCKYEAH.mov",
      duration: "95 seconds",
      aspect: "720x1280",
      description: "Direct walk-through of the BYOND private trading venue, demonstrating title verification, non-custodial custody, and order-matching."
    },
    {
      name: "OnliYou Tangible Settlement & Patent Finality",
      filename: "IMG_0397.MP4",
      duration: "186 seconds",
      aspect: "720x1280",
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
  generateBody: (recipientName: string, firmName: string, customAngle: string) => `Dear ${recipientName},

$30M senior, first lien on a granted U.S. patent family independently valued at $340–460M (6.5–8.8% LTV). 48-month, 18-month IO, year-one interest reserved. $280M seller note junior. Close Dec 15. Teaser attached. 20 minutes on collateral and LTV.

I am reaching out specifically to ${firmName} regarding Byond Holdings' $30 million senior secured acquisition facility. Given ${customAngle}, this opportunity sits directly within your credit parameters:

KEY CREDIT HIGHLIGHTS:
1. Senior Collateral & Perfected Lien: First-priority perfected security interest in the OnliBitcoin Patent Family (4 granted U.S. patents, 1 granting, 1 pending) providing off-chain tangible property rights and settlement finality for institutional Bitcoin.
2. Independent Valuation & Ultra-Low LTV: Independently appraised by Teknos at $340M–$460M (September 3, 2026), yielding an exceptionally conservative 6.5%–8.8% appraised LTV.
3. 2.8x Stressed Liquidation Coverage: Under an extreme 75% liquidation haircut to the $340M valuation floor (~$85M net), the $30M senior loan retains 2.8x cash coverage.
4. Pre-Funded 12-Month Debt Service Reserve: $3.6M of facility proceeds is ring-fenced at closing into an interest reserve (12 months IO at 12% illustrative coupon). The borrower does not rely on early operating cash flow to service debt.
5. Deep Subordination ($280M Junior Seller Note): The seller (The Onli Corporation) carries $280M of subordinated 5-year paper behind the senior facility. Senior debt accounts for only 10% of the $300M transaction value.
6. Tenor & Runway: 48-month term with 18 months interest-only. No DSCR testing in Year 1; springing 1.25x covenant begins Month 13.

INTEGRATED DEMOS & MULTIMEDIA REVIEW:
• Interactive Audio/Video Presentation & Architecture Walkthrough:
  https://samply.app/p/WtNAIwo9p8A4TsMWzgJU?si=LEhOhNSucnVZgRkbcDUel9cx8Oi2
• Technical Execution & Settlement Demo (Video Walkthrough): FUCKYEAH.mov & IMG_0397.MP4
• Institutional Virtual Data Room: dealflow.onlibtc.com/investor

ATTACHMENTS TRANSMITTED:
1. BYOND_OnliBitcoin_Patent_Teaser.docx (Executive Credit Teaser & Metrics)
2. BYOND_1Lender_Deal_Points_with_Objections.docx (Credit Committee Defense & Deal Terms)
3. Teknos Independent Valuation Opinion (Sep 3, 2026)

Target close is December 15, 2026. Are you available for a brief 20-minute call this week to review the collateral package and credit structure?

Sincerely,

Eric Miller
Managing Principal
Special Situations & Credit Syndication Desk
Direct: (480) 287-2227
ricomiller@icloud.com`
};
