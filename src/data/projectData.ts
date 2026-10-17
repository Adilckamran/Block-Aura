import { FaqItem, NavItem, ProjectInfo, RoadmapPhase } from '../types';

export const projectInfo: ProjectInfo = {
  brandName: "Block Aura",
  ticker: "BA",
  supportedNetworks: ["Solana", "Polygon"],
  networksDetail: [
    {
      name: "Solana",
      type: "High-Speed Layer 1",
      speed: "65,000+ TPS",
      cost: "< $0.001 per tx",
      ecosystem: "Solana DeFi & DEX Ecosystem",
      color: "from-purple-500/20 to-cyan-500/20",
    },
    {
      name: "Polygon",
      type: "Scalable Ethereum Layer 2",
      speed: "7,000+ TPS",
      cost: "< $0.01 per tx",
      ecosystem: "Polygon PoS & EVM Ecosystem",
      color: "from-purple-600/20 to-indigo-500/20",
    },
  ],
  stage: {
    en: "In Development — Pre-Deployment",
    de: "In Entwicklung — Vor-Bereitstellung",
  },
  contractAddress: {
    solana: null,
    polygon: null,
  },
  totalSupply: null,
  plannedSupply: {
    solana: "200,000,000 BA",
    polygon: "200,000,000 BA",
    note: {
      en: "Planned deployment figures of 200,000,000 tokens on Solana and 200,000,000 tokens on Polygon, subject to confirmation of the final token architecture. These are distinct per-network planned supplies and not claimed as a single shared pool unless confirmed by cross-chain design.",
      de: "Geplante Bereitstellungszahlen von 200.000.000 Token auf Solana und 200.000.000 Token auf Polygon, vorbehaltlich der Bestätigung der endgültigen Token-Architektur. Dies sind getrennte netzwerkspezifische Zahlen und kein einheitlicher Pool ohne Cross-Chain-Bestätigung.",
    },
  },
  launchDate: {
    en: "COMING SOON — OFFICIAL LAUNCH DATE TO BE ANNOUNCED",
    de: "DEMNÄCHST — OFFIZIELLES STARTDATUM WIRD BEKANNT GEGEBEN",
  },
  mintingModel: {
    status: {
      en: "Pending Confirmation",
      de: "Bestätigung ausstehend",
    },
    note: {
      en: "The intended token minting model and issuance permissions are under architectural review. Exact minting rules and permissions will be confirmed upon smart contract audit completion.",
      de: "Das vorgesehene Minting-Modell und Ausgabeberechtigungen werden derzeit geprüft. Genaue Regeln werden nach Abschluss des Smart-Contract-Audits bestätigt.",
    },
  },
  burningModel: {
    status: {
      en: "Pending Confirmation",
      de: "Bestätigung ausstehend",
    },
    note: {
      en: "A structured burning mechanism is planned to permanently remove selected tokens from circulation. Specific burning rules, schedules, and percentages remain pending confirmation.",
      de: "Ein strukturierter Burning-Mechanismus ist geplant, um ausgewählte Token dauerhaft aus dem Umlauf zu entfernen. Genaue Regeln und Prozentsätze stehen noch aus.",
    },
  },
  launchPool: {
    status: {
      en: "Coming Soon",
      de: "Demnächst verfügbar",
    },
    note: {
      en: "Planned launch and liquidity pool infrastructure designed to bootstrap trading across supported decentralized exchanges on Solana and Polygon upon launch.",
      de: "Geplante Launch- und Liquiditätspool-Infrastruktur zur Initialisierung des dezentralen Handels auf Solana und Polygon zum Start.",
    },
  },
  utility: {
    en: "Designed for decentralized exchange trading, liquidity participation, and ecosystem utility across Solana and Polygon.",
    de: "Entwickelt für den dezentralen Handel (DEX), Liquiditätsbeteiligung und Ökosystem-Nutzen auf Solana und Polygon.",
  },
  marketListing: {
    en: "To be available on supported decentralized exchanges upon launch.",
    de: "Wird zum Start auf unterstützten dezentralen Börsen verfügbar sein.",
  },
  socials: {
    x: "https://x.com/BlockAuraCoin",
    facebook: "https://www.facebook.com/BlockAura/",
  },
};

export const navItems: NavItem[] = [
  { key: 'home', path: '#home', label: { en: 'Home', de: 'Startseite' } },
  { key: 'about', path: '#about', label: { en: 'About', de: 'Über uns' } },
  { key: 'token', path: '#token', label: { en: 'Token', de: 'Token' } },
  { key: 'ecosystem', path: '#ecosystem', label: { en: 'Ecosystem', de: 'Ökosystem' } },
  { key: 'roadmap', path: '#roadmap', label: { en: 'Roadmap', de: 'Roadmap' } },
  { key: 'faq', path: '#faq', label: { en: 'FAQ', de: 'FAQ' } },
];

export const roadmapData: RoadmapPhase[] = [
  {
    phaseNumber: 1,
    badge: { en: "Phase 1", de: "Phase 1" },
    title: { en: "Foundation & Architecture", de: "Fundament & Architektur" },
    status: 'in_progress',
    statusLabel: { en: "In Progress", de: "In Bearbeitung" },
    description: {
      en: "Multi-chain architecture formulation across Solana and Polygon, brand presence, and community channels.",
      de: "Multi-Chain-Architektur auf Solana und Polygon, Markenpräsenz und Community-Aufbau."
    },
    milestones: {
      en: [
        "Solana & Polygon dual-network integration design",
        "Official web portal & brand identity",
        "Community channels launch on X and Facebook"
      ],
      de: [
        "Design der Dual-Chain-Integration auf Solana & Polygon",
        "Offizielles Webportal & Markenidentität",
        "Start der Community-Kanäle auf X und Facebook"
      ]
    }
  },
  {
    phaseNumber: 2,
    badge: { en: "Phase 2", de: "Phase 2" },
    title: { en: "Token Development & Burning Design", de: "Token-Entwicklung & Burn-Design" },
    status: 'planning',
    statusLabel: { en: "Scheduled", de: "Geplant" },
    description: {
      en: "Smart contract development on Solana and Polygon, burn mechanism modeling, and testnet verification.",
      de: "Smart-Contract-Entwicklung auf Solana und Polygon, Modellierung des Burn-Mechanismus und Testnetz-Tests."
    },
    milestones: {
      en: [
        "Dual-network token contract programming",
        "Structured token burning mechanism implementation",
        "Third-party independent security audits"
      ],
      de: [
        "Programmierung der Token-Contracts auf beiden Chains",
        "Implementierung des strukturierten Token-Burn-Mechanismus",
        "Unabhängige Sicherheits-Audits durch Dritte"
      ]
    }
  },
  {
    phaseNumber: 3,
    badge: { en: "Phase 3", de: "Phase 3" },
    title: { en: "Launch Pool & DEX Deployment", de: "Launch Pool & DEX-Start" },
    status: 'future',
    statusLabel: { en: "Upcoming", de: "Bevorstehend" },
    description: {
      en: "Liquidity infrastructure rollout, launch pool activation, and supported decentralized exchange availability.",
      de: "Bereitstellung der Liquiditätsinfrastruktur, Launch-Pool-Aktivierung und DEX-Handel."
    },
    milestones: {
      en: [
        "Launch pool liquidity bootstrapping",
        "DEX availability across Solana & Polygon ecosystems",
        "Public contract address verification"
      ],
      de: [
        "Initialisierung der Launch-Pool-Liquidität",
        "DEX-Verfügbarkeit auf Solana & Polygon",
        "Öffentliche Verifizierung der Contract-Adressen"
      ]
    }
  },
  {
    phaseNumber: 4,
    badge: { en: "Phase 4", de: "Phase 4" },
    title: { en: "AI Integration & Ecosystem Scale", de: "KI-Integration & Ökosystem-Wachstum" },
    status: 'future',
    statusLabel: { en: "Future Horizon", de: "Zukunftsvision" },
    description: {
      en: "Expanding multi-chain adoption, decentralized community governance, and AI-driven digital era utilities.",
      de: "Ausbau der Multi-Chain-Adaption, dezentrale Governance und Nützlichkeit in der KI-Ära."
    },
    milestones: {
      en: [
        "AI-aligned digital ecosystem utility modules",
        "Cross-chain liquidity optimization",
        "Decentralized community participation expansion"
      ],
      de: [
        "KI-orientierte digitale Nützlichkeitsmodule",
        "Cross-Chain-Liquiditätsoptimierung",
        "Ausbau der dezentralen Community-Beteiligung"
      ]
    }
  }
];

export const faqData: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'general',
    question: {
      en: "What is Block Aura (BA)?",
      de: "Was ist Block Aura (BA)?"
    },
    answer: {
      en: "Block Aura (BA) is a decentralized cryptocurrency project engineered to operate across the Solana and Polygon blockchain networks. It is designed for transparent community participation, decentralized exchange liquidity, and sustainable tokenomics.",
      de: "Block Aura (BA) ist ein dezentrales Kryptowährungsprojekt, das für den Betrieb auf den Blockchains Solana und Polygon entwickelt wird. Es steht für transparente Community-Beteiligung, DEX-Liquidität und nachhaltige Tokenomics."
    }
  },
  {
    id: 'faq-2',
    category: 'networks',
    question: {
      en: "Which blockchain networks does Block Aura support?",
      de: "Welche Blockchain-Netzwerke unterstützt Block Aura?"
    },
    answer: {
      en: "Block Aura operates exclusively on two premier networks: Solana (known for ultra-high transaction throughput and near-zero fees) and Polygon (known for Ethereum Layer-2 security and broad EVM ecosystem compatibility).",
      de: "Block Aura agiert ausschließlich auf zwei führenden Netzwerken: Solana (bekannt für extrem hohe Transaktionsraten und minimale Gebühren) und Polygon (bekannt für Ethereum-L2-Sicherheit und EVM-Kompatibilität)."
    }
  },
  {
    id: 'faq-3',
    category: 'dex',
    question: {
      en: "Where can users buy and trade Block Aura?",
      de: "Wo können Nutzer Block Aura kaufen und handeln?"
    },
    answer: {
      en: "Block Aura will be available for acquisition through supported decentralized exchanges (DEX) within the Solana and Polygon ecosystems upon official launch. Users will trade peer-to-peer directly from their decentralized wallets.",
      de: "Block Aura wird nach dem offiziellen Start über unterstützte dezentrale Börsen (DEX) in den Solana- und Polygon-Ökosystemen handelbar sein — direkt Peer-to-Peer über eigene Wallets."
    }
  },
  {
    id: 'faq-4',
    category: 'token',
    question: {
      en: "How does the Block Aura Token Burning mechanism work?",
      de: "Wie funktioniert der Token-Burning-Mechanismus von Block Aura?"
    },
    answer: {
      en: "Block Aura incorporates a structured token-burning mechanism designed to permanently remove selected tokens from circulation over time, supporting a disciplined and sustainable long-term token ecosystem without speculative promises.",
      de: "Block Aura verfügt über einen strukturierten Burning-Mechanismus, der ausgewählte Token dauerhaft aus dem Umlauf entfernt, um ein diszipliniertes und nachhaltiges Ökosystem zu fördern."
    }
  },
  {
    id: 'faq-5',
    category: 'token',
    question: {
      en: "What is the Block Aura Launch Pool?",
      de: "Was ist der Block Aura Launch Pool?"
    },
    answer: {
      en: "The Launch Pool is the dedicated liquidity infrastructure designed to support the Block Aura ecosystem at launch, facilitating balanced market initialization across both supported networks without artificial inflation.",
      de: "Der Launch Pool ist die Liquiditätsinfrastruktur zur Unterstützung des Block Aura Ökosystems beim Start, um eine ausgewogene Marktinitialisierung auf beiden Netzwerken zu gewährleisten."
    }
  },
  {
    id: 'faq-6',
    category: 'general',
    question: {
      en: "What is the connection between Block Aura and the AI era?",
      de: "Welche Verbindung hat Block Aura mit der KI-Ära?"
    },
    answer: {
      en: "Block Aura is built with a vision aligned with the AI-driven digital future, preparing high-throughput multi-chain infrastructure on Solana and Polygon capable of meeting the demands of next-generation autonomous and digital ecosystems.",
      de: "Block Aura ist auf die KI-getriebene digitale Zukunft ausgerichtet und bereitet leistungsstarke Multi-Chain-Infrastruktur auf Solana und Polygon für autonome digitale Ökosysteme vor."
    }
  },
  {
    id: 'faq-7',
    category: 'security',
    question: {
      en: "Is the token deployed or contract address available yet?",
      de: "Ist der Token bereits bereitgestellt oder eine Contract-Adresse verfügbar?"
    },
    answer: {
      en: "Block Aura is currently in active pre-deployment development. Smart contracts have not yet been deployed to mainnet, and contract addresses are not released. Official addresses will only be published through verified channels.",
      de: "Block Aura befindet sich in der aktiven Vor-Bereitstellungsphase. Smart Contracts sind noch nicht im Mainnet deployed und Adressen noch nicht freigegeben. Offizielle Adressen erscheinen nur auf verifizierten Kanälen."
    }
  },
  {
    id: 'faq-8',
    category: 'security',
    question: {
      en: "Where can users follow official announcements?",
      de: "Wo können Nutzer offizielle Ankündigungen verfolgen?"
    },
    answer: {
      en: "Official updates are shared exclusively on verified channels: on X at https://x.com/BlockAuraCoin and on Facebook at https://www.facebook.com/BlockAura/. Never trust unverified direct messages.",
      de: "Offizielle Updates werden ausschließlich über unsere verifizierten Profile geteilt: auf X unter https://x.com/BlockAuraCoin und auf Facebook unter https://www.facebook.com/BlockAura/."
    }
  }
];
