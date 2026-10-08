import { LenderTarget } from '../types/crm';

export const INITIAL_LENDERS: LenderTarget[] = [
  // ================= TIER A: PATENT CREDIT & IP FINANCE SPECIALISTS =================
  {
    id: "A1",
    tier: "A",
    firm: "Fortress Investment Group (IP Finance)",
    location: "New York, NY",
    checkSize: "$10M – $100M+",
    whyTheyFit: "Patents as primary collateral. $2.9B in IP deployed. Closest institutional mortgage on an estate.",
    howToWorkThem: "Direct approach to IP credit partners. Emphasize Teknos appraisal and USPTO first-lien perfection.",
    pitchAngle: "Fortress's leadership in underwriting patent estates as standalone debt collateral",
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
    status: "Ready to Dispatch"
  },
  {
    id: "A2",
    tier: "A",
    firm: "Aon IP Solutions / Intellectual Property Finance",
    location: "Chicago, IL / National",
    checkSize: "$5M – $50M",
    whyTheyFit: "Structures IP loans and insurance wraps so a credit fund will take the paper.",
    howToWorkThem: "Offer as debt package or insurance wrap partner to syndicate alongside private credit.",
    pitchAngle: "Aon's proprietary IP value modeling and collateral insurance wrap structures",
    contacts: [
      {
        name: "Lewis Lee",
        title: "Chief Executive Officer, Aon IP Solutions",
        email: "lewis.lee@aon.com",
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
    status: "Ready to Dispatch"
  },
  {
    id: "A3",
    tier: "A",
    firm: "BlueIron IP",
    location: "Loveland, CO",
    checkSize: "$2M – $50M",
    whyTheyFit: "Patents first, P&L second. 20–35% LTV band. Your 7% LTV is ultra-conservative vs their typical book.",
    howToWorkThem: "Direct founder outreach. Russ Krajec evaluates claim strength and liquidation backstops immediately.",
    pitchAngle: "BlueIron's patent-centric underwriting model that prices collateral ahead of corporate ARR",
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
    status: "Ready to Dispatch"
  },
  {
    id: "A4",
    tier: "A",
    firm: "Soryn IP Capital Management",
    location: "New York, NY",
    checkSize: "$5M – $40M",
    whyTheyFit: "Patent-centric financings. Michael Gulliford. Lives in claim value, not ARR or SaaS multiples.",
    howToWorkThem: "Pitch asset liquidation value and institutional Bitcoin market structure dominance.",
    pitchAngle: "Soryn's deep focus on high-stakes patent monetization and credit structuring",
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
    status: "Ready to Dispatch"
  },
  {
    id: "A5",
    tier: "A",
    firm: "ipCapital Group",
    location: "Williston, VT",
    checkSize: "Advisory & Syndication Network",
    whyTheyFit: "Lending-grade valuation + introductions. Use if a BDC demands their own secondary appraisal.",
    howToWorkThem: "Engage John Cronin for validation review and direct introductions to syndication partners.",
    pitchAngle: "ipCapital's institutional patent strategy and credit appraisal validation",
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
    status: "Ready to Dispatch"
  },

  // ================= TIER B: VENTURE DEBT & TECH BDCs =================
  {
    id: "B6",
    tier: "B",
    firm: "Hercules Capital (NYSE: HTGC)",
    location: "San Jose / Palo Alto, CA",
    checkSize: "$10M – $75M+",
    whyTheyFit: "Largest tech BDC. Senior secured debt specialist. IP in the package. Recent $25–50M software term loans.",
    howToWorkThem: "Lead with senior lien perfection, 2.8x stressed liquidation coverage, and $280M subordinated seller note.",
    pitchAngle: "Hercules' market-leading technology venture debt platform and senior secured structuring",
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
        title: "Managing Director, Tech Lending",
        email: "cfaloppa@htgc.com",
        isPrimary: false
      }
    ],
    status: "Ready to Dispatch"
  },
  {
    id: "B7",
    tier: "B",
    firm: "Trinity Capital (Nasdaq: TRIN)",
    location: "Phoenix / Chandler, AZ",
    checkSize: "$5M – $50M+",
    whyTheyFit: "Local Arizona HQ. Dedicated tech lending vertical. $6.2B deployed. Walk-in before cold PDFs.",
    howToWorkThem: "Engage local leadership (Kyle Brown & Ron Kundich). Propose executive briefing in Phoenix.",
    pitchAngle: "Trinity's Arizona presence and institutional venture debt track record",
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
    status: "Ready to Dispatch"
  },
  {
    id: "B8",
    tier: "B",
    firm: "Horizon Technology Finance (Nasdaq: HRZN)",
    location: "Farmington, CT",
    checkSize: "$5M – $50M",
    whyTheyFit: "Explicit IP collateral when claims are granted. 18–24 month IO structure matches their underwriting shape.",
    howToWorkThem: "Highlight the pre-funded 12-month interest reserve and granted USPTO claims.",
    pitchAngle: "Horizon's expertise in structuring senior term loans against granted patent portfolios",
    contacts: [
      {
        name: "Gerald A. Michaud",
        title: "President & Director",
        email: "gmichaud@horizontechfinance.com",
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
    tier: "B",
    firm: "WTI (Western Technology Investment)",
    location: "Portola Valley, CA",
    checkSize: "$2M – $25M+",
    whyTheyFit: "Oldest dedicated venture lender. Uses IP as principal risk-reducer. Quoted 8–12% when patents are real.",
    howToWorkThem: "Direct outreach to Maurice Werdegar. Pitch the senior loan as low-LTV asset-backed debt.",
    pitchAngle: "WTI's four-decade track record in asset-backed technology debt",
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
    tier: "B",
    firm: "TriplePoint Venture Growth (NYSE: TPVG)",
    location: "Menlo Park, CA",
    checkSize: "$5M – $50M",
    whyTheyFit: "Senior lien + IP pledge. 36–60 month tenor, IO front. Term sheet shape matches BYOND facility teaser.",
    howToWorkThem: "Focus on senior liquidation coverage and 10% senior slice against $300M total capital.",
    pitchAngle: "TriplePoint's bespoke structured growth capital and senior lien focus",
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
    tier: "B",
    firm: "Runway Growth Capital (Nasdaq: RWAY)",
    location: "Chicago / Silicon Valley",
    checkSize: "$10M – $75M",
    whyTheyFit: "Senior growth loans. Reserved IO year answers their credit committee cash-runway questions.",
    howToWorkThem: "Present the $3.6M pre-funded escrow reserve and 2.8x liquidation backstop.",
    pitchAngle: "Runway Growth's disciplined senior secured credit underwriting",
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
    tier: "B",
    firm: "Oxford Finance",
    location: "Alexandria, VA / CA",
    checkSize: "$10M – $75M+",
    whyTheyFit: "Tech and life-sci senior term debt. Decades of IP-heavy packages, often alongside a commercial bank.",
    howToWorkThem: "Highlight the conservative 6.5%–8.8% LTV and independent Teknos appraisal floor.",
    pitchAngle: "Oxford's extensive experience with asset-backed IP loan structures",
    contacts: [
      {
        name: "Kevin Witmer",
        title: "Senior Managing Director, Credit & Originating",
        email: "kwitmer@oxfordfinance.com",
        phone: "(703) 519-4900",
        isPrimary: true
      }
    ],
    status: "Queued"
  },
  {
    id: "B13",
    tier: "B",
    firm: "First Citizens Bank (Silicon Valley Bank Desk)",
    location: "Santa Clara, CA / National",
    checkSize: "$10M – $200M",
    whyTheyFit: "Inherited SVB venture-debt book. Premier bank that already understands tech + USPTO lien perfection.",
    howToWorkThem: "Offer as senior secured banking partner alongside a BDC co-lender.",
    pitchAngle: "SVB / First Citizens' technology credit infrastructure and IP perfection capabilities",
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
    tier: "B",
    firm: "Comerica Bank (Technology & Life Sciences)",
    location: "Dallas / San Jose / National",
    checkSize: "$5M – $40M",
    whyTheyFit: "Classic tech venture bank. Ideal club partner next to a BDC on the same first lien.",
    howToWorkThem: "Position as senior revolving or term facility with junior seller subordinated note.",
    pitchAngle: "Comerica TLS's conservative senior debt underwriting with robust collateral coverage",
    contacts: [
      {
        name: "Peter Szekely",
        title: "Executive Vice President & Head of TLS",
        email: "pszekely@comerica.com",
        phone: "(800) 521-1198",
        isPrimary: true
      }
    ],
    status: "Queued"
  },
  {
    id: "B15",
    tier: "B",
    firm: "CIBC Innovation Banking",
    location: "US / Canada / UK",
    checkSize: "$5M – $50M",
    whyTheyFit: "Tech debt platform. Clean senior structure + transparent use of proceeds ($18.9M / $3.6M / $7.5M).",
    howToWorkThem: "Pitch cross-border technology credit team with focus on institutional digital asset infrastructure.",
    pitchAngle: "CIBC Innovation Banking's specialized digital technology and IP credit mandate",
    contacts: [
      {
        name: "Paul Fuellemann",
        title: "Managing Director, Technology Lending",
        email: "paul.fuellemann@cibc.com",
        phone: "(416) 980-2222",
        isPrimary: true
      }
    ],
    status: "Queued"
  },

  // ================= TIER C: PRIVATE CREDIT & SPECIALTY LENDERS =================
  {
    id: "C16",
    tier: "C",
    firm: "Blue Owl Technology Finance",
    location: "New York / Silicon Valley",
    checkSize: "$25M – $250M+",
    whyTheyFit: "Dedicated tech private credit. $30M is an easy single-ticket hold, not a syndication club.",
    howToWorkThem: "Approach software and digital infrastructure credit team. Lead with Teknos $460M valuation ceiling.",
    pitchAngle: "Blue Owl's institutional private credit scale and asset-backed flexibility",
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
    tier: "C",
    firm: "Ares Management (Mid-Market Credit)",
    location: "New York / Los Angeles",
    checkSize: "$20M – $100M",
    whyTheyFit: "Massive software-debt book. Target the mid-market originator, not the mega unitranche desk.",
    howToWorkThem: "Present as asset-backed special situations acquisition with deep seller paper behind it.",
    pitchAngle: "Ares' mid-market credit flexibility and asset recovery underwriting",
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
    tier: "C",
    firm: "Sixth Street (Specialty Lending)",
    location: "San Francisco / New York",
    checkSize: "$25M – $150M",
    whyTheyFit: "Tech and specialty credit leader. Highly creative around IP and structural downside protection.",
    howToWorkThem: "Highlight the non-custodial Bitcoin settlement IP and $85M stressed liquidation coverage.",
    pitchAngle: "Sixth Street's proprietary capital solutions and deep patent credit underwriting",
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
    tier: "C",
    firm: "Golub Capital",
    location: "New York / Chicago",
    checkSize: "$15M – $75M",
    whyTheyFit: "High-volume middle-market software credit. Acquisition facilities are core business.",
    howToWorkThem: "Pitch the 18-month IO, pre-funded interest reserve, and 10% senior loan-to-enterprise-value ratio.",
    pitchAngle: "Golub's structured sponsor acquisition debt and senior secured underwriting",
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
    tier: "C",
    firm: "White Oak Global Advisors",
    location: "San Francisco, CA",
    checkSize: "$10M – $250M",
    whyTheyFit: "Specialty / ABL mindset. Evaluates and prices a valued patent estate like hard asset collateral.",
    howToWorkThem: "Present Teknos valuation and USPTO first-priority lien perfection.",
    pitchAngle: "White Oak's asset-based lending approach to intangible assets and intellectual property",
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
    tier: "C",
    firm: "North Atlantic Capital",
    location: "Portland, ME",
    checkSize: "$5M – $20M",
    whyTheyFit: "Software growth / mezzanine credit. Use as co-lender if a senior shop desires club risk sharing.",
    howToWorkThem: "Position as subordinate or split-ticket credit partner alongside lead BDC.",
    pitchAngle: "North Atlantic's high-touch tech credit syndication and growth debt solutions",
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
    tier: "C",
    firm: "Montage Partners",
    location: "Scottsdale, AZ",
    checkSize: "$10M – $40M",
    whyTheyFit: "Local Arizona structured private equity and junior capital. Use for AZ local partner or intro.",
    howToWorkThem: "In-person meeting in Scottsdale. Position as strategic junior capital or advisor bridge.",
    pitchAngle: "Montage's Scottsdale presence and flexible capital structuring for proprietary IP",
    contacts: [
      {
        name: "Jordan Bastable",
        title: "Co-Founder & Managing Partner",
        email: "jbastable@montagepartners.com",
        phone: "(480) 214-7220",
        isPrimary: true
      }
    ],
    status: "Queued"
  },
  {
    id: "C23",
    tier: "C",
    firm: "HSBC Innovation Banking",
    location: "New York / London / National",
    checkSize: "$10M – $50M",
    whyTheyFit: "Global bank tech-debt platform. Competes directly with First Citizens / CIBC for high-profile IP.",
    howToWorkThem: "Pitch international tech credit desk with focus on global Bitcoin institutional settlements.",
    pitchAngle: "HSBC's international corporate banking reach and institutional digital asset platform",
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
    tier: "C",
    firm: "Banc of California (PWB Tech Debt)",
    location: "Los Angeles / San Diego / San Jose",
    checkSize: "$10M – $40M",
    whyTheyFit: "Legacy Square 1 / Pacific Western venture debt book. Seasoned technology term lenders.",
    howToWorkThem: "Highlight the $3.6M pre-funded escrow reserve and strong first-lien patent security.",
    pitchAngle: "Banc of California's dedicated venture banking and asset-backed credit team",
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
    tier: "C",
    firm: "Vistara Growth",
    location: "Vancouver / Toronto / US",
    checkSize: "$5M – $30M",
    whyTheyFit: "Hungrier growth-debt shop. Excellent for generating competitive term-sheet tension and fast pace.",
    howToWorkThem: "Approach investment committee with dual-track senior secured proposal.",
    pitchAngle: "Vistara's flexible technology growth debt and founder-friendly capital structures",
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
