import fs from 'fs';
import path from 'path';
import PDFDocument from 'pdfkit';

console.log('Generating Block Aura Official Whitepaper PDF...');

const outputPath = path.resolve('./public/block-aura-whitepaper.pdf');
const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 50, bottom: 50, left: 55, right: 55 },
  bufferPages: true,
  info: {
    Title: 'Block Aura (BA) — Official Architectural Whitepaper',
    Author: 'Block Aura Project Contributors',
    Subject: 'Decentralized Dual-Chain Infrastructure on Solana and Polygon',
    Keywords: 'Block Aura, BA, Solana, Polygon, Cryptocurrency, Whitepaper, Decentralized Exchange, DEX',
    CreationDate: new Date('2026-10-01'),
  }
});

const writeStream = fs.createWriteStream(outputPath);
doc.pipe(writeStream);

// Colors
const COLOR_BLACK = '#0A0A0A';
const COLOR_GOLD = '#B8860B'; // Deep champagne gold for print contrast
const COLOR_GOLD_LIGHT = '#D4AF37';
const COLOR_TEXT_DARK = '#1F2421';
const COLOR_TEXT_MUTED = '#555555';
const COLOR_CARD_BG = '#F8F9FA';
const COLOR_CARD_BORDER = '#E2E8F0';
const COLOR_CALLOUT_BORDER = '#B8860B';

// Helper functions
function addHeader(title, level = 1) {
  if (level === 1) {
    doc.fillColor(COLOR_BLACK)
       .font('Helvetica-Bold')
       .fontSize(18)
       .text(title, { paragraphGap: 6 });
    
    // Gold decorative underline
    const currentY = doc.y;
    doc.strokeColor(COLOR_GOLD_LIGHT)
       .lineWidth(1.5)
       .moveTo(55, currentY)
       .lineTo(250, currentY)
       .stroke();
    doc.y = currentY + 10;
  } else if (level === 2) {
    doc.fillColor(COLOR_GOLD)
       .font('Helvetica-Bold')
       .fontSize(13)
       .text(title, { paragraphGap: 4 });
  }
}

function addParagraph(text) {
  doc.fillColor(COLOR_TEXT_DARK)
     .font('Helvetica')
     .fontSize(10)
     .lineGap(3)
     .text(text, { align: 'justify', paragraphGap: 8 });
}

function addBullet(title, desc) {
  doc.fillColor(COLOR_BLACK)
     .font('Helvetica-Bold')
     .fontSize(10)
     .text(`• ${title}: `, { continued: true })
     .font('Helvetica')
     .fillColor(COLOR_TEXT_DARK)
     .text(desc, { paragraphGap: 6, lineGap: 2 });
}

function addCallout(title, text) {
  const startY = doc.y;
  doc.rect(55, startY, 485, 55)
     .fillAndStroke(COLOR_CARD_BG, COLOR_CALLOUT_BORDER);
  
  doc.fillColor(COLOR_GOLD)
     .font('Helvetica-Bold')
     .fontSize(9.5)
     .text(`[NOTICE] ${title}`, 65, startY + 8);

  doc.fillColor(COLOR_TEXT_DARK)
     .font('Helvetica')
     .fontSize(8.5)
     .lineGap(1.5)
     .text(text, 65, startY + 22, { width: 465, align: 'justify' });

  doc.y = startY + 65;
}

// ==========================================
// 1. COVER PAGE
// ==========================================
doc.rect(0, 0, 595.28, 841.89).fill('#080808');

// Gold accent borders
doc.strokeColor(COLOR_GOLD)
   .lineWidth(1)
   .rect(30, 30, 535.28, 781.89)
   .stroke();

doc.strokeColor('rgba(198, 161, 91, 0.4)')
   .lineWidth(0.5)
   .rect(35, 35, 525.28, 771.89)
   .stroke();

// Header insignia
doc.y = 120;
doc.fillColor('#C6A15B')
   .font('Helvetica-Bold')
   .fontSize(13)
   .text('BLOCK AURA (BA)', { align: 'center', characterSpacing: 3 });

doc.moveDown(1.5);
doc.fillColor('#F5F2EB')
   .font('Helvetica-Bold')
   .fontSize(28)
   .text('OFFICIAL ARCHITECTURAL', { align: 'center', characterSpacing: 1 });
doc.text('WHITEPAPER', { align: 'center', characterSpacing: 2 });

doc.moveDown(0.8);
doc.fillColor('#C6A15B')
   .font('Helvetica')
   .fontSize(12)
   .text('Decentralized Dual-Chain Infrastructure on Solana and Polygon', { align: 'center' });

doc.moveDown(0.4);
doc.fillColor('#AAA69D')
   .font('Helvetica-Oblique')
   .fontSize(10)
   .text('Engineered for High Performance, DEX Liquidity & the AI-Driven Digital Future', { align: 'center' });

// Decorative Divider
doc.moveDown(2);
const divY = doc.y;
doc.strokeColor('#C6A15B')
   .lineWidth(1)
   .moveTo(200, divY)
   .lineTo(395, divY)
   .stroke();

// Metadata Block on Cover
doc.y = divY + 40;
const metaBoxY = doc.y;
doc.rect(75, metaBoxY, 445, 230)
   .fillAndStroke('#111110', 'rgba(198, 161, 91, 0.3)');

doc.fillColor('#C6A15B')
   .font('Helvetica-Bold')
   .fontSize(10)
   .text('CONFIRMED PROJECT METADATA & STATUS', 95, metaBoxY + 18, { align: 'center', width: 405 });

const specs = [
  ['Project Name:', 'Block Aura'],
  ['Token Ticker:', 'BA'],
  ['Supported Networks:', 'Solana (SPL) & Polygon (PoS EVM)'],
  ['Polygon Planned Supply:', '200,000,000 BA (Subject to confirmation)'],
  ['Solana Planned Supply:', '200,000,000 BA (Subject to architecture)'],
  ['Launch Date:', 'COMING SOON — TO BE ANNOUNCED'],
  ['Contract Status:', 'In Development — Pre-Deployment'],
  ['Document Version:', 'Architectural Draft v1.0 (October 2026)'],
];

let specY = metaBoxY + 42;
specs.forEach(([label, value]) => {
  doc.font('Helvetica-Bold')
     .fontSize(9)
     .fillColor('#AAA69D')
     .text(label, 95, specY, { width: 175 });
  doc.font('Helvetica')
     .fontSize(9)
     .fillColor('#F5F2EB')
     .text(value, 270, specY, { width: 230 });
  specY += 21;
});

// Footer Notice on Cover
doc.y = 740;
doc.fillColor('#AAA69D')
   .font('Helvetica')
   .fontSize(8)
   .text('NOTICE: Smart contracts are in active pre-deployment development. Addresses will be announced upon launch.', { align: 'center' });
doc.text('© 2026 Block Aura. All rights reserved. Non-speculative architectural documentation.', { align: 'center' });

// ==========================================
// 2. TABLE OF CONTENTS
// ==========================================
doc.addPage();
addHeader('Table of Contents', 1);
doc.moveDown(0.5);

const tocItems = [
  ['1. Cover Page & Document Identification', 'Page 1'],
  ['2. Abstract & Technical Executive Summary', 'Page 2'],
  ['3. Introduction to Block Aura', 'Page 2'],
  ['4. Project Vision and Mission', 'Page 3'],
  ['5. AI-Related Project Vision', 'Page 3'],
  ['6. Solana and Polygon Network Overview', 'Page 4'],
  ['7. Token Supply and Tokenomics (Planned Allocations)', 'Page 4'],
  ['8. Minting and Burning Mechanisms (Pending Confirmation)', 'Page 5'],
  ['9. Decentralized Exchange (DEX) Availability', 'Page 5'],
  ['10. Planned Launch/Liquidity Pool Infrastructure', 'Page 6'],
  ['11. Roadmap — Phased Progression', 'Page 6'],
  ['12. Security Considerations and Risk Disclosure', 'Page 7'],
  ['13. Disclaimer and Legal Notice', 'Page 7'],
  ['14. Official Links and Community Channels', 'Page 8'],
];

tocItems.forEach(([item, pg]) => {
  doc.font('Helvetica')
     .fontSize(9.5)
     .fillColor(COLOR_TEXT_DARK)
     .text(item, { continued: true })
     .fillColor(COLOR_TEXT_MUTED)
     .text(` ${'.'.repeat(Math.max(5, 75 - item.length))} `, { continued: true })
     .fillColor(COLOR_GOLD)
     .font('Helvetica-Bold')
     .text(pg, { align: 'right', paragraphGap: 6 });
});

doc.moveDown(1.5);

// ==========================================
// 2. ABSTRACT
// ==========================================
addHeader('2. Abstract', 1);
addParagraph('Modern decentralized financial systems demand both ultra-high computational execution speeds and broad, non-custodial interoperability with global liquidity. Single-chain designs frequently force participants into difficult trade-offs between prohibitive transaction costs, confirmation delays, and developer isolation. Block Aura resolves these frictions through a purposeful dual-chain operational model across Solana and Polygon.');
addParagraph('By combining Solana’s sub-second transaction finality with Polygon’s Ethereum-grade EVM compatibility, Block Aura establishes a dependable foundation for peer-to-peer decentralized exchange (DEX) trading, structured token burning, and future-ready digital integrations aligned with the rapid rise of artificial intelligence workflows.');
addParagraph('Block Aura is guided by strict standards of transparency: zero speculative promises, zero fabricated partnerships or volume figures, and clear technical distinctions between confirmed specifications, planned architectures, and components currently under active engineering review.');

doc.moveDown(1);

// ==========================================
// 3. INTRODUCTION TO BLOCK AURA
// ==========================================
addHeader('3. Introduction to Block Aura', 1);
addParagraph('The decentralized asset landscape has transitioned from single-chain experiments to a multi-chain reality. However, participants still encounter significant frictions: liquidity fragmentation, unexpected gas spikes during periods of high demand, and isolated network ecosystems.');
addParagraph('Block Aura (ticker: BA) was created as a community-centered digital asset designed to eliminate these barriers. By launching natively across both Solana and Polygon, Block Aura unites two complementary technological frontiers:');
addBullet('Solana Network', 'Engineered with Proof of History (PoH) and Tower BFT to deliver throughput exceeding 65,000 transactions per second with sub-cent gas fees, making it an ideal environment for rapid, low-friction DEX interaction.');
addBullet('Polygon Network', 'Premier Layer-2 scaling platform backed by Ethereum mainnet settlement security, offering deep EVM interoperability, rich smart contract tooling, and global decentralized liquidity.');
addParagraph('As a decentralized cryptocurrency, Block Aura prioritizes verifiable on-chain transparency, open peer-to-peer liquidity, and community empowerment over centralized administrative control.');

// ==========================================
// 4. PROJECT VISION AND MISSION
// ==========================================
doc.addPage();
addHeader('4. Project Vision and Mission', 1);
addParagraph('Vision: To establish Block Aura as an enduring, transparent, multi-chain digital asset that seamlessly connects high-performance decentralized exchange trading with the evolving technological capabilities of the autonomous digital era.');
addParagraph('Mission: To deliver resilient decentralized financial rails across Solana and Polygon, providing participants worldwide with transparent market mechanics, predictable tokenomic discipline, and collaborative community governance without centralized intermediaries.');
addHeader('Core Guiding Principles', 2);
addBullet('Absolute Transparency', 'No undisclosed token allocations, no fabricated roadmap accomplishments, and open disclosure of technical progress.');
addBullet('Decentralized Sovereignty', 'Prioritizing non-custodial decentralized exchange accessibility where users always retain custody of their private keys and assets.');
addBullet('Sustainable Tokenomics', 'Long-term value preservation via planned token-burning mechanisms rather than artificial inflationary incentives.');
addBullet('Balanced Dual-Chain Architecture', 'Equal priority for Solana and Polygon ecosystems, ensuring participants are free to transact on their preferred network.');

doc.moveDown(1);

// ==========================================
// 5. AI-RELATED PROJECT VISION
// ==========================================
addHeader('5. AI-Related Project Vision', 1);
addParagraph('The rapid convergence of artificial intelligence and distributed ledger technology marks the next technological era in digital interaction. Autonomous AI agents, automated data processors, and algorithmic trading systems require high-throughput, low-latency, and deterministic financial settlement rails.');
addParagraph('Block Aura is strategically positioned at this technological intersection. By architecting dual-chain operations across Solana (capable of sub-second settlement) and Polygon (offering robust EVM smart contracts), Block Aura establishes the technological foundation needed to interact with next-generation autonomous digital workflows.');
addParagraph('Future development areas under Phase 4 of the roadmap focus on algorithmic liquidity optimization, computational verification registries, and high-frequency micro-settlements between autonomous digital agents.');

addCallout('Technical Transparency & Accuracy Notice',
  'Block Aura is an AI-related and future-focused cryptocurrency initiative. The project does NOT claim that artificial intelligence automatically mints tokens, nor does it claim unverified autonomous on-chain AI models without developer governance. All AI modules are scheduled for Phase 4 formulation.');

// ==========================================
// 6. SOLANA & POLYGON NETWORK OVERVIEW
// ==========================================
doc.addPage();
addHeader('6. Solana and Polygon Network Overview', 1);
addParagraph('Block Aura deliberately operates exclusively across two leading blockchain networks: Solana and Polygon. This multi-chain footprint eliminates single-point network failure, maximizes capital efficiency, and guarantees broad reach across both non-EVM and EVM ecosystems.');

addHeader('Solana Network (SPL Standard)', 2);
addParagraph('Solana provides unprecedented computational speed and efficiency. Utilizing a unique combination of Proof of History (PoH) and Tower BFT consensus, Solana achieves theoretical throughput of 65,000+ TPS with average transaction fees below $0.001. Transactions finalize in under 400 milliseconds, empowering responsive peer-to-peer trading on decentralized exchanges without network bottlenecks.');

addHeader('Polygon Network (EVM Standard)', 2);
addParagraph('Polygon is the industry benchmark for Ethereum Layer-2 scaling. Offering 7,000+ TPS and low transaction costs (< $0.01 per transaction), Polygon maintains full bytecode compatibility with Ethereum. Participants can interact seamlessly using MetaMask, Coinbase Wallet, and familiar Web3 tools while benefiting from Ethereum mainnet settlement security.');

addHeader('Dual-Chain Synergy', 2);
addParagraph('Rather than choosing between speed and EVM compatibility, Block Aura harnesses both. Users seeking high-frequency, ultra-low-fee decentralized swaps can utilize Solana, while those prioritizing Ethereum DeFi composability can transact via Polygon.');

doc.moveDown(1);

// ==========================================
// 7. TOKEN SUPPLY AND TOKENOMICS
// ==========================================
addHeader('7. Token Supply and Tokenomics', 1);
addParagraph('The planned token supply figures for the Block Aura deployments have been designated as follows:');
addBullet('Polygon Network Deployment', '200,000,000 BA tokens (Planned)');
addBullet('Solana Network Deployment', '200,000,000 BA tokens (Planned)');
addParagraph('These figures document the planned token supply allocations for each deployment network. They are subject to final architectural confirmation prior to mainnet deployment.');
addParagraph('Important Architectural Clarification: These represent distinct planned deployment numbers for each respective network. They are not claimed to represent one single shared unified supply unless confirmed by the final cross-chain bridge or canonical minting architecture.');

addCallout('Pre-Deployment Architecture Review',
  'Detailed percentage distributions (e.g., launch liquidity pool, community reserves, ecosystem growth) and cross-chain supply synchronization will be published alongside third-party smart contract audits upon formal confirmation.');

// ==========================================
// 8. MINTING AND BURNING MECHANISMS
// ==========================================
doc.addPage();
addHeader('8. Minting and Burning Mechanisms', 1);
addParagraph('Block Aura is designed with disciplined supply controls to prevent arbitrary inflation and support long-term ecosystem sustainability.');

addHeader('Intended Token Minting Model', 2);
addParagraph('Token minting permissions on both Solana and Polygon are governed by strict cryptographic controls. Architectural evaluations are currently determining whether minting authority will be permanently renounced upon initial deployment or placed under multi-signature decentralized governance. Minting permissions will be verified by independent third-party audits before mainnet launch.');

addHeader('Token Burning Mechanism', 2);
addParagraph('Selected tokens may be permanently removed from circulation through the Block Aura burning mechanism, supporting a structured and sustainable token ecosystem. Burning events will permanently transmit tokens to provably unspendable addresses (such as 0x000...dead on Polygon and SPL burn instructions on Solana), permanently decreasing circulating supply.');

addCallout('Status: Pending Confirmation',
  'The exact minting permissions, burning rules, burn percentages, and operational schedules have not yet been confirmed and are labeled as Pending Confirmation. Block Aura does not claim on-chain burning is active until smart contracts are formally audited and deployed to mainnet.');

doc.moveDown(1);

// ==========================================
// 9. DECENTRALIZED EXCHANGE AVAILABILITY
// ==========================================
addHeader('9. Decentralized Exchange (DEX) Availability', 1);
addParagraph('Block Aura is engineered for non-custodial decentralized exchange accessibility. Upon mainnet deployment, users will be able to acquire and trade Block Aura through supported decentralized exchanges (DEXs) within the Solana and Polygon ecosystems.');
addParagraph('By emphasizing decentralized exchanges, Block Aura ensures participants retain complete ownership of their digital assets. Transactions execute directly peer-to-peer against automated liquidity pools without centralized custody risk or withdrawal friction.');

addHeader('Trading Ecosystem Access', 2);
addBullet('Solana DEX Ecosystem', 'Accessible via supported decentralized exchanges on Solana using SPL-compatible decentralized wallets (e.g., Phantom, Solflare).');
addBullet('Polygon DEX Ecosystem', 'Accessible via supported EVM decentralized exchanges on Polygon using standard Web3 wallets (e.g., MetaMask, Coinbase Wallet).');
addBullet('Authentic Contract Verification', 'Official contract addresses and direct swap pools will only be announced through verified Block Aura communication channels upon release.');

addCallout('Zero Fake Listings Policy',
  'Block Aura does not publish unverified exchange names, fake contract addresses, synthetic trading pairs, or fabricated volume metrics. Official pairs will be announced upon launch.');

// ==========================================
// 10. PLANNED LAUNCH / LIQUIDITY POOL
// ==========================================
doc.addPage();
addHeader('10. Planned Launch/Liquidity Pool', 1);
addParagraph('To facilitate an orderly and balanced market launch, Block Aura is developing dedicated launch and liquidity pool infrastructure. This liquidity framework will support the Block Aura ecosystem across both Solana and Polygon decentralized exchange pools at launch.');
addParagraph('The launch pool will provide immediate initial trading depth, mitigating severe price slippage and establishing an equitable foundation for decentralized community trading without centralized market manipulation.');

addHeader('Key Objectives', 2);
addBullet('Balanced Initial Capital', 'Dedicated liquidity provisioning to establish healthy swap pairs on both chains upon launch.');
addBullet('Non-Custodial Architecture', 'Liquidity pools will be deployed on open decentralized protocols with transparent on-chain verification.');
addBullet('Realistic Parameters', 'No fabricated APY promises, no unverified high-risk staking models, and no artificial yield farming.');

addCallout('Status: Coming Soon',
  'Detailed mechanics, lockup schedules, liquidity pairs, and operational parameters are marked as coming soon and will be published upon smart contract testnet completion.');

doc.moveDown(1);

// ==========================================
// 11. ROADMAP — PHASED PROGRESSION
// ==========================================
addHeader('11. Roadmap — Phased Progression', 1);
addParagraph('The Block Aura roadmap outlines a disciplined progression from architectural design to multi-chain scale. All milestones are transparently categorized as in-progress or planned:');

addBullet('Phase 1: Foundation & Architecture (IN PROGRESS)',
  'Solana & Polygon dual-network integration design; official website portal & brand identity release; community channels launch on X and Facebook; publication of architectural documentation.');

addBullet('Phase 2: Token Development & Burning Design (PLANNED)',
  'Smart contract development on Solana (SPL) and Polygon (EVM); burn mechanism modeling and testnet verification; independent third-party smart contract security audits.');

addBullet('Phase 3: Launch Pool & DEX Deployment (PLANNED)',
  'Launch pool liquidity bootstrapping; decentralized exchange availability across Solana and Polygon ecosystems; public release and verification of contract addresses.');

addBullet('Phase 4: AI Integration & Ecosystem Scale (PLANNED HORIZON)',
  'AI-aligned digital ecosystem utility modules; cross-chain liquidity optimization; expansion of decentralized community governance initiatives.');

addCallout('Roadmap Notice',
  'Unconfirmed milestones are explicitly marked as planned. Development timelines may adapt based on security audit results and multi-chain protocol updates.');

// ==========================================
// 12. SECURITY CONSIDERATIONS & RISK DISCLOSURE
// ==========================================
doc.addPage();
addHeader('12. Security Considerations and Risk Disclosure', 1);
addParagraph('Participating in nascent decentralized cryptocurrency initiatives entails inherent technological and market risks. Block Aura maintains high security standards while ensuring that all participants are fully cognizant of these factors.');

addHeader('Technical Safeguards', 2);
addBullet('Comprehensive Audits', 'All smart contract source code will undergo thorough verification by independent security auditors before mainnet deployment.');
addBullet('Multi-Signature Security', 'Administrative parameters during development will be governed by multi-signature consensus to eliminate single-point risks.');
addBullet('Open-Source Verification', 'Contract source code will be publicly published on Solscan and Polygonscan for full public auditing.');

addHeader('Market and Ecosystem Risks', 2);
addBullet('Volatility Risk', 'Digital asset valuations are subject to extreme price volatility. No price appreciation, investment returns, or profitability are guaranteed.');
addBullet('Self-Custody Responsibility', 'Participants are solely responsible for the custody of their private keys and seed phrases. The project team has no ability to recover lost funds.');

addCallout('Security Advisory',
  'The Block Aura team will NEVER send direct messages requesting private keys, seed phrases, or funds transfers. Beware of phishing scams and duplicate counterfeit accounts.');

doc.moveDown(1);

// ==========================================
// 13. DISCLAIMER AND LEGAL NOTICE
// ==========================================
addHeader('13. Disclaimer and Legal Notice', 1);
addParagraph('This whitepaper is published strictly for informational and educational purposes. It does not constitute an offer of securities, an investment invitation, a financial prospectus, or professional financial, legal, or tax advice.');
addParagraph('Block Aura (BA) is an independent decentralized cryptocurrency project currently in active pre-deployment development. The BA token is not yet deployed on mainnets, and no public token sale, presale, or fundraising event is conducted through this document.');
addParagraph('Regulatory Considerations: The regulatory classification of cryptographic assets varies by international jurisdiction. Participants are exclusively responsible for assessing their personal tax and legal obligations under their respective local laws.');
addParagraph('No Guarantees: Neither the Block Aura project, its developers, nor community contributors guarantee the future performance, market depth, or uninterrupted technological continuity of the network. All participation is conducted at the user’s sole discretion and risk.');

// ==========================================
// 14. OFFICIAL LINKS AND COMMUNITY
// ==========================================
doc.addPage();
addHeader('14. Official Links and Community', 1);
addParagraph('To safeguard against impersonators and counterfeit tokens, only rely on the official communication channels and verified digital links listed below:');

addBullet('Official Website Portal', 'https://blockaura.io (Block Aura Web Portal)');
addBullet('Official X (formerly Twitter)', 'https://x.com/BlockAuraCoin (@BlockAuraCoin)');
addBullet('Official Facebook Page', 'https://www.facebook.com/BlockAura/ (BlockAura Official)');
addBullet('Supported Blockchain Networks', 'Solana (SPL) & Polygon (PoS EVM)');

doc.moveDown(2);
addCallout('Final Security Reminder',
  'Official smart contract addresses will be announced exclusively through verified channels upon mainnet release. Never trust unverified direct messages or third-party contracts.');

// ==========================================
// RUNNING HEADERS & FOOTERS (All Pages)
// ==========================================
const pageCount = doc.bufferedPageRange().count;

for (let i = 0; i < pageCount; i++) {
  doc.switchToPage(i);
  
  if (i === 0) continue; // Skip cover page
  
  // Running Header
  doc.fillColor(COLOR_TEXT_MUTED)
     .font('Helvetica')
     .fontSize(7.5)
     .text('BLOCK AURA (BA) — OFFICIAL ARCHITECTURAL WHITEPAPER (DRAFT v1.0)', 55, 30, { align: 'left' });
  
  doc.fillColor(COLOR_GOLD)
     .text('SOLANA & POLYGON', 55, 30, { align: 'right', width: 485 });
  
  doc.strokeColor('rgba(198, 161, 91, 0.25)')
     .lineWidth(0.5)
     .moveTo(55, 42)
     .lineTo(540, 42)
     .stroke();
  
  // Running Footer
  doc.strokeColor('rgba(198, 161, 91, 0.25)')
     .lineWidth(0.5)
     .moveTo(55, 790)
     .lineTo(540, 790)
     .stroke();
  
  doc.fillColor(COLOR_TEXT_MUTED)
     .font('Helvetica')
     .fontSize(7.5)
     .text('© 2026 Block Aura. For Informational Purposes Only. Non-Speculative.', 55, 800, { align: 'left' });
  
  doc.fillColor(COLOR_GOLD)
     .font('Helvetica-Bold')
     .fontSize(8)
     .text(`Page ${i + 1} of ${pageCount}`, 55, 800, { align: 'right', width: 485 });
}

doc.end();

writeStream.on('finish', () => {
  const stats = fs.statSync(outputPath);
  console.log(`PASS: Whitepaper PDF generated successfully at ${outputPath} (${stats.size} bytes, ${pageCount} pages).`);
});
