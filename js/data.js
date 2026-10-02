/* ============================================================
   RIGSTORM HUB — central data layer
   All company cards, profiles, people, projects and resources
   consume this file. Edit data here; UI updates everywhere.
   No URLs are invented here — only verified links are listed.
   ============================================================ */
"use strict";

const HUB_DATA = {
  group: {
    name: "RigStorm Group of Companies",
    statement: "One Group. Multiple Ventures. One Direction.",
    description:
      "RigStorm Group is an expanding ecosystem of independent but connected ventures across technology, digital services, real estate, logistics, branding and marketing. RigStorm Hub brings that ecosystem together in one central experience.",
    contact: ["rigstormlabs@gmail.com", "support.rigstorm@gmail.com"]
  },

  companies: [
    {
      id: "rigstorm-labs",
      name: "RigStorm Labs",
      short: "Labs",
      monogram: "RL",
      hasLogo: true,
      logo: "assets/logo.png",
      category: "Technology",
      status: "Active",
      tagline: "Power Your Game, Build Your Storm.",
      positioning:
        "RigStorm Labs focuses on practical technology solutions, helping people build, maintain and improve their computing systems.",
      description:
        "Technology solutions across PC building, repair, upgrades, optimization and related services.",
      about:
        "RigStorm Labs is the technology-focused company within RigStorm Group. It focuses on practical technology solutions — helping people build, maintain and improve their computing systems, from gaming technology and hardware solutions to technical guidance and ongoing maintenance.",
      services: [
        "PC building",
        "PC repair",
        "PC upgrades",
        "PC optimization",
        "PC maintenance",
        "Hardware solutions",
        "Gaming technology",
        "Technology services",
        "Technical guidance"
      ],
      website: "https://rigstormlabs.linkpc.net",
      websiteNote: "Official domain — currently unavailable, being fixed separately.",
      temporaryWebsite: "https://rigstorm-labs.github.io/RigStorm-Labs/",
      social: {
        instagram: "https://instagram.com/rigstorm_labs",
        instagramHandle: "@rigstorm_labs",
        youtube: "https://youtube.com/@RigStormLabs",
        youtubeHandle: "@RigStormLabs"
      },
      featured: true
    },
    {
      id: "sitemarket",
      name: "RigStorm SiteMarket",
      short: "SiteMarket",
      monogram: "SM",
      hasLogo: true,
      logo: "assets/logos/SiteMarketLight.png",
      category: "Digital Services",
      status: "Active",
      tagline: "Modern websites for modern business.",
      positioning:
        "SiteMarket is a digital venture of RigStorm Group — helping businesses and organizations establish and improve their digital presence.",
      description:
        "Business websites, landing pages, web applications and custom digital products.",
      about:
        "RigStorm SiteMarket is the digital-services and website-building venture within RigStorm Group. It helps businesses and organizations establish and improve their digital presence through modern websites and digital products — from landing pages and e-commerce to full-stack web applications and CRM systems.",
      services: [
        "Business websites",
        "Landing pages",
        "Digital presence",
        "Web applications",
        "Full-stack development",
        "E-commerce",
        "CRM systems",
        "Custom digital products",
        "Website solutions"
      ],
      website: "https://rigstormsitemarket.linkpc.net/",
      websiteNote: "",
      temporaryWebsite: "",
      social: {},
      featured: true
    },
    {
      id: "landaura",
      name: "RigStorm LandAura",
      short: "LandAura",
      monogram: "LA",
      hasLogo: true,
      logo: "assets/logos/LandAuraLogo.png",
      category: "Real Estate",
      status: "Active",
      tagline: "Discover property with direction.",
      positioning:
        "LandAura is RigStorm's real-estate-focused venture — a dedicated property presence within the ecosystem.",
      description:
        "Property discovery, listings and investment-oriented real-estate research.",
      about:
        "LandAura is RigStorm's real-estate-focused venture. It is intended to create a dedicated real-estate presence within the RigStorm ecosystem — covering property discovery, listings, land and property exploration, and ROI-oriented property research.",
      services: [
        "Property discovery",
        "Real estate opportunities",
        "Property listings",
        "Land and property exploration",
        "Investment-oriented property information",
        "Real estate analysis",
        "ROI-oriented property research"
      ],
      website: "https://landaura.run.place",
      websiteNote: "",
      temporaryWebsite: "",
      social: {},
      featured: false
    },
    {
      id: "zeyora",
      name: "RigStorm Zeyora",
      short: "Zeyora",
      monogram: "Z",
      hasLogo: true,
      logo: "assets/logos/ZeyoraLogo.png",
      category: "Logistics",
      status: "In Development",
      tagline: "Local delivery, done right.",
      positioning:
        "Zeyora is RigStorm's logistics and local delivery venture — designed around localized, hyperlocal delivery operations.",
      description:
        "Hyperlocal logistics and last-mile delivery for local commerce.",
      about:
        "Zeyora is RigStorm's logistics and local delivery venture. It is designed around localized delivery operations, initially focused on a small geographic operating area, with future logistics technology supporting efficient last-mile delivery. Zeyora is currently in development — not yet a fully established operation.",
      services: [
        "Local delivery",
        "Hyperlocal logistics",
        "Delivery services",
        "Local commerce infrastructure",
        "Future logistics technology",
        "Efficient last-mile delivery"
      ],
      website: "https://zeyora.run.place",
      websiteNote: "",
      temporaryWebsite: "",
      social: {},
      featured: false
    },
    {
      id: "skyed",
      name: "SkyED",
      short: "SkyED",
      monogram: "SE",
      hasLogo: true,
      logo: "assets/logos/SkyED_Logo.png",
      category: "Branding",
      status: "Active",
      tagline: "Identity for what's next.",
      positioning:
        "SkyED is a RigStorm-associated venture focused on startup and branding services.",
      description:
        "Startup branding, brand identity and early-stage venture support.",
      about:
        "SkyED is a RigStorm-associated venture focused on startup and branding services — covering startup branding, brand identity, creative direction, business identity and early-stage venture support.",
      services: [
        "Startup branding",
        "Brand identity",
        "Creative direction",
        "Business identity",
        "Early-stage venture support"
      ],
      website: "https://skyed.run.place",
      websiteNote: "",
      temporaryWebsite: "",
      social: {},
      featured: false
    },
    {
      id: "adstorm",
      name: "RigStorm AdStorm",
      short: "AdStorm",
      monogram: "AS",
      hasLogo: true,
      logo: "assets/logos/AdStormLogo.jpg",
      category: "Marketing",
      status: "Active",
      tagline: "Growth, engineered.",
      positioning:
        "AdStorm is RigStorm's marketing-focused venture — built for brand promotion and growth.",
      description:
        "Digital marketing, advertising and growth-focused campaign development.",
      about:
        "AdStorm is RigStorm's marketing-focused venture — covering digital marketing, advertising, brand promotion, marketing strategy, growth initiatives, campaign development and creative marketing.",
      services: [
        "Digital marketing",
        "Advertising",
        "Brand promotion",
        "Marketing strategy",
        "Growth initiatives",
        "Campaign development",
        "Creative marketing"
      ],
      website: "https://adstorm.run.place",
      websiteNote: "",
      temporaryWebsite: "",
      social: {},
      featured: false
    }
  ],

  categories: [
    { name: "Technology", description: "Computing systems, hardware and hands-on technical services." },
    { name: "Digital Services", description: "Websites, web applications and custom digital products." },
    { name: "Real Estate", description: "Property discovery, listings and investment-oriented research." },
    { name: "Logistics", description: "Hyperlocal delivery and last-mile commerce infrastructure." },
    { name: "Marketing", description: "Advertising, brand promotion and growth initiatives." },
    { name: "Branding", description: "Startup identity, creative direction and brand systems." }
  ],

  people: {
    group: [
      { name: "Abdul Shihab Ansari", role: "CEO", scope: "RigStorm Group", description: "Founder and overall leader of RigStorm Group of Companies." },
      { name: "Muhammad Fahim", role: "Executive Director", scope: "RigStorm Group", description: "Supports Group-level direction, coordination and execution across RigStorm initiatives." },
      { name: "Hasan", role: "Marketing & Social Media Director", scope: "RigStorm Group", description: "Responsible for marketing, social media presence, content direction and digital promotion across the Group." },
      { name: "Fadhil", role: "Marketing Coordinator", scope: "RigStorm Group", description: "Supports marketing coordination and execution across RigStorm initiatives." },
      { name: "Faizan", role: "Operations & Logistics Coordinator", scope: "RigStorm Group", description: "Supports physical operations, logistics and execution-related activities." },
      { name: "Farhan", role: "Brand Ambassador", scope: "RigStorm Group", description: "Represents and promotes the RigStorm Group brand publicly." },
      { name: "Zaeem", role: "Media & Content Coordinator", scope: "RigStorm Group", description: "Supports media, content and related creative activities for RigStorm." },
      { name: "Ihsan", role: "Marketing & Outreach Assistant", scope: "RigStorm Group", description: "Supports marketing, outreach and related promotional activities." },
      { name: "Mirzhan", role: "Associate Director", scope: "RigStorm Group" },
      { name: "Hanoona", role: "Ambassador Director", scope: "RigStorm Group" }
    ],
    zeyora: [
      { name: "Muhsin", role: "Chief Marketing Director", scope: "Zeyora", description: "Responsible for marketing direction and promotional activities specifically for Zeyora." },
      { name: "Aasil", role: "Chief Administrative Executive", scope: "Zeyora", description: "Responsible for administrative coordination and related organizational activities specifically for Zeyora." }
    ]
  },

  /* Group projects will be listed here when announced.
     Nothing is invented — an empty array renders a designed
     empty state describing what this section will contain. */
  projects: [],

  projectStreams: [
    "Active projects",
    "Upcoming projects",
    "Experiments",
    "Group initiatives",
    "Cross-company projects"
  ]
};
