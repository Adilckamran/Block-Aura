export type Language = 'en' | 'de';

export interface ProjectInfo {
  brandName: string;
  ticker: string;
  supportedNetworks: string[];
  networksDetail: {
    name: string;
    type: string;
    speed: string;
    cost: string;
    ecosystem: string;
    color: string;
  }[];
  stage: Record<Language, string>;
  contractAddress: {
    solana: string | null;
    polygon: string | null;
  };
  totalSupply: string | null;
  plannedSupply: {
    solana: string;
    polygon: string;
    note: Record<Language, string>;
  };
  launchDate: Record<Language, string>;
  mintingModel: {
    status: Record<Language, string>;
    note: Record<Language, string>;
  };
  burningModel: {
    status: Record<Language, string>;
    note: Record<Language, string>;
  };
  launchPool: {
    status: Record<Language, string>;
    note: Record<Language, string>;
  };
  utility: Record<Language, string>;
  marketListing: Record<Language, string>;
  socials: {
    x: string;
    facebook: string;
  };
}

export interface RoadmapPhase {
  phaseNumber: number;
  badge: Record<Language, string>;
  title: Record<Language, string>;
  status: 'planning' | 'in_progress' | 'future';
  statusLabel: Record<Language, string>;
  description: Record<Language, string>;
  milestones: Record<Language, string[]>;
}

export interface FaqItem {
  id: string;
  category: 'general' | 'networks' | 'token' | 'dex' | 'security';
  question: Record<Language, string>;
  answer: Record<Language, string>;
}

export interface NavItem {
  key: string;
  path: string;
  label: Record<Language, string>;
  isCta?: boolean;
}
