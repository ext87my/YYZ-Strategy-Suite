
import { Product, BattleStatus } from './types';

export const COUNTRIES = [
  "United States", "China", "Japan", "Germany", "United Kingdom", "India", "France", "Italy", "Brazil", "Canada", "South Korea", "Russia", "Australia", "Spain", "Mexico"
];

const YPHONE_MOCK: Product = {
  id: 'yphone',
  productInfo: {
    name: 'YPhone',
    description: 'The YPhone is a revolutionary smartphone that combines cutting-edge technology with an intuitive user interface, designed to seamlessly integrate into your daily life. It boasts a stunning display, a powerful processor, and a pro-grade camera system.',
    businessUnit: 'Mobile Devices',
    aspiration: 'To be the market leader in the premium smartphone segment by delivering unparalleled user experience, innovation, and ecosystem integration. We aim to capture 35% market share in our key target markets within the next 3 years.',
    imageUrl: 'https://picsum.photos/seed/yphone/800/600',
  },
  financialInfo: {
    pastRevenue: [120, 150, 180], // in millions
    forecastRevenue: [
      { conservative: 200, realistic: 210, ambitious: 220 },
      { conservative: 230, realistic: 250, ambitious: 270 },
      { conservative: 260, realistic: 290, ambitious: 320 },
    ],
    pastEbit: [24, 30, 36], // in millions
    forecastEbit: [
      { conservative: 40, realistic: 42, ambitious: 44 },
      { conservative: 46, realistic: 50, ambitious: 54 },
      { conservative: 52, realistic: 58, ambitious: 64 },
    ],
    description: 'Revenue has shown strong year-over-year growth of 25%, driven by new model launches and expansion into emerging markets. EBIT margins have remained stable at 20%. Forecasts predict continued growth, with ambitious targets relying on successful penetration of the enterprise market.',
  },
  mustWinBattles: [
    { id: 'mwb1', title: 'Launch YPhone Pro Max', description: 'Successfully launch the new flagship model with advanced camera features to compete with top-tier competitors.', salesImpact: 50, ebitImpact: 15, targetDate: '2024-12-31', responsible: 'Jane Doe', status: BattleStatus.InProgress },
    { id: 'mwb2', title: 'Expand Carrier Partnerships in EU', description: 'Secure partnerships with 3 major EU carriers to increase distribution channels and market reach.', salesImpact: 30, ebitImpact: 5, targetDate: '2025-06-30', responsible: 'John Smith', status: BattleStatus.InProgress },
    { id: 'mwb3', title: 'Achieve #1 in Customer Satisfaction', description: 'Improve customer support and device reliability to achieve top ranking in major customer satisfaction surveys.', salesImpact: 10, ebitImpact: 2, targetDate: '2024-09-30', responsible: 'Emily White', status: BattleStatus.Success },
  ],
  marketInfo: {
    definition: 'The global premium smartphone market, defined as devices with a retail price above $800.',
    growthPotential: 'The market is projected to grow at a CAGR of 6% over the next 5 years, driven by 5G adoption, advancements in foldable technology, and increasing consumer demand for high-performance devices. Significant potential exists in upselling existing customers and capturing switchers from competing ecosystems.',
    topCustomers: [
      { id: 'cust1', name: 'Global Telecom Inc.', salesLastFY: 50, percentageOfTotal: 27.8 },
      { id: 'cust2', name: 'TechRetail Corp.', salesLastFY: 35, percentageOfTotal: 19.4 },
      { id: 'cust3', name: 'Connecta Wireless', salesLastFY: 25, percentageOfTotal: 13.9 },
    ],
  },
  competitorLandscape: {
    topCompetitors: [
      { id: 'comp1', name: 'AlphaPhone', hqLocation: 'United States', sales: 250, marketShare: 30, strategy: 'Focus on ecosystem lock-in and brand loyalty. High-end marketing and premium branding.', latestMove: 'Launched a new AR-focused software update.' },
      { id: 'comp2', name: 'Galaxy Stellar', hqLocation: 'South Korea', sales: 220, marketShare: 26, strategy: 'Wide range of products at different price points. Pushing innovation in display technology (foldables).', latestMove: 'Announced a partnership with a major camera lens manufacturer.' },
      { id: 'comp3', name: 'PixelPerfect', hqLocation: 'United States', sales: 90, marketShare: 11, strategy: 'Leverage AI and software superiority, particularly in photography. Deep integration with their software services.', latestMove: 'Offered aggressive trade-in programs.' },
      { id: 'comp4', name: 'Nova Mobile', hqLocation: 'China', sales: 85, marketShare: 10, strategy: 'Aggressive pricing and feature-rich hardware. Rapid international expansion.', latestMove: 'Released a phone with ultra-fast charging technology.' },
      { id: 'comp5', name: 'Zenith Devices', hqLocation: 'Japan', sales: 60, marketShare: 7, strategy: 'Focus on durability, battery life, and unique design aesthetics for a niche market.', latestMove: 'Partnered with a luxury fashion brand for a special edition model.' },
    ],
  },
};

const YTABLET_MOCK: Product = {
  id: 'ytablet',
  productInfo: {
    name: 'YTablet',
    description: 'The YTablet is a versatile and powerful tablet designed for both productivity and entertainment. With its brilliant display, long-lasting battery, and support for the Y-Pencil, it is the ultimate tool for creatives and professionals.',
    businessUnit: 'Computing Devices',
    aspiration: 'Dominate the creative professional tablet market and establish a strong foothold in the education sector. Our goal is to be the #1 choice for digital artists and a top 3 provider for educational institutions globally.',
    imageUrl: 'https://picsum.photos/seed/ytablet/800/600',
  },
  financialInfo: {
    pastRevenue: [80, 95, 110], // in millions
    forecastRevenue: [
      { conservative: 120, realistic: 125, ambitious: 135 },
      { conservative: 130, realistic: 145, ambitious: 160 },
      { conservative: 140, realistic: 160, ambitious: 180 },
    ],
    pastEbit: [12, 15, 18], // in millions
    forecastEbit: [
      { conservative: 20, realistic: 22, ambitious: 25 },
      { conservative: 22, realistic: 26, ambitious: 30 },
      { conservative: 25, realistic: 30, ambitious: 36 },
    ],
    description: 'YTablet sales have grown steadily, fueled by the rise of remote work and digital learning. The introduction of the Pro model last year boosted average selling price. EBIT margins are healthy but face pressure from rising component costs.',
  },
  mustWinBattles: [
    { id: 'mwb1', title: 'Launch Education Software Suite', description: 'Develop and launch a suite of educational apps to increase adoption in schools and universities.', salesImpact: 20, ebitImpact: 4, targetDate: '2025-03-31', responsible: 'David Chen', status: BattleStatus.InProgress },
    { id: 'mwb2', title: 'Y-Pencil Gen 3 Launch', description: 'Release the next-generation stylus with lower latency and new haptic feedback features for artists.', salesImpact: 15, ebitImpact: 5, targetDate: '2024-11-15', responsible: 'Sophia Rodriguez', status: BattleStatus.InProgress },
    { id: 'mwb3', title: 'Enterprise Productivity Push', description: 'Secure 10 major enterprise clients for our new "Tablet as a Laptop" replacement program.', salesImpact: 25, ebitImpact: 6, targetDate: '2025-09-30', responsible: 'Michael Brown', status: BattleStatus.Failed },
  ],
  marketInfo: {
    definition: 'The global market for tablets with a screen size over 9 inches, including consumer, prosumer, and enterprise segments.',
    growthPotential: 'While the overall tablet market is mature, the prosumer and enterprise segments show significant growth potential. The shift towards hybrid work models and digital content creation is expected to sustain demand for high-performance tablets. The education sector also remains a key growth area.',
    topCustomers: [
      { id: 'cust1', name: 'Creative Software Co.', salesLastFY: 20, percentageOfTotal: 18.2 },
      { id: 'cust2', name: 'National School District', salesLastFY: 15, percentageOfTotal: 13.6 },
      { id: 'cust3', name: 'Big Box Electronics', salesLastFY: 12, percentageOfTotal: 10.9 },
    ],
  },
  competitorLandscape: {
    topCompetitors: [
      { id: 'comp1', name: 'AlphaPad', hqLocation: 'United States', sales: 300, marketShare: 55, strategy: 'Dominant ecosystem player, focuses on premium hardware and a vast app library.', latestMove: 'Introduced a new "Magic Keyboard" accessory.' },
      { id: 'comp2', name: 'Tab-Galaxy', hqLocation: 'South Korea', sales: 150, marketShare: 27, strategy: 'Offers high-end OLED displays and includes a stylus with every device. Strong in the Android market.', latestMove: 'Launched a ruggedized version for industrial use.' },
      { id: 'comp3', name: 'Surface Pro', hqLocation: 'United States', sales: 80, marketShare: 15, strategy: 'Positions as a laptop replacement running a full desktop OS. Targets productivity and enterprise users.', latestMove: 'Announced 5G connectivity for all new models.' },
      { id: 'comp4', name: 'PadFire', hqLocation: 'United States', sales: 15, marketShare: 3, strategy: 'Low-cost device, deeply integrated with their content ecosystem. Targets media consumption.', latestMove: 'Updated their kids-focused subscription service.' },
      { id: 'comp5', name: 'Lenovo Tab', hqLocation: 'China', sales: 10, marketShare: 2, strategy: 'Offers a wide variety of models, often with innovative form factors like built-in projectors or stands.', latestMove: 'Released a tablet with a secondary e-ink display.' },
    ],
  },
};

const YWATCH_MOCK: Product = {
  id: 'ywatch',
  productInfo: {
    name: 'YWatch',
    description: 'The YWatch is the ultimate companion for a healthy life. It tracks your workouts, monitors your health, and keeps you connected on the go. With a sleek design and customizable faces, it is both a fitness device and a fashion statement.',
    businessUnit: 'Wearables & Health',
    aspiration: 'To become the leading health and wellness wearable device on the market. We aim to empower users to live healthier lives through actionable insights and preventative health monitoring features.',
    imageUrl: 'https://picsum.photos/seed/ywatch/800/600',
  },
  financialInfo: {
    pastRevenue: [50, 70, 90], // in millions
    forecastRevenue: [
      { conservative: 110, realistic: 120, ambitious: 130 },
      { conservative: 140, realistic: 155, ambitious: 170 },
      { conservative: 170, realistic: 190, ambitious: 210 },
    ],
    pastEbit: [5, 9, 13], // in millions
    forecastEbit: [
      { conservative: 15, realistic: 18, ambitious: 20 },
      { conservative: 20, realistic: 24, ambitious: 28 },
      { conservative: 25, realistic: 30, ambitious: 35 },
    ],
    description: 'The wearables market is booming, and YWatch has capitalized on this trend with strong growth. EBIT margins are improving due to economies of scale, though R&D investment in new sensor technology remains high.',
  },
  mustWinBattles: [
    { id: 'mwb1', title: 'FDA Approval for ECG Feature', description: 'Secure regulatory approval for the new electrocardiogram feature in 5 key markets.', salesImpact: 30, ebitImpact: 8, targetDate: '2024-10-31', responsible: 'Dr. Helen Cho', status: BattleStatus.Success },
    { id: 'mwb2', title: 'Launch YWatch Fitness+', description: 'Introduce a subscription service for guided workouts and personalized fitness plans.', salesImpact: 20, ebitImpact: 10, targetDate: '2025-01-31', responsible: 'Chris Evans', status: BattleStatus.InProgress },
    { id: 'mwb3', title: 'Develop Next-Gen Battery', description: 'Achieve a 5-day battery life in the next hardware revision to leapfrog competitors.', salesImpact: 40, ebitImpact: 5, targetDate: '2025-12-31', responsible: 'Peter Parker', status: BattleStatus.InProgress },
  ],
  marketInfo: {
    definition: 'The global smartwatch market, focusing on devices with advanced health monitoring and app ecosystems.',
    growthPotential: 'The market is rapidly expanding beyond fitness enthusiasts to general consumers and specific health verticals (e.g., remote patient monitoring). Key growth drivers include new sensor technology (like blood glucose monitoring), longer battery life, and deeper integration with telehealth services.',
    topCustomers: [
      { id: 'cust1', name: 'National Health System', salesLastFY: 15, percentageOfTotal: 16.7 },
      { id: 'cust2', name: 'FitLife Gyms', salesLastFY: 10, percentageOfTotal: 11.1 },
      { id: 'cust3', name: 'Everyday Electronics Retail', salesLastFY: 8, percentageOfTotal: 8.9 },
    ],
  },
  competitorLandscape: {
    topCompetitors: [
      { id: 'comp1', name: 'Alpha Watch', hqLocation: 'United States', sales: 400, marketShare: 45, strategy: 'Deep integration with its smartphone ecosystem. Strong focus on health, safety, and communication features.', latestMove: 'Launched a rugged "Ultra" version for extreme sports.' },
      { id: 'comp2', name: 'Galaxy Gear', hqLocation: 'South Korea', sales: 150, marketShare: 17, strategy: 'Offers classic watch designs with rotating bezels. Partnered on a unified OS to improve app support.', latestMove: 'Added body composition analysis feature.' },
      { id: 'comp3', name: 'FitTrack', hqLocation: 'United States', sales: 120, marketShare: 13, strategy: 'Focuses on fitness tracking and a strong community. Uses a subscription model for advanced analytics.', latestMove: 'Acquired a mental wellness app startup.' },
      { id: 'comp4', name: 'Garmin', hqLocation: 'United States', sales: 100, marketShare: 11, strategy: 'Leader in the serious athlete and outdoor enthusiast segment. Known for GPS accuracy and long battery life.', latestMove: 'Introduced solar charging on several models.' },
      { id: 'comp5', name: 'Nova Band', hqLocation: 'China', sales: 80, marketShare: 9, strategy: 'Offers feature-rich devices at very competitive prices. Dominates the entry-level market.', latestMove: 'Launched a smartwatch with a 14-day battery life.' },
    ],
  },
};


export const MOCK_DATA: Record<string, Product> = {
  yphone: YPHONE_MOCK,
  ytablet: YTABLET_MOCK,
  ywatch: YWATCH_MOCK,
};
