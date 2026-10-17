import { Language } from '../types';

export interface WhitepaperSection {
  id: string;
  sectionNumber: number;
  badge: Record<Language, string>;
  title: Record<Language, string>;
  subtitle?: Record<Language, string>;
  status: 'confirmed' | 'planned' | 'in_development' | 'pending_confirmation';
  statusLabel: Record<Language, string>;
  content: {
    en: {
      paragraphs: string[];
      keyPoints?: { title: string; desc: string }[];
      callout?: { title: string; desc: string; type: 'info' | 'warning' | 'success' };
      metrics?: { label: string; value: string; note?: string }[];
    };
    de: {
      paragraphs: string[];
      keyPoints?: { title: string; desc: string }[];
      callout?: { title: string; desc: string; type: 'info' | 'warning' | 'success' };
      metrics?: { label: string; value: string; note?: string }[];
    };
  };
}

export const whitepaperMetadata = {
  documentTitle: {
    en: "Block Aura (BA) — Official Architectural Whitepaper",
    de: "Block Aura (BA) — Offizielles Architektur-Whitepaper",
  },
  documentSubtitle: {
    en: "Decentralized Dual-Chain Infrastructure on Solana and Polygon for the AI-Driven Digital Era",
    de: "Dezentrale Dual-Chain-Infrastruktur auf Solana und Polygon für das KI-getriebene digitale Zeitalter",
  },
  version: "Draft v1.0",
  date: "October 2026",
  stage: {
    en: "In Development — Pre-Deployment",
    de: "In Entwicklung — Vor-Bereitstellung",
  },
  launchDate: {
    en: "COMING SOON — OFFICIAL LAUNCH DATE TO BE ANNOUNCED",
    de: "DEMNÄCHST — OFFIZIELLES STARTDATUM WIRD BEKANNT GEGEBEN",
  },
  networks: ["Solana", "Polygon"],
  plannedSupply: {
    solana: "200,000,000 BA",
    polygon: "200,000,000 BA",
  },
};

export const whitepaperSections: WhitepaperSection[] = [
  // 1. Cover Page
  {
    id: "section-1-cover",
    sectionNumber: 1,
    badge: { en: "Section 01", de: "Abschnitt 01" },
    title: { en: "1. Cover Page & Document Identification", de: "1. Deckblatt & Dokumentidentifikation" },
    subtitle: { en: "Project Overview & Metadata", de: "Projektübersicht & Metadaten" },
    status: "confirmed",
    statusLabel: { en: "Official Document", de: "Offizielles Dokument" },
    content: {
      en: {
        paragraphs: [
          "Block Aura (ticker symbol: BA) is an independent decentralized cryptocurrency initiative engineered to operate concurrently across the Solana and Polygon blockchain networks. This whitepaper establishes the foundational technical architecture, economic framework, risk boundaries, and community-driven vision governing the Block Aura ecosystem.",
          "This publication serves as the primary technical reference for community participants, developers, and ecosystem contributors prior to mainnet contract deployment."
        ],
        metrics: [
          { label: "Project Name", value: "Block Aura", note: "Decentralized Digital Asset" },
          { label: "Token Ticker", value: "BA", note: "Native Asset Symbol" },
          { label: "Supported Networks", value: "Solana & Polygon", note: "Dual-Chain Operational Scope" },
          { label: "Launch Status", value: "COMING SOON", note: "Official Date To Be Announced" },
          { label: "Polygon Planned Supply", value: "200,000,000 BA", note: "Subject to architecture confirmation" },
          { label: "Solana Planned Supply", value: "200,000,000 BA", note: "Subject to architecture confirmation" },
        ],
        callout: {
          title: "Pre-Deployment Architecture Status",
          desc: "Block Aura is in active development. Smart contracts have not yet been deployed to mainnet, and contract addresses are not released. Always verify information through official channels.",
          type: "info"
        }
      },
      de: {
        paragraphs: [
          "Block Aura (Ticker-Symbol: BA) ist eine unabhängige dezentrale Kryptowährungsinitiative, die für den zeitgleichen Betrieb auf den Blockchain-Netzwerken Solana und Polygon entwickelt wird. Dieses Whitepaper legt die grundlegende technische Architektur, das ökonomische Rahmenwerk, die Risikoparameter und die Community-orientierte Vision des Ökosystems dar.",
          "Diese Publikation dient als offizielle technische Referenz für Community-Mitglieder, Entwickler und Ökosystem-Partner vor der Bereitstellung der Smart Contracts auf dem Mainnet."
        ],
        metrics: [
          { label: "Projektname", value: "Block Aura", note: "Dezentraler digitaler Vermögenswert" },
          { label: "Token-Ticker", value: "BA", note: "Natives Asset-Symbol" },
          { label: "Netzwerke", value: "Solana & Polygon", note: "Dual-Chain-Betriebsrahmen" },
          { label: "Startstatus", value: "DEMNÄCHST", note: "Offizielles Datum wird bekannt gegeben" },
          { label: "Polygon Geplantes Angebot", value: "200.000.000 BA", note: "Unter Vorbehalt der Architekturprüfung" },
          { label: "Solana Geplantes Angebot", value: "200.000.000 BA", note: "Unter Vorbehalt der Architekturprüfung" },
        ],
        callout: {
          title: "Status: Vor der Bereitstellung",
          desc: "Block Aura befindet sich in aktiver Entwicklung. Smart Contracts sind noch nicht auf dem Mainnet bereitgestellt, und Vertragsadressen wurden noch nicht veröffentlicht.",
          type: "info"
        }
      }
    }
  },

  // 2. Abstract
  {
    id: "section-2-abstract",
    sectionNumber: 2,
    badge: { en: "Section 02", de: "Abschnitt 02" },
    title: { en: "2. Abstract", de: "2. Zusammenfassung (Abstract)" },
    subtitle: { en: "Executive Technical Summary", de: "Technischer Managementüberblick" },
    status: "confirmed",
    statusLabel: { en: "Core Architecture", de: "Kernarchitektur" },
    content: {
      en: {
        paragraphs: [
          "Modern decentralized ecosystems require both ultra-high execution speed and broad interoperability with global liquidity. Single-network designs frequently force compromises between transaction costs, confirmation latency, and developer tooling. Block Aura resolves these trade-offs by adopting a deliberate dual-chain operational model across Solana and Polygon.",
          "By utilizing Solana's sub-second confirmation times alongside Polygon's Ethereum-grade EVM compatibility, Block Aura establishes a reliable environment for peer-to-peer decentralized exchange (DEX) liquidity, structured token burning, and future-ready digital integrations aligned with the emergence of artificial intelligence workflows.",
          "Block Aura upholds strict standards of transparency: no speculative promises, no fabricated partnerships, and absolute clarity regarding features that are confirmed versus those undergoing active technical specification."
        ],
        keyPoints: [
          { title: "Dual-Chain Operational Footprint", desc: "Native presence across Solana (SPL) and Polygon (PoS EVM) maximizing accessibility." },
          { title: "Non-Custodial Liquidity", desc: "Engineered for decentralized exchanges (DEX) where users maintain complete self-sovereignty." },
          { title: "Sustainable Ecosystem Model", desc: "Structured burning mechanism and dedicated launch pool liquidity bootstrapping." },
          { title: "AI-Era Positioning", desc: "Infrastructure attuned to high-frequency autonomous digital interactions and micro-settlements." }
        ]
      },
      de: {
        paragraphs: [
          "Moderne dezentrale Ökosysteme erfordern sowohl extrem hohe Ausführungsgeschwindigkeiten als auch breite Interoperabilität mit globaler Liquidität. Ein-Chain-Designs zwingen Entwickler oft zu Kompromissen zwischen Gebühren, Latenz und Ökosystem-Anbindung. Block Aura löst diesen Zielkonflikt durch ein gezieltes Dual-Chain-Betriebsmodell auf Solana und Polygon.",
          "Durch die Nutzung von Solanas sekundenschneller Finalität zusammen mit Polygons Ethereum-EVM-Kompatibilität schafft Block Aura ein stabiles Fundament für DEX-Liquidität, strukturiertes Token-Burning und zukunftssichere digitale Integrationen an der Schnittstelle zur künstlichen Intelligenz.",
          "Block Aura steht für kompromisslose Transparenz: keine spekulativen Versprechungen, keine erfundenen Partnerschaften und vollständige Klarheit über den Entwicklungsstand aller Komponenten."
        ],
        keyPoints: [
          { title: "Dual-Chain-Präsenz", desc: "Nativer Betrieb auf Solana (SPL) und Polygon (EVM) für maximale Reichweite." },
          { title: "Nicht-verwahrende Liquidität", desc: "Ausgerichtet auf dezentrale Börsen (DEX), auf denen Nutzer volle Kontrolle behalten." },
          { title: "Nachhaltiges Token-Modell", desc: "Strukturierter Burning-Mechanismus und vorbereitete Launch-Pool-Liquidität." },
          { title: "KI-Zukunftsausrichtung", desc: "Infrastruktur für hochfrequente digitale Interaktionen und autonome Mikro-Zahlungen." }
        ]
      }
    }
  },

  // 3. Introduction to Block Aura
  {
    id: "section-3-intro",
    sectionNumber: 3,
    badge: { en: "Section 03", de: "Abschnitt 03" },
    title: { en: "3. Introduction to Block Aura", de: "3. Einführung in Block Aura" },
    subtitle: { en: "Origins, Philosophy & Market Positioning", de: "Ursprung, Philosophie & Positionierung" },
    status: "confirmed",
    statusLabel: { en: "Foundation", de: "Fundament" },
    content: {
      en: {
        paragraphs: [
          "The landscape of decentralized finance has evolved from experimental single-chain smart contracts into a dynamic multi-chain paradigm. Users and decentralized application (dApp) developers frequently experience liquidity fragmentation, prohibitive transaction fees during peak network congestion, and friction between EVM-compatible ecosystems and high-speed alternative Layer-1 architectures.",
          "Block Aura was conceived as a community-oriented digital asset designed to eliminate friction. Rather than forcing participants into a single isolated silo, Block Aura bridges two leading execution environments: Solana, renowned for parallelized transaction execution through Proof of History, and Polygon, the benchmark Layer-2 scaling framework backed by Ethereum settlement guarantees.",
          "Operating as a decentralized token, Block Aura emphasizes verifiable on-chain governance, community-led momentum, and robust cryptographic verifiability over centralized administrative control."
        ]
      },
      de: {
        paragraphs: [
          "Die dezentrale Finanzwelt hat sich von experimentellen Ein-Chain-Verträgen zu einem dynamischen Multi-Chain-Paradigma weiterentwickelt. Nutzer und Entwickler leiden oft unter Liquiditätsfragmentierung, hohen Transaktionsgebühren bei Netzüberlastung und Reibungsverlusten zwischen EVM-Umgebungen und hochperformanten Layer-1-Netzen.",
          "Block Aura wurde als Community-orientierter digitaler Vermögenswert geschaffen, um diese Reibungsverluste zu minimieren. Anstatt Teilnehmer in ein isoliertes Ökosystem zu drängen, verbindet Block Aura zwei führende Umgebungen: Solana für parallele Transaktionsverarbeitung und Polygon als bewährte Skalierungslösung mit Ethereum-Sicherheitsanker.",
          "Als dezentraler Token setzt Block Aura auf überprüfbare On-Chain-Strukturen, Community-Dynamik und kryptografische Transparenz anstelle zentraler administrativer Einflussnahme."
        ]
      }
    }
  },

  // 4. Project Vision and Mission
  {
    id: "section-4-vision",
    sectionNumber: 4,
    badge: { en: "Section 04", de: "Abschnitt 04" },
    title: { en: "4. Project Vision and Mission", de: "4. Vision und Mission" },
    subtitle: { en: "Strategic Directives & Core Values", de: "Strategische Leitlinien & Kernwerte" },
    status: "confirmed",
    statusLabel: { en: "Strategic Objective", de: "Strategisches Ziel" },
    content: {
      en: {
        paragraphs: [
          "Vision: To establish Block Aura as an enduring, transparent, and multi-chain digital asset that bridges high-performance decentralized trading with the emerging technological capabilities of the autonomous digital era.",
          "Mission: To deliver decentralized financial utility across Solana and Polygon, ensuring seamless access to peer-to-peer liquidity, predictable and verifiable token supply dynamics, and collaborative community governance without centralized intermediaries.",
          "Core Guiding Principles:"
        ],
        keyPoints: [
          { title: "Verifiable Transparency", desc: "No undisclosed allocations, no fabricated roadmap achievements, and open disclosure of technical statuses." },
          { title: "Decentralized Autonomy", desc: "Prioritizing non-custodial DEX liquidity and peer-to-peer interaction where participants own their private keys." },
          { title: "Disciplined Economics", desc: "Sustainable supply management through token-burning mechanics rather than inflationary promotional schemes." },
          { title: "Architectural Dualism", desc: "Equally prioritizing Solana and Polygon without technical or commercial favoritism." }
        ]
      },
      de: {
        paragraphs: [
          "Vision: Block Aura als beständigen, transparenten und Multi-Chain-fähigen digitalen Vermögenswert zu etablieren, der hochperformanten dezentralen Handel mit den Potenzialen der autonomen digitalen Zukunft verknüpft.",
          "Mission: Dezentralen Mehrwert auf Solana und Polygon bereitzustellen — mit direktem Zugang zu Peer-to-Peer-Liquidität, planbaren Tokenomics und kooperativer Community-Einbindung ohne zentrale Mittelsmänner.",
          "Leitprinzipien:"
        ],
        keyPoints: [
          { title: "Verifizierbare Transparenz", desc: "Keine verdeckten Zuweisungen, keine erfundenen Meilensteine und offene Dokumentation aller Entwicklungsstände." },
          { title: "Dezentrale Autonomie", desc: "Fokus auf nicht-verwahrende DEX-Liquidität, bei der Nutzer ihre Schlüssel selbst kontrollieren." },
          { title: "Disziplinierte Ökonomie", desc: "Nachhaltiges Angebotsmanagement über gezieltes Token-Burning statt spekulativer Inflation." },
          { title: "Architektonischer Dualismus", desc: "Gleichberechtigte Integration von Solana und Polygon ohne einseitige Bevorzugung." }
        ]
      }
    }
  },

  // 5. AI-Related Project Vision
  {
    id: "section-5-ai",
    sectionNumber: 5,
    badge: { en: "Section 05", de: "Abschnitt 05" },
    title: { en: "5. AI-Related Project Vision", de: "5. KI-bezogene Projektvision" },
    subtitle: { en: "Blockchain Infrastructure for the Autonomous Digital Era", de: "Blockchain-Infrastruktur für die autonome digitale Ära" },
    status: "planned",
    statusLabel: { en: "Future Horizon", de: "Zukunftshorizont" },
    content: {
      en: {
        paragraphs: [
          "The rapid convergence of artificial intelligence and distributed ledger technology represents the next paradigm shift in digital interaction. Autonomous AI agents, automated analytics pipelines, and algorithmic trading systems require high-throughput, low-latency, and deterministic financial settlement rails.",
          "Block Aura is positioned at this critical technological crossroads. By establishing multi-chain operations on Solana (capable of 65,000+ TPS with sub-second finality) and Polygon (offering EVM-compatible computational modules), Block Aura develops the foundation necessary to interact seamlessly with AI-driven digital ecosystems.",
          "Intended areas of alignment include algorithmic liquidity optimization, data verification registries, and high-frequency micro-settlements between autonomous computational workflows."
        ],
        callout: {
          title: "Technical Transparency Notice",
          desc: "Block Aura is an AI-related and future-focused cryptocurrency initiative. The project does NOT claim that artificial intelligence automatically mints tokens, nor does it claim unverified automated on-chain AI models without human engineering governance. All advanced AI modules remain in technical formulation under Phase 4 of the project roadmap.",
          type: "warning"
        }
      },
      de: {
        paragraphs: [
          "Die Konvergenz von künstlicher Intelligenz und dezentraler Blockchain-Technologie markiert den nächsten großen Innovationsschritt. Autonome KI-Agenten, automatisierte Datenpipelines und algorithmische Systeme verlangen nach extrem schnellen, kostengünstigen und deterministischen Abrechnungswegen.",
          "Block Aura positioniert sich an dieser Schnittstelle. Durch den Multi-Chain-Betrieb auf Solana (mit über 65.000 TPS und Sub-Sekunden-Finalität) und Polygon (mit EVM-kompatiblen Modulen) wird das Fundament für Interaktionen mit KI-gestützten Ökosystemen gelegt.",
          "Geplante Ausrichtungen umfassen algorithmische Liquiditätsoptimierung, dezentrale Datenprüfungen und hochfrequente Mikro-Transaktionen zwischen autonomen Systemen."
        ],
        callout: {
          title: "Hinweis zur technischen Transparenz",
          desc: "Block Aura ist ein zukunftsorientiertes, KI-bezogenes Kryptowährungsprojekt. Es wird NICHT behauptet, dass KI eigenständig Token generiert oder ungeprüfte autonome On-Chain-Modelle ohne Entwicklerkontrolle ausführt. Sämtliche KI-Module befinden sich in der Konzeption für Phase 4 der Roadmap.",
          type: "warning"
        }
      }
    }
  },

  // 6. Solana and Polygon Network Overview
  {
    id: "section-6-networks",
    sectionNumber: 6,
    badge: { en: "Section 06", de: "Abschnitt 06" },
    title: { en: "6. Solana and Polygon Network Overview", de: "6. Übersicht über Solana und Polygon" },
    subtitle: { en: "Dual-Chain Architectural Comparison & Synergy", de: "Dual-Chain-Vergleich & Synergie" },
    status: "confirmed",
    statusLabel: { en: "Architecture Confirmed", de: "Architektur bestätigt" },
    content: {
      en: {
        paragraphs: [
          "Block Aura intentionally operates exclusively on two premier blockchain networks: Solana and Polygon. This deliberate design ensures maximum capital efficiency, low user friction, and deep ecosystem reach across both non-EVM and EVM environments.",
          "Network Specifications & Technical Characteristics:"
        ],
        keyPoints: [
          {
            title: "Solana Network (SPL Standard)",
            desc: "Utilizes Proof of History (PoH) combined with Tower BFT consensus. Provides theoretical throughput in excess of 65,000 transactions per second, deterministic block times of ~400ms, and sub-cent average gas costs (< $0.001). Solana provides the high-frequency trading performance needed for responsive DEX trading."
          },
          {
            title: "Polygon Network (EVM Standard)",
            desc: "Premier Layer-2 scaling platform backed by Ethereum mainnet security. Delivers 7,000+ transactions per second, low fee profile (< $0.01 per transaction), and full compatibility with Solidity, MetaMask, and Ethereum decentralized protocols. Polygon ensures broad EVM liquidity access."
          },
          {
            title: "Multi-Chain Synergy",
            desc: "Participants can interact with Block Aura using whichever environment fits their portfolio workflow. Solana provides high speed and low overhead; Polygon provides EVM tooling and Ethereum-anchored trust."
          }
        ]
      },
      de: {
        paragraphs: [
          "Block Aura agiert gezielt und ausschließlich auf zwei führenden Netzwerken: Solana und Polygon. Dieses Design garantiert hohe Kapitaleffizienz, minimale Transaktionskosten und maximale Reichweite sowohl in Non-EVM- als auch in EVM-Ökosystemen.",
          "Netzwerkspezifikationen & Eigenschaften:"
        ],
        keyPoints: [
          {
            title: "Solana-Netzwerk (SPL-Standard)",
            desc: "Basiert auf Proof of History (PoH) und Tower BFT. Bietet über 65.000 Transaktionen pro Sekunde, Blockzeiten von rund 400 Millisekunden und Gebühren unter $0,001. Perfekt für hochfrequenten, verzögerungsfreien DEX-Handel."
          },
          {
            title: "Polygon-Netzwerk (EVM-Standard)",
            desc: "Führende Layer-2-Skalierungslösung, gesichert durch das Ethereum-Mainnet. Liefert über 7.000 TPS, minimale Gebühren (< $0,01) und volle Kompatibilität mit Solidity, MetaMask und EVM-Protokollen."
          },
          {
            title: "Multi-Chain-Synergie",
            desc: "Nutzer können Block Aura über das Netzwerk ihrer Wahl nutzen. Solana liefert unübertroffene Geschwindigkeit; Polygon bietet bewährte EVM-Infrastruktur."
          }
        ]
      }
    }
  },

  // 7. Token Supply and Tokenomics
  {
    id: "section-7-supply",
    sectionNumber: 7,
    badge: { en: "Section 07", de: "Abschnitt 07" },
    title: { en: "7. Token Supply and Tokenomics", de: "7. Token-Angebot und Tokenomics" },
    subtitle: { en: "Planned Allocations & Architecture Status", de: "Geplantes Angebot & Architekturstatus" },
    status: "pending_confirmation",
    statusLabel: { en: "Pending Architecture Confirmation", de: "Architekturprüfung ausstehend" },
    content: {
      en: {
        paragraphs: [
          "The planned token supply figures for the Block Aura deployments have been designated as follows:",
          "• Polygon Network Deployment: 200,000,000 BA tokens (Planned)",
          "• Solana Network Deployment: 200,000,000 BA tokens (Planned)",
          "These figures document the planned token supply allocations for each deployment network. They are subject to final architectural confirmation prior to mainnet deployment.",
          "Important Architectural Clarification: These represent distinct planned deployment numbers for each respective network. They are not claimed to represent one single shared unified supply unless confirmed by the final cross-chain bridge or canonical minting architecture."
        ],
        metrics: [
          { label: "Polygon Planned Supply", value: "200,000,000 BA", note: "Planned allocation on Polygon" },
          { label: "Solana Planned Supply", value: "200,000,000 BA", note: "Planned allocation on Solana" },
          { label: "Supply Architecture", value: "Under Engineering Review", note: "Unified bridge vs. distinct dual-chain pools" },
          { label: "Contract State", value: "Pre-Deployment", note: "Addresses announced upon mainnet release" },
        ],
        callout: {
          title: "Confirmation Requirement",
          desc: "Detailed percentage tokenomics (liquidity pools, community reserves, development allocations) and final cross-chain supply synchronization will be published alongside third-party smart contract audits upon formal owner confirmation.",
          type: "info"
        }
      },
      de: {
        paragraphs: [
          "Die geplanten Token-Angebotszahlen für die Bereitstellungen von Block Aura lauten wie folgt:",
          "• Polygon-Netzwerk: 200.000.000 BA Token (Geplant)",
          "• Solana-Netzwerk: 200.000.000 BA Token (Geplant)",
          "Diese Zahlen dokumentieren die geplanten Bereitstellungsvolumina für das jeweilige Netzwerk und stehen unter dem Vorbehalt der endgültigen Architektur-Bestätigung vor dem Mainnet-Start.",
          "Wichtiger Hinweis zur Architektur: Dies sind getrennte netzwerkspezifische Planungszahlen. Sie stellen keinen einheitlichen Gesamt-Pool dar, es sei denn, dies wird durch das endgültige Cross-Chain-Bridge-Design ausdrücklich bestätigt."
        ],
        metrics: [
          { label: "Polygon Geplantes Angebot", value: "200.000.000 BA", note: "Geplante Zuweisung auf Polygon" },
          { label: "Solana Geplantes Angebot", value: "200.000.000 BA", note: "Geplante Zuweisung auf Solana" },
          { label: "Angebotsarchitektur", value: "In technischer Prüfung", note: "Bridge vs. getrennte Pools" },
          { label: "Vertragsstatus", value: "Vor-Bereitstellung", note: "Veröffentlichung zum Mainnet-Start" },
        ],
        callout: {
          title: "Bestätigungsvorbehalt",
          desc: "Detaillierte prozentuale Zuweisungen (Liquidität, Community, Entwicklung) werden zusammen mit den Ergebnissen der Sicherheits-Audits nach offizieller Eigentümerfreigabe veröffentlicht.",
          type: "info"
        }
      }
    }
  },

  // 8. Minting and Burning Mechanisms
  {
    id: "section-8-minting-burning",
    sectionNumber: 8,
    badge: { en: "Section 08", de: "Abschnitt 08" },
    title: { en: "8. Minting and Burning Mechanisms", de: "8. Minting- und Burning-Mechanismen" },
    subtitle: { en: "Intended Model & Supply Control Framework", de: "Vorgesehenes Modell & Angebotssteuerung" },
    status: "pending_confirmation",
    statusLabel: { en: "Pending Confirmation", de: "Bestätigung ausstehend" },
    content: {
      en: {
        paragraphs: [
          "Block Aura incorporates a deliberate token issuance and supply reduction framework designed to preserve tokenomic discipline throughout the lifecycle of the project.",
          "Intended Token Minting Model: The smart contracts on both Solana and Polygon will adhere to strict cryptographic minting permissions. Whether minting authority will be permanently renounced upon initial supply generation or bound to multi-signature architectural controls is currently undergoing engineering evaluation. Minting permissions will be finalized and certified by independent audits prior to deployment.",
          "Token Burning Mechanism: A structured token-burning mechanism will permanently remove selected tokens from circulation. Burning events will transfer tokens to provably unrecoverable addresses (the 'dead' address on Polygon and supply burn instructions via the SPL token program on Solana), irreversibly reducing circulating supply."
        ],
        keyPoints: [
          { title: "Minting Permissions: Pending Confirmation", desc: "Issuance limits, multi-sig controls, and key revocation schedules will be formally confirmed upon audit sign-off." },
          { title: "Verifiable Burn Events", desc: "Every burn is executed on-chain and publicly verifiable via Solscan (Solana) and Polygonscan (Polygon)." },
          { title: "Sustainable Supply Management", desc: "Burning supports ecosystem sustainability without speculative claims or artificial promises of price appreciation." }
        ],
        callout: {
          title: "Transparency Commitment",
          desc: "The exact minting permissions, burning rules, burn percentages, and schedules have not yet been confirmed. They are labeled here as Pending Confirmation. Block Aura does not claim on-chain burning is active until verified smart contracts are deployed to mainnet.",
          type: "warning"
        }
      },
      de: {
        paragraphs: [
          "Block Aura setzt auf ein durchdachtes Modell zur Steuerung des Tokenangebots, um langfristige Stabilität und Verlässlichkeit zu gewährleisten.",
          "Vorgesehenes Minting-Modell: Die Verträge auf Solana und Polygon unterliegen strengen kryptografischen Berechtigungen. Ob die Minting-Autorität nach Erzeugung des initialen Angebots vollständig widerrufen oder an Multi-Sig-Sicherheitsstrukturen gekoppelt wird, wird derzeit geprüft.",
          "Token-Burning-Mechanismus: Über einen strukturierten Mechanismus werden ausgewählte Token dauerhaft aus dem Umlauf entfernt. Burn-Transaktionen senden Token an unwiderrufliche Dead-Adressen bzw. führen SPL-Burn-Befehle aus, wodurch das zirkulierende Angebot unwiederbringlich schrumpft."
        ],
        keyPoints: [
          { title: "Minting-Regeln: Bestätigung ausstehend", desc: "Ausgaberechte, Multi-Sig-Schlüssel und Begrenzungen werden im Sicherheits-Audit final festgelegt." },
          { title: "Verifizierbare Burn-Events", desc: "Jeder Burn wird On-Chain ausgeführt und ist über Solscan bzw. Polygonscan für jeden einsehbar." },
          { title: "Nachhaltiges Angebotsmanagement", desc: "Burning dient der ökonomischen Disziplin — ohne spekulative Versprechungen von Kurssteigerungen." }
        ],
        callout: {
          title: "Transparenzhinweis",
          desc: "Genaue Minting-Rechte, Burn-Raten und Zeitpläne sind noch nicht final bestätigt und werden als 'Bestätigung ausstehend' deklariert. Ein aktiver Burn-Mechanismus wird erst nach Mainnet-Deployment behauptet.",
          type: "warning"
        }
      }
    }
  },

  // 9. Decentralized Exchange Availability
  {
    id: "section-9-dex",
    sectionNumber: 9,
    badge: { en: "Section 09", de: "Abschnitt 09" },
    title: { en: "9. Decentralized Exchange (DEX) Availability", de: "9. Dezentrale Börsen (DEX) Verfügbarkeit" },
    subtitle: { en: "Non-Custodial Trading on Solana & Polygon", de: "Nicht-verwahrender Handel auf Solana & Polygon" },
    status: "planned",
    statusLabel: { en: "Planned at Launch", de: "Geplant zum Start" },
    content: {
      en: {
        paragraphs: [
          "Block Aura is engineered for non-custodial decentralized exchange accessibility. Upon mainnet release, users will be able to acquire and trade Block Aura through supported decentralized exchanges (DEXs) within the Solana and Polygon ecosystems.",
          "By prioritizing decentralized exchanges over centralized platforms, Block Aura ensures that participants maintain complete sovereignty over their private keys and digital assets at all times. Transactions execute directly between peer wallets and automated liquidity pools.",
          "Trading Accessibility Guidelines:"
        ],
        keyPoints: [
          { title: "Solana DEX Ecosystem", desc: "Trading will be available through supported decentralized exchanges in the Solana ecosystem, enabling sub-second swaps and minimal gas fees via SPL-compatible wallets." },
          { title: "Polygon DEX Ecosystem", desc: "Trading will be available through supported EVM decentralized exchanges in the Polygon ecosystem, compatible with standard Web3 wallets and DeFi protocols." },
          { title: "Official Verification Only", desc: "Contract addresses, router interfaces, and liquidity pairs will only be published through official Block Aura channels to protect participants from unauthorized counterfeit tokens." }
        ],
        callout: {
          title: "Zero Fake Claims Policy",
          desc: "In accordance with strict brand integrity, Block Aura does not publish unverified exchange names, fake contract addresses, synthetic trading pairs, or fabricated volume metrics. Official pairs will be announced upon launch.",
          type: "info"
        }
      },
      de: {
        paragraphs: [
          "Block Aura ist von Grund auf für den dezentralen Handel konzipiert. Nach dem Mainnet-Start werden Nutzer Block Aura über unterstützte dezentrale Börsen (DEX) in den Solana- und Polygon-Ökosystemen handeln können.",
          "Durch die Ausrichtung auf dezentrale Börsen behalten Nutzer zu jeder Zeit die uneingeschränkte Kontrolle über ihre privaten Schlüssel und Vermögenswerte. Alle Transaktionen laufen direkt Peer-to-Peer über On-Chain-Liquiditätspools.",
          "Handelsrichtlinien:"
        ],
        keyPoints: [
          { title: "Solana DEX-Ökosystem", desc: "Handel über unterstützte dezentrale Börsen auf Solana mit extrem schneller Abwicklung und minimalen Netzwerkgebühren." },
          { title: "Polygon DEX-Ökosystem", desc: "Handel über unterstützte EVM-DEXs auf Polygon mit voller Web3-Wallet- und DeFi-Kompatibilität." },
          { title: "Nur offizielle Adressen", desc: "Vertragsadressen und Handelspaare werden ausschließlich über offizielle Kanäle bekannt gegeben, um vor Fälschungen zu schützen." }
        ],
        callout: {
          title: "Grundsätze zur Informationsintegrität",
          desc: "Block Aura verzichtet strikt auf erfundene Börsennamen, fingierte Adressen oder vorgetäuschte Handelsvolumina. Offizielle Paare erscheinen zum Start.",
          type: "info"
        }
      }
    }
  },

  // 10. Planned Launch/Liquidity Pool
  {
    id: "section-10-launchpool",
    sectionNumber: 10,
    badge: { en: "Section 10", de: "Abschnitt 10" },
    title: { en: "10. Planned Launch/Liquidity Pool", de: "10. Geplanter Launch Pool / Liquidität" },
    subtitle: { en: "Market Initialization Infrastructure", de: "Infrastruktur zur Marktinitialisierung" },
    status: "in_development",
    statusLabel: { en: "Coming Soon", de: "Demnächst verfügbar" },
    content: {
      en: {
        paragraphs: [
          "To facilitate healthy, balanced market initialization, Block Aura is architecting a dedicated launch and liquidity pool infrastructure. This framework will support the Block Aura ecosystem at launch across both Solana and Polygon decentralized exchange pools.",
          "The launch pool is designed to provide sufficient initial depth, mitigate excessive price slippage, and create an equitable foundation for decentralized community trading without centralized reserve manipulation.",
          "Key Architecture Objectives:"
        ],
        keyPoints: [
          { title: "Decentralized Liquidity Bootstrapping", desc: "Providing balanced initial capital to ensure immediate swap functionality on both chains upon launch." },
          { title: "Transparent Allocation", desc: "Liquidity allocations will be locked and audited to ensure maximum community security." },
          { title: "Sustainable Market Mechanics", desc: "No unrealistic APY promises, no fabricated yield farming schemes, and no unverified high-risk staking mechanisms." }
        ],
        callout: {
          title: "Mechanics Pending Confirmation",
          desc: "Detailed mechanics, lockup schedules, LP token custody arrangements, and launch pool parameters will be released in an updated technical appendix once smart contract testing is completed.",
          type: "info"
        }
      },
      de: {
        paragraphs: [
          "Um eine stabile Marktinitialisierung zu gewährleisten, konzipiert Block Aura eine dedizierte Launch- und Liquiditätspool-Infrastruktur. Diese unterstützt das Ökosystem zum Start auf dezentralen Börsen auf Solana und Polygon.",
          "Der Launch Pool soll für ausreichende Markttiefe sorgen, übermäßige Slippage verhindern und eine faire Basis für die Community ohne zentrale Einflussnahme schaffen.",
          "Wesentliche Ziele:"
        ],
        keyPoints: [
          { title: "Dezentrales Liquiditäts-Bootstrapping", desc: "Bereitstellung von Startliquidität für sofortige Swap-Fähigkeit auf beiden Chains." },
          { title: "Transparente Absicherung", desc: "Liquiditätsanteile werden gesperrt und geprüft, um größtmögliche Sicherheit zu gewährleisten." },
          { title: "Nachhaltiges Marktmodell", desc: "Keine unrealistischen Renditeversprechen (APY) und keine ungeprüften spekulativen Farming-Modelle." }
        ],
        callout: {
          title: "Details folgen in Kürze",
          desc: "Genaue Sperrfristen, Pool-Parameter und Bereitstellungsdetails werden nach Abschluss der Testnet-Phase in einem technischen Nachtrag veröffentlicht.",
          type: "info"
        }
      }
    }
  },

  // 11. Roadmap — unconfirmed milestones marked as planned
  {
    id: "section-11-roadmap",
    sectionNumber: 11,
    badge: { en: "Section 11", de: "Abschnitt 11" },
    title: { en: "11. Roadmap — Phased Progression", de: "11. Roadmap — Strukturierte Phasen" },
    subtitle: { en: "Development Milestones & Strategic Horizons", de: "Meilensteine & Strategische Etappen" },
    status: "in_development",
    statusLabel: { en: "In Progress & Planned", de: "In Arbeit & Geplant" },
    content: {
      en: {
        paragraphs: [
          "The Block Aura roadmap outlines a phased, disciplined path from architectural formulation to multi-chain scale. All milestones are categorized transparently as either in-progress or planned, allowing the community to track verified development without false expectations.",
          "Roadmap Overview:"
        ],
        keyPoints: [
          {
            title: "Phase 1: Foundation & Architecture (IN PROGRESS)",
            desc: "Solana & Polygon dual-network integration design; official website portal & brand identity release; community channels launch on X and Facebook; publication of architectural documentation."
          },
          {
            title: "Phase 2: Token Development & Burning Design (PLANNED)",
            desc: "Smart contract development on Solana (SPL) and Polygon (EVM); burn mechanism modeling and testnet verification; independent third-party smart contract security audits."
          },
          {
            title: "Phase 3: Launch Pool & DEX Deployment (PLANNED)",
            desc: "Launch pool liquidity bootstrapping; decentralized exchange availability across Solana and Polygon ecosystems; public release and verification of contract addresses."
          },
          {
            title: "Phase 4: AI Integration & Ecosystem Scale (PLANNED HORIZON)",
            desc: "AI-aligned digital ecosystem utility modules; cross-chain liquidity optimization; expansion of decentralized community governance initiatives."
          }
        ],
        callout: {
          title: "Milestone Note",
          desc: "Unconfirmed milestones are explicitly marked as planned. Development timelines may adapt based on security audit results and multi-chain protocol updates.",
          type: "info"
        }
      },
      de: {
        paragraphs: [
          "Die Roadmap von Block Aura beschreibt einen strukturierten Pfad von der Konzeption bis zur vollständigen Multi-Chain-Realisierung. Alle Meilensteine werden transparent als 'in Bearbeitung' oder 'geplant' ausgewiesen.",
          "Roadmap-Übersicht:"
        ],
        keyPoints: [
          {
            title: "Phase 1: Fundament & Architektur (IN BEARBEITUNG)",
            desc: "Design der Dual-Chain-Integration auf Solana und Polygon; Veröffentlichung des Webportals; Start der offiziellen Kanäle auf X und Facebook; Bereitstellung der Dokumentation."
          },
          {
            title: "Phase 2: Token-Entwicklung & Burn-Design (GEPLANT)",
            desc: "Smart-Contract-Entwicklung auf Solana und Polygon; Testnetz-Erprobung des Burning-Mechanismus; unabhängige Sicherheitsprüfungen (Audits)."
          },
          {
            title: "Phase 3: Launch Pool & DEX-Start (GEPLANT)",
            desc: "Liquiditätsbereitstellung im Launch Pool; Handelsstart auf dezentralen Börsen (DEX); offizielle Verifizierung der Vertragsadressen."
          },
          {
            title: "Phase 4: KI-Integration & Skalierung (GEPLANTE VISION)",
            desc: "KI-orientierte digitale Nützlichkeitsmodule; Cross-Chain-Optimierung; Ausbau dezentraler Community-Beteiligung."
          }
        ],
        callout: {
          title: "Transparenz zu Meilensteinen",
          desc: "Nicht bestätigte Meilensteine sind ausdrücklich als geplant gekennzeichnet. Zeitpläne können sich auf Basis von Auditergebnissen anpassen.",
          type: "info"
        }
      }
    }
  },

  // 12. Security Considerations and Risk Disclosure
  {
    id: "section-12-security",
    sectionNumber: 12,
    badge: { en: "Section 12", de: "Abschnitt 12" },
    title: { en: "12. Security Considerations and Risk Disclosure", de: "12. Sicherheitsüberlegungen & Risiken" },
    subtitle: { en: "Cryptographic Integrity & Prudent Disclosures", de: "Kryptografische Sicherheit & Risikohinweise" },
    status: "confirmed",
    statusLabel: { en: "Mandatory Disclosure", de: "Verpflichtender Hinweis" },
    content: {
      en: {
        paragraphs: [
          "Participating in decentralized cryptocurrency projects involves technological and economic risks. Block Aura is committed to maintaining the highest security posture while ensuring that all community members are fully informed of inherent market realities.",
          "Technical Security Safeguards:"
        ],
        keyPoints: [
          { title: "Smart Contract Audits", desc: "Prior to mainnet deployment, all contract code will undergo rigorous reviews by reputable third-party security auditors." },
          { title: "Multi-Signature Admin Controls", desc: "Privileged architectural actions (if retained during development) will require multi-signature threshold consensus to prevent single-point vulnerabilities." },
          { title: "Market Volatility Risk", desc: "Cryptocurrency values are subject to extreme volatility and market fluctuations. There are no price guarantees, profit assurances, or guaranteed returns." },
          { title: "Self-Custodial Responsibility", desc: "Users are exclusively responsible for safeguarding their private keys, seed phrases, and wallet security. Block Aura has no custody or recovery capability over user funds." }
        ],
        callout: {
          title: "Phishing & Fraud Warning",
          desc: "Block Aura team members will NEVER contact you directly requesting private keys, seed phrases, or cryptocurrency transfers. Only verify contract addresses from official links.",
          type: "warning"
        }
      },
      de: {
        paragraphs: [
          "Die Teilnahme an dezentralen Kryptowährungsprojekten ist mit technischen und ökonomischen Risiken verbunden. Block Aura setzt auf höchste Sicherheitsstandards und verpflichtet sich zu vollständiger Transparenz über bestehende Risiken.",
          "Sicherheitsmaßnahmen & Risikofaktoren:"
        ],
        keyPoints: [
          { title: "Smart-Contract-Audits", desc: "Vor dem Mainnet-Start werden alle Verträge von unabhängigen Sicherheitsprüfern auf Schwachstellen analysiert." },
          { title: "Multi-Signatur-Sicherheit", desc: "Administrative Berechtigungen in der Entwicklungsphase werden über Multi-Signatur-Strukturen gegen Einzelpunkt-Risiken abgesichert." },
          { title: "Marktvolatilität", desc: "Kryptomärkte unterliegen starken Schwankungen. Es gibt keinerlei Gewinngarantien oder garantierte Wertsteigerungen." },
          { title: "Eigenverantwortung bei Verwahrung", desc: "Nutzer sind selbst für die Sicherheit ihrer Wallets und Seed-Phrasen verantwortlich. Das Projekt hat keinen Zugriff auf Nutzergelder." }
        ],
        callout: {
          title: "Warnung vor Betrug & Phishing",
          desc: "Vertreter von Block Aura werden Sie NIEMALS nach privaten Schlüsseln oder Geldüberweisungen fragen. Nutzen Sie ausschließlich verifizierte Quellen.",
          type: "warning"
        }
      }
    }
  },

  // 13. Disclaimer
  {
    id: "section-13-disclaimer",
    sectionNumber: 13,
    badge: { en: "Section 13", de: "Abschnitt 13" },
    title: { en: "13. Disclaimer and Legal Notice", de: "13. Haftungsausschluss & Rechtliches" },
    subtitle: { en: "Regulatory & Financial Non-Advice Declarations", de: "Rechtliche Klarstellungen & Hinweispflichten" },
    status: "confirmed",
    statusLabel: { en: "Legal Declaration", de: "Rechtliche Erklärung" },
    content: {
      en: {
        paragraphs: [
          "This whitepaper is published solely for informational and educational purposes. It does not constitute a prospectus, an offer of securities, an invitation to invest, or financial, tax, or legal advice of any kind.",
          "Block Aura (BA) is an independent decentralized cryptocurrency project currently in active pre-deployment development. The BA token is not currently deployed to mainnet, and no public token sale, presale, or fundraising event is conducted through this document.",
          "Regulatory Notice: Cryptographic tokens may be subject to varying legal frameworks depending on jurisdiction. Readers are solely responsible for ensuring compliance with all local laws, taxation regulations, and regulatory requirements applicable in their country of residence.",
          "No Guarantee: Neither Block Aura, its contributors, nor affiliated community members guarantee the future performance, market liquidity, availability, or technological continuity of the network. Any participation in decentralized digital assets is undertaken at the user's sole risk."
        ]
      },
      de: {
        paragraphs: [
          "Dieses Whitepaper dient ausschließlich Informations- und Bildungszwecken. Es stellt weder einen Wertpapierprospekt, ein Angebot von Finanzinstrumenten noch eine Anlage-, Rechts- oder Steuerberatung dar.",
          "Block Aura (BA) ist ein dezentrales Kryptowährungsprojekt in der Vor-Bereitstellungsphase. Der Token ist noch nicht auf dem Mainnet bereitgestellt, und es findet kein öffentlicher Vorverkauf (Presale) über dieses Dokument statt.",
          "Regulatorischer Hinweis: Die rechtliche Einstufung kryptografischer Vermögenswerte variiert je nach Rechtsordnung. Jeder Nutzer ist eigenverantwortlich für die Einhaltung der geltenden Gesetze und Steuervorschriften an seinem Wohnsitz.",
          "Keine Garantien: Weder Block Aura noch beteiligte Entwickler übernehmen Garantien für Wertentwicklung, Handelsliquidität oder die kontinuierliche Verfügbarkeit der Systeme. Die Nutzung erfolgt auf eigenes Risiko."
        ]
      }
    }
  },

  // 14. Official Links and Community
  {
    id: "section-14-links",
    sectionNumber: 14,
    badge: { en: "Section 14", de: "Abschnitt 14" },
    title: { en: "14. Official Links and Community", de: "14. Offizielle Links und Community" },
    subtitle: { en: "Verified Channels & Communication Endpoints", de: "Verifizierte Informationskanäle" },
    status: "confirmed",
    statusLabel: { en: "Official Endpoints", de: "Offizielle Endpunkte" },
    content: {
      en: {
        paragraphs: [
          "To safeguard against impersonators and counterfeit tokens, only rely on the official communication channels and verified digital links listed below. Any account or domain not explicitly confirmed here should be treated with utmost skepticism."
        ],
        keyPoints: [
          { title: "Official Website Portal", desc: "https://blockaura.io (Block Aura Web Portal)" },
          { title: "Official X (formerly Twitter)", desc: "https://x.com/BlockAuraCoin (@BlockAuraCoin)" },
          { title: "Official Facebook Page", desc: "https://www.facebook.com/BlockAura/ (BlockAura Official)" },
          { title: "Supported Blockchain Networks", desc: "Solana (SPL) & Polygon (PoS EVM)" }
        ],
        callout: {
          title: "Final Security Advisory",
          desc: "Smart contract addresses will be posted to the official portal upon deployment. Bookmark verified links and verify all cryptographic hashes before executing transactions.",
          type: "success"
        }
      },
      de: {
        paragraphs: [
          "Um sich vor Nachahmern und gefälschten Token zu schützen, verlassen Sie sich bitte ausschließlich auf die hier gelisteten offiziellen Kanäle. Jede nicht hier aufgeführte Quelle ist mit äußerster Vorsicht zu behandeln."
        ],
        keyPoints: [
          { title: "Offizielles Webportal", desc: "https://blockaura.io (Block Aura Portal)" },
          { title: "Offizielles X (ehemals Twitter)", desc: "https://x.com/BlockAuraCoin (@BlockAuraCoin)" },
          { title: "Offizielle Facebook-Seite", desc: "https://www.facebook.com/BlockAura/ (BlockAura Official)" },
          { title: "Unterstützte Netzwerke", desc: "Solana (SPL) & Polygon (PoS EVM)" }
        ],
        callout: {
          title: "Sicherheitshinweis zum Abschluss",
          desc: "Smart-Contract-Adressen werden nach Bereitstellung auf dem offiziellen Portal veröffentlicht. Speichern Sie stets nur verifizierte Lesezeichen.",
          type: "success"
        }
      }
    }
  }
];
