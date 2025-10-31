
export type Page = 'landing' | 'input' | 'output';

export enum BattleStatus {
  InProgress = 'In Progress',
  Success = 'Success',
  Failed = 'Failed',
}

export interface ProductInfo {
  name: string;
  description: string;
  businessUnit: string;
  aspiration: string;
  imageUrl: string;
}

export interface FinancialYearData {
  conservative: number;
  realistic: number;
  ambitious: number;
}

export interface FinancialInfo {
  pastRevenue: number[];
  forecastRevenue: FinancialYearData[];
  pastEbit: number[];
  forecastEbit: FinancialYearData[];
  description: string;
}

export interface MustWinBattle {
  id: string;
  title: string;
  description: string;
  salesImpact: number;
  ebitImpact: number;
  targetDate: string;
  responsible: string;
  status: BattleStatus;
}

export interface Customer {
  id: string;
  name: string;
  salesLastFY: number;
  percentageOfTotal: number;
}

export interface MarketInfo {
  definition: string;
  growthPotential: string;
  topCustomers: Customer[];
}

export interface Competitor {
  id: string;
  name: string;
  hqLocation: string;
  sales: number;
  marketShare: number;
  strategy: string;
  latestMove: string;
}

export interface CompetitorLandscape {
  topCompetitors: Competitor[];
}

export interface Product {
  id: string;
  productInfo: ProductInfo;
  financialInfo: FinancialInfo;
  mustWinBattles: MustWinBattle[];
  marketInfo: MarketInfo;
  competitorLandscape: CompetitorLandscape;
}
