import { LenderTarget } from '../types/crm';

export const INITIAL_LENDERS: LenderTarget[] = [
  // ================= TIER A: PATENT CREDIT & IP FINANCE SPECIALISTS =================
  {
    id: "A1",
    deliveryState: "Delivered",
    tier: "A",
    firm: "Fortress Investment Group (IP Finance)",
    location: "New York, NY",
    checkSize: "$10M – $100M+",
    whyTheyFit: "Patents as primary collateral. $2.9B in IP deployed. Closest institutional mortgage on an estate.",
    howToWorkThem: "Direct approach to IP credit partners. Emphasize Teknos appraisal and USPTO first-lien perfection.",
    pitchAngle: "Fortress's leadership in underwriting patent estates as standalone debt collateral",
    precedentDeal: "affiliate IP-backed credit facilities, including the $100M convertible term loan to Imagination Technologies and the patent-backed financing for Aymium",
    precedentFitAnalysis: "Byond Holdings' facility mirrors Fortress's core IP credit thesis: an established U.S. patent estate independently appraised by Teknos at $340M–$460M, where a $30M senior facility benefits from a 6.5%–8.8% LTV and an extreme liquidation backstop (~$85M floor at a 75% haircut, or 2.8x coverage) ahead of $280M in subordinated seller paper.",
    contacts: [
      {
        name: "Eran Zur",
        title: "Global Head of Intellectual Property / Managing Director",
        email: "ezur@fortress.com",
        secondaryEmail: "privatewealth@fortress.com",
        phone: "(212) 798-6100",
        isPrimary: true
      },
      {
        name: "James O'Brien",
        title: "Managing Director, IP Finance & Credit",
        email: "jobrien@fortress.com",
        isPrimary: false
      }
    ],
    status: "Sent"
  },
  {
    id: "A2",
    deliveryState: "Re-Routed & Delivered",
    originalBouncedEmail: "lewis.lee@aon.com",
    bounceError: "Departed Aon 2024 to Moat Metrics -> Re-routed to IP Solutions Desk",
    tier: "A",
    firm: "Aon IP Solutions / Intellectual Property Finance",
    location: "Chicago, IL / National",
    checkSize: "$5M – $50M",
    whyTheyFit: "Structures IP loans and insurance wraps so a credit fund will take the paper.",
    howToWorkThem: "Offer as debt package or insurance wrap partner to syndicate alongside private credit.",
    pitchAngle: "Aon's proprietary IP value modeling and collateral insurance wrap structures",
    precedentDeal: "Aon's structured IP-backed debt program supporting over $1.0B+ in debt financing, including the $110M facility for Position Imaging and the $50M facilities for Anonos and Leia Inc.",
    precedentFitAnalysis: "The OnliBitcoin patent family directly aligns with Aon's valuation and credit-enhancement models: an ultra-conservative 6.5%–8.8% LTV against the $340M–$460M Teknos appraisal, ideal for Aon's lending syndication partners and institutional fund partnerships (e.g. M&G Investments).",
    contacts: [
      {
        name: "Aon IP Solutions Team",
        title: "Chief Executive Officer, Aon IP Solutions",
        email: "intellectualproperty@aon.com",
        secondaryEmail: "ipsolutions@aon.com",
        phone: "(312) 381-1000",
        isPrimary: true
      },
      {
        name: "Brian Hinman",
        title: "Chief Commercial Officer, IP Solutions",
        email: "brian.hinman@aon.com",
        isPrimary: false
      }
    ],
    status: "Sent"
  },
  {
    id: "A3",
    deliveryState: "Delivered",
    tier: "A",
    firm: "BlueIron IP",
    location: "Loveland, CO",
    checkSize: "$2M – $50M",
    whyTheyFit: "Patents first, P&L second. 20–35% LTV band. Your 7% LTV is ultra-conservative vs their typical book.",
    howToWorkThem: "Direct founder outreach. Russ Krajec evaluates claim strength and liquidation backstops immediately.",
    pitchAngle: "BlueIron's patent-centric underwriting model that prices collateral ahead of corporate ARR",
    precedentDeal: "BlueIron's dedicated patent-mortgage facilities under the 'Patents first, P&L second' framework pioneered by Russ Krajec",
    precedentFitAnalysis: "While BlueIron typically underwrites patent debt in the 20%–35% LTV corridor, BYOND's $30M facility against the $340M Teknos floor yields a remarkably conservative 8.8% LTV (or 6.5% against the $460M ceiling), backed by 4 granted U.S. patents that define tangible Bitcoin title and off-chain possession.",
    contacts: [
      {
        name: "Russ Krajec",
        title: "Founder & Chief Executive Officer",
        email: "russ.krajec@blueironip.com",
        secondaryEmail: "russ@blueironip.com",
        phone: "(970) 776-4355",
        isPrimary: true
      }
    ],
    status: "Sent"
  },
  {
    id: "A4",
    deliveryState: "Re-Routed & Delivered",
    originalBouncedEmail: "mgulliford@sorynipcap.com",
    bounceError: "Mimecast 550 Invalid Recipient -> Re-routed to info@sorynipcap.com",
    tier: "A",
    firm: "Soryn IP Capital Management",
    location: "New York, NY",
    checkSize: "$5M – $40M",
    whyTheyFit: "Patent-centric financings. Michael Gulliford. Lives in claim value, not ARR or SaaS multiples.",
    howToWorkThem: "Pitch asset liquidation value and institutional Bitcoin market structure dominance.",
    pitchAngle: "Soryn's deep focus on high-stakes patent monetization and credit structuring",
    precedentDeal: "Soryn's IP Private Credit facilities ($5M–$40M) providing non-dilutive senior and junior debt secured by patent portfolios and IP licensing royalties",
    precedentFitAnalysis: "Matches Soryn's focus on claim enforceability over corporate SaaS multiples. The transaction structure features $280M in deeply subordinated seller paper, a pre-funded 12-month interest reserve ($3.6M), and 18 months of interest-only runway.",
    contacts: [
      {
        name: "Michael Gulliford",
        title: "Founder & Managing Partner",
        email: "mgulliford@sorynipcap.com",
        secondaryEmail: "info@sorynipcap.com",
        phone: "(646) 378-2059",
        isPrimary: true
      }
    ],
    status: "Sent"
  },
  {
    id: "A5",
    deliveryState: "Delivered",
    tier: "A",
    firm: "ipCapital Group",
    location: "Williston, VT",
    checkSize: "Advisory & Syndication Network",
    whyTheyFit: "Lending-grade valuation + introductions. Use if a BDC demands their own secondary appraisal.",
    howToWorkThem: "Engage John Cronin for validation review and direct introductions to syndication partners.",
    pitchAngle: "ipCapital's institutional patent strategy and credit appraisal validation",
    precedentDeal: "institutional IP advisory and valuation syndications led by John Cronin for complex high-technology patent estates",
    precedentFitAnalysis: "Provides direct validation of Teknos's $340M–$460M appraisal methodology and structured syndication introductions for BDCs and credit committees seeking third-party technical IP confirmation.",
    contacts: [
      {
        name: "John Cronin",
        title: "Chairman & Founder",
        email: "jcronin@ipcg.com",
        secondaryEmail: "info@ipcg.com",
        phone: "(802) 879-7353",
        isPrimary: true
      }
    ],
    status: "Sent"
  },

  // ================= TIER B: VENTURE DEBT & TECH BDCs =================
  {
    id: "B6",
    deliveryState: "Delivered",
    tier: "B",
    firm: "Hercules Capital (NYSE: HTGC)",
    location: "San Jose / Palo Alto, CA",
    checkSize: "$10M – $75M+",
    whyTheyFit: "Largest tech BDC. Senior secured debt specialist. IP in the package. Recent $25–50M software term loans.",
    howToWorkThem: "Lead with senior lien perfection, 2.8x stressed liquidation coverage, and $280M subordinated seller note.",
    pitchAngle: "Hercules' market-leading technology venture debt platform and senior secured structuring",
    precedentDeal: "Hercules' $25M–$75M senior secured term loans to technology infrastructure and software leaders (e.g. Coupa, Postman, Sprinklr, SeatGeek)",
    precedentFitAnalysis: "Matches Hercules' exact term loan architecture: 48-month tenor, 18-month interest-only period, zero Year 1 DSCR covenant (springing 1.25x in Month 13), and a pre-funded $3.6M interest reserve ring-fenced at closing.",
    contacts: [
      {
        name: "Scott Bluestein",
        title: "Chief Executive Officer & Chief Investment Officer",
        email: "sbluestein@htgc.com",
        phone: "(650) 289-3060",
        isPrimary: true
      },
      {
        name: "Christian Faloppa",
        title: "Executive Managing Director",
        email: "cfaloppa@htgc.com",
        isPrimary: false
      }
    ],
    status: "Sent"
  },
  {
    id: "B7",
    deliveryState: "Delivered",
    tier: "B",
    firm: "Trinity Capital (Nasdaq: TRIN)",
    location: "Phoenix / Chandler, AZ",
    checkSize: "$5M – $50M+",
    whyTheyFit: "Local Arizona HQ. Dedicated tech lending vertical. $6.2B deployed. Walk-in before cold PDFs.",
    howToWorkThem: "Engage local leadership (Kyle Brown & Ron Kundich). Propose executive briefing in Phoenix.",
    pitchAngle: "Trinity's Arizona presence and institutional venture debt track record",
    precedentDeal: "Trinity's $25M–$30M senior secured debt facilities to tech companies (e.g., $30M credit facility to Core Scientific, $20M to Nexii, $25M equipment/growth debt to Boxed)",
    precedentFitAnalysis: "Offers Trinity's Phoenix headquarters team a local Arizona senior secured credit investment with exceptional asset coverage: 10% senior slice ($30M / $300M), $280M seller note junior, and 2.8x liquidation coverage.",
    contacts: [
      {
        name: "Kyle Brown",
        title: "Chief Executive Officer & Chief Investment Officer",
        email: "kbrown@trincapinvestment.com",
        secondaryEmail: "kbrown@trinitycap.com",
        phone: "(480) 374-5350",
        isPrimary: true
      },
      {
        name: "Ron Kundich",
        title: "Chief Credit Officer / SVP Tech Lending",
        email: "rkundich@trincapinvestment.com",
        secondaryEmail: "rkundich@trinitycap.com",
        isPrimary: false
      }
    ],
    status: "Sent"
  },
  {
    id: "B8",
    deliveryState: "Re-Routed & Delivered",
    originalBouncedEmail: "gmichaud@horizontechfinance.com",
    bounceError: "President retired 2025 -> Re-routed to info@horizontechfinance.com",
    tier: "B",
    firm: "Horizon Technology Finance (Nasdaq: HRZN)",
    location: "Farmington, CT",
    checkSize: "$5M – $50M",
    whyTheyFit: "Explicit IP collateral when claims are granted. 18–24 month IO structure matches their underwriting shape.",
    howToWorkThem: "Highlight the pre-funded 12-month interest reserve and granted USPTO claims.",
    pitchAngle: "Horizon's expertise in structuring senior term loans against granted patent portfolios",
    precedentDeal: "Horizon's $10M–$35M senior secured venture debt facilities requiring granted patent collateral and structured with 18–24 month IO periods",
    precedentFitAnalysis: "Fulfills Horizon's criteria for granted patent claims (4 granted U.S. patents), while the $3.6M pre-funded escrow reserve fully insulates debt service during the initial 12 months.",
    contacts: [
      {
        name: "Horizon Tech Finance Deal Desk",
        title: "President & Director",
        email: "info@horizontechfinance.com",
        phone: "(860) 676-8654",
        isPrimary: true
      },
      {
        name: "Robert D. Pomeroy, Jr.",
        title: "Chief Executive Officer & Chairman",
        email: "rpomeroy@horizontechfinance.com",
        isPrimary: false
      }
    ],
    status: "Queued"
  },
  {
    id: "B9",
    deliveryState: "Delivered",
    tier: "B",
    firm: "WTI (Western Technology Investment)",
    location: "Portola Valley, CA",
    checkSize: "$2M – $25M+",
    whyTheyFit: "Oldest dedicated venture lender. Uses IP as principal risk-reducer. Quoted 8–12% when patents are real.",
    howToWorkThem: "Direct outreach to Maurice Werdegar. Pitch the senior loan as low-LTV asset-backed debt.",
    pitchAngle: "WTI's four-decade track record in asset-backed technology debt",
    precedentDeal: "WTI's four-decade history of providing senior term loans to tech leaders using patents as primary downside mitigators",
    precedentFitAnalysis: "Positions WTI at the top of the capital structure at an 8.8% LTV against the $340M Teknos floor, backed by $280M of seller equity-like paper.",
    contacts: [
      {
        name: "Maurice Werdegar",
        title: "Chairman & Chief Executive Officer",
        email: "mwerdegar@westerntech.com",
        phone: "(650) 854-8833",
        isPrimary: true
      }
    ],
    status: "Queued"
  },
  {
    id: "B10",
    deliveryState: "Delivered",
    tier: "B",
    firm: "TriplePoint Venture Growth (NYSE: TPVG)",
    location: "Menlo Park, CA",
    checkSize: "$5M – $50M",
    whyTheyFit: "Senior lien + IP pledge. 36–60 month tenor, IO front. Term sheet shape matches BYOND facility teaser.",
    howToWorkThem: "Focus on senior liquidation coverage and 10% senior slice against $300M total capital.",
    pitchAngle: "TriplePoint's bespoke structured growth capital and senior lien focus",
    precedentDeal: "TriplePoint's $10M–$50M senior secured credit facilities featuring 36–60 month tenors, IO front-ends, and blanket IP pledges",
    precedentFitAnalysis: "Tenor and amortization terms already match BYOND's 48-month facility teaser and 18-month IO runway, with 2.8x stressed liquidation coverage.",
    contacts: [
      {
        name: "Jim Labe",
        title: "Chief Executive Officer & Chairman",
        email: "jlabe@triplepointcapital.com",
        phone: "(650) 854-2090",
        isPrimary: true
      },
      {
        name: "Sajal Srivastava",
        title: "President & Chief Investment Officer",
        email: "ssrivastava@triplepointcapital.com",
        isPrimary: false
      }
    ],
    status: "Queued"
  },
  {
    id: "B11",
    deliveryState: "Delivered",
    tier: "B",
    firm: "Runway Growth Capital (Nasdaq: RWAY)",
    location: "Chicago / Silicon Valley",
    checkSize: "$10M – $75M",
    whyTheyFit: "Senior growth loans. Reserved IO year answers their credit committee cash-runway questions.",
    howToWorkThem: "Present the $3.6M pre-funded escrow reserve and 2.8x liquidation backstop.",
    pitchAngle: "Runway Growth's disciplined senior secured credit underwriting",
    precedentDeal: "Runway's $20M–$75M senior secured growth loans to technology and enterprise solutions companies",
    precedentFitAnalysis: "Directly satisfies Runway's cash-path requirements through the pre-funded 12-month interest reserve ($3.6M) and 2.8x liquidation floor backstop.",
    contacts: [
      {
        name: "David Spreng",
        title: "Founder, Chief Executive Officer & CIO",
        email: "dspreng@runwaygrowth.com",
        phone: "(312) 281-6270",
        isPrimary: true
      }
    ],
    status: "Queued"
  },
  {
    id: "B12",
    deliveryState: "Re-Routed & Delivered",
    originalBouncedEmail: "kwitmer@oxfordfinance.com",
    bounceError: "550 Unknown User -> Sourced Exec Director Austin Szafranski",
    tier: "B",
    firm: "Oxford Finance",
    location: "Alexandria, VA / CA",
    checkSize: "$10M – $75M+",
    whyTheyFit: "Tech and life-sci senior term debt. Decades of IP-heavy packages, often alongside a commercial bank.",
    howToWorkThem: "Highlight the conservative 6.5%–8.8% LTV and independent Teknos appraisal floor.",
    pitchAngle: "Oxford's extensive experience with asset-backed IP loan structures",
    precedentDeal: "Oxford's long track record of senior term debt facilities secured by heavy intellectual property estates",
    precedentFitAnalysis: "Matches Oxford's IP-secured underwriting standards with 6.5%–8.8% appraised LTV and $280M junior seller subordination.",
    contacts: [
      {
        name: "Austin Szafranski",
        title: "Senior Managing Director, Credit & Originating",
        email: "aszafranski@oxfordfinance.com",
        phone: "(703) 519-4900",
        isPrimary: true
      }
    ],
    status: "Queued"
  },
  {
    id: "B13",
    deliveryState: "Delivered",
    tier: "B",
    firm: "First Citizens Bank (Silicon Valley Bank Desk)",
    location: "Santa Clara, CA / National",
    checkSize: "$10M – $200M",
    whyTheyFit: "Inherited SVB venture-debt book. Premier bank that already understands tech + USPTO lien perfection.",
    howToWorkThem: "Offer as senior secured banking partner alongside a BDC co-lender.",
    pitchAngle: "SVB / First Citizens' technology credit infrastructure and IP perfection capabilities",
    precedentDeal: "SVB's industry-standard venture banking and technology credit facilities with USPTO patent encumbrance",
    precedentFitAnalysis: "Provides a traditional senior banking structure alongside BDC partners, secured by first-lien patent perfection.",
    contacts: [
      {
        name: "Marc Cadieux",
        title: "President, Silicon Valley Bank division",
        email: "mcadieux@svb.com",
        phone: "(408) 654-7400",
        isPrimary: true
      }
    ],
    status: "Queued"
  },
  {
    id: "B14",
    deliveryState: "Re-Routed & Delivered",
    originalBouncedEmail: "pszekely@comerica.com",
    bounceError: "Comerica gateway blocked -> Replaced with Western Alliance Bank (Phoenix HQ)",
    tier: "B",
    firm: "Comerica Bank (Technology & Life Sciences)",
    location: "Dallas / San Jose / National",
    checkSize: "$5M – $40M",
    whyTheyFit: "Classic tech venture bank. Ideal club partner next to a BDC on the same first lien.",
    howToWorkThem: "Position as senior revolving or term facility with junior seller subordinated note.",
    pitchAngle: "Comerica TLS's conservative senior debt underwriting with robust collateral coverage",
    precedentDeal: "Comerica TLS senior secured commercial credit facilities for asset-rich technology ventures",
    precedentFitAnalysis: "Offers senior bank club syndication with high collateral coverage and conservative 8.8% LTV.",
    contacts: [
      {
        name: "Grant Simon",
        title: "Executive Vice President & Head of TLS",
        email: "gsimon@comerica.com",
        phone: "(800) 521-1198",
        isPrimary: true
      }
    ],
    status: "Queued"
  },
  {
    id: "B15",
    deliveryState: "Re-Routed & Delivered",
    originalBouncedEmail: "paul.fuellemann@cibc.com",
    bounceError: "Misattributed name -> Sourced Exec MD Paul McKinlay",
    tier: "B",
    firm: "CIBC Innovation Banking",
    location: "US / Canada / UK",
    checkSize: "$5M – $50M",
    whyTheyFit: "Tech debt platform. Clean senior structure + transparent use of proceeds ($18.9M / $3.6M / $7.5M).",
    howToWorkThem: "Pitch cross-border technology credit team with focus on institutional digital asset infrastructure.",
    pitchAngle: "CIBC Innovation Banking's specialized digital technology and IP credit mandate",
    precedentDeal: "CIBC Innovation Banking senior growth debt facilities for digital infrastructure and financial technology platforms",
    precedentFitAnalysis: "Fits CIBC's fintech credit mandate with clean use of proceeds and pre-funded interest reserve.",
    contacts: [
      {
        name: "Paul McKinlay",
        title: "Managing Director, Technology Lending",
        email: "paul.mckinlay@cibc.com",
        phone: "(416) 980-2222",
        isPrimary: true
      }
    ],
    status: "Queued"
  },

  // ================= TIER C: PRIVATE CREDIT & SPECIALTY LENDERS =================
  {
    id: "C16",
    deliveryState: "Delivered",
    tier: "C",
    firm: "Blue Owl Technology Finance",
    location: "New York / Silicon Valley",
    checkSize: "$25M – $250M+",
    whyTheyFit: "Dedicated tech private credit. $30M is an easy single-ticket hold, not a syndication club.",
    howToWorkThem: "Approach software and digital infrastructure credit team. Lead with Teknos $460M valuation ceiling.",
    pitchAngle: "Blue Owl's institutional private credit scale and asset-backed flexibility",
    precedentDeal: "Blue Owl's direct tech lending facilities to premier market infrastructure and software companies",
    precedentFitAnalysis: "Represents a clean single-lender hold ($30M) with low LTV and massive enterprise valuation cushion ($340M–$460M).",
    contacts: [
      {
        name: "Lukas Spiss",
        title: "Managing Director, Tech Credit",
        email: "lukas.spiss@blueowl.com",
        secondaryEmail: "techcredit@blueowl.com",
        phone: "(212) 419-3000",
        isPrimary: true
      }
    ],
    status: "Queued"
  },
  {
    id: "C17",
    deliveryState: "Delivered",
    tier: "C",
    firm: "Ares Management (Mid-Market Credit)",
    location: "New York / Los Angeles",
    checkSize: "$20M – $100M",
    whyTheyFit: "Massive software-debt book. Target the mid-market originator, not the mega unitranche desk.",
    howToWorkThem: "Present as asset-backed special situations acquisition with deep seller paper behind it.",
    pitchAngle: "Ares' mid-market credit flexibility and asset recovery underwriting",
    precedentDeal: "Ares' mid-market credit solutions and asset-backed acquisition facilities",
    precedentFitAnalysis: "Structures an asset-backed acquisition loan where seller financing ($280M) absorbs 90% of the enterprise risk.",
    contacts: [
      {
        name: "Kipp deVeer",
        title: "Head of Ares Credit Group",
        email: "kdeveer@aresmgmt.com",
        secondaryEmail: "creditir@aresmgmt.com",
        phone: "(212) 750-7300",
        isPrimary: true
      }
    ],
    status: "Queued"
  },
  {
    id: "C18",
    deliveryState: "Delivered",
    tier: "C",
    firm: "Sixth Street (Specialty Lending)",
    location: "San Francisco / New York",
    checkSize: "$25M – $150M",
    whyTheyFit: "Tech and specialty credit leader. Highly creative around IP and structural downside protection.",
    howToWorkThem: "Highlight the non-custodial Bitcoin settlement IP and $85M stressed liquidation coverage.",
    pitchAngle: "Sixth Street's proprietary capital solutions and deep patent credit underwriting",
    precedentDeal: "Sixth Street's structured credit and specialty financing facilities for unique market infrastructure assets",
    precedentFitAnalysis: "Matches Sixth Street's appetite for structured IP downside protection and tangible property rights in digital assets.",
    contacts: [
      {
        name: "Joshua Peck",
        title: "Partner & Head of Credit Opportunities",
        email: "jpeck@sixthstreet.com",
        secondaryEmail: "info@sixthstreet.com",
        phone: "(415) 869-6300",
        isPrimary: true
      }
    ],
    status: "Queued"
  },
  {
    id: "C19",
    deliveryState: "Delivered",
    tier: "C",
    firm: "Golub Capital",
    location: "New York / Chicago",
    checkSize: "$15M – $75M",
    whyTheyFit: "High-volume middle-market software credit. Acquisition facilities are core business.",
    howToWorkThem: "Pitch the 18-month IO, pre-funded interest reserve, and 10% senior loan-to-enterprise-value ratio.",
    pitchAngle: "Golub's structured sponsor acquisition debt and senior secured underwriting",
    precedentDeal: "Golub's middle-market senior secured acquisition and term loan facilities",
    precedentFitAnalysis: "Senior slice represents only 10% of total consideration with 18 months IO and pre-funded interest.",
    contacts: [
      {
        name: "Lawrence Golub",
        title: "Chief Executive Officer",
        email: "lgolub@golubcapital.com",
        secondaryEmail: "info@golubcapital.com",
        phone: "(212) 750-6060",
        isPrimary: true
      }
    ],
    status: "Queued"
  },
  {
    id: "C20",
    deliveryState: "Delivered",
    tier: "C",
    firm: "White Oak Global Advisors",
    location: "San Francisco, CA",
    checkSize: "$10M – $250M",
    whyTheyFit: "Specialty / ABL mindset. Evaluates and prices a valued patent estate like hard asset collateral.",
    howToWorkThem: "Present Teknos valuation and USPTO first-priority lien perfection.",
    pitchAngle: "White Oak's asset-based lending approach to intangible assets and intellectual property",
    precedentDeal: "White Oak's asset-based lending facilities secured by non-traditional and intangible asset collateral",
    precedentFitAnalysis: "Underwrites the patent family as tangible asset collateral with 2.8x stressed liquidation coverage.",
    contacts: [
      {
        name: "Andre Hakkak",
        title: "Chief Executive Officer & Founder",
        email: "ahakkak@whiteoaksf.com",
        secondaryEmail: "info@whiteoaksf.com",
        phone: "(415) 644-4100",
        isPrimary: true
      }
    ],
    status: "Queued"
  },
  {
    id: "C21",
    deliveryState: "Delivered",
    tier: "C",
    firm: "North Atlantic Capital",
    location: "Portland, ME",
    checkSize: "$5M – $20M",
    whyTheyFit: "Software growth / mezzanine credit. Use as co-lender if a senior shop desires club risk sharing.",
    howToWorkThem: "Position as subordinate or split-ticket credit partner alongside lead BDC.",
    pitchAngle: "North Atlantic's high-touch tech credit syndication and growth debt solutions",
    precedentDeal: "North Atlantic's growth debt and mezzanine facilities for technology companies",
    precedentFitAnalysis: "Ideal junior/club co-lender alongside lead senior BDC on the first lien.",
    contacts: [
      {
        name: "David Coit",
        title: "Founder & Managing Director",
        email: "dcoit@northatlanticcapital.com",
        phone: "(207) 772-1001",
        isPrimary: true
      }
    ],
    status: "Queued"
  },
  {
    id: "C22",
    deliveryState: "Re-Routed & Delivered",
    originalBouncedEmail: "jbastable@montagepartners.com",
    bounceError: "550 User Unknown -> Sourced Managing Partner Rob Wolfman",
    tier: "C",
    firm: "Montage Partners",
    location: "Scottsdale, AZ",
    checkSize: "$10M – $40M",
    whyTheyFit: "Local Arizona structured private equity and junior capital. Use for AZ local partner or intro.",
    howToWorkThem: "In-person meeting in Scottsdale. Position as strategic junior capital or advisor bridge.",
    pitchAngle: "Montage's Scottsdale presence and flexible capital structuring for proprietary IP",
    precedentDeal: "Montage's private credit and recapitalization investments in Arizona and Western regional companies",
    precedentFitAnalysis: "Local Arizona institutional engagement with deep knowledge of proprietary IP asset structures.",
    contacts: [
      {
        name: "Rob Wolfman",
        title: "Co-Founder & Managing Partner",
        email: "rwolfman@montagepartners.com",
        phone: "(480) 214-7220",
        isPrimary: true
      }
    ],
    status: "Queued"
  },
  {
    id: "C23",
    deliveryState: "Delivered",
    tier: "C",
    firm: "HSBC Innovation Banking",
    location: "New York / London / National",
    checkSize: "$10M – $50M",
    whyTheyFit: "Global bank tech-debt platform. Competes directly with First Citizens / CIBC for high-profile IP.",
    howToWorkThem: "Pitch international tech credit desk with focus on global Bitcoin institutional settlements.",
    pitchAngle: "HSBC's international corporate banking reach and institutional digital asset platform",
    precedentDeal: "HSBC Innovation Banking global technology debt and commercial credit facilities",
    precedentFitAnalysis: "Cross-border market infrastructure debt facility backed by USPTO patents and pre-funded interest reserve.",
    contacts: [
      {
        name: "David Sabow",
        title: "Head of HSBC Innovation Banking US",
        email: "david.sabow@us.hsbc.com",
        phone: "(212) 525-5000",
        isPrimary: true
      }
    ],
    status: "Queued"
  },
  {
    id: "C24",
    deliveryState: "Delivered",
    tier: "C",
    firm: "Banc of California (PWB Tech Debt)",
    location: "Los Angeles / San Diego / San Jose",
    checkSize: "$10M – $40M",
    whyTheyFit: "Legacy Square 1 / Pacific Western venture debt book. Seasoned technology term lenders.",
    howToWorkThem: "Highlight the $3.6M pre-funded escrow reserve and strong first-lien patent security.",
    pitchAngle: "Banc of California's dedicated venture banking and asset-backed credit team",
    precedentDeal: "Banc of California / PWB venture loans and commercial debt for intellectual-property-rich companies",
    precedentFitAnalysis: "Matches classic venture banking standards with $3.6M interest reserve and high liquidation coverage.",
    contacts: [
      {
        name: "Mark T. Hughes",
        title: "Managing Director, Venture Debt",
        email: "mark.hughes@bancofcal.com",
        phone: "(855) 361-2262",
        isPrimary: true
      }
    ],
    status: "Queued"
  },
  {
    id: "C25",
    deliveryState: "Delivered",
    tier: "C",
    firm: "Vistara Growth",
    location: "Vancouver / Toronto / US",
    checkSize: "$5M – $30M",
    whyTheyFit: "Hungrier growth-debt shop. Excellent for generating competitive term-sheet tension and fast pace.",
    howToWorkThem: "Approach investment committee with dual-track senior secured proposal.",
    pitchAngle: "Vistara's flexible technology growth debt and founder-friendly capital structures",
    precedentDeal: "Vistara's customized growth debt and structured term loans for North American technology providers",
    precedentFitAnalysis: "Fast-moving term loan partner to generate term sheet tension and validate senior debt pricing.",
    contacts: [
      {
        name: "Randy Garg",
        title: "Founder & Managing Partner",
        email: "randy@vistaragrowth.com",
        phone: "(604) 637-2160",
        isPrimary: true
      }
    ],
    status: "Queued"
  }
];
