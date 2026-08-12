export interface Company {
  id: string;
  name: string;
  tagline: string;
  description: string;
  url: string;
  route: string;
  icon: string;
  color: string;
  gradient: string;
  category: string;
  services: string[];
  about: string;
  portfolio: PortfolioItem[];
  contactEmail: string;
}

export interface PortfolioItem {
  title: string;
  description: string;
  tags: string[];
}

export const companies: Company[] = [
  {
    id: 'labs',
    name: 'RigStorm Labs',
    tagline: 'Precision Builds. Maximum Power.',
    description: 'PC builds, repairs, upgrades, OS installs. Custom rigs engineered for performance.',
    url: 'http://www.rigstormlabs.linkpc.net',
    route: '/labs',
    icon: '⚡',
    color: 'electric-500',
    gradient: 'from-blue-600 to-cyan-400',
    category: 'Hardware',
    services: [
      'Custom PC Builds',
      'Hardware Repairs & Diagnostics',
      'Component Upgrades',
      'OS Installation & Configuration',
      'Performance Optimization',
      'Liquid Cooling Solutions'
    ],
    about: 'RigStorm Labs is the hardware powerhouse of the RigStorm ecosystem. We design, build, and optimize custom PC rigs for gamers, creators, and professionals. Every build is engineered for maximum performance and reliability, backed by expert diagnostics and lifetime support.',
    portfolio: [
      { title: 'Titan X Pro Build', description: 'High-end workstation with dual GPU setup for 3D rendering and AI workloads.', tags: ['Workstation', 'Dual GPU', 'Custom Loop'] },
      { title: 'Storm Racer MK3', description: 'Competition-grade gaming rig with sub-5ms response times and RGB storm aesthetic.', tags: ['Gaming', 'RGB', 'Overclocked'] },
      { title: 'Silent Phantom', description: 'Ultra-quiet workstation build with passive cooling and noise-dampened chassis.', tags: ['Silent', 'Passive Cooling', 'Productivity'] },
      { title: 'Budget Thunder', description: 'High-performance budget build delivering 1080p 144fps gaming under $800.', tags: ['Budget', 'Value', '1080p'] },
    ],
    contactEmail: 'rigstormlabs@gmail.com'
  },
  {
    id: 'sitemarket',
    name: 'RigStorm SiteMarket',
    tagline: 'Websites That Work. Brands That Convert.',
    description: 'Web development agency crafting cutting-edge websites and applications.',
    url: 'http://www.rigstormsitemarket.linkpc.net',
    route: '/sitemarket',
    icon: '🌐',
    color: 'purple-500',
    gradient: 'from-purple-600 to-pink-400',
    category: 'Web Development',
    services: [
      'Custom Website Development',
      'E-Commerce Solutions',
      'Web Application Development',
      'UI/UX Design',
      'SEO Optimization',
      'Maintenance & Support'
    ],
    about: 'RigStorm SiteMarket is the digital arm of RigStorm, specializing in web development that converts visitors into customers. From sleek landing pages to complex web applications, we build digital experiences that drive results.',
    portfolio: [
      { title: 'LuxeRealty Platform', description: 'Full-stack real estate platform with virtual tours, integrated with LandAura services.', tags: ['React', 'Node.js', 'Real Estate'] },
      { title: 'StormDash Analytics', description: 'Real-time analytics dashboard for AdStorm marketing campaigns.', tags: ['Dashboard', 'D3.js', 'Analytics'] },
      { title: 'FreshBite App', description: 'Restaurant ordering PWA with real-time tracking, built for Zeyora delivery network.', tags: ['PWA', 'Mobile-First', 'Delivery'] },
      { title: 'Brand Showcase CMS', description: 'Custom CMS for SkyED clients to manage brand assets and campaigns.', tags: ['CMS', 'Branding', 'Headless'] },
    ],
    contactEmail: 'rigstormlabs@gmail.com'
  },
  {
    id: 'skyed',
    name: 'SkyED',
    tagline: 'Elevate Your Brand Identity.',
    description: 'Branding agency delivering campaign showcases and brand identity projects.',
    url: 'http://www.skyed.run.place',
    route: '/skyed',
    icon: '🎨',
    color: 'amber-500',
    gradient: 'from-amber-500 to-orange-400',
    category: 'Branding',
    services: [
      'Brand Identity Design',
      'Logo & Visual Systems',
      'Campaign Strategy',
      'Social Media Branding',
      'Brand Guidelines',
      'Rebranding Services'
    ],
    about: 'SkyED is a creative branding agency that elevates businesses through powerful visual identities. We craft brand stories that resonate, design visual systems that stand out, and build campaign strategies that connect with audiences. Our work powers the visual identity of AdStorm campaigns.',
    portfolio: [
      { title: 'NovaTech Rebrand', description: 'Complete visual identity overhaul for a tech startup, increasing brand recognition by 340%.', tags: ['Rebrand', 'Tech', 'Identity'] },
      { title: 'GreenPulse Campaign', description: 'Sustainability-focused brand campaign with 2M+ social media impressions.', tags: ['Campaign', 'Sustainability', 'Social'] },
      { title: 'StormWear Collection', description: 'Streetwear brand identity with bold typography and storm-inspired graphics.', tags: ['Fashion', 'Typography', 'Streetwear'] },
      { title: 'UrbanBite Identity', description: 'Restaurant chain branding with cohesive packaging and environmental design.', tags: ['Food', 'Packaging', 'Environmental'] },
    ],
    contactEmail: 'rigstormlabs@gmail.com'
  },
  {
    id: 'landaura',
    name: 'RigStorm LandAura',
    tagline: 'Real Estate, Reimagined.',
    description: 'Real estate listings, pricing tools, and digital land showcase platform.',
    url: 'http://www.landaura.run.place',
    route: '/landaura',
    icon: '🏠',
    color: 'emerald-500',
    gradient: 'from-emerald-500 to-teal-400',
    category: 'Real Estate',
    services: [
      'Property Listings Platform',
      'Virtual Property Tours',
      'Market Pricing Analysis',
      'Digital Land Showcases',
      'Investment Analytics',
      'Property Management Tools'
    ],
    about: 'RigStorm LandAura transforms real estate with digital-first tools and immersive property showcases. From virtual tours to AI-powered pricing analysis, we make property discovery seamless. Our marketing campaigns are powered by AdStorm for maximum reach.',
    portfolio: [
      { title: 'Metro Heights Showcase', description: 'Virtual walkthrough experience for a 200-unit luxury apartment complex.', tags: ['Virtual Tour', 'Luxury', 'Residential'] },
      { title: 'InvestorPulse Dashboard', description: 'Real-time market analytics platform for property investors.', tags: ['Analytics', 'Investment', 'Dashboard'] },
      { title: 'Coastal Villas Collection', description: 'Digital showcase with drone photography and interactive floor plans.', tags: ['Drone', 'Interactive', 'Premium'] },
      { title: 'SmartPrice Engine', description: 'AI-powered property valuation tool processing 50K+ data points.', tags: ['AI', 'Valuation', 'Data'] },
    ],
    contactEmail: 'rigstormlabs@gmail.com'
  },
  {
    id: 'zeyora',
    name: 'RigStorm Zeyora',
    tagline: 'Delivering the Future.',
    description: 'Delivery service app concept with workflow diagrams and prototype previews.',
    url: 'http://www.zeyora.run.place',
    route: '/zeyora',
    icon: '🚀',
    color: 'rose-500',
    gradient: 'from-rose-500 to-red-400',
    category: 'Delivery',
    services: [
      'On-Demand Delivery Platform',
      'Fleet Management System',
      'Route Optimization',
      'Real-Time Tracking',
      'Merchant Integration',
      'Customer Experience Design'
    ],
    about: 'RigStorm Zeyora is reimagining last-mile delivery with intelligent routing, real-time tracking, and seamless merchant integration. Our platform concept connects businesses with customers through a premium delivery experience powered by cutting-edge logistics technology.',
    portfolio: [
      { title: 'Zeyora App Prototype', description: 'Full interactive prototype with real-time tracking, driver assignment, and customer notifications.', tags: ['Prototype', 'Mobile', 'UX'] },
      { title: 'SmartRoute Engine', description: 'AI-powered route optimization reducing delivery times by 35%.', tags: ['AI', 'Logistics', 'Optimization'] },
      { title: 'Merchant Portal', description: 'Dashboard for merchants to manage orders, track deliveries, and analyze performance.', tags: ['Dashboard', 'B2B', 'Analytics'] },
      { title: 'Fleet Tracker', description: 'Real-time fleet management system with geofencing and driver analytics.', tags: ['GPS', 'Fleet', 'Real-Time'] },
    ],
    contactEmail: 'rigstormlabs@gmail.com'
  },
  {
    id: 'adstorm',
    name: 'AdStorm',
    tagline: 'Campaigns That Strike.',
    description: 'Digital marketing campaigns, ad analytics dashboards, and growth strategies.',
    url: 'http://www.adstorm.run.place',
    route: '/adstorm',
    icon: '📊',
    color: 'cyan-500',
    gradient: 'from-cyan-400 to-blue-500',
    category: 'Marketing',
    services: [
      'Digital Ad Campaigns',
      'Social Media Marketing',
      'Analytics & Reporting',
      'SEO & SEM Strategy',
      'Content Marketing',
      'Influencer Partnerships'
    ],
    about: 'AdStorm delivers high-impact digital marketing campaigns that drive measurable results. From social media blitzes to precision-targeted ad campaigns, we help brands reach their audience. Our creative assets are crafted by SkyED branding for visual consistency.',
    portfolio: [
      { title: 'StormReach Campaign', description: 'Multi-platform ad campaign generating 5M+ impressions and 12% conversion rate.', tags: ['Multi-Platform', 'High ROI', 'Performance'] },
      { title: 'LandAura Launch', description: 'Launch campaign for LandAura real estate platform, achieving 200% user growth.', tags: ['Launch', 'Real Estate', 'Growth'] },
      { title: 'ViralPulse Strategy', description: 'Influencer-driven campaign with 50+ content creators, reaching 10M+ users.', tags: ['Influencer', 'Viral', 'Social'] },
      { title: 'DataStorm Dashboard', description: 'Real-time campaign analytics dashboard with predictive performance modeling.', tags: ['Analytics', 'Predictive', 'Dashboard'] },
    ],
    contactEmail: 'rigstormlabs@gmail.com'
  }
];

export const serviceCategories = [
  'Hardware',
  'Branding',
  'Web Development',
  'Real Estate',
  'Delivery',
  'Marketing'
] as const;

export const timelineEvents = [
  { year: '2020', title: 'RigStorm Labs Founded', description: 'Started as a custom PC building service from a small garage workshop.' },
  { year: '2021', title: 'SiteMarket Launch', description: 'Expanded into web development, building digital experiences for local businesses.' },
  { year: '2022', title: 'SkyED & AdStorm Born', description: 'Launched branding and digital marketing arms to serve growing client needs.' },
  { year: '2023', title: 'LandAura Enters Real Estate', description: 'Digital real estate platform launched with virtual tours and pricing tools.' },
  { year: '2024', title: 'Zeyora Delivery Concept', description: 'Delivery service app concept developed with AI-powered route optimization.' },
  { year: '2025', title: 'RigStorm Hub Unified', description: 'All ventures unified under RigStorm Hub – one centralized innovation center.' },
];

export const projects = [
  {
    id: 'titan-build',
    title: 'Titan X Pro Build',
    company: 'RigStorm Labs',
    companyRoute: '/labs',
    description: 'High-end dual-GPU workstation for 3D rendering and AI training workflows.',
    status: 'Completed',
    tags: ['Hardware', 'Custom Build', 'AI'],
    deepDive: 'The Titan X Pro features dual NVIDIA RTX 4090 GPUs, 128GB DDR5 RAM, custom liquid cooling loop with hardline tubing, and a custom storm-themed chassis with integrated LED effects. Built for a VFX studio processing 8K footage.'
  },
  {
    id: 'landaura-platform',
    title: 'LandAura Digital Platform',
    company: 'RigStorm LandAura',
    companyRoute: '/landaura',
    description: 'Full-stack real estate platform with virtual tours and AI-powered pricing.',
    status: 'Ongoing',
    tags: ['Web App', 'Real Estate', 'AI'],
    deepDive: 'LandAura\'s platform integrates 360° virtual tours, drone photography, AI-powered property valuation, and real-time market analytics. The platform processes 50K+ data points for accurate pricing. Marketing powered by AdStorm campaigns.'
  },
  {
    id: 'zeyora-prototype',
    title: 'Zeyora App Prototype',
    company: 'RigStorm Zeyora',
    companyRoute: '/zeyora',
    description: 'Delivery service app with real-time tracking and intelligent route optimization.',
    status: 'In Development',
    tags: ['Mobile App', 'Delivery', 'AI'],
    deepDive: 'Zeyora prototype features real-time GPS tracking, AI-powered route optimization reducing delivery times by 35%, merchant portal integration, and customer notification system. UI/UX designed by SiteMarket, branding by SkyED.'
  },
  {
    id: 'stormreach-campaign',
    title: 'StormReach Marketing Campaign',
    company: 'AdStorm',
    companyRoute: '/adstorm',
    description: 'Multi-platform digital ad campaign with 5M+ impressions.',
    status: 'Completed',
    tags: ['Marketing', 'Ads', 'Analytics'],
    deepDive: 'StormReach leveraged multi-platform advertising across Meta, Google, and TikTok, achieving 5M+ impressions and 12% conversion rate. Creative assets designed by SkyED branding team. Analytics tracked through custom DataStorm dashboard.'
  },
  {
    id: 'novatech-rebrand',
    title: 'NovaTech Complete Rebrand',
    company: 'SkyED',
    companyRoute: '/skyed',
    description: 'Full visual identity overhaul increasing brand recognition by 340%.',
    status: 'Completed',
    tags: ['Branding', 'Identity', 'Campaign'],
    deepDive: 'Complete brand transformation including new logo system, typography, color palette, brand guidelines, and launch campaign. Digital assets deployed across 15 platforms. Marketing rollout executed by AdStorm.'
  },
  {
    id: 'sitemarket-cms',
    title: 'StormCMS Platform',
    company: 'RigStorm SiteMarket',
    companyRoute: '/sitemarket',
    description: 'Headless CMS platform for managing brand assets and content.',
    status: 'Ongoing',
    tags: ['Web Dev', 'CMS', 'Platform'],
    deepDive: 'Custom headless CMS built with Next.js and Sanity, enabling SkyED clients to manage brand assets, deploy content across channels, and track engagement metrics. Features AI-powered content suggestions and automated A/B testing.'
  },
];
