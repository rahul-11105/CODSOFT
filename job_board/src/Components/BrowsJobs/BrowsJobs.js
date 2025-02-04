import React, { useState, useEffect } from "react";
import "./browsjobs.css";
import Nav from "../Navbar/Nav";
import Footer from "../Footer/Footer";
import data from "./Json_Data";

const BrowsJobs = () => {
  const [count, setCount] = useState(0);
  const [jobs, setJobs] = useState([
                                                           {
                                                               "id": "XWxW8kn",
                                                               "role": "Financial Product Development Intern",
                                                               "company_name": "21.co",
                                                               "company_num_employees": null,
                                                               "employment_type": null,
                                                               "location": "Zurich, Switzerland",
                                                               "remote": false,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/e0bb6314ba1d56334c02cfd8d7079caf29869896.jpg",
                                                               "url": "https://findwork.dev/XWxW8kn/financial-product-development-intern-at-21co",
                                                               "text": "21.co is looking to hire a Financial Product Development Intern to join their team. This is an internship position that is based in Zurich.",
                                                               "date_posted": "2025-01-21T05:00:00Z",
                                                               "keywords": [],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "n98zOzX",
                                                               "role": "Operations Analyst",
                                                               "company_name": "Delphi Digital",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": null,
                                                               "remote": true,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/761de80f326562db4e6cd2172bcc7fc4bfacf8ad.jpg",
                                                               "url": "https://findwork.dev/n98zOzX/operations-analyst-at-delphi-digital",
                                                               "text": "Delphi Digital is looking to hire an Operations Analyst to join their team. This is a full-time position that can be done remotely anywhere in India.",
                                                               "date_posted": "2025-01-21T05:00:00Z",
                                                               "keywords": [],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "MdVR8pn",
                                                               "role": "Recruiting Coordinator - Contract",
                                                               "company_name": "TRM",
                                                               "company_num_employees": null,
                                                               "employment_type": "contract",
                                                               "location": null,
                                                               "remote": true,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/6615030c3951367f4ff1f0bd071d6afc518b8720.jpg",
                                                               "url": "https://findwork.dev/MdVR8pn/recruiting-coordinator-contract-at-trm",
                                                               "text": "TRM is looking to hire a Recruiting Coordinator - Contract to join their team. This is a contract position that can be done remotely anywhere in LATAM.",
                                                               "date_posted": "2025-01-21T05:00:00Z",
                                                               "keywords": [],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "nKJV85X",
                                                               "role": "Senior Manager, Finance",
                                                               "company_name": "Ripple",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": "Dublin, Ireland",
                                                               "remote": false,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/29cf3e97dc6e4e4f4f66d919025965bef2ff29f7.jpg",
                                                               "url": "https://findwork.dev/nKJV85X/senior-manager-finance-at-ripple",
                                                               "text": "Ripple is looking to hire a Senior Manager, Finance to join their team. This is a full-time position that is based in Dublin.",
                                                               "date_posted": "2025-01-21T05:00:00Z",
                                                               "keywords": [],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "MrJalKM",
                                                               "role": "Senior Talent Acquisition Partner",
                                                               "company_name": "Blockchain",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": "London, United Kingdom",
                                                               "remote": false,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/ce3c7d873a3f69fc372a97094099ce946a46a020.jpg",
                                                               "url": "https://findwork.dev/MrJalKM/senior-talent-acquisition-partner-at-blockchain",
                                                               "text": "Blockchain is looking to hire a Senior Talent Acquisition Partner to join their team. This is a full-time position that is based in London.",
                                                               "date_posted": "2025-01-21T05:00:00Z",
                                                               "keywords": [
                                                                   "blockchain"
                                                               ],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "n2YdONX",
                                                               "role": "Senior On-Chain Liquidity Consultant - DeFi",
                                                               "company_name": "Arrakis Finance",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": null,
                                                               "remote": true,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/0f71388ad3b804fb04ef837e78de980978018b66.jpg",
                                                               "url": "https://findwork.dev/n2YdONX/senior-on-chain-liquidity-consultant-defi-at-arrakis-finance",
                                                               "text": "<h2>Description</h2><p>Arrakis aims to disrupt the current market-making industry by providing the infrastructure to enable every project in the world that wants to launch a token to benefit from non-custodial, trust-less, and automated on-chain market-making strategies. We believe in a world where every organization, from a small startup to a large enterprise, will be tokenized and traded on-chain. For this world, Arrakis is building the tools to create the necessary liquidity to enable this token economy to rival and out-compete the traditional financial industry.</p><h2>The role</h2><p>As a Senior On-Chain Liquidity Consultant, you will grow the Arrakis customer base by researching, networking and reaching out to the top projects in the web3 industry alongside being the first point of call for existing US customers for on-chain liquidity queries and education. Acquisition of new TVL to the protocol and help make Arrakis the largest decentralized market making protocol in the world.</p><ul><li>Diving into our vaults and strategies to understand their mechanics and applications.</li><li>Troubleshooting new clients on vault setup and deployment process.</li><li>Maintaining and nurturing long-term customer relationships.</li><li>Drive business growth by identifying new / upsell opportunities within current accounts and new business.</li></ul><h2>Requirements</h2><ul><li>At least 2yrs experience within a B2B DeFi company</li><li>Experience selling technical DeFi solutions</li><li>Web3 native using DeFi protocols every day/week</li><li>Outstanding knowledge of on-chain liquidity concepts such as Uniswap V3 liquidity provisioning (single / double sided, concentrated range management), LVR, MEV and impermanent loss.</li><li>Track record of managing partnerships, closing deals, and overachieving your revenue goals</li><li>Comfortable in fast-paced environments and having ambitious targets</li><li>An amazing communicator and natural salesperson.</li><li>Well-organized with strong time management skills and a proactive personality</li></ul><h2>Benefits</h2><p>Join an amazing team of industry veterans focused on revolutionizing web3 market making, collaborating with major projects like MakerDAO, Uniswap, Aave, Lido, operating fully remotely with members spanning Zug, Paris, New York, Berlin supported by world-class investors including Uniswap Labs, Robot Ventures, Accel, Longhash, and more.</p><p>What we offer:</p><ul><li>Competitive salary + performance-based compensation</li><li>SPICE token package</li><li>Work remotely or with the Founders in person, in Switzerland</li><li>Chance to travel the world to go to exciting events, connecting with key industry players</li><li>Join amazing in-person offsites all over the world</li></ul>",
                                                               "date_posted": "2025-01-21T05:00:00Z",
                                                               "keywords": [
                                                                   "web3"
                                                               ],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "Qg6e0Rn",
                                                               "role": "Distributed Systems Evaluation Engineer (Vac DST)",
                                                               "company_name": "Vac",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": null,
                                                               "remote": true,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/b649eb881b3ef6faf85dd9aa100770230c476a1a.jpg",
                                                               "url": "https://findwork.dev/Qg6e0Rn/distributed-systems-evaluation-engineer-vac-dst-at-vac",
                                                               "text": "<h2>About Vac</h2><p>Vac builds public good protocols for the decentralized web. We do applied research based on which we build protocols, libraries and publications.</p><h2>The role</h2><p>We are seeking an experienced Distributed Systems Evaluation Engineer to join the Vac DST team. This role focuses on rigorously assessing the performance and reliability of IFT projects at scale. You’ll be responsible for designing and executing comprehensive evaluation strategies, leveraging both large-scale lab deployments and protocol behavior modeling scripts. Your expertise will be crucial in analyzing these complex distributed systems, automating intricate test scenarios, and providing in-depth insights into system behaviors.</p><p>Working closely with cross-functional teams, you’ll troubleshoot complex issues and translate technical data into actionable recommendations. Proficiency in containerization, cloud technologies, and distributed systems principles is essential.</p><p>This position offers the opportunity to make a significant impact on the robustness and scalability of IFT projects, contributing to the development of next-generation decentralized technologies.</p><h2>Key responsibilities</h2><ul><li>Design, implement, and maintain sophisticated tools for analyzing distributed systems at scale, ensuring robust and efficient testing processes.</li><li>Orchestrate and automate large-scale deployments to rigorously validate the functionality, performance, and scalability of complex distributed systems.</li><li>Identify, document, reproduce, and troubleshoot intricate issues in distributed environments, collaborating closely with IFT project teams to resolve challenges.</li><li>Develop a comprehensive understanding of IFT project protocols and components to provide insightful analyses that drive improvements and inform decision-making.</li><li>Conduct and interpret statistical analyses of system outputs, translating complex data into actionable insights for stakeholders.</li><li>Create and maintain scripts that model protocol behavior, utilizing these models to validate and sanity-check large-scale deployment runs.</li><li>Work with Docker, Kubernetes, and POSIX-like systems</li></ul><h2>You ideally will have</h2><ul><li>Solid experience with scripting languages like Python.</li><li>Experience with statistical analysis tools, like pandas, seaborn.</li><li>Experience with systems programming languages like Nim, Go, Rust.</li><li>Understanding of network behaviors (libp2p, gossipsub, p2p networks).</li><li>Working knowledge of Docker, Kubernetes, and POSIX-like systems.</li><li>Excellent written and conversational communication skills.</li><li>Alignment with our core values and principles.</li></ul><h2>Bonus points</h2><ul><li>Experience with off-the-shelf networking stacks such as libp2p.</li><li>Experience in blockchain technology.</li><li>Experience working for an open-source organization.</li></ul><h2>Hiring process</h2><ul><li>Interview with our POps team</li><li>Interview with team member from the Vac DST team</li><li>Take home assignment & interview with team member from the Vac DST team</li><li>Interview with Vac team lead</li></ul>",
                                                               "date_posted": "2025-01-20T05:00:00Z",
                                                               "keywords": [
                                                                   "kubernetes",
                                                                   "python",
                                                                   "docker",
                                                                   "blockchain",
                                                                   "rust",
                                                                   "pandas"
                                                               ],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "QP1kN4M",
                                                               "role": "Junior Data Analyst",
                                                               "company_name": "Braiins",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": "Prague, Czech Republic",
                                                               "remote": true,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/ffa48dcc3fa27b2d5d0343639775d6927f8e3f64.jpg",
                                                               "url": "https://findwork.dev/QP1kN4M/junior-data-analyst-at-braiins",
                                                               "text": "Braiins is looking to hire a Junior Data Analyst to join their team. This is a full-time position that can be done remotely anywhere in CET +/- 2hrs or on-site in Prague.",
                                                               "date_posted": "2025-01-20T05:00:00Z",
                                                               "keywords": [],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "MNNEPLM",
                                                               "role": "VP, Institutional Sales - Staking",
                                                               "company_name": "Hex Trust",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": "Dubai, United Arab Emirates",
                                                               "remote": false,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/66ed5294d096abadf77dd9ee2aeecd979a1ccb74.jpg",
                                                               "url": "https://findwork.dev/MNNEPLM/vp-institutional-sales-staking-at-hex-trust",
                                                               "text": "Hex Trust is looking to hire a VP, Institutional Sales - Staking to join their team. This is a full-time position that can be based in Dubai, Hong Kong, or Singapore.",
                                                               "date_posted": "2025-01-20T05:00:00Z",
                                                               "keywords": [
                                                                   "kong"
                                                               ],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "XlL02EX",
                                                               "role": "Business Operations Manager",
                                                               "company_name": "Uniswap",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": "New York, United States",
                                                               "remote": false,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/51acffbf60f7e84b3afe5893c7eab429fa12846a.jpg",
                                                               "url": "https://findwork.dev/XlL02EX/business-operations-manager-at-uniswap",
                                                               "text": "Uniswap is looking to hire a Business Operations Manager to join their team. This is a full-time position that is based in New York NY.",
                                                               "date_posted": "2025-01-20T05:00:00Z",
                                                               "keywords": [],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "nvDrlLM",
                                                               "role": "DeFi Researcher/Business Analyst - Research Workstream",
                                                               "company_name": "Lido",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": null,
                                                               "remote": true,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/543f3635ce82e2ea310de26d79c515f62201e332.jpg",
                                                               "url": "https://findwork.dev/nvDrlLM/defi-researcherbusiness-analyst-research-workstream-at-lido",
                                                               "text": "Lido is looking to hire a DeFi Researcher/Business Analyst - Research Workstream to join their team. This is a full-time position that is 100% remote with no geographical restrictions. Work remotely from anywhere.",
                                                               "date_posted": "2025-01-20T05:00:00Z",
                                                               "keywords": [],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "MAdR0gQ",
                                                               "role": "Europe Institutional Growth Lead",
                                                               "company_name": "Solana Foundation",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": "London, United Kingdom",
                                                               "remote": false,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/7bc921ae99f0b1dae8df18018a20f5cae50d08cc.jpg",
                                                               "url": "https://findwork.dev/MAdR0gQ/europe-institutional-growth-lead-at-solana-foundation",
                                                               "text": "Solana Foundation is looking to hire an Europe Institutional Growth Lead to join their team. This is a full-time position that is based in London.",
                                                               "date_posted": "2025-01-20T05:00:00Z",
                                                               "keywords": [],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "nD5evYQ",
                                                               "role": "International Key Account Manager",
                                                               "company_name": "Ledger",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": "Paris, France",
                                                               "remote": false,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/4cf850960bbe77a11bbf118483bb9b5443dc44f7.jpg",
                                                               "url": "https://findwork.dev/nD5evYQ/international-key-account-manager-at-ledger",
                                                               "text": "Ledger is looking to hire an International Key Account Manager to join their team. This is a full-time position that is based in Paris.",
                                                               "date_posted": "2025-01-20T05:00:00Z",
                                                               "keywords": [
                                                                   "ledger"
                                                               ],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "X88pOOX",
                                                               "role": "Marketing & Growth Manager",
                                                               "company_name": "TinySPL",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": null,
                                                               "remote": true,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/6df886b4a4b671ad7d0bdd3ea25a5c7142ae5518.jpg",
                                                               "url": "https://findwork.dev/X88pOOX/marketing-growth-manager-at-tinyspl",
                                                               "text": "<p>We’re seeking a passionate and innovative Marketing & Growth Manager to bring TinySPL’s vision to life and share it with the world. In this role, you will lead all aspects of our marketing efforts, from crafting a compelling strategy and brand narrative to executing high-impact campaigns that drive awareness and engagement. You’ll take ownership of content creation, channel management, and partnerships, ensuring our message resonates across the global web3 ecosystem. The ideal candidate has a proven track record in global marketing and a deep understanding of the unique dynamics of the web3 space.</p><h2>Key Responsibilities</h2><ul><li>Develop a comprehensive marketing strategy, narrative, and positioning for TinySPL</li><li>Plan and execute multi-channel, multi-stage marketing and go-to-market campaigns for TinySPL and our products</li><li>Collaborate with the product development team to align marketing efforts with product launches and updates</li><li>Work with partners, KOLs, and industry connections to maximize the exposure and amplification of these campaigns</li><li>Oversee social media presence and strategies, including developing content calendar and producing high-quality and engaging material to grow our following and exposure</li><li>Bring humor and creativity to the table by incorporating memes and humorous elements into our content, adding an extra layer of entertainment and engagement</li><li>Build, grow, and engage a global community of users and stakeholders, including in Discord and on Twitter</li><li>Identify and pursue strategic partnerships</li></ul><h2>Key Qualifications</h2><ul><li>A solid understanding of the web3 space and a pulse on the landscape.</li><li>Fluent in English with strong communication skills, capable of creating engaging content and fostering cross-cultural connections.</li><li>Proven track record with marketing and growth strategies in web3</li><li>Organized, adaptable, and able to thrive in a collaborative team setting.</li><li>Self starter, doesn’t need to be told what to do</li><li>Ability to work remotely, with a flexible schedule accommodating global time zones.</li><li>Ability to navigate ambiguity, adapt to change quickly, and thrive in a fast-paced setting.</li><li>Bonus: Knows additional language(s) in addition to English</li></ul>",
                                                               "date_posted": "2025-01-20T05:00:00Z",
                                                               "keywords": [
                                                                   "web3"
                                                               ],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "nYPY85X",
                                                               "role": "Sr. Frontend Product Engineer (DeAI)",
                                                               "company_name": "Autonomys Network",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": null,
                                                               "remote": true,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/2ef899d347921e8d8644586c376ec20df00b78bb.jpg",
                                                               "url": "https://findwork.dev/nYPY85X/sr-frontend-product-engineer-deai-at-autonomys-network",
                                                               "text": "<h2>The Autonomys Network <em>(formerly, Subspace Labs)</em></h2><p>Autonomys is an early-stage, venture-backed startup pioneering a new category at the intersection of AI and Web3. With our upcoming mainnet launch this year, the Autonomys Network is a radically decentralized, next-generation layer one blockchain powered by an innovative proof-of-archival storage (PoAS) consensus mechanism. Our project serves as a foundation for global collaboration between humans and AI, ushering in a new era of possibilities. The Subspace Protocol is based on original research funded by the US National Science Foundation.</p><p>To learn more, visit our <a>technical whitepaper</a>.</p><h2>In this role, you will…</h2><ul><li><strong>Build</strong> user flows across both web and backend (React and Node).</li><li><strong>Integrate</strong> directly with other blockchain networks using native RPCs.</li><li><strong>Collaborate</strong> with Product, Design, and Engineering to define, prioritize, and build features for Web3 users.</li><li><strong>Drive</strong> detailed project definition and cross-functional alignment.</li></ul><h2>Key Requirements:</h2><ul><li>3+ years of experience <strong>building open-source code</strong> that is clean, maintainable, and well-tested, for production networks at scale.</li><li>2+ years of experience working with <strong>Typescript</strong> and <strong>Node.js</strong>.</li><li>2+ years of experience of experience with <strong>Ethers/Web3.js</strong> or <strong>Polkadot.js</strong>.</li><li>2+ years of experience working with <strong>React.js</strong>.</li><li>A passion for decentralized, <strong>peer-to-peer systems</strong> and <strong>Web3 technologies.</strong></li></ul><h2>Preferred Skills:</h2><ul><li>Familiarity with <strong>Substrate</strong> and the Polkadot ecosystem.</li><li>Familiarity with <strong>Next.js</strong>, <strong>Tailwind CSS</strong> and other <strong>modern frontend frameworks.</strong></li><li>Experience with <strong>SubQuery</strong> data indexing and querying framework.</li><li>Experience building <strong>developer SDKs</strong> and <strong>internal tools.</strong></li><li>Experience developing <strong>AI tools</strong>, including <strong>Retrieval-Augmented Generation (RAG) systems</strong>, <strong>AI agents</strong>, and <strong>custom chatbots.</strong></li><li>Experience <strong>integrating smart contracts</strong> with frontend.</li><li>Theoretical knowledge o<strong>f blockchains</strong> and <strong>distributed systems</strong>.</li></ul><h2>What We Offer</h2><ul><li>The ability to work from anywhere in the world</li><li>A competitive salary with generous equity and token grants</li><li>Medical, dental, and vision insurance (US-based only)</li><li>A unique opportunity to shape the future of the internet</li><li>Team off-sites in various locations around the globe</li></ul>",
                                                               "date_posted": "2025-01-20T05:00:00Z",
                                                               "keywords": [
                                                                   "blockchain",
                                                                   "tailwind",
                                                                   "react",
                                                                   "typescript",
                                                                   "node",
                                                                   "web3"
                                                               ],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "njj5lDn",
                                                               "role": "EU Head of Government Relations",
                                                               "company_name": "Binance",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": null,
                                                               "remote": true,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/d77f9cfd790df85cfc4a26d1564eee20cff36a29.jpg",
                                                               "url": "https://findwork.dev/njj5lDn/eu-head-of-government-relations-at-binance",
                                                               "text": "Binance is looking to hire an EU Head of Government Relations to join their team. This is a full-time position that is 100% remote with no geographical restrictions. Work remotely from anywhere.",
                                                               "date_posted": "2025-01-19T05:00:00Z",
                                                               "keywords": [],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "Q4qWl2M",
                                                               "role": "Graduate HR and Office Operations Associate (6-months Internship)",
                                                               "company_name": "Keyrock",
                                                               "company_num_employees": "11-50",
                                                               "employment_type": null,
                                                               "location": "Brussels, Belgium",
                                                               "remote": false,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/2a485144d38cbf11e3b318b97967476876973381.jpg",
                                                               "url": "https://findwork.dev/Q4qWl2M/graduate-hr-and-office-operations-associate-6-months-internship-at-keyrock",
                                                               "text": "Keyrock is looking to hire a Graduate HR and Office Operations Associate (6-months Internship) to join their team. This is an internship position that is based in Brussels.",
                                                               "date_posted": "2025-01-19T05:00:00Z",
                                                               "keywords": [],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "XkROlPM",
                                                               "role": "Technical Project Coordinator",
                                                               "company_name": "Somnia",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": null,
                                                               "remote": true,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/b5731edd081b97da67270df6c3dc2c454d1e3fb6.jpg",
                                                               "url": "https://findwork.dev/XkROlPM/technical-project-coordinator-at-somnia",
                                                               "text": "Somnia is looking to hire a Technical Project Coordinator to join their team. This is a full-time position that can be done remotely anywhere in APAC or EMEA.",
                                                               "date_posted": "2025-01-19T05:00:00Z",
                                                               "keywords": [],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "nalZ8AX",
                                                               "role": "Social Media Manager",
                                                               "company_name": "closed.fun",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": null,
                                                               "remote": true,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/a1ded28e62a5cdcac00662e5a6a9707d3a64d548.jpg",
                                                               "url": "https://findwork.dev/nalZ8AX/social-media-manager-at-closedfun",
                                                               "text": "<h2>Company Overview</h2><p>closed.fun is a Telegram-based trading bot focusing on Solana. We’re building the fastest, most feature-packed trading bot on Solana, offering a sleek user experience and a robust trading suite.</p><h2>Position Overview</h2><p>We are seeking a creative and forward-thinking Social Media Specialist who lives and breathes Web3 and social media trends. In this role, you will shape our brand narrative, develop content strategies, and manage community engagement. You’ll translate our vision into compelling content that drives user growth and brand recognition.</p><h2>Key Responsibilities</h2><ol><li>Develop and execute comprehensive social media strategies across multiple platforms.</li><li>Build and maintain ongoing relationships with influencers and partners.</li><li>Create compelling copy for social media, newsletters, blog posts, and marketing materials.</li><li>Manage our social media channels to ensure consistent and engaging content.</li><li>Collaborate with cross-functional teams and partners for co-branded campaigns.</li><li>Track and analyze performance metrics to refine content strategies for optimal growth.</li></ol><h2>Qualifications</h2><ul><li>Proven experience in social media management, particularly in Web3 or related industries.</li><li>Strong familiarity with the Solana ecosystem. (Bonus if you understand Telegram trading bots and the daos.fun ecosystem.)</li><li>Ability to work independently, think on your feet, and execute quickly.</li><li>Excellent written and verbal communication skills.</li></ul><h2>Additional Details</h2><ul><li>UK or MENA timezone preferred.</li><li>Remote working environment with flexible hours.</li><li>KPI-based targets and content deadlines.</li><li>Competitive salary (negotiable).</li></ul><h2>How to Apply</h2><p>To apply, fill in the form provided. To be considered for the role, please complete the following tasks:</p><ol><li>How would you change our social media account?</li><li>How is our branding compared to other trading bots? What could be improved?</li><li>Provide previous case studies and tasks.</li></ol><p>To complete these tasks you can use <a>https://excalidraw.com/</a> and ‘share’ a read-only link so we can view the work. Failure to complete these tasks will mean you will not be considered for the role.</p><p>Form to fill: <a>https://forms.gle/BHTT7LvYYpKXhPef6</a></p>",
                                                               "date_posted": "2025-01-19T05:00:00Z",
                                                               "keywords": [
                                                                   "web3"
                                                               ],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "XE5wb6X",
                                                               "role": "Business Development Manager",
                                                               "company_name": "closed.fun",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": null,
                                                               "remote": true,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/a1ded28e62a5cdcac00662e5a6a9707d3a64d548.jpg",
                                                               "url": "https://findwork.dev/XE5wb6X/business-development-manager-at-closedfun",
                                                               "text": "<h2>Company Overview</h2><p>closed.fun is a Telegram-based trading bot focusing on Solana. We’re building the fastest, most feature-packed trading bot on Solana, offering a sleek user experience and a robust trading suite.</p><h2>Position Overview</h2><p>We are seeking a proactive and strategic Business Development Manager to expand and manage relationships with current partners while driving new growth opportunities. You will develop and implement a comprehensive strategy to increase our B2B and B2C clientele, onboard new influencers, and oversee the entire sales pipeline. As a key liaison to the marketing team, you’ll collaborate on campaign ideation, development, and execution.</p><h2>Key Responsibilities</h2><ol><li>Identify and pursue new business opportunities, forming and nurturing strategic partnerships.</li><li>Manage existing partner relationships, ensuring consistent engagement and retention.</li><li>Develop and implement growth strategies for both B2B and B2C markets.</li><li>Lead end-to-end sales pipeline activities—from prospecting to deal closing.</li><li>Collaborate with marketing to align campaigns and outreach for maximum impact.</li><li>Conduct market research and analysis to inform strategies and stay ahead of industry trends.</li></ol><h2>Requirements</h2><ul><li>Proven Business Development experience, in <strong>Web3</strong> or related industries.</li><li>Strong Solana ecosystem knowledge.</li><li>Experience working independently with minimal supervision.</li><li>Excellent people skills—friendly, capable of building rapport quickly.</li><li>Demonstrated ability to create and execute strategic business development plans.</li><li>Strong negotiation and closing skills.</li><li>Exceptional verbal and written communication skills.</li><li>Proven track record of driving business growth and forming strategic partnerships.</li><li>Bonus: Previous work at a Telegram trading bot firm.</li><li>Bonus: Experience with the daos.fun platform.</li><li>Ability to work both independently and as part of a team.</li><li>Proactive and self-motivated with a results-driven mindset.</li><li>Experience with market research and analysis.</li></ul><h2>Additional Details</h2><ul><li>UK or MENA timezone preferred.</li><li>Remote working environment with flexible hours.</li><li>KPI-based targets and growth milestones.</li><li>Competitive salary (negotiable).</li></ul><h2>To apply, please:</h2><ol><li>Fill out: <a>https://forms.gle/mFGoN8FiAH2TwXS76</a></li><li>Complete the following tasks to be considered for the role:</li></ol><ul><li><strong>Business Development Plan:</strong> How would you increase our user base exponentially? What do you think would be the three main areas to focus on, and why?</li><li><strong>Market Analysis:</strong> Who are our competitors? What is our competitive advantage? How can we improve?</li></ul><p>To complete these tasks you can use <a>https://excalidraw.com/</a> and ‘share’ a read-only link so we can view the work. Failure to complete these tasks will mean you will not be considered for the role.</p>",
                                                               "date_posted": "2025-01-19T05:00:00Z",
                                                               "keywords": [
                                                                   "web3"
                                                               ],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "n7l6vgQ",
                                                               "role": "Bitcoin Product Manager",
                                                               "company_name": "StarkWare",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": "Netanya, Israel",
                                                               "remote": false,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/6cf8d87016b27f59ef5bf153277c2b681ad749a2.jpg",
                                                               "url": "https://findwork.dev/n7l6vgQ/bitcoin-product-manager-at-starkware",
                                                               "text": "StarkWare is looking to hire a Bitcoin Product Manager to join their team. This is a full-time position that is based in Netanya.",
                                                               "date_posted": "2025-01-18T05:00:00Z",
                                                               "keywords": [
                                                                   "bitcoin"
                                                               ],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "Mb938EQ",
                                                               "role": "Compliance Manager, UAE",
                                                               "company_name": "OKX",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": "Dubai, United Arab Emirates",
                                                               "remote": false,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/2ee7f2f6bdc0a8a77a11f70ae911949768af3d31.jpg",
                                                               "url": "https://findwork.dev/Mb938EQ/compliance-manager-uae-at-okx",
                                                               "text": "OKX is looking to hire a Compliance Manager, UAE to join their team. This is a full-time position that is based in Dubai.",
                                                               "date_posted": "2025-01-18T05:00:00Z",
                                                               "keywords": [],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "QV5986n",
                                                               "role": "Senior Associate, Partnerships, Crypto Payments",
                                                               "company_name": "Coinbase",
                                                               "company_num_employees": "251-500",
                                                               "employment_type": "full time",
                                                               "location": null,
                                                               "remote": true,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/5ba6c526eedf176c82893f45f3135e8755520fe8.jpg",
                                                               "url": "https://findwork.dev/QV5986n/senior-associate-partnerships-crypto-payments-at-coinbase",
                                                               "text": "Coinbase is looking to hire a Senior Associate, Partnerships, Crypto Payments to join their team. This is a full-time position that can be done remotely anywhere in the United States.",
                                                               "date_posted": "2025-01-18T05:00:00Z",
                                                               "keywords": [],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "Qg6e8On",
                                                               "role": "Senior Developer Advocate (Remote)",
                                                               "company_name": "Livepeer",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": null,
                                                               "remote": true,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/877d035ec2154cbd43f88f7a723a73e43b862e73.jpg",
                                                               "url": "https://findwork.dev/Qg6e8On/senior-developer-advocate-remote-at-livepeer",
                                                               "text": "<h2>About Livepeer AI:</h2><p>Livepeer is on a mission to build the world’s open video infrastructure. Founded in 2017, it is the world’s first open-source protocol for decentralized video streaming, built on Ethereum. The project has empowered developers to create scalable, cost-effective, and censorship-resistant video applications. The Livepeer network has transcoded billion of minutes, serving Web3 and Web2 platforms across gaming, entertainment, social media, and beyond.</p><p>In 2024, <strong>Livepeer AI</strong> was introduced, unlocking Livepeer’s compute network for AI inference workflows. From real-time video transcription and object detection to scene recognition and AI-powered editing, Livepeer AI brings advanced machine learning directly into the decentralized video stack. These new tools not only reduce costs but also empower developers to build richer, smarter, and more engaging video experiences—whether for Web3 platforms, AI-powered dApps, or even traditional video use cases.</p><h2>Your Role:</h2><p>As a Senior Developer Advocate for Video AI, you’ll help developers around the world unlock the potential of Livepeer’s advanced AI capabilities. From crafting impactful proof-of-concept projects to hosting webinars that educate and inspire, you’ll empower developers to create innovative video applications and workflows. You’ll also leverage your own personal following to amplify the reach of Livepeer’s mission, connecting with developers where they already are and driving excitement for the platform.</p><h2>Responsibilities:</h2><h3>1. Building Easy-To-Copy Demos</h3><ul><li>Experiment with the latest AI/ML magic to create interesting new workflows (pipelines) on ComfyUI and beyond.</li><li>Dream up and code small, eye-catching projects that show off Livepeer’s superpowers in real-time AI video.</li><li>Craft open-source tools, SDKs, and libraries to make life easier (and more fun) for developers diving into Livepeer.</li></ul><h3>2. Growing An Awesome Dev Community**</h3><ul><li>Engage a community of worldwide developers —answer their questions, gather their ideas, and build something amazing together.</li><li>Host and join hackathons, meetups, and events where creativity meets innovation (bonus points if snacks are involved).</li><li>Be the ultimate developer cheerleader, ensuring their feedback shapes Livepeer’s future and makes them feel heard.</li></ul><h3>3. Making Stellar Content**</h3><ul><li>Produce technical tutorials, guides, and blog posts to educate developers on building video AI applications using Livepeer.</li><li>Create engaging video demos and walkthroughs to visually demonstrate Livepeer’s capabilities.</li><li>Host webinars and workshops to teach best practices and inspire creative uses of Livepeer technology.</li></ul><h2>Experience Required:</h2><ul><li><strong>Experience</strong>: 5–6 years of relevant experience.</li><li><strong>Strong Past experience:</strong> You’ve got a solid track record in developer advocacy / evangelism, solutions engineering or , with hands-on experience in video technology, AI/ML, or building tools that developers love</li><li><strong>Comfy UI Experience</strong>: Proficient in creating modular node graphs and workflow modularization, with custom node development in Python and experience in visual tools like TouchDesigner and Grasshopper.</li><li><strong>Strong Social Following</strong>: You have an active and engaged Twitter following, with a track record of sharing insightful content, fostering discussions, and building connections within the developer, AI, or video technology communities.</li><li><strong>Community Building:</strong> Proven track record of fostering developer communities, driving engagement through various channels. A bonus is experience working with Discord, Twitter Spaces and streaming platforms.</li><li><strong>Giving Workshops:</strong> Comfortable delivering presentations and workshops to both technical and non-technical audiences. Experience giving presentations both virtually and IRL.</li><li><strong>Creating Documentation</strong>: Actively shares workflow designs, documents custom nodes, maintains repositories, produces tutorials, and emphasizes clear attribution and licensing for collaborative development.</li></ul><h2>Technical Skills:</h2><ul><li><strong>Strong AI/ML Proficiency</strong>: good understanding of diffusion models, LoRA training, model merging, ONNX optimization, and prompt engineering, alongside expertise in TensorFlow, PyTorch, and Hugging Face for AI/ML development and integration.</li><li><strong>Cloud and Edge Deployment</strong>: Experienced in deploying scalable AI workloads on AWS, GCP, Azure, NVIDIA Jetson, and containerized environments using Docker and Kubernetes, with a focus on real-time, low-latency solutions.</li><li><strong>Computer Vision and Video AI Expertise</strong>: Skilled in computer vision and video-specific AI models (e.g., Stable Diffusion, StyleGAN) with a focus on optimizing inference for real-time performance using GPUs, TPUs, and FPGAs.</li><li><strong>Performance Optimization Expertise</strong>: Skilled in GPU memory management, model pruning, quantization, batch processing, and VRAM optimization, with advanced knowledge of hardware acceleration techniques and scaling for high-concurrency, low-latency applications.</li><li><strong>Good Video Technology Skills</strong>: Proficient with video processing tools like OpenCV, FFmpeg, and GStreamer, familiar with codecs, frame extraction/reconstruction, and real-time video transformation, though limited experience with live streaming protocols (e.g., RTMP, HLS).</li><li><strong>Workflow and Infrastructure Development</strong>: Competent in infrastructure-as-code and CI/CD pipelines for deploying AI models into production, managing data flows, and ensuring seamless scalability with robust error handling.</li><li><strong>Modular, Composable Pipelines</strong>: Strong preference for pre-built libraries, plug-and-play functionality, and robust APIs/SDKs for rapid experimentation and integration with cloud and edge platforms.</li></ul><h2>Compensation and Benefits:</h2><ul><li><strong>Base Salary:</strong> Competitive and dependent on location.</li><li><strong>Token Package:</strong> Competitive token package with a <strong>3-year vesting schedule.</strong></li><li><strong>Employee Stock Option Plan:</strong> Competitive ESOP with <strong>4-year vesting</strong> and a <strong>1-year cliff.</strong></li><li><strong>Holidays:</strong> 25 vacation days per year plus any national holidays.</li><li><strong>Insurance:</strong> Comprehensive <strong>medical, dental, and vision insurance</strong> in applicable locations.</li><li><strong>Pension:</strong> Company pension contributions in applicable locations.</li><li><strong>Equipment:</strong> Choose a laptop of your preference (we’ll purchase it for you).</li><li><strong>Remote Work:</strong> Work anywhere in the world. Global mobility support.</li><li><strong>Flexible Working:</strong> Flexible hours to support work-life balance.</li><li><strong>Team-Building:</strong> Regular virtual team-building activities.</li><li><strong>Latest Tech:</strong> Work with cutting-edge AI and the latest technologies alongside an innovative and entrepreneurial team.</li></ul><h2>Apply Now!</h2><p>Join Livepeer AI and shape the future of video streaming and AI tooling.</p><h2>Resources to learn more about Livepeer</h2><ul><li><a>The Livepeer Primer</a></li><li><a>Livepeer snags $20M for decentralized video transcoding</a></li><li><a>Messari Profile</a></li><li><a>Grayscale Livepeer Report</a></li></ul>",
                                                               "date_posted": "2025-01-17T05:00:00Z",
                                                               "keywords": [
                                                                   "python",
                                                                   "opencv",
                                                                   "ml",
                                                                   "tensorflow",
                                                                   "docker",
                                                                   "gcp",
                                                                   "aws",
                                                                   "azure",
                                                                   "ethereum",
                                                                   "web3",
                                                                   "kubernetes",
                                                                   "pytorch",
                                                                   "node"
                                                               ],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "Q03rjYn",
                                                               "role": "ERC & Standards Coordinator",
                                                               "company_name": "Ethereum Foundation",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": null,
                                                               "remote": true,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/1a8f6aa04704117ca60da8f9c003c7b14d614efc.jpg",
                                                               "url": "https://findwork.dev/Q03rjYn/erc-standards-coordinator-at-ethereum-foundation",
                                                               "text": "Ethereum Foundation is looking to hire an ERC & Standards Coordinator to join their team. This is a full-time position that is 100% remote with no geographical restrictions. Work remotely from anywhere.",
                                                               "date_posted": "2025-01-17T05:00:00Z",
                                                               "keywords": [
                                                                   "ethereum"
                                                               ],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "XO9a0xQ",
                                                               "role": "Events Marketing Manager",
                                                               "company_name": "AZTEC",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": null,
                                                               "remote": true,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/7994723466117d4283a74a4868eb63ee0477d8b7.jpg",
                                                               "url": "https://findwork.dev/XO9a0xQ/events-marketing-manager-at-aztec",
                                                               "text": "Aztec is looking to hire an Events Marketing Manager to join their team. This is a full-time position that can be done remotely anywhere in the United States.",
                                                               "date_posted": "2025-01-17T05:00:00Z",
                                                               "keywords": [],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "n5Z1OBQ",
                                                               "role": "Software Engineer Intern - Ledger Enterprise Services",
                                                               "company_name": "Ledger",
                                                               "company_num_employees": null,
                                                               "employment_type": null,
                                                               "location": "Paris, France",
                                                               "remote": false,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/4cf850960bbe77a11bbf118483bb9b5443dc44f7.jpg",
                                                               "url": "https://findwork.dev/n5Z1OBQ/software-engineer-intern-ledger-enterprise-services-at-ledger",
                                                               "text": "Ledger is looking to hire a Software Engineer Intern - Ledger Enterprise Services to join their team. This is an internship position that is based in Paris.",
                                                               "date_posted": "2025-01-17T05:00:00Z",
                                                               "keywords": [
                                                                   "ledger"
                                                               ],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "nwaKlDM",
                                                               "role": "Analyst, Strategy & Transformation (Graduate)",
                                                               "company_name": "Hex Trust",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": "Hong Kong, China",
                                                               "remote": false,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/66ed5294d096abadf77dd9ee2aeecd979a1ccb74.jpg",
                                                               "url": "https://findwork.dev/nwaKlDM/analyst-strategy-transformation-graduate-at-hex-trust",
                                                               "text": "Hex Trust is looking to hire an Analyst, Strategy & Transformation (Graduate) to join their team. This is a full-time position that is based in Hong Kong.",
                                                               "date_posted": "2025-01-17T05:00:00Z",
                                                               "keywords": [
                                                                   "kong"
                                                               ],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "QeqJ8YQ",
                                                               "role": "Business Development Representative, Singapore",
                                                               "company_name": "BitGo",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": "Singapore, Singapore",
                                                               "remote": false,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/a8d29fb8250a4ba841ed769b233b031aff7567ab.jpg",
                                                               "url": "https://findwork.dev/QeqJ8YQ/business-development-representative-singapore-at-bitgo",
                                                               "text": "BitGo is looking to hire a Business Development Representative, Singapore to join their team. This is a full-time position that is based in Singapore.",
                                                               "date_posted": "2025-01-17T05:00:00Z",
                                                               "keywords": [],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "ny59l0n",
                                                               "role": "Site Reliability Engineer",
                                                               "company_name": "LinkPool",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": null,
                                                               "remote": true,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/c4d8b210cb0da7f67fd8f969cdb7001cf2c27f2a.jpg",
                                                               "url": "https://findwork.dev/ny59l0n/site-reliability-engineer-at-linkpool",
                                                               "text": "<h2>About Us</h2><p>LinkPool is a leading validator, oracle provider, infrastructure services and ecosystem developer within the Chainlink ecosystem and wider Web3 industry.</p><p>Since 2017, LinkPool has been pioneering modern infrastructure tooling to set precedent and help build an industry that shapes how agreements are formed and settled across all industries. With LinkPool being one of the largest Chainlink Node Operators since its launch in 2019, it is in a unique position to work with and operate across most networks, projects and teams to build its knowledge and help drive the ecosystem forward.</p><p>LinkPool is a globally distributed team, and all roles are fully remote.</p><h2>The Role:</h2><p>As a Site Reliability Engineer at LinkPool, you’ll be joining our small and driven team to have a core role in building, managing and supporting all aspects of our infrastructure. You’ll work closely with every member of our engineering and business teams to manage the deployment and reliability of new deployments for new networks, be “client facing” by liasoning with projects that we’re working with and have strong ownership of the entire stack to drive change that improves how we think about infrastructure.</p><p>You’ll work across our full stack of infrastructure, from creating and maintaining Chainlink nodes, blockchain full nodes, validators, monitoring stack and our Kubernetes cluster setup. As well as this, you will support our existing product engineering teams that work on first-of-their-kind liquid staking products (stake.link) and upcoming iterations of those  products rolling out new chains and services.</p><p>LinkPool’s infrastructure is fully containerised and fully collocated with wholly owned hardware that we solely manage. This is a unique opportunity to use cutting edge tooling on infrastructure wholly owned without the burden of dealing with cloud pricing.</p><h2>Requirements</h2><p><strong>Candidate MUST be based in an eastern hemisphere time zone. GMT+6 or greater.</strong></p><ul><li>3+ years of professional experience as SRE/DevOps</li><li>Expert:  Kubernetes, Helm, Prometheus</li><li>Familiar: Loki, Thanos</li><li>Desire and ability to rapidly learn new technologies</li><li>Highly motivated with a self-governing work ethic</li><li>Comfortable closely collaborating with engineers in and out of your team</li></ul><h2>Desirables</h2><ul><li>Experience working with Blockchain Full Nodes, in particular Ethereum based clients (Execution and Beacon Chain), Cosmos SDK clients, OP stack and Solana.</li><li>Understanding of Ethereum, Solidity, and Chainlink at a technical level</li><li>Familiarity with the current DeFi landscape</li></ul><h2>Benefits</h2><ul><li>Competitive compensation offered in Fiat and/or Tokens</li><li>Remote first working environment</li><li>Flexible working hours and vacation policy</li><li>Work on a rapidly growing team with opportunities for advancement and the ability to plan for a long term role</li><li>The products and services you help build will have significant visibility across multiple blockchain networks</li><li>Work closely with other industry-leading teams on high impact projects</li></ul><p>If you’re looking for a role where you’re working with an experienced team of A+ players without much red tape and where you can take clear ownership while using the latest tools and technologies, then this role is for you.</p>",
                                                               "date_posted": "2025-01-17T05:00:00Z",
                                                               "keywords": [
                                                                   "helm",
                                                                   "solidity",
                                                                   "blockchain",
                                                                   "kubernetes",
                                                                   "loki",
                                                                   "ethereum",
                                                                   "oracle",
                                                                   "web3",
                                                                   "prometheus",
                                                                   "node"
                                                               ],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "nJRgkln",
                                                               "role": "Web3 Social Media Storyteller & Social Media Manager",
                                                               "company_name": "TOPKEK Capital",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": null,
                                                               "remote": true,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/f9be080f2d8b3972de10f8e8efc814d5b56586d7.jpg",
                                                               "url": "https://findwork.dev/nJRgkln/web3-social-media-storyteller-social-media-manager-at-topkek-capital",
                                                               "text": "<p>We’re looking for a creative force who lives and breathes both social media and Web3. As our Social Media Manager and Copywriter, you’ll craft the narratives that help our community understand and engage with the crypto space in new ways.</p><p>Your day-to-day world will involve turning complex Web3 concepts into bite-sized, engaging content that resonates with both crypto natives and newcomers. You’ll be the voice behind our social presence, working closely with our team and partners to create campaigns that stand out in the fast-paced world of crypto.</p><p>What makes you perfect for this role? You’ve spent considerable time managing social media accounts and writing copy that captures attention. You understand the Web3 landscape, particularly the world of DAOs, and you’re excited about the potential of platforms like DAOs.fun. Most importantly, you know how to build genuine connections with community members through compelling content.</p><h2>Key Responsibilities:</h2><ul><li>Develop and execute comprehensive social media strategies across multiple platforms</li><li>Create compelling copy for social media, newsletters, blog posts, and marketing materials</li><li>Manage and schedule regular content updates using social media management tools</li><li>Collaborate with partners and team members on joint marketing campaigns</li><li>Monitor and analyze social media metrics to optimize performance</li><li>Engage with community members and maintain an active social presence</li><li>Coordinate with various stakeholders in the Web3/crypto space</li><li>Stay current with crypto/Web3 trends and integrate them into our messaging</li></ul><h2>The essentials:</h2><ul><li>You’ll work remotely, syncing with UTC timezone</li><li>You’ll have the flexibility to manage your schedule while meeting content deadlines</li><li>You’ll collaborate with various partners on innovative campaigns</li></ul>",
                                                               "date_posted": "2025-01-17T05:00:00Z",
                                                               "keywords": [
                                                                   "web3"
                                                               ],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "QGp5vdM",
                                                               "role": "Senior Blockchain Infrastructure Engineer (DevOps)",
                                                               "company_name": "Nirvana Labs",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": null,
                                                               "remote": true,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/2c7855017ccb931fd20ca20d07ae2d710febd0c2.jpg",
                                                               "url": "https://findwork.dev/QGp5vdM/senior-blockchain-infrastructure-engineer-devops-at-nirvana-labs",
                                                               "text": "<h2>About us</h2><p>Nirvana Labs is the first full-stack cloud platform designed by crypto natives and cloud experts to cater to the unique demands of web3 companies. Our offerings include a powerful bare metal cloud computing platform, highly reliable load-balanced RPC nodes, and enterprise-grade dedicated nodes.</p><h2>Role</h2><ul><li>Setup, maintain and monitor fleets of blockchain nodes for Nirvana’s global customer base.</li><li>Build and maintain scaleable and flexible automations for running blockchain nodes and internal monitoring services.</li><li>Set and maintain the best-in-class infrastructure practices.</li><li>Collaborate with cross-functional teams to align technical solutions with business goals and client needs.</li><li>Mentor engineers and promote a culture of knowledge sharing and engineering excellence.</li></ul><h2>Requirements</h2><ul><li>Fluent in English</li><li>Proficient in scripting (i.e. Bash) and automation frameworks (e.g. Ansible, Terraform, Puppet, Chef)</li><li>4+ years of proven experience in DevOps or Site Reliability Engineering roles.</li><li>Experience managing and optimizing bare-metal servers.</li><li>At least 1 year of professional experience in creating and maintaining blockchain RPC nodes (e.g. Ethereum, Arbitrum, Solana etc.)</li><li>Knowledgeable in deploying services reliably using tools like GitHub Actions, CircleCI, TravisCI, or Jenkins.</li><li>Proficient with monitoring and logging tools (e.g, Prometheus, Grafana etc).</li><li>Experience with Git-based systems for code and configuration management.</li><li>Knowledge of various blockchain protocols and standards.</li><li>Awareness of cybersecurity practices relevant to blockchain and distributed systems.</li></ul><h2>Nice to have</h2><ul><li>Experience in creating automation tasks and internal tooling using Golang.</li><li>Active contributions to relevant open source blockchain projects.</li><li>Certifications for cloud providers, Kubernetes, or security certifications.</li><li>Familiarity with a variety of blockchain environments.</li><li>1 year of experience in a technical leadership role.</li></ul>",
                                                               "date_posted": "2025-01-17T05:00:00Z",
                                                               "keywords": [
                                                                   "ansible",
                                                                   "web3",
                                                                   "golang",
                                                                   "travisci",
                                                                   "chef",
                                                                   "prometheus",
                                                                   "kubernetes",
                                                                   "blockchain",
                                                                   "circleci",
                                                                   "bash",
                                                                   "puppet",
                                                                   "github",
                                                                   "ethereum",
                                                                   "terraform",
                                                                   "grafana",
                                                                   "jenkins"
                                                               ],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "XRLj0zQ",
                                                               "role": "Senior Social Media Manager",
                                                               "company_name": "Flight3",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": "Cape Town, South Africa",
                                                               "remote": true,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/964806c0ef6b0650f0c93456c3b877438e7c2c66.jpg",
                                                               "url": "https://findwork.dev/XRLj0zQ/senior-social-media-manager-at-flight3",
                                                               "text": "<p>The Senior Social Media Manager would manage and mentor a team of social media specialists, driving client-focused strategies that amplify brand visibility and engagement. You’ll oversee the execution of social campaigns, ensure consistent quality, and work closely with clients to bring their vision to life. This role is perfect for a creative leader who thrives on collaboration and understands how to navigate the fast-paced, ever-evolving Web3 landscape.</p><h2>What’s in it for you?</h2><ul><li><strong>Creative ownership:</strong> Lead and own the entire social media strategy from start to finish, allowing you to make a significant impact.</li><li><strong>Collaboration:</strong> Work alongside a talented and passionate team, driving forward innovative campaigns and creative content.</li><li><strong>Growth opportunities:</strong> Be at the forefront of the Web3 space, where your expertise will be highly valued and continually challenged.</li><li><strong>Client engagement:</strong> Build strong relationships with top tier Web3 clients.</li></ul><h2>Benefits</h2><ul><li><strong>Flexible working:</strong> A hybrid approach that balances home and office work—we value face-to-face collaboration while respecting your need for flexibility.</li><li><strong>Proper time off:</strong> 35 days of non-working days per year (including 14 office closure days), because we believe in actually switching off.</li><li><strong>Career progression:</strong> Regular reviews, personal development budget, and potential growth paths across the Flight Group.</li><li><strong>Web3 perks:</strong> Early access to token launches, NFT mints, and industry events.</li><li><strong>Learning culture:</strong> Weekly knowledge shares, conference passes, and training opportunities.</li></ul><h2>Responsibilities</h2><ul><li>Owning the end-to-end social media writing process for each client.</li><li>Driving the social media design strategy for each client.</li><li>Leading and mapping out the social content creation strategy and calendar.</li><li>Managing and delegating work to copywriters and social media managers, ensuring all content is thoroughly proofread before client delivery</li><li>Developing video content strategy and overseeing script development and production</li><li>Executing content creation in line with marketing and business announcements, including airdrops, exchange listings, giveaways, and appearances.</li><li>Collaborating with internal teams to deliver impactful multi-channel marketing and communications campaigns.</li><li>Analysing customer insights, trends, market analysis, and best practices to inform strategy.</li><li>Reporting on campaign KPIs and overall return on investment.</li></ul><h2>Requirements</h2><ul><li>Must be able to work UK business hours (non-negotiable).</li><li>5+ years of experience in social media management, with at least 2 years leading a team.</li><li>Proven track record of delivering successful social media campaigns for clients.</li><li>Strong knowledge of Web3 culture, communities, and social platforms.</li><li>Experience working directly with clients, managing relationships, and presenting strategies.</li></ul><h2>Skills You Bring</h2><ul><li>Exceptional leadership skills with a focus on mentoring and empowering your team.</li><li>Strong organisational and time management skills to handle multiple clients and campaigns.</li><li>Ability to craft and oversee social media strategies that drive measurable results.</li><li>Proficiency with social media tools and analytics platforms.</li><li>Creative problem-solving skills to address challenges and deliver high-quality solutions.</li><li>Deep understanding of social media trends, especially within the Web3 ecosystem.</li></ul><h2>About Us</h2><p>Flight3 is a dynamic global leader in Web3 marketing, collaborating with Layer1s, premier exchanges, and groundbreaking startups. As part of the Flight Group, we operate at the forefront of innovation in marketing. Our clients include industry giants such as Coinbase, Tezos, Solana, Fuel Network, and Fabric Ventures. Flight3 proudly organises and manages the UK’s leading Web3 event.</p>",
                                                               "date_posted": "2025-01-17T05:00:00Z",
                                                               "keywords": [
                                                                   "web3",
                                                                   "nft"
                                                               ],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "Q62L6gQ",
                                                               "role": "  Digital Product Designer & Front-End Developer ",
                                                               "company_name": "New Era Technology",
                                                               "company_num_employees": null,
                                                               "employment_type": null,
                                                               "location": null,
                                                               "remote": false,
                                                               "logo": null,
                                                               "url": "https://findwork.dev/Q62L6gQ/digital-product-designer-front-end-developer-at-new-era-technology",
                                                               "text": "<h3>Job description</h3>Join New Era Technology, where People First is at the heart of everything we do. With a global team of over 4,500 professionals, we’re committed to creating a workplace where everyone feels valued, empowered, and inspired to grow. Our mission is to securely connect people, places, and information with end-to-end technology solutions at scale.<br><br>At New Era, you’ll join a team-oriented culture that prioritizes your personal and professional development. Work alongside industry-certified experts, access continuous training, and enjoy competitive benefits. Driven by values like Community, Integrity, Agility, and Commitment, we nurture our people to deliver exceptional customer service.<br><br>If you want to make an impact in a supportive, growth-oriented environment, New Era is the place for you. Apply today and help us shape the future of work—together.<br><br> Digital Product Designer & Front-End Developer <br><br><br><br>We are seeking candidates to partner with a global pharmaceutical company at the forefront of innovation. The organization’s innovation incubator drives transformational change by creating and developing cutting-edge solutions that redefine healthcare from every angle – production, branding, communications, technology, etc. We are looking for a talented and experienced Product Designer with an emphasis on Front-End Development for digital design to join a pod of creative professionals in shaping the future of pharma. <br><br>As a Product Designer with Front-End Development expertise, you will bridge the gap between design and development, bringing static designs to life with dynamic elements. You will be instrumental in building interactive prototypes and using animations to enhance the user experience. This individual contributor role requires proficiency in JavaScript, HTML, CSS, and animation libraries or frameworks to create polished, high-quality interfaces that delight users and improve engagement. <br><br> <br><br>Responsibilities <br><br>Develop interactive, animated interfaces that bring a sense of movement and engagement to digital experiences. <br>Use front-end technologies—including JavaScript, HTML, and CSS—to transform design concepts into functional, animated prototypes for user testing and stakeholder review. <br>Collaborate closely with designers and product teams to translate visual and interaction designs into production-ready code. <br>Leverage animation libraries (such as GreenSock, Three.js, or CSS animations) to create smooth, impactful transitions and micro-interactions. <br>Ensure all animations and interactions meet performance and accessibility standards, optimizing code for usability and speed. <br>Iterate on prototypes and animations based on feedback, enhancing the design execution while maintaining consistency with design principles. <br>Document processes and establish reusable code patterns to enhance future prototyping and front-end development efforts. <br>Skills and Qualifications <br><br>5-10 years of experience in front-end development, with demonstrated skills in producing interactive, animated user interfaces. <br>Proficiency in JavaScript, HTML, CSS, and experience with animation libraries or frameworks (e.g., GreenSock, Three.js). <br>Strong ability to translate static designs from tools like Figma, Sketch, or Adobe XD into dynamic, animated prototypes. <br>Understanding of UX principles, responsive design, and accessibility standards. <br>Experience in creating prototypes that convey movement, interaction, and flow, allowing stakeholders to experience design concepts more fully. <br>Proficient with version control (e.g., Git) and comfortable working in agile, cross-functional teams. <br>A portfolio showcasing digital products with strong animation, interaction, and front-end execution. <br>Soft Skills: <br>Strong analytical, problem solving, and investigative skills <br>Outstanding verbal and written communication skills <br>Effective teamwork, interpersonal, conflict management, and negotiation skills <br>Ability to collaborate and build relationships with peers, business partners, and management <br>New Era Technology, Inc., and its subsidiaries (“New Era” “we”, “us”, or “our”) in its operating regions worldwide are committed to respecting your privacy and recognize the need for appropriate protection and management of any Personal Data that you may provide us. In this, we are also committed to providing you with a positive experience on our websites and while using our products, services, and solutions (“Solutions”).<br><br>View our Privacy Policy here https://www.neweratech.com/us/privacy-policy/",
                                                               "date_posted": "2025-01-16T19:34:00Z",
                                                               "keywords": [
                                                                   "sketch",
                                                                   "ux",
                                                                   "javascript",
                                                                   "figma"
                                                               ],
                                                               "source": "Coroflot"
                                                           },
                                                           {
                                                               "id": "npR7DbM",
                                                               "role": "Digital Senior Visual Designer",
                                                               "company_name": "New Era Technology",
                                                               "company_num_employees": null,
                                                               "employment_type": null,
                                                               "location": "Indianapolis, IN",
                                                               "remote": false,
                                                               "logo": null,
                                                               "url": "https://findwork.dev/npR7DbM/digital-senior-visual-designer-at-new-era-technology",
                                                               "text": "<h3>Job description</h3>Digital Senior Visual Designer<br>Remote<br><br>Join New Era Technology, where People First is at the heart of everything we do. With a global team of over 4,500 professionals, we’re committed to creating a workplace where everyone feels valued, empowered, and inspired to grow. Our mission is to securely connect people, places, and information with end-to-end technology solutions at scale.<br><br>At New Era, you’ll join a team-oriented culture that prioritizes your personal and professional development. Work alongside industry-certified experts, access continuous training, and enjoy competitive benefits. Driven by values like Community, Integrity, Agility, and Commitment, we nurture our people to deliver exceptional customer service.<br><br>If you want to make an impact in a supportive, growth-oriented environment, New Era is the place for you. Apply today and help us shape the future of work—together.<br><br>We are seeking a Senior Digital Visual Designer to join our creative team, partnering with a global leader in pharmaceutical innovation. In this role, you will leverage your mastery of digital design to craft visually compelling solutions that elevate ordinary and clinical content into experiences that inspire and inform. You will collaborate closely with cross-functional teams, working within a design system to create assets targeting healthcare providers and communicating the company’s message with clarity, helping to bridge the gap between groundbreaking science and the communities it serves.<br><br> <br><br>Key Responsibilities<br>Design Excellence: Develop innovative and visually stunning designs for digital platforms, including websites, applications, presentations, and campaigns, ensuring consistency with brand guidelines.<br>Project Leadership: Take ownership of projects from concept to completion, collaborating with stakeholders to define requirements, propose solutions, and deliver screens and assets that meet business and user goals.<br>Stakeholder Collaboration: Partner with marketing, product, and technical teams to gather input, understand objectives, and ensure alignment across projects.<br>Design System Contribution: Work within and contribute to the company’s design system, evolving its components and ensuring designs maintain coherence and scalability.<br>User-Centered Approach: Advocate for the end user by creating designs that are not only visually compelling but also intuitive and functional for healthcare providers.<br>Storytelling Through Design: Transform complex medical and scientific content into accessible and engaging visuals that communicate effectively to a diverse audience.<br>Quality Assurance: Ensure all deliverables meet the highest quality standards, performing checks for pixel-perfect precision and adherence to technical specifications.<br> <br><br>Qualifications<br>Experience: 7+ years of professional experience in digital design, with a strong portfolio showcasing mastery across digital mediums (e.g., web, mobile, interactive design).<br>Aesthetic Vision: Demonstrated ability to find and create beauty in complicated content, making the complex approachable and engaging.<br>Technical Skills: Proficiency in design tools such as Figma, Adobe Creative Suite (Photoshop, Illustrator, InDesign), and other relevant applications. Animation and motion graphics experience is a plus.<br>Design Systems: Experience working with and contributing to design systems, ensuring consistency and scalability across projects.<br>Leadership Abilities: Strong project management skills with the ability to lead projects independently, collaborate with stakeholders, and manage timelines effectively.<br>Communication: Excellent verbal and written communication skills, with the ability to present and defend design choices clearly and persuasively.<br>Healthcare Industry Experience: Prior experience in the healthcare or pharmaceutical industry is preferred but not required. A willingness to understand and embrace the nuances of this field is essential.<br> <br><br>Why join us<br>Be part of a mission-driven company that impacts millions of lives globally.<br>Work on meaningful projects that challenge your creativity and expertise.<br>Collaborate with a diverse and talented team of designers, strategists, and innovators.<br>New Era Technology, Inc., and its subsidiaries (“New Era” “we”, “us”, or “our”) in its operating regions worldwide are committed to respecting your privacy and recognize the need for appropriate protection and management of any Personal Data that you may provide us. In this, we are also committed to providing you with a positive experience on our websites and while using our products, services, and solutions (“Solutions”).<br><br>View our Privacy Policy here https://www.neweratech.com/us/privacy-policy/",
                                                               "date_posted": "2025-01-16T18:24:00Z",
                                                               "keywords": [
                                                                   "illustrator",
                                                                   "photoshop",
                                                                   "figma",
                                                                   "indesign"
                                                               ],
                                                               "source": "Coroflot"
                                                           },
                                                           {
                                                               "id": "XzZWkbX",
                                                               "role": "Senior Product Designer ",
                                                               "company_name": "New Era Technology",
                                                               "company_num_employees": null,
                                                               "employment_type": null,
                                                               "location": "Indianapolis, IN",
                                                               "remote": false,
                                                               "logo": null,
                                                               "url": "https://findwork.dev/XzZWkbX/senior-product-designer-at-new-era-technology",
                                                               "text": "<h3>Job description</h3>Senior Product Designer<br>Remote<br>Join New Era Technology, where People First is at the heart of everything we do. With a global team of over 4,500 professionals, we’re committed to creating a workplace where everyone feels valued, empowered, and inspired to grow. Our mission is to securely connect people, places, and information with end-to-end technology solutions at scale.<br><br>At New Era, you’ll join a team-oriented culture that prioritizes your personal and professional development. Work alongside industry-certified experts, access continuous training, and enjoy competitive benefits. Driven by values like Community, Integrity, Agility, and Commitment, we nurture our people to deliver exceptional customer service.<br><br>If you want to make an impact in a supportive, growth-oriented environment, New Era is the place for you. Apply today and help us shape the future of work—together.<br><br>Senior Product Designer <br><br>We are seeking candidates to partner with a global pharmaceutical company at the forefront of innovation. The organization’s innovation incubator drives transformational change by creating and developing cutting-edge solutions that redefine healthcare from every angle – production, branding, communications, technology, etc. We are looking for a talented and experienced Senior Product Designer to join a pod of creative professionals in shaping the future of pharma. <br><br>This role is for a true executor, someone who thrives on setting the tone and vision for design work and delivering exceptional outputs. You will spend the majority of your day focused on creating and perfecting design solutions, ensuring that every aspect meets the highest standards. This is a hands-on role with no management duties, but you’ll lead by example, pushing the boundaries of creativity and innovation. <br><br> <br><br>Responsibilities <br><br>Design Execution: Spend the majority of your day immersed in design work, setting the tone for the visual and interactive elements of our products. <br>Visionary Work: Define and uphold a strong creative vision for our product, ensuring all outputs are aligned with the innovation goals of the company. <br>Prototype Development: Utilize your Figma expertise to build interactive prototypes, creating dynamic experiences that can be tested and iterated upon. <br>Cross-functional collaboration: Work closely with product managers, engineers, and other stakeholders to bring ideas from concept to completion. <br>Innovation & Creativity: Stay ahead of design trends, continuously refining your craft to push boundaries and innovate in the pharmaceutical space. <br> <br><br>Skills and Qualifications <br><br>Experience: 10+ years of experience in product design with a portfolio demonstrating exceptional design outputs. <br>Expertise: Deep expertise in visual design, with additional skills in animation and front-end development being strong advantages. <br>Tools: Proficient in Figma, with a proven ability to create prototypes that drive product decisions and user testing. <br>Mindset: Self-starter and executor, able to thrive in an environment focused on innovation and creative problem-solving. <br>Contributor: This role will be instrumental in executing creative and prototyping work and setting the creative bar high. <br>Preferred Skills: <br>Animation skills for creating engaging, interactive experiences. <br>Front-end development knowledge to better collaborate with engineering teams. Experience with leading moderated user testing cycles leveraging prototypes and test scripts <br>Soft Skills: <br>Strong analytical, problem-solving, and investigative skills <br>Outstanding verbal and written communication skills <br>Effective teamwork, interpersonal, conflict management, and negotiation skills <br>Ability to collaborate and build relationships with peers, business partners, and management <br>New Era Technology, Inc., and its subsidiaries (“New Era” “we”, “us”, or “our”) in its operating regions worldwide are committed to respecting your privacy and recognize the need for appropriate protection and management of any Personal Data that you may provide us. In this, we are also committed to providing you with a positive experience on our websites and while using our products, services, and solutions (“Solutions”).<br><br>View our Privacy Policy here https://www.neweratech.com/us/privacy-policy/<br><br>",
                                                               "date_posted": "2025-01-16T17:04:00Z",
                                                               "keywords": [
                                                                   "figma"
                                                               ],
                                                               "source": "Coroflot"
                                                           },
                                                           {
                                                               "id": "MLrbv2n",
                                                               "role": "Tech Lead & Senior Full-Stack",
                                                               "company_name": "yhangry",
                                                               "company_num_employees": null,
                                                               "employment_type": null,
                                                               "location": "London, UK",
                                                               "remote": false,
                                                               "logo": null,
                                                               "url": "https://findwork.dev/MLrbv2n/tech-lead-senior-full-stack-at-yhangry",
                                                               "text": "yhangry is a marketplace for private chefs. We are yc-backed (Michael Siebel investing in the latest round). Company size ~10 people (3-person dev team)<br>We&#x27;re hiring some rockstar senior developers&#x2F;tech leads to lead our b2b2c rollout in 2025!<br>Requirements: 5+ yrs experience | Work with React &amp; php | comfortable maintaining infrastructure in deployment<br>Interested in a quick chat? Book here: <a href=\"https:&#x2F;&#x2F;calendly.com&#x2F;d&#x2F;cnj8-r28-2ds&#x2F;yhangry-interview\" rel=\"nofollow\">https:&#x2F;&#x2F;calendly.com&#x2F;d&#x2F;cnj8-r28-2ds&#x2F;yhangry-interview</a><br>Website: <a href=\"https:&#x2F;&#x2F;yhangry.com&#x2F;\">https:&#x2F;&#x2F;yhangry.com&#x2F;</a>",
                                                               "date_posted": "2025-01-16T12:19:01Z",
                                                               "keywords": [
                                                                   "php",
                                                                   "react"
                                                               ],
                                                               "source": "Hn"
                                                           },
                                                           {
                                                               "id": "Mmjg4LX",
                                                               "role": "Mit Power und Herz: B2B Vertriebsprofi (w/m/d) // PersoQua AG",
                                                               "company_name": "PersoQua",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": "Berlin, Germany",
                                                               "remote": true,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/94f03e6237b459a5d46f73c32a27855f0613bbe8.jpg",
                                                               "url": "https://findwork.dev/Mmjg4LX/mit-power-und-herz-b2b-vertriebsprofi-wmd-persoqua-ag-at-persoqua",
                                                               "text": "Du möchtest Unternehmen dabei helfen, ihre Mitarbeitenden gezielt zu fördern und dabei bares Geld zu sparen? Deine Leidenschaft für Vertrieb und dein Verständnis für unternehmerische Bedürfnisse machen dich zum perfekten Partner für unsere Kunden? Dann komm in unser Team und gestalte mit uns die Zukunft smarter Unternehmensförderung!\n\n<strong>Wer wir sind:</strong>\n\nWir unterstützen Unternehmen dabei, finanzielle Förderungen für Personalentwicklung und Mitarbeitereinstellungen zu beantragen. Dadurch senken wir Kosten und schaffen Freiräume für Wachstum. Unsere partnerschaftliche Teamkultur basiert auf gegenseitigem Vertrauen, Eigenverantwortung und dem gemeinsamen Ziel, Großes zu erreichen.\n\n<strong>Aufgaben</strong>\n<ul>\n \t<li>Neukundengewinnung im B2B-Bereich, mit Fokus auf Personalabteilungen und Geschäftsführungen.</li>\n \t<li>Beratung von Unternehmen zur optimalen Nutzung von Fördermitteln und Unterstützung bei der Antragstellung.</li>\n \t<li>Aufbau langfristiger Kundenbeziehungen durch empathische und zielorientierte Kommunikation.</li>\n \t<li>Pflege und Weiterentwicklung unseres CRM-Systems (HubSpot).</li>\n</ul>\n<strong>Qualifikation</strong>\n<ul>\n \t<li>Mehrjährige Erfahrung im B2B-Vertrieb, idealerweise mit Zielgruppen wie Personalabteilungen oder Geschäftsführungen.</li>\n \t<li>Ein ausgeprägtes Verständnis für betriebswirtschaftliche Zusammenhänge und die Fähigkeit, Unternehmen vom Nutzen unserer Dienstleistung zu begeistern.</li>\n \t<li>Kenntnisse im Umgang mit HubSpot oder die Bereitschaft, dich schnell einzuarbeiten.</li>\n \t<li>Flexibilität, Eigeninitiative und der Wunsch, im Vertrieb den Unterschied zu machen.</li>\n</ul>\n<strong>Benefits</strong>\n<ul>\n \t<li>Eine Tätigkeit mit Sinn: Unterstütze Unternehmen bei ihrer Entwicklung und spare ihnen dabei bares Geld.</li>\n \t<li>Flexibles Arbeiten: Hauptsächlich remote, ergänzt durch persönliche Teammeetings und gelegentliche Kundentermine vor Ort.</li>\n \t<li>Ein attraktives Einkommenspaket: Festgehalt, leistungsorientierte Boni und die Möglichkeit auf Unternehmensanteile.</li>\n \t<li>Viel Freiraum und Verantwortung: Arbeite eigenständig und werde Teil eines partnerschaftlichen Teams auf Augenhöhe.</li>\n</ul>\n<strong>Werde Teil von etwas Großem!</strong>\nWenn du bis hierhin gelesen hast, bist du bereit, mit uns gemeinsam Vollgas zu geben. Wir freuen uns darauf, dich kennenzulernen und gemeinsam Erfolge zu feiern.\n\n<strong>Klingt spannend?</strong>\nDann melde dich bei uns – wir freuen uns auf deine Bewerbung!",
                                                               "date_posted": "2025-01-16T05:00:00Z",
                                                               "keywords": [
                                                                   "hubspot"
                                                               ],
                                                               "source": "Berlinstartupjobs"
                                                           },
                                                           {
                                                               "id": "MBjJg7M",
                                                               "role": "Customer Success Manager (w/m/d) (Arbeitgeberservice, Personalabteilung, Bildungsträger) // PersoQua AG",
                                                               "company_name": "PersoQua",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": "Berlin, Germany",
                                                               "remote": true,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/94f03e6237b459a5d46f73c32a27855f0613bbe8.jpg",
                                                               "url": "https://findwork.dev/MBjJg7M/customer-success-manager-wmd-arbeitgeberservice-personalabteilung-bildungstrager-persoqua-ag-at-persoqua",
                                                               "text": "Du bist auf der Suche nach einer Möglichkeit, Sinnvolles zu schaffen und Großartiges zu bewirken? Bei PersoQua könnten wir genau den richtigen Nährboden für deine Ambitionen bieten. Wie wäre es, wenn du der Motor für wichtige gesellschaftliche Prozesse sein könntest und gleichzeitig mit uns wächst?\n\nStell dir eine Welt vor, in der Menschen ihre Arbeitszeit nutzen, um sich und ihr Potenzial voll zu entfalten – wir bei PersoQua arbeiten genau auf diese Vision hin. Wir unterstützen Unternehmen beim Bezug finanzieller Förderungen, die es ihren Mitarbeitern erlauben sich in ihrer Arbeitszeit Themen wie gesundem Angstmanagement, einfühlsamer Kommunikation und kreativer Gestaltungsfreiheit zu widmen. Klingt das nicht nach einem Game-Changer?\n\nUnternehmen, die es verstanden haben, bekommen durch uns einen riesigen finanziellen Rückenwind!\n\nIn unserem kleinen aber feinen Team zählt jeder Einzelne. Wir haben uns darauf spezialisiert, den Fluss von staatlichen Zuschüssen an Unternehmen für Neueinstellungen und fachlichen sowie persönlichen Weiterbildungen von bestehenden Mitarbeitenden zu vereinfachen.\n\n<strong>Aufgaben</strong>\n\nBei PersoQua verstehen wir den Wert starker und nachhaltiger Beziehungen. Als expandierendes Unternehmen, das mit Arbeitgebern, fördernden Stellen und Bildungsträgern zusammenarbeitet, suchen wir engagierte Mitarbeitende, die unsere Bestandskunden betreuen, Förderanträge stellen, die Beziehungen zu unseren Partnern stärken und zum weiteren Wachstum unseres Unternehmens beitragen.\n\n<strong>Qualifikation</strong>\n\nDu bist es gewohnt als B2B-Dienstleister, mit Personalabteilungen und Geschäftsführungen jeder Größe in lockerer, professioneller Atmosphäre und auf Augenhöhe zu kommunizieren. Du fühlst dich in der Businessetikette zu Hause und strebst nicht nur danach Kunden zufriedenzustellen, sondern sie zu begeistern.\n<ul>\n \t<li>Du denkst in skalierbaren Prozessen!</li>\n</ul>\nAuch wenn du keine Star-Allüren hast und hands-on anpackst, strebst du danach skalierbare Prozesse zu etablieren und sie kontinuierlich zu verbessern, sodass es dir möglich wird ein großes, herausragendes & leistungsfähiges Team zu unterstützen und zu führen.\n<ul>\n \t<li>Du gehst gerne die extra Meile!</li>\n</ul>\nSportlicher und mentaler Ausgleich wird von uns erwartet und gefördert. Innerhalb eines gesunden Rahmens wird es allerdings in den nächsten 1-2 Jahren sinnvoll sein, nicht pünktlich nach 40 Stunden den Stift fallen zu lassen. Erst mal ist Vollgas gefragt.\n<ul>\n \t<li>Du möchtest an etwas Großem mitwirken!</li>\n</ul>\nDu bist motiviert bis in die Zehenspitzen und brauchst keine Impulse von außen. Du begeisterst dich und andere von Dingen, hinter denen du uneingeschränkt stehen kannst.\n<ul>\n \t<li>Zufriedene Kunden? Du gehst einen Schritt weiter!</li>\n</ul>\nDu unterstützt unsere Bestandskunden auf ihrem Weg zur optimalen Personalförderung. Deine Aufgabe ist es, in allen Fragen rund um die Personalförderung zu beraten und den Aufwand der Beantragung beim Kunden möglichst gering zu halten. Zudem übernimmst du die vollständige Abwicklung der Förderanträge. Die Formularbearbeitung wird schrittweise immer weiter automatisiert. Du wirst vor allem Kontakt zu Geschäftsführungen, Personalabteilungen, Bildungsträgern und Behörden haben. Durch deinen zuvorkommenden und professionellen Serviceanspruch, dem du schaffst, dauerhaft gerecht zu werden, bist du bald für unsere Kunden nicht mehr wegzudenken.\n<ul>\n \t<li>Deine Lernfreude treibt dich an</li>\n</ul>\nDu wirst nicht nur eine externe Zertifizierung zum_r Fördermittelmanager_in durchlaufen, sondern vor allem durch unsere Erfahrung einen einzigartigen Einblick in die Förderlandschaft der Personalförderungen erhalten. Während deiner Einarbeitung wirst du dich mit verschiedenen Fördertöpfen, deren Richtlinien und Abläufen so auseinandersetzen, dass das Wissen in Fleisch und Blut übergeht. Dadurch wirst du spielerisch und spontan auf die Fragen und Anwendungsfälle unserer Kunden eingehen können.\n<ul>\n \t<li>Du suchst stets nach Entwicklungsmöglichkeiten</li>\n</ul>\nUnser aktuell noch kleines Team wird wachsen und braucht dann Leute, die kooperativ unterstützen und führen.\n<ul>\n \t<li>Du schätzt Flexibilität</li>\n</ul>\nDie Freiheit von ortsunabhängigem Arbeiten kannst du genießen. Wir haben zwar ein Gemeinschaftsbüro mit einem beeindruckenden Ausblick über Berlin (wow-Effekt garantiert), doch deine Arbeit kann fast vollständig von zu Hause ausgeführt werden.\n\nBenefits\n<ul>\n \t<li>Du investierst deine Zeit und Energie, was investiert PersoQua?</li>\n</ul>\nBedeutsamkeit in der Tätigkeit und ein ansprechendes Einkommenspaket: Festgehalt, Leistungsboni und Unternehmensanteile. Welche Höhen und Aufteilungen würden dich begeistern? Auch wenn wir noch sehr am Anfang unserer Reise sind, darf der Weg auch finanziell Spaß machen.\n\nVon uns bekommst du das Fachwissen, den finanziellen Rahmen und die Möglichkeit etwas wirklich Großes mitzugestalten, aber wir brauchen von dir deine volle Aufmerksamkeit und Einsatzbereitschaft – bist du dafür bereit?\n\nMir ist es egal, ob du promoviert hast oder nie dazu gekommen bist, eine Ausbildung abzuschließen. Die Frage ist, hast du das Feuer und die Erfahrung, die wir brauchen?\n\nWir wollen, dass du und PersoQua an dieser Zusammenarbeit wachsen!\n\nSolltest du dich angesprochen fühlen, aber die beschriebene Rolle nicht passen, kontaktiere mich trotzdem, denn wir werden noch viele verschiedene Positionen besetzen und vielleicht ist da ja etwas für dich dabei.\n\nWenn du bis hierhin gelesen hast, dann bist du vermutlich im positiven Sinne verrückt genug, etwas wirklich Großes anzugehen und deine Zeit und Energie dafür aufzubringen. Solltest du dich nicht bei mir melden, hoffe ich, dass du nicht aufhörst, nach einem anderen großartigen Unternehmen/Projekt zu suchen, in dem du dein Potenzial entfalten wirst.",
                                                               "date_posted": "2025-01-16T05:00:00Z",
                                                               "keywords": [],
                                                               "source": "Berlinstartupjobs"
                                                           },
                                                           {
                                                               "id": "QGp5gDM",
                                                               "role": "Senior Enterprise Sales Manager:in (w/m/d) // Humanoo",
                                                               "company_name": "Humanoo",
                                                               "company_num_employees": "11-50",
                                                               "employment_type": "full time",
                                                               "location": "Berlin, Germany",
                                                               "remote": false,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/d8c917157415c2db629275df44c1a35acd38f7d6.jpg",
                                                               "url": "https://findwork.dev/QGp5gDM/senior-enterprise-sales-managerin-wmd-humanoo-at-humanoo",
                                                               "text": "SAG HELLO ZU HUMANOO!\n\nMit einem Team von 80 Personen aus über 25 verschiedenen Ländern baut Humanoo eine einzigartige ganzheitliche Plattform auf, die die Menschen gesünder macht. Wir sind ehrgeizig und zielorientiert und haben Spaß an der Arbeit, indem wir eine positive Atmosphäre schaffen.\n\nPosition: Senior Enterprise Sales Manager:in (w/m/d)\n\nStandort: Berlin, Deutschland\n\nStartdatum: Sobald wie möglich, 1. Quartal 2025\n\n<strong>Deine Mission in aller Kürze:</strong> Als Senior Enterprise Sales Manager:in (m/w/d) wirst du den Bereich Enterprise Sales für Humanoo in den deutschsprachigen und weiteren europäischen Märkten vorantreiben und gestalten.\n\nBisher haben wir vor allem mit einigen der größten Versicherer Europas zusammengearbeitet und uns auf KMUs im Unternehmenssektor konzentriert. Mit unserer kürzlichen Übernahme durch Telus – den weltweit führenden Anbieter von Employee Assistance Programs (EAP) – richten wir unseren Fokus nun verstärkt auf den Bereich Corporate Enterprise Sales.\n\nDu stehst an vorderster Front dieses Wandels, entwickelst unsere Vertriebsstrategien und ebnest den Weg für Humanoos Eintritt in dieses spannende neue Segment.\n\n<strong>WOMIT DU DEINE ZEIT VERBRINGEN WIRST:</strong>\n<ul>\n \t<li>Aufbau und Verwaltung der Pipeline: Du entwickelst und verwaltest deine Vertriebs-Pipeline durch proaktive, ausgehende Kundenakquise</li>\n \t<li>Ziele erreichen: Du erreichst und übertriffst konsequent deine Verkaufsquoten und -ziele</li>\n \t<li>Selbstständiges Verkaufen: Du führst deine eigenen Produktdemos durch – unsere Plattform bietet viele Funktionen, ist aber leicht zu erklären</li>\n \t<li>Stakeholder-Management: Du verwaltest komplexe Stakeholder-Beziehungen, indem du verschiedene Perspektiven innerhalb eines Unternehmens vereinst und an die richtigen Stellen adressierst</li>\n \t<li>Umsatzwachstum: Du steigerst das Umsatzwachstum für die ERP-Lösungen von Humanoo in Europa, indem du große Unternehmen (5.000+ Mitarbeitende) ansprichst</li>\n</ul>\n<strong>DAS SOLLTEST DU MITBRINGEN:</strong>\n<ul>\n \t<li>Erfahrung: Mindestens 5+ Jahre Erfahrung im B2B/SaaS-Vertrieb mit Dealgrößen von 100k+</li>\n \t<li>Proaktive Verkaufsorientierung: Nachgewiesene Fähigkeit, sich auf den Outbound-Vertrieb zu konzentrieren und eine eigene Pipeline zu generieren</li>\n \t<li>Sprachkenntnisse: Fließend in Deutsch und Englisch</li>\n \t<li>Vertriebserfahrung: Ausgeprägte Fähigkeiten im Stakeholder-Management und die Fähigkeit, selbstständig Demos durchzuführen</li>\n \t<li>Motivation: Du bist hochmotiviert von Zielen und Boni, übertriffst regelmäßig deine Verkaufsziele und findest es spannend, Beziehungen zu unterschiedlichen Kunden aufzubauen</li>\n \t<li>Teamgeist: Bei Humanoo steht das Miteinander im Mittelpunkt. Auch wenn der Vertrieb eine individuelle Aufgabe ist, legen wir Wert auf Teamarbeit, Wissensaustausch und das Feiern der Erfolge der anderen. Wir suchen jemanden, der diesen Wert verkörpert und dabei hilft, eine unterstützende und integrative Vertriebskultur aufzubauen</li>\n</ul>\n<strong>INTERVIEW-PROZESS</strong>\n\nNach Eingang deiner Bewerbung wird unser Talent Acquisition Team deine Bewerbung gründlich prüfen. Wir bemühen uns, innerhalb von 3-5 Arbeitstagen zu antworten. Wenn deine Bewerbung positiv ausfällt, wirst du zur Teilnahme an unserem umfassenden Auswahlverfahren eingeladen, das die folgenden Schritte umfasst:\n<ol>\n \t<li>Recruiter Call: Erstes Gespräch, um deinen Hintergrund und die Position zu besprechen.</li>\n \t<li>Hiring Manager Call: Ein ausführliches Gespräch mit dem Hiring Manager, um deine Eignung für das Team zu prüfen.</li>\n \t<li>Take-home Case Study: Eine Aufgabe zur Bewertung deiner Verkaufsstrategien und Problemlösungsfähigkeiten (wir senden dir die Case Study zu, und du hast ein paar Tage Zeit, um sie vorzubereiten).</li>\n \t<li>Panel Interview: 60-minütige Präsentation der Case Study vor dem Hiring Manager und dem VP of Revenue.</li>\n \t<li>Team Interview: 30-minütige Gespräche mit Teammitgliedern aus verschiedenen Abteilungen sowie eine halbe Stunde mit jemandem aus dem Sales-Team.</li>\n</ol>\nNach Abschluss dieser Gesprächsphasen wird unser Einstellungsteam zu einer Nachbesprechung zusammenkommen, um deine Bewerbung zu besprechen. Im Anschluss an diese Nachbesprechung wird sich unser Talent Acquisition Partner mit dir in Verbindung setzen, um dir Feedback zu geben und dir die endgültige Entscheidung über deine Bewerbung mitzuteilen. Wir schätzen dein Interesse an unserem Unternehmen und freuen uns über deine Teilnahme an unserem Auswahlverfahren.\n\n<strong>WAS WIR DIR BIETEN:</strong>\n\n<strong>Wofür wir stehen:</strong>\n\n<strong>Integrity</strong>: Im besten Interesse des Unternehmens, der Kunden und der Mitarbeiter handeln. Schwierige Entscheidungen mit Ehrlichkeit, Transparenz und Verantwortlichkeit treffen. Unser Wort ist unser Versprechen und wir priorisieren datenbasierte Entscheidungen.\n\n<strong>Leadership</strong>: Domänen, groß oder klein, mit dem Engagement für Exzellenz übernehmen. Andere stärken, mit Empathie führen und klar kommunizieren. Den Lernprozess niemals stoppen und sich sowohl als Individuum, als auch als Team verbessern.\n\n<strong>Together</strong>: Beiträge wertschätzen, Stärken und Schwächen würdigen. Kein Platz für Diskriminierung - unsere Stimmen dagegen erheben. Erfolg teilen, Misserfolg als Chance zum Lernen sehen. EIN TEAM, das einander priorisiert, Feedback mit Sorgfalt geben und empfangen.\n\n<strong>Kleiner Einblick in deine Vorteile:</strong>\n\nZusätzliche Krankenversicherung in Höhe von 900 EUR pro Jahr, monatlicher Zuschuss von 70 EUR zur Abdeckung der täglichen Ausgaben, unbefristeter Vertrag, 28 Tage Urlaub + 1 zusätzlicher Tag für jedes Jahr, das du bei uns bleibst (begrenzt auf 3), 24. und 31. Dezember frei und vieles mehr...\n\n<strong>Über uns</strong>\n\nHUMANOO ist eine automatisierte DIGITALE CORPORATE WELLNESS LÖSUNG für Unternehmen und Versicherungen weltweit, die den Menschen dabei hilft, ein gesünderes Leben zu führen.\n\nMit Niederlassungen in Berlin und Paris unterstützt HUMANOO Nutzer:innen bei der Verbesserung ihrer körperlichen und geistigen Gesundheit durch maßgeschneiderte On-Demand-Programme für Fitness, Yoga, Achtsamkeit, Schlaf und Ernährung.\n\nHUMANOOs innovative Strategie ermöglicht es Nutzer:innen, für gesundheitliche Aktivitäten mit finanziellen und nicht-finanziellen Prämien belohnt zu werden, was zu nachhaltigem Engagement und einer studienbasierten Gesundheitsförderung führt.\n\nMehr als 1500 Unternehmen in über 10 Ländern nutzen Humanoo bereits erfolgreich, um ihre Mitarbeiter:innen und Kund:innen gesünder und produktiver zu machen. TK, Coca Cola, Axel Springer, Korian, Nürnberger Versicherung, CSS sind nur einige der Unternehmen, die HUMANOO nutzen.\n\nMehr Informationen: https://www.humanoo.com/",
                                                               "date_posted": "2025-01-16T05:00:00Z",
                                                               "keywords": [],
                                                               "source": "Berlinstartupjobs"
                                                           },
                                                           {
                                                               "id": "XzZWYyX",
                                                               "role": "Customer Success Manager:in &#8211; Custom Solutions (w/m/d) // Humanoo",
                                                               "company_name": "Humanoo",
                                                               "company_num_employees": "11-50",
                                                               "employment_type": "full time",
                                                               "location": "Berlin, Germany",
                                                               "remote": false,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/d8c917157415c2db629275df44c1a35acd38f7d6.jpg",
                                                               "url": "https://findwork.dev/XzZWYyX/customer-success-managerin-8211-custom-solutions-wmd-humanoo-at-humanoo",
                                                               "text": "SAG HELLO ZU HUMANOO!\n\nMit einem Team von 80 Personen aus über 25 verschiedenen Nationalitäten entwickelt Humanoo eine einzigartige ganzheitliche Plattform, die darauf abzielt, Menschen gesünder zu machen. Wir sind ehrgeizig, zielorientiert und schaffen eine positive Atmosphäre, in der wir gerne arbeiten.\n\nPosition: Customer Success Manager:in - Custom Solutions (w/m/d)\n\nOrt: Berlin, Deutschland\n\nStartdatum: so bald wie möglich\n\n<strong>Deine Mission, kurz gesagt</strong>: Wir bei Humanoo sind die treibende Kraft hinter der digitalen Gesundheitsrevolution. Unser Customer Success Team arbeitet Hand in Hand mit Europas größten Versicherern, um innovative Engagement-Maßnahmen umzusetzen, die Millionen von positiven Berührungspunkten schaffen. Unser Ziel ist es, Menschen zu inspirieren, gesunde Routinen in ihren Alltag zu integrieren und so ihr Wohlbefinden nachhaltig zu verbessern – jeden Tag aufs Neue.\n\nDas Team: Als neues Teammitglied arbeitest du eng mit einigen der größten Versicherern Europas zusammen, um digitale Engagement-Maßnahmen zu entwickeln und umzusetzen. Du sorgst dafür, dass unsere Partner die besten Strategien nutzen, um ihre Kunden aktiv einzubinden und deren Gesundheitsroutinen zu verbessern.\n\n<strong>WOMIT DU DEINE ZEIT VERBRINGEN WIRST:</strong>\n<ul>\n \t<li>Kundenerfolg sicherstellen: Du arbeitest direkt mit unseren wichtigen High-Touch-Kunden zusammen, die einen hohen jährlichen Umsatz (ARR) erzielen. Dabei sorgst du dafür, dass wir ihre Anforderungen genau verstehen und in unsere Lösungen einfließen lassen.</li>\n \t<li>Projektmanagement von A bis Z: Du begleitest komplexe Kundenprojekte von der ersten Kontaktaufnahme bis zum Launch unserer Custom Solutions und darüber hinaus.</li>\n \t<li>Enge Zusammenarbeit mit Produktteams: Du fungierst als Bindeglied zwischen Kunden und unseren internen Teams, um sicherzustellen, dass unsere Lösungen maßgeschneidert und marktgerecht sind.</li>\n \t<li>Qualitätssicherung: Nach dem Launch überwachst du die Performance und Kundenzufriedenheit, indem du gemeinsam mit deinen Kunden Engagement-Strategien entwickelst und diese umsetzt.</li>\n \t<li>Pipeline- und Strategieaufbau: Du baust langfristige Kundenbeziehungen auf und identifizierst Cross- und Upselling-Möglichkeiten.</li>\n</ul>\n<strong>DAS SOLLTEST DU MITBRINGEN:</strong>\n<ul>\n \t<li>Koordinierung und Zusammenarbeit: Du kannst hervorragend mit mehreren Aufgaben, Interessengruppen und Prioritäten gleichzeitig jonglieren. Mit außergewöhnlichen organisatorischen Fähigkeiten und einer ruhigen, konzentrierten Herangehensweise stellst du sicher, dass jedes Projekt pünktlich, präzise und in höchster Qualität geliefert wird.</li>\n \t<li>Erfahrung im Customer Success und Projektmanagement: Du hast 3+ Jahre Erfahrung in einer ähnlichen Rolle, vorzugsweise im Bereich SaaS, digitale Plattformen oder B2B-Lösungen.</li>\n \t<li>Technisches Verständnis: Du kannst dich schnell in digitale Produkte einarbeiten und bist sicher im Umgang mit komplexen Projekten.</li>\n \t<li>Kommunikationstalent: Du überzeugst durch ausgeprägte Kommunikationsfähigkeiten und kannst effektiv mit Kunden, Stakeholdern und internen Teams auf allen Ebenen interagieren.</li>\n \t<li>Strategisches Denken: Du denkst unternehmerisch, bist lösungsorientiert und bringst analytische Fähigkeiten mit.</li>\n \t<li>Teamplayer: Du verstehst dich nicht als Einzelkämpfer:in und arbeitest gerne mit Menschen in verschiedenen Rollen und unterschiedlichen Arbeitsweisen zusammen. Du begegnest ihnen mit Respekt und bist offen für neue Ansätze.</li>\n \t<li>Sprachkenntnisse: Fließendes Deutsch und Englisch sind ein Muss, weitere Sprachen sind ein Plus.</li>\n</ul>\n<strong>INTERVIEW-PROZESS</strong>\n\nNach Erhalt deiner Bewerbung wird unser Talent Acquisition Team diese sorgfältig prüfen. Wir streben an, innerhalb von 3-5 Werktagen mit einem Status Update zu antworten. Wenn deine Bewerbung positiv verläuft, wirst du zu unserem ausführlichen Auswahlprozess eingeladen, der die folgende Stufen umfasst:\n<ul>\n \t<li>Initiales Screening-Gespräch (45 Minuten)</li>\n \t<li>Hiring Manager Gespräch (60 Minuten)</li>\n \t<li>Panel Interview mit der Präsentation der Case Study (60 Minuten)</li>\n</ul>\nNach Abschluss dieser Interviewstufen wird unser Recruiting-Team zu einer Besprechung zusammenkommen, um deine Bewerbung.\n\nzu besprechen. Nach dieser Besprechung wird sich unser Talent Acquisition Partner mit dir in Verbindung setzen, um Feedback zu geben und die endgültige Entscheidung bezüglich deiner Bewerbung mitzuteilen.\n\n<strong>WAS WIR DIR BIETEN:</strong>\n\n<strong>Wofür wir stehen:</strong>\n<ul>\n \t<li>Integrity: Im besten Interesse des Unternehmens, der Kunden und der Mitarbeiter handeln. Schwierige Entscheidungen mit Ehrlichkeit, Transparenz und Verantwortlichkeit treffen. Unser Wort ist unser Bund, und wir priorisieren datengestützte Entscheidungen.</li>\n \t<li>Leadership: Domänen, groß oder klein, mit dem Engagement für Exzellenz übernehmen. Andere stärken, mit Empathie führen und klar kommunizieren. Den Lernprozess niemals stoppen und sich sowohl als Individuum, als auch als Team verbessern.</li>\n \t<li>Together: Beiträge wertschätzen, Stärken und Schwächen würdigen. Kein Platz für Diskriminierung - unsere Stimmen dagegen erheben. Erfolg teilen, Misserfolg als Chance zum Lernen sehen. EIN TEAM, das einander priorisiert, Feedback mit Sorgfalt geben und empfangen.</li>\n</ul>\n<strong>Kleiner Einblick in deine Vorteile:</strong>\n\nZusätzliche Krankenversicherung in Höhe von 900 EUR pro Jahr, monatlicher Zuschuss von 70 EUR zur Abdeckung der täglichen Ausgaben, unbefristeter Vertrag, 28 Tage Urlaub + 1 zusätzlicher Tag für jedes Jahr, das du bei uns bleibst (begrenzt auf 3), 24. und 31. Dezember frei und vieles mehr...\n\n<strong>Über uns</strong>\n\nHUMANOO ist eine automatisierte DIGITALE CORPORATE WELLNESS LÖSUNG für Unternehmen und Versicherungen weltweit, die den Menschen dabei hilft, ein gesünderes Leben zu führen.\n\nMit Niederlassungen in Berlin und Paris unterstützt HUMANOO Nutzer:innen bei der Verbesserung ihrer körperlichen und geistigen Gesundheit durch maßgeschneiderte On-Demand-Programme für Fitness, Yoga, Achtsamkeit, Schlaf und Ernährung.\n\nHUMANOOs innovative Strategie ermöglicht es Nutzer:innen, für gesundheitliche Aktivitäten mit finanziellen und nicht-finanziellen Prämien belohnt zu werden, was zu nachhaltigem Engagement und einer studienbasierten Gesundheitsförderung führt.\n\nMehr als 1500 Unternehmen in über 10 Ländern nutzen Humanoo bereits erfolgreich, um ihre Mitarbeiter:innen und Kund:innen gesünder und produktiver zu machen. TK, Coca Cola, Axel Springer, Korian, Nürnberger Versicherung, CSS sind nur einige der Unternehmen, die HUMANOO nutzen.\n\nMehr Informationen: https://www.humanoo.com/",
                                                               "date_posted": "2025-01-16T05:00:00Z",
                                                               "keywords": [],
                                                               "source": "Berlinstartupjobs"
                                                           },
                                                           {
                                                               "id": "M3G92wM",
                                                               "role": "Senior Risk Analyst (Chef)",
                                                               "company_name": "Steakhouse Financial",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": null,
                                                               "remote": true,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/d3b1a8b3a0c673cab511555b994aedee483c48b6.jpg",
                                                               "url": "https://findwork.dev/M3G92wM/senior-risk-analyst-chef-at-steakhouse-financial",
                                                               "text": "<p>Steakhouse Financial’s mission is to pioneer open and transparent finance. We build transparent, efficient, and accessible financial primitives to power the next generation of capital markets on public blockchains. We empower leading DAOs and crypto-native companies including Sky (FKA MakerDAO), Lido, Morpho, Ethena, and ENS through strategic, risk, and financial advisory. Our focus areas include real world assets (RWAs), stablecoins, curating efficient lending markets, market making, and actively participating in markets via proprietary trading to enhance liquidity and overall market health.</p><p>We are gathering the best minds in finance, legal, data, engineering and now risk to build the future of finance.</p><h2>About the Role:</h2><p>As the Senior Risk Analyst, your hands will be shaping DeFi markets. You’ll not only analyze assets, monitor critical systems and ensure smooth execution, but also play a key role in the future of financial markets.</p><p>Our Morpho vaults have >$300M deposits and we are using both traditional (Real-World Asset) and innovative DeFi protocol tokens as collateral. This requires the ability to understand both TradFi and DeFi concepts (duration, legal setup, code, decentralization, etc).</p><h2>Responsibilities:</h2><ul><li>Lead the analysis of prospective new collateral type for Steakhouse Morpho vaults</li><li>Conduct in-depth risk assessments of the existing and new crypto-assets to identify, evaluate, and quantify market, credit, liquidity, and operational risks</li><li>Proactively monitor markets and to mitigate and minimize risks</li><li>Create and maintain real-time dashboards to monitor key risk indicators (KRIs) and risk exposure across the Morpho vaults.</li><li>Prepare regular risk reports for leadership, distilling complex data into actionable insights</li><li>Communicate significant findings and emerging risks to relevant stakeholders promptly</li><li>Design and implement risk mitigation strategies, including parameter adjustments (e.g., collateral ratios) to safeguard vault solvency</li><li>Develop and execute stress-testing methodologies to gauge vault resilience under extreme market conditions (e.g., rapid price drops, liquidity crises)</li><li>Propose vault-level contingency plans, including pause mechanisms or circuit breakers, for worst-case scenarios</li><li>Research and recommend improvements and optimizations to existing vaults, and ideate on future products</li><li>Keep track of DeFi industry developments, protocol upgrades, and new opportunities that might affect vaults</li><li>Create and maintain comprehensive risk management policies and standard operating procedures related to the vaults</li><li>Regularly review and refine analytics tools, risk models, and frameworks to adapt to the fast-paced DeFi environment</li><li>Support development of new products and strategic products leveraging decentralized finance infrastructure</li></ul><h2>We’re looking for someone with:</h2><ul><li>5+ years of risk analysis in a TradFi and/or DeFi setup</li><li>Deep understanding of financial markets</li><li>Capacity to read and understand smart contracts</li><li>Ability to write data analysis in Python (Jupyter)</li><li>SQL proficiency (DuneSQL)</li><li>Not afraid of rolling up your sleeves and getting your hands dirty</li><li>Highly detail-oriented</li><li>Proactive and autonomous</li><li>DeFi user</li></ul><h2>What’s in it for you:</h2><p>Be part of an ecosystem that encourages transparency and alignment with open-source methodologies and principles.</p><ul><li>Participate in shaping the future of financial markets</li><li>Contribute to high-impact projects that will drive the growth of decentralized finance</li><li>Competitive compensation including bonus and equity</li><li>Work within a remote and highly collaborative team consisting of diverse experts</li><li>100% remote with opportunities to travel to team events and conferences</li></ul><p>Send us a message at   <a>chefs@steakhouse.financial</a>.</p>",
                                                               "date_posted": "2025-01-16T05:00:00Z",
                                                               "keywords": [
                                                                   "python",
                                                                   "jupyter",
                                                                   "sql"
                                                               ],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "nZl6D7M",
                                                               "role": "Senior Front-End Engineer",
                                                               "company_name": "Golem Foundation",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": null,
                                                               "remote": true,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/4c0628cef1ff4f03c1ed28c5e42e26e7f4f697f0.jpg",
                                                               "url": "https://findwork.dev/nZl6D7M/senior-front-end-engineer-at-golem-foundation",
                                                               "text": "<h2>About the Role</h2><p>We’re seeking an experienced Frontend Engineer who is passionate about building the future of decentralized finance (DeFi) and Web3. In this role, you will be instrumental in developing innovative solutions that blend public goods funding mechanisms with integrated social and financial functionalities, creating a new paradigm for on-chain social interaction. The ideal candidate will combine technical excellence with strong values alignment and a genuine interest in advancing decentralized technologies.</p><h2>Core Responsibilities</h2><ul><li>Architect and implement scalable, responsive frontend systems using React and TypeScript</li><li>Build high-performance user interfaces that integrate seamlessly with Web3 technologies</li><li>Optimize web performance and ensure cross-browser compatibility</li><li>Collaborate with design and product teams to shape product vision and roadmap</li><li>Contribute to technical decisions and long-term architectural strategies</li><li>Ensure high code quality through testing and documentation</li></ul><h2>Required Qualifications</h2><ul><li>5+ years of frontend development experience</li><li>Deep expertise in React, TypeScript, and modern JavaScript</li><li>Strong proficiency with Web3 libraries (Wagmi/Viem)</li><li>Experience with GraphQL and modern frontend architectures</li><li>Demonstrated ability to optimize frontend performance</li><li>Strong focus on UI/UX and attention to detail</li><li>Experience with modern development workflows and CI/CD practices</li></ul><h2>Values & Attributes We’re Looking For</h2><ul><li>Deep alignment with Web3 principles and decentralized technology</li><li>Passionate about the future of DeFi and its potential positive impact</li><li>Strong problem-solving abilities with a proactive, ownership-driven mindset</li><li>Comfortable working in a remote-friendly, fast-paced, iterative environment</li><li>Proven ability to balance pragmatic solutions with innovation</li><li>Adaptability and willingness to dive into new challenges and unfamiliar technologies.</li><li>The time overlap for the team is 8 AM - 12 PM EST (2 PM - 6 PM CET)</li></ul><h2>Nice-to-Have Experience</h2><ul><li>Familiarity with the Safe ecosystem and Zodiac</li><li>Previous work on large-scale Web3 projects</li><li>Experience with DeFi protocols or DAOs</li><li>Contributions to open-source projects</li><li>Understanding of blockchain fundamentals</li><li>Backend experience with GraphQL and Node.js</li></ul><h2>What We Offer</h2><ul><li>Opportunity to shape the future of decentralized finance</li><li>Remote-friendly work environment</li><li>Flexible working arrangements</li><li>Competitive compensation package including tokens</li><li>Regular team events and learning opportunities</li><li>Access to cutting-edge tools and technologies</li></ul><p>We believe in building technology that empowers users while maintaining the highest standards of security and reliability. If you share our vision for a more decentralized future and have the technical skills to help build it, we’d love to hear from you.</p>",
                                                               "date_posted": "2025-01-16T05:00:00Z",
                                                               "keywords": [
                                                                   "typescript",
                                                                   "web3",
                                                                   "react",
                                                                   "graphql",
                                                                   "blockchain",
                                                                   "javascript",
                                                                   "ux",
                                                                   "node"
                                                               ],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "MmjgljX",
                                                               "role": "Senior Full Stack Engineer",
                                                               "company_name": "Golem Foundation",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": null,
                                                               "remote": true,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/4c0628cef1ff4f03c1ed28c5e42e26e7f4f697f0.jpg",
                                                               "url": "https://findwork.dev/MmjgljX/senior-full-stack-engineer-at-golem-foundation",
                                                               "text": "<h2>About the Role</h2><p>We’re seeking an experienced Full-Stack Engineer who is passionate about building the future of decentralized finance (DeFi) and Web3. In this role, you will be instrumental in developing innovative solutions that blend public goods funding mechanisms with integrated social and financial functionalities, creating a new paradigm for on-chain social interaction. The ideal candidate will combine technical excellence with strong values alignment and a genuine interest in advancing decentralized technologies.</p><h2>Core Responsibilities</h2><ul><li>Design, build, and maintain scalable front-end and back-end systems that meet performance and reliability goals.</li><li>Seamlessly integrate blockchain technologies into our applications, focusing on interoperability and user experience.</li><li>Collaborate with a cross-functional distributed team to iterate quickly and deliver value to users</li><li>Build and maintain scalable Web3 integrations, with particular focus on DeFi protocols and infrastructure</li><li>Architect and optimize database solutions that bridge traditional and blockchain data systems</li><li>Contribute to technical decision-making that balances innovation with practical implementation</li><li>Proactively identify bottlenecks, optimize code, and scale systems for high performance in a rapidly evolving environment.</li><li>Help providing technical guidance, driving best practices for clean, maintainable, and efficient code.</li></ul><h2>Required Qualifications</h2><ul><li>5+ years of full-stack engineering experience</li><li>Strong proficiency in TypeScript, React, Node.js, GraphQL, SQL databases</li><li>Demonstrated experience with blockchain technologies, including EVM-compatible chains, smart contracts, and web3 libraries</li><li>Deep understanding of DeFi protocols and decentralized systems</li><li>Track record of shipping and maintaining production applications</li><li>Experience with modern development workflows and CI/CD practices</li></ul><h2>Values & Attributes We’re Looking For</h2><ul><li>Deep alignment with Web3 principles and decentralized technology</li><li>Passionate about the future of DeFi and its potential positive impact</li><li>Strong problem-solving abilities with a proactive, ownership-driven mindset</li><li>Comfortable working in a remote-friendly, fast-paced, iterative environment</li><li>Proven ability to balance pragmatic solutions with innovation</li><li>Adaptability and willingness to dive into new challenges and unfamiliar technologies.</li><li>The time overlap for the team is 8 AM - 12 PM EST (2 PM - 6 PM CET)</li></ul><h2>Nice-to-Have Experience</h2><ul><li>Experience with the Safe ecosystem and tools like Zodiac.</li><li>Knowledge of Solidity or Vyper, with experience building smart contracts or dApps.</li><li>Previous work with DeFi protocols or DAOs</li><li>Familiarity with blockchain data structures, such as graphs, subsquids, or substreams.</li><li>Prior experience developing applications driven by personal curiosity or frustrations.</li><li>Contributions to open-source Web3 projects</li></ul><h2>What We Offer</h2><ul><li>Opportunity to shape the future of decentralized finance and public goods funding</li><li>Remote-friendly work environment</li><li>Collaborative team culture focused on innovation</li><li>Competitive compensation package</li><li>Continuous learning and development opportunities</li></ul><p>We believe in building technology that empowers users while maintaining the highest standards of security and reliability. If you share our vision for a more decentralized future and have the technical skills to help build it, we’d love to hear from you.</p>",
                                                               "date_posted": "2025-01-16T05:00:00Z",
                                                               "keywords": [
                                                                   "typescript",
                                                                   "web3",
                                                                   "react",
                                                                   "graphql",
                                                                   "blockchain",
                                                                   "sql",
                                                                   "node",
                                                                   "solidity"
                                                               ],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "MBjJ0zM",
                                                               "role": "Partner Marketing Manager",
                                                               "company_name": "Mercuryo",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": null,
                                                               "remote": true,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/578bbda0355f11e2c843f6085651c91153349d54.jpg",
                                                               "url": "https://findwork.dev/MBjJ0zM/partner-marketing-manager-at-mercuryo",
                                                               "text": "<p>At Mercuryo, we’re at the forefront of enhancing decentralized finance (DeFi) with innovative payment use cases. Our goal is to redefine the finance experience, making sure everyone can easily access both web3 and traditional financial services.</p><p>We’re building a robust platform that makes dealing with crypto simpler and integrates it seamlessly into the broader financial ecosystem. Our mission is clear: to create a straightforward, user-friendly platform for businesses that are pioneering the next generation of consumer services with crypto.</p><p>Since launching in 2018, we’ve joined forces with web3 giants like MetaMask, Trust Wallet, Ledger, Jupiter, 1inch, PancakeSwap, powering over 200 dynamic products. This collaboration is driving the creation of innovative payment solutions within the web3 industry, involving direct engagements with prominent ecosystems such as Solana Labs, Consensys, and BNB Chain.</p><h2>Why Mercuryo?</h2><ul><li><strong>Industry Impact:</strong> Make a real difference by contributing to leading web3 projects that onboard millions of users into the new economy.</li><li><strong>Innovative Environment:</strong> Join a team of over 200 professionals from the most dynamic sectors, including banking, SaaS, and web3, all committed to delivering the best user experience in the industry.</li><li><strong>Growth and Learning:</strong> With partnerships spanning more than 200 top-tier B2B collaborations and a user base exceeding 7 million, the opportunities for professional growth are vast.</li><li><strong>Flexible Culture:</strong> Embrace our remote-first policy that values diversity, with team members from over 29 countries, creating an environment where ownership and creativity thrive.</li></ul><h2>About the Role</h2><p>This role offers unparalleled access to the heart of the crypto and fintech industries. You will work directly with leading companies in the crypto and fintech space, engaging with their leadership teams. Also gain exposure to the fastest-growing companies backed by top-tier VCs. You will build relationships with influential VCs and industry leaders. Drive and define the role, with the potential to significantly impact Mercuryo’s growth and the wider crypto ecosystem. And be at the forefront of industry trends and innovations.</p><h2>Your Role:</h2><ul><li>Lead full-scale marketing engagement and development for Mercuryo’s top 20 merchant accounts</li><li>Identify potential high-value clients outside of the current portfolio</li><li>Collaborate with the creative team to create targeted campaigns and integrated marketing strategies for client projects</li><li>Develop marketing service proposals and present them to clients</li><li>Oversee the execution and delivery of marketing programs, ensuring client expectations are exceeded</li><li>Monitor campaign performance and provide optimization recommendations to improve effectiveness</li><li>Manage relationships with key stakeholders, partners, and communities of our merchants</li><li>Develop unique value propositions and marketing campaigns to increase revenues</li><li>Track and present campaign results to client teams</li><li>Manage the ABM (Account-Based Marketing) planning schedule</li><li>Assist with communication and onboarding for select inbound clients as part of Mercuryo’s Ecosystem Program</li><li>Strengthen partner relationships through merchandise, gifts, events, and speaking engagements</li><li>Organize and host partner dinners and events</li></ul><h2>What We’re Looking For:</h2><ul><li>You thrive on responsibility and consistently deliver exceptional results</li><li>3+ years of experience in B2B client marketing, preferably in web3 or fintech. Additionally, agency experience is highly beneficial</li><li>Proven track record in developing and executing successful partner marketing and ABM campaigns</li><li>Strong analytical skills with the ability to interpret data and derive actionable insights</li><li>Hands-on experience with web3 products is a must</li><li>Exceptional writing and storytelling abilities across various mediums</li><li>Proficient in marketing automation tools, CRM/Email marketing</li><li>A strategic thinker with excellent interpersonal skills and the ability to build relationships with high-value clients</li><li>Passionate about continuous learning in the rapidly evolving crypto space</li></ul><h2>Nice to Have:</h2><ul><li>Active (or past) involvement in any leading ecosystem as a contributor</li></ul><h2>What We Offer:</h2><ul><li>Competitive market rate salary and performance-based incentives</li><li>22 days annual leave with an additional 6 company days, plus bank holidays</li><li>Comprehensive health insurance plans</li><li>Extensive Benefits program</li><li>Flexible work schedule and remote work options</li><li>Professional development and training opportunities</li><li>Opportunity to shape the initiatives you’re working on</li><li>Diverse and friendly team</li><li>We are open-minded to new ideas</li></ul><h2>Join Us</h2><p>If you’re driven to be a part of the web3 forefront and are keen to leave your mark on this rapidly evolving field, Mercuryo is an excellent choice. Discover our open positions and see how you can contribute to shaping the future</p>",
                                                               "date_posted": "2025-01-16T05:00:00Z",
                                                               "keywords": [
                                                                   "fintech",
                                                                   "metamask",
                                                                   "ledger",
                                                                   "web3"
                                                               ],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "Xxqdk0n",
                                                               "role": "Etherlink Product Manager",
                                                               "company_name": "Trilitech",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": "London, United Kingdom",
                                                               "remote": true,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/4c5a637c160b047c1913afe895dbf51a10d80c94.jpg",
                                                               "url": "https://findwork.dev/Xxqdk0n/etherlink-product-manager-at-trilitech",
                                                               "text": "<h2>Our Team</h2><p>At Trilitech, our mission is to power the Web3 revolution by facilitating the development of cutting-edge solutions on the Tezos blockchain. We specialise in Core Development, Application Development, Tooling & Infrastructure, Developer Experience, and Incubation & Acceleration across three key areas: Culture, Decentralised Finance, and Gaming. We’re committed to pushing the boundaries of what’s possible and continue to set new standards in this ever-evolving space.</p><h2>Our Technology</h2><p>Tezos is an open-source platform known for its flexibility, security, and self-amendment capabilities. It’s built to empower developers to create smart contracts and decentralised applications with ease. Today, the Tezos ecosystem is made up of thousands of passionate community members actively involved in various projects and initiatives including the development of decentralised applications, smart contracts, and educational content. We’re proud to partner with the likes of Manchester United, Ubisoft, and Societe Generale (to name a few). Some of the exciting projects built on the Tezos blockchain are (fx)hash, <a>Kord.fi</a> and Kukai.</p><p>We encourage you to explore the Tezos <a>Discord</a> to learn more about the project.</p><h2>The Role</h2><p>The Product team at Trilitech play a pivotal role in delivering cutting-edge products that redefine the possibilities of blockchain technology and UX in particular. As a Product Manager responsible for Etherlink, you’ll take charge of driving the technical roadmap and product market fit.If you have a deep understanding of blockchain technologies, enjoy leading the development and execution of products, and possess entrepreneurial spirit, then you are the kind of person we are looking for. You will be working with an equally talented and innovative team with the goal of translating visions into reality.</p><h2>What you’ll do</h2><ul><li>Developing and communicating clear product strategies aligned with the company vision and goals</li><li>Leading the end-to-end product development lifecycle, identifying and mitigating potential risks and challenges</li><li>Collaborating with cross-functional teams for successful product launches</li><li>Effectively communicating product requirements, updates, milestones, and challenges to relevant stakeholders</li><li>Conducting market research to identify customer needs, pain points, and opportunities</li><li>Utilising data and user feedback to enhance the user experience and inform product decisions</li><li>Developing and maintaining a comprehensive product roadmap, prioritising features based on business impact and customer value</li><li>Monitoring industry regulations and compliance standards pertinent to blockchain products</li></ul><h2>What you’ll need</h2><ul><li>Previous experience as a Product Manager in the blockchain industry</li><li>Strong technical background and a solid understanding of blockchain technology and its applications</li><li>General passion for the crypto space and avid follower of market trends and developments</li><li>Ability to thrive in a fast–paced and dynamic environment</li></ul><h2>What you can expect from us</h2><ul><li>Generous LTIP tez token scheme  </li><li>Flexible hours and a hybrid working environment; work from home and our dog-friendly office in Soho with access to an onsite gym and media room</li><li>Lunch delivered daily in the office (Dishoom, Honi Poke, Salad Kitchen - you name it, we’ve tried it!)</li><li>Expense up to £2700 per annum for subsidised commuter costs</li><li>20 day working abroad policy</li><li>25 days paid holiday and an additional day to celebrate your birthday</li><li>Enhanced parental & adoption leave to support you in your journey through parenthood  </li><li>We’ll double match your pension contribution (allowing you to contribute up to 5% of your gross salary, with us contributing up to 10%)</li><li>Private medical insurance with Bupa from day one, inclusive of mental health support</li><li>Learning and development initiatives to empower you in your career</li><li>Comprehensive life assurance policy of 5x your base salary to provide you and your loved ones with peace of mind</li></ul><h2>Why you’ll love it</h2><p>Our cutting-edge projects offer you a chance to lead the way in shaping the future. We are dedicated to keeping your enthusiasm alive by fostering a fulfilling work environment that encourages open conversations and creativity. Collaboration and mutual support is key!</p><p>Our commitment to work-life balance ensures you have the time and energy to excel in your role while still enjoying life beyond the office. We offer competitive compensation, an extensive benefits package, and ongoing development opportunities, empowering your personal and professional growth. We’ll chat more about this throughout the interview process.</p><p>We believe in hiring great people and granting them the flexibility to work in a way that suits them best. While we establish OKRs, you’ll have the autonomy to determine your approach. Given the incredibly fast rate the blockchain landscape is evolving, embracing a growth mindset and a commitment to continuous learning are integral to our culture. It’s okay not to have all the answers and to engage in research. We’re all human and we provide formal perks to support your ongoing education.</p><h2>Our Principles</h2><p><strong>Desire to Win</strong></p><p>In our highly competitive industry, success is all about being at the top of our game. We strive for excellence and aim to be the best.</p><p><strong>Sense of Urgency</strong></p><p>Adaptability and quick action are essential in maintaining a competitive edge. We thrive on staying ahead of the curve.</p><p><strong>Ownership Mindset</strong></p><p>We take pride in our work and lead by example, seizing opportunities, and taking responsibility for achieving positive outcomes.</p><p><strong>Pragmatism</strong></p><p>Our focus is on making a tangible impact and achieving concrete results. We prioritise actions that make a real difference.</p><p><strong>Communication</strong></p><p>We believe in transparency and proactively sharing information as someone’s insight could be invaluable to another’s success. We foster a culture of collaboration and steer clear of creating information barriers.</p><p><strong>Resourceful Approach</strong></p><p>In a competitive market where resources are scarce—including time and budget—we emphasise resourcefulness. Our goal is to continually optimise the allocation of our most valuable assets.</p><hr><p><em>Experience is great, but passion is key. If you don’t meet all of the criteria but believe you have the potential, please still apply. Our diverse talent is our greatest asset and fundamental to our continued success.</em></p>",
                                                               "date_posted": "2025-01-16T05:00:00Z",
                                                               "keywords": [
                                                                   "ux",
                                                                   "blockchain",
                                                                   "web3"
                                                               ],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "XWxWvkn",
                                                               "role": "Developer Relations Engineer",
                                                               "company_name": "Astria",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": null,
                                                               "remote": true,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/9ef9096f0c5edaa079d074238474577a5ff61137.jpg",
                                                               "url": "https://findwork.dev/XWxWvkn/developer-relations-engineer-at-astria",
                                                               "text": "Astria is looking to hire a Developer Relations Engineer to join their team. This is a full-time position that is 100% remote with no geographical restrictions. Work remotely from anywhere.",
                                                               "date_posted": "2025-01-16T05:00:00Z",
                                                               "keywords": [],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "n98zGzX",
                                                               "role": "IT Systems Engineer",
                                                               "company_name": "Paradigm",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": "San Francisco, United States",
                                                               "remote": false,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/0c78ad2fa4ab8880918ceb2d35e401c96c6976b9.jpg",
                                                               "url": "https://findwork.dev/n98zGzX/it-systems-engineer-at-paradigm",
                                                               "text": "Paradigm is looking to hire an IT Systems Engineer to join their team. This is a full-time position that is based in San Francisco CA.",
                                                               "date_posted": "2025-01-16T05:00:00Z",
                                                               "keywords": [],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "MdVRDpn",
                                                               "role": "Quantitative Research Intern (DeFi)",
                                                               "company_name": "Kronos Research",
                                                               "company_num_employees": null,
                                                               "employment_type": null,
                                                               "location": null,
                                                               "remote": true,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/792c4b8d43d3d739db936164d86f59acdabbaeb4.jpg",
                                                               "url": "https://findwork.dev/MdVRDpn/quantitative-research-intern-defi-at-kronos-research",
                                                               "text": "Kronos Research is looking to hire a Quantitative Research Intern (DeFi) to join their team. This is an internship position that can be done remotely anywhere in Asia.",
                                                               "date_posted": "2025-01-16T05:00:00Z",
                                                               "keywords": [],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "nKJVv5X",
                                                               "role": "Regional Director, APAC",
                                                               "company_name": "Stellar",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": null,
                                                               "remote": true,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/a096b37ec455e62ab171ce0936219573bae5bbc1.jpg",
                                                               "url": "https://findwork.dev/nKJVv5X/regional-director-apac-at-stellar",
                                                               "text": "Stellar is looking to hire a Regional Director, APAC to join their team. This is a full-time position that can be done remotely anywhere in APAC.",
                                                               "date_posted": "2025-01-16T05:00:00Z",
                                                               "keywords": [],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "MrJakKM",
                                                               "role": "Senior Product Manager (APAC)",
                                                               "company_name": "Zero Hash",
                                                               "company_num_employees": "51-100",
                                                               "employment_type": "full time",
                                                               "location": "Melbourne, Australia",
                                                               "remote": false,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/8ac8badc4b384973dc5e14e47206f8f7a2c40763.jpg",
                                                               "url": "https://findwork.dev/MrJakKM/senior-product-manager-apac-at-zero-hash",
                                                               "text": "Zero Hash is looking to hire a Senior Product Manager (APAC) to join their team. This is a full-time position that is based in Melbourne.",
                                                               "date_posted": "2025-01-16T05:00:00Z",
                                                               "keywords": [],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "nYPYv5X",
                                                               "role": "Strategic Finance Associate",
                                                               "company_name": "FalconX",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": "San Francisco, United States",
                                                               "remote": false,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/05d199220f063c1cdcffd1f51d069cf66c2fa369.jpg",
                                                               "url": "https://findwork.dev/nYPYv5X/strategic-finance-associate-at-falconx",
                                                               "text": "FalconX is looking to hire a Strategic Finance Associate to join their team. This is a full-time position that is based in San Francisco CA.",
                                                               "date_posted": "2025-01-16T05:00:00Z",
                                                               "keywords": [],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "n2Yd9NX",
                                                               "role": "Business Development Manager, Sales (MENA)",
                                                               "company_name": "P2P.org",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": null,
                                                               "remote": true,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/a7ea6eea5227f4962da31b1de49823d60ab7e780.jpg",
                                                               "url": "https://findwork.dev/n2Yd9NX/business-development-manager-sales-mena-at-p2porg",
                                                               "text": "<h2>About us</h2><p>We at <a>P2P.org</a> are the largest staking and restaking operator, with a TVL of over $8B 🔝.</p><p>We are constantly focused on launching new yield products: for example, in Polkadot (adding <strong>+15-20% to APR)</strong> and Ethereum, where we offer significantly higher <strong>APR (+40%)</strong> than any other staking operator 💪.</p><p>We also keep an eye on exciting projects and launch new networks such as TON, Avail, Monad, and Babylon. We strongly believe in Bitcoin and the DeFi ecosystem around it, and we have a dedicated team focused on finding the best yield solutions based on Bitcoin.</p><p>We work with partners like BitGo, Crypto.com, Ledger, and ByBit.</p><p>We are actively expanding our product line, exploring RWA, data, yield, and service products for exchanges, custodians, and banks.</p><p><a>P2P.org</a> unites talented individuals globally ❤️.</p><p>Despite our distributed team, we share a passion for decentralized finance - a fairer system for all. We code, learn, create, and connect to shape finance’s future 💰.</p><p><a>P2P.org</a> boasts a strong reputation and network. We prioritize customer satisfaction and, as tech enthusiasts, develop innovative solutions that bolster our brand.</p><h2>Who we are looking for 🔍</h2><p>Our <strong>Business Development Manager</strong> will contribute to building and managing the full sales cycle of business development. This includes analysing and identifying opportunities, as well as rewarding partners.</p><p>The business development approach at <a>P2P.org</a> is built on the proactive efforts of every BDM in collaboration with the product, legal, and research teams. You should be persistent in your drive to close a deal, curious, and inventive in finding ways to achieve results.</p><h2>You will 🚀</h2><ul><li>Achieve our outperform staking as a service targets through growing international clients and partners</li><li>Be responsible for the full sales cycle from prospecting to signing, including all commercial negotiations</li><li>Search and establish contact with key persons on the side of potential partners and clients</li><li>Organize and conduct negotiations for the purpose of selling staking services</li><li>Identify customer needs and objections, search for growth points</li><li>Prepare commercial offers</li><li>Participate in conferences and public events</li><li>Report to the client and internally in CRM</li></ul><h2>You have 🤓</h2><ul><li>Crypto-native: Pre-existing knowledge about the crypto market in general, blockchains technologies and Web3 concepts</li><li>Experience in a quota-driven, full-cycle Business development/Sales manager, Account Executive role</li><li>Proven background in a rapidly growing tech company environment</li><li>Experience with outbound prospecting and conducting product demonstrations</li><li>A consultative approach to sales, supported by analytical and quantitative skills, with a mandatory proficiency in closing deals</li><li>Excellent verbal and written communication skills in English</li><li>Extraordinary sense of ownership</li></ul><h2>What we offer ➡️</h2><p>At <a>P2P.org</a> we have a team of experts with their own unique approach and ownership culture. Together we gain experience and make dreams come true! 🌟</p><ul><li>Competitive salary level in $ (we can also pay in Crypto)</li><li>Well-being program</li><li>Mental Health care program</li><li>Compensation for education, including Foreign Language & professional growth courses</li><li>Equipment & co-working reimbursement program</li><li>Overseas conferences, community immersion</li><li>Positive and friendly communication culture</li></ul><p><a>P2P.org</a> is an equal opportunity employer. All applicants will be considered for employment without regard to race, color, national origin, religion, sex, sexual orientation, gender identity, veteran status, or disability.</p>",
                                                               "date_posted": "2025-01-16T05:00:00Z",
                                                               "keywords": [
                                                                   "ledger",
                                                                   "bitcoin",
                                                                   "web3",
                                                                   "ethereum"
                                                               ],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "M1pKdLQ",
                                                               "role": "iOS & Android Engineers & Engineering Managers",
                                                               "company_name": "Notability",
                                                               "company_num_employees": null,
                                                               "employment_type": null,
                                                               "location": "Hybrid (onsite in San Francisco 2 days a week)",
                                                               "remote": false,
                                                               "logo": null,
                                                               "url": "https://findwork.dev/M1pKdLQ/ios-android-engineers-engineering-managers-at-notability",
                                                               "text": "Notability&#x27;s mission is to bring the expressivity of paper to digital devices, so people can learn, study, and collaborate better. Millions of students use Notability every day, primarily on iPads, and we have big plans for expansion. We&#x27;re solving lots of challenging technical problems in graphics, collaboration, and AI. We&#x27;re bootstrapped and profitable. Our office is in downtown San Francisco.",
                                                               "date_posted": "2025-01-16T01:41:08Z",
                                                               "keywords": [],
                                                               "source": "Hn"
                                                           },
                                                           {
                                                               "id": "XO9avxQ",
                                                               "role": "Senior Engineer (3+ YoE)",
                                                               "company_name": "Comulate",
                                                               "company_num_employees": null,
                                                               "employment_type": null,
                                                               "location": "ONSITE in San Francisco, CA",
                                                               "remote": false,
                                                               "logo": null,
                                                               "url": "https://findwork.dev/XO9avxQ/senior-engineer-3-yoe-at-comulate",
                                                               "text": "We&#x27;re building automation software for the $7T insurance industry, accelerated by AI. Seed stage in terms of headcount (&lt; 20 people) but Series B in terms of business traction (+ cash-flow positive). We&#x27;ve intentionally stayed under the radar.<br>- Product has caused customers to literally cry tears of joy<br>- Experienced eng team from Airbnb &#x2F; Asana &#x2F; Brex &#x2F; LiveRamp<br>- Stack: TS, Postgres, React, GraphQL, and Next.js<br>Apply here: <a href=\"https:&#x2F;&#x2F;comulate.com&#x2F;careers\" rel=\"nofollow\">https:&#x2F;&#x2F;comulate.com&#x2F;careers</a>",
                                                               "date_posted": "2025-01-15T18:37:53Z",
                                                               "keywords": [
                                                                   "react",
                                                                   "postgres",
                                                                   "graphql"
                                                               ],
                                                               "source": "Hn"
                                                           },
                                                           {
                                                               "id": "Q03rKYn",
                                                               "role": "Product Designer, Frontend, Back End, and ML roles",
                                                               "company_name": "Ideogram",
                                                               "company_num_employees": null,
                                                               "employment_type": null,
                                                               "location": "ONSITE(NYC or Toronto)",
                                                               "remote": false,
                                                               "logo": null,
                                                               "url": "https://findwork.dev/Q03rKYn/product-designer-frontend-back-end-and-ml-roles-at-ideogram",
                                                               "text": "Ideogram’s mission is to help people become more creative. Our thesis is that everyone has an innate desire to create. We are developing state-of-the-art AI tools that will make creative expression more accessible and efficient. We are pushing the limits of what’s possible with AI, with a focus on creativity and a high standard for trust and safety. Our headquarters is in downtown Toronto, and we have a small presence in NYC. Read Ideogram Canvas(<a href=\"https:&#x2F;&#x2F;about.ideogram.ai&#x2F;canvas\" rel=\"nofollow\">https:&#x2F;&#x2F;about.ideogram.ai&#x2F;canvas</a>) and Ideogram 2.0(<a href=\"https:&#x2F;&#x2F;about.ideogram.ai&#x2F;2.0\" rel=\"nofollow\">https:&#x2F;&#x2F;about.ideogram.ai&#x2F;2.0</a>), and try our product at ideogram.ai to get a glimpse of what we&#x27;re building.<br>For more details, take a look here: <a href=\"https:&#x2F;&#x2F;www.ideogram.ai&#x2F;careers?utm_source=hacker-news\" rel=\"nofollow\">https:&#x2F;&#x2F;www.ideogram.ai&#x2F;careers?utm_source=hacker-news</a>",
                                                               "date_posted": "2025-01-15T15:14:46Z",
                                                               "keywords": [],
                                                               "source": "Hn"
                                                           },
                                                           {
                                                               "id": "n5Z1LBQ",
                                                               "role": "Front end Course Designer & Back end Course Designer",
                                                               "company_name": "Onja",
                                                               "company_num_employees": null,
                                                               "employment_type": null,
                                                               "location": null,
                                                               "remote": false,
                                                               "logo": null,
                                                               "url": "https://findwork.dev/n5Z1LBQ/front-end-course-designer-back-end-course-designer-at-onja",
                                                               "text": "Onja trains underprivileged youth into world-class software developers. We are on the lookout for Course Designers who can help our students go from ‘what is coding’ to working in Global tech teams.<br>Help build a scalable course that will help train Madagascar’s brightest young people, while working alongside a team of talented, fun colleagues from all over Madagascar and the world. These roles would perfectly suit someone with experience in the tech world who&#x27;s looking to break into education and make a difference with their time.<br>Please apply through the following links:<br>Front end Course Designer: <a href=\"https:&#x2F;&#x2F;onja.org&#x2F;careers&#x2F;front-end-course-designer\" rel=\"nofollow\">https:&#x2F;&#x2F;onja.org&#x2F;careers&#x2F;front-end-course-designer</a> Back end Node.js Course Designer: <a href=\"https:&#x2F;&#x2F;onja.org&#x2F;careers&#x2F;back-end-node.js-course-designer\" rel=\"nofollow\">https:&#x2F;&#x2F;onja.org&#x2F;careers&#x2F;back-end-node.js-course-designer</a>",
                                                               "date_posted": "2025-01-15T10:50:29Z",
                                                               "keywords": [
                                                                   "node"
                                                               ],
                                                               "source": "Hn"
                                                           },
                                                           {
                                                               "id": "M3G9a4M",
                                                               "role": "Werkstudent/ Pflichtpraktikum (m/w/d) Verkauf von digitalen Produkten // DVL &#8211; digital.verkaufen.lernen",
                                                               "company_name": "DVL - digital.verkaufen.lernen",
                                                               "company_num_employees": null,
                                                               "employment_type": null,
                                                               "location": "Berlin, Germany",
                                                               "remote": true,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/921de5fbf060d719a1b8c696591f7501c9811341.jpg",
                                                               "url": "https://findwork.dev/M3G9a4M/werkstudent-pflichtpraktikum-mwd-verkauf-von-digitalen-produkten-dvl-8211-digitalverkaufenlernen-at-dvl-digitalverkaufenlernen",
                                                               "text": "Du bist aktuell Student eines Bachelor- oder Masterstudiengangs und möchtest lernen, wie man digitale Produkte verkauft und Verkaufsprozesse automatisiert? Dieses überdurchschnittlich bezahlte Pflichtpraktikum gibt dir die Möglichkeit, direkt von erfahrenen Profis zu lernen. Mit hoher Eigenverantwortung, eigenen Projekten und tiefen Einblicken in unser Startup kannst du den Grundstein für deine Karriere im Bereich Sales und die Automatisierung digitaler Prozesse legen.\n\n<strong>Über uns:</strong>\n\nWir sind ein junges Team aus Berlin und Köln, mit Hauptsitz im Herzen von Berlin Friedrichshain.\n\nWir sind erfahrene Unternehmer und Online Marketing Spezialisten, haben schon mehrere Firmen gegründet und erfolgreich gemacht.\n\nUnsere GmbH LWB Marketing Fachverlagsgesellschaft betreibt das Portal “Digital Verkaufen Lernen” - eine Weiterbildungsplattform für Versicherungsvermittler.\n\nVersicherungsvermittler?! Klingt langweilig? Im Gegenteil! Wir helfen einer unterdigitalisierten Branche dabei, digitaler zu werden. Stell dir uns als das Udemy der Versicherungsbranche vor. Dabei nutzen wir die komplette Klaviatur moderner Technologien: KI, Automatisierung, Sales Funnels und mehr.\n\nDauer: 6 Monate mit Option der Übernahme in eine Werkstudentenstelle\n\n<strong>Aufgaben</strong>\n<ul>\n \t<li>Sales von High-Price Produkten: Du unterstützt unser Verkaufsteam aktiv beim Vertrieb unserer hochpreisigen Weiterbildungsangebote. Das umfasst die Kundenakquise, das Führen von Verkaufsgesprächen und die Betreuung unserer Kunden während des gesamten Verkaufsprozesses. Arbeite eng mit den Gründern zusammen und lerne direkt von erfahrenen Profis.</li>\n \t<li>Automatisierung von Vertriebsprozessen: Lerne, wie wir als KI-getriebenes Unternehmen unsere Vertriebsprozesse automatisieren. Du erhältst Einblicke in moderne Automatisierungstechnologien und hilfst dabei, effiziente Sales-Funnels und CRM-Systeme zu optimieren.</li>\n \t<li>Eigenverantwortliche Projekte: Übernimm eigene Projekte mit hoher Verantwortung. Bringe deine Ideen ein und setze sie um, um unsere Verkaufsstrategien weiterzuentwickeln und zu verbessern.</li>\n</ul>\nDiese Aufgaben bieten dir die Chance, umfassendes Wissen und praktische Erfahrungen in den Bereichen Sales, Vertrieb von digitalen Produkten und KI zu sammeln.\n\n<strong>Qualifikation</strong>\n\n<strong>Werde Teil unseres Teams – wir freuen uns auf dich, wenn du...</strong>\n<ul>\n \t<li>... motiviert bist und Lust hast, Neues zu lernen! Wir haben richtig Bock darauf, mit wissbegierigen, jungen Menschen zusammenzuarbeiten und unser Wissen mit dir zu teilen.</li>\n \t<li>... ein starkes Interesse am Verkauf digitaler Produkte und an der Automatisierung von Vertriebsprozessen mitbringst.</li>\n \t<li>... eigenverantwortlich, gewissenhaft und ergebnisorientiert im Home Office arbeiten kannst – und bereit bist, eigene Projekte zu übernehmen.</li>\n \t<li>... für 6 Monate im Rahmen eines Pflichtpraktikums verfügbar bist.</li>\n</ul>\n<strong>Was du mitbringen solltest:</strong>\n<ul>\n \t<li>Aktuelles Studium eines Bachelor- oder Masterstudiengangs an einer Universität oder Hochschule.</li>\n \t<li>Muttersprache Deutsch und exzellente Kommunikationsfähigkeiten.</li>\n \t<li>Gute Selbstorganisation, da wir 100% remote arbeiten.</li>\n \t<li>Technische Affinität und Interesse an Automatisierung.</li>\n \t<li>Erste Erfahrungen oder starkes Interesse im Bereich Sales sind von Vorteil.</li>\n \t<li>Eigenverantwortliche, effektive und selbstständige Arbeitsweise mit der Fähigkeit, Prioritäten zu setzen.</li>\n</ul>\n<strong>Benefits</strong>\n<ul>\n \t<li>100 % Remote-Arbeit: Genieße die Freiheit, von überall aus zu arbeiten.</li>\n \t<li>Verantwortung & Ownership: Arbeite auf Augenhöhe und übernimm von Anfang an Verantwortung.</li>\n \t<li>Persönliches und berufliches Wachstum: Wir unterstützen deine Entwicklung mit intensivem Onboarding, regelmäßigem Feedback und Trainings.</li>\n \t<li>Familiäres Team: Werde Teil eines jungen, dynamischen Teams mit flachen Hierarchien und einer entspannten Arbeitsatmosphäre.</li>\n \t<li>Bezahlung: 500 - 2.000 € pro Monat je nach Vorerfahrung und Kenntnissen.</li>\n</ul>\nBist du bereit, Teil unserer Mission zu werden? Dann bewirb dich jetzt für unser Praktikum bei DVL!\n\nWir freuen uns auf deine Bewerbung!",
                                                               "date_posted": "2025-01-15T05:00:00Z",
                                                               "keywords": [],
                                                               "source": "Berlinstartupjobs"
                                                           },
                                                           {
                                                               "id": "nZl64NM",
                                                               "role": "Showroom &amp; Event Manager:in &#8211; Customer Experience &amp; Business Development (m/w/d) // The SISS BLISS GmbH",
                                                               "company_name": "The SISS BLISS",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": "Berlin, Germany",
                                                               "remote": false,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/0e42db65940a392689268434052cf7ca95d9cf72.jpg",
                                                               "url": "https://findwork.dev/nZl64NM/showroom-amp-event-managerin-8211-customer-experience-amp-business-development-mwd-the-siss-bliss-gmbh-at-the-siss-bliss",
                                                               "text": "Bei The SISS BLISS findest Du anspruchsvolle Aufgaben mit abwechslungsreichen Themen und spannenden Herausforderungen. Viele Gestaltungsmöglichkeiten, unternehmerische Verantwortung und individuelle Entwicklung zeichnen unsere motivierende und einmalige Arbeitsatmosphäre aus. Zur weiteren Verstärkung unseres Teams suchen wir ab sofort Dich im Bereich Showroom und Event Management vor Ort in Berlin.\n\n<strong>Aufgaben</strong>\n<ul>\n \t<li>Du betreust und berätst Kundinnen und Kunden während Showroom-Terminen ansprechend und professionell</li>\n \t<li>Du organisierst monatlichen Pop-Up-Events an wechselnden Standorten und führst diese mit durch</li>\n \t<li>Du unterstützt bei Events mit persönlicher Beratung innerhalb unseres Top-Kundinnenprogramms</li>\n \t<li>Du baust unseren B2B-Vertrieb weiter auf und suchst aktiv nach neuen potenziellen Umsätzen</li>\n \t<li>Du sorgst für eine Auslastung unseres Berliner Showrooms durch externe Veranstaltungen</li>\n \t<li>Du unterstützt die Teams Marketing und Operations in übergreifenden Projekten</li>\n</ul>\n<strong>Qualifikation</strong>\n<ul>\n \t<li>mehrjährigen Berufserfahrung im Vertrieb, Kundenberatung oder Bereich Business Development</li>\n \t<li>aufgeschlossene, kommunikative Persönlichkeit mit sicherem Auftreten</li>\n \t<li>bereit die Extrameile zu gehen, um Kundinnen und Kunden das perfekte Service Erlebnis zu bieten</li>\n \t<li>strukturiertes und eigenverantwortliches Arbeiten, Hands-on Mentalität</li>\n \t<li>Kreativität, Offenheit, Teamkompetenz und “Excellence in Execution” Mentalität</li>\n</ul>\n<strong>Benefits</strong>\n<ul>\n \t<li>Eine offene und kreative Arbeitsatmosphäre mit flachen Hierarchien</li>\n \t<li>Eine steile Lernkurve mit viel Ownership und die Möglichkeit ständig zu wachsen</li>\n \t<li>Individuelle Weiterbildungsmaßnahmen</li>\n \t<li>Ein kleines, lebhaftes Team mit angenehmer Arbeitsatmosphäre</li>\n \t<li>Ein großzügiges Büro in Berlin Prenzlauer Berg mit Top Ausstattung mit freier Systemwahl</li>\n</ul>\n<strong>Über uns</strong>\n\nSeit unserer Gründung 2020 entwickeln wir Unternehmen rund um das schönste Edelmetall der Welt: Gold. The SISS BLISS steht für hochwertigen, personalisierbaren Echtgoldschmuck, der in Deutschland mit Diamanten und Edelsteinen aus nachvollziehbaren Quellen gefertigt wird. BLISS BANG CAPITAL kauft vorhandenes Altgold an und recycelt es mit dem Ziel, daraus neuen Schmuck zu fertigen. Wir zeichnen uns durch echte Nachhaltigkeit im Luxussegment, tiefes Markenverständnis gepaart mit schnellem Wachstum und visionärem Unternehmertum aus.\n\nDas Daily Business hat einen starken Schwerpunkt auf Social Media mit einer treuen Community, der #SISSTERHOOD. Unsere Gründerin Franzi von Hardenberg ((at)sissihardenberg) ist seit über 10 Jahren als Unternehmerin aktiv. Sie tritt als gefragte Speakerin und Mentorin auf und wurde 2022 als Unternehmerin des Jahres ausgezeichnet.\n\nIn unserer Zusammenarbeit achten wir auf Chancengleichheit, Vielfalt und Integration am Arbeitsplatz. Wir setzen uns für Diversity & Inclusion ein und gegen Diskriminierung und Belästigung jeglicher Art.\n\nWenn du Teil dieser aufregenden Geschichte sein möchtest, dann freuen wir uns auf Deine aussagekräftige Bewerbung, inklusive Anschreiben und Gehaltsvorstellung.",
                                                               "date_posted": "2025-01-15T05:00:00Z",
                                                               "keywords": [],
                                                               "source": "Berlinstartupjobs"
                                                           },
                                                           {
                                                               "id": "QP1kv4M",
                                                               "role": "AI Project / Product Manager",
                                                               "company_name": "Animoca Brands",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": "Hong Kong, China",
                                                               "remote": false,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/9611f25a5f59757c943907f651e80af68d94ccea.jpg",
                                                               "url": "https://findwork.dev/QP1kv4M/ai-project-product-manager-at-animoca-brands",
                                                               "text": "Animoca Brands is looking to hire an AI Project / Product Manager to join their team. This is a full-time position that is based in Hong Kong.",
                                                               "date_posted": "2025-01-15T05:00:00Z",
                                                               "keywords": [
                                                                   "kong"
                                                               ],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "MNNEvLM",
                                                               "role": "Product Manager Intern (NFT & GeckoTerminal)",
                                                               "company_name": "CoinGecko",
                                                               "company_num_employees": "1-10",
                                                               "employment_type": null,
                                                               "location": null,
                                                               "remote": true,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/ba648310566fdd4f1d3d8c7ad231885104d7cf52.jpg",
                                                               "url": "https://findwork.dev/MNNEvLM/product-manager-intern-nft-geckoterminal-at-coingecko",
                                                               "text": "CoinGecko is looking to hire a Product Manager Intern (NFT & GeckoTerminal) to join their team. This is an internship position that can be done remotely anywhere in Malaysia or Singapore.",
                                                               "date_posted": "2025-01-15T05:00:00Z",
                                                               "keywords": [
                                                                   "nft"
                                                               ],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "XlL0DEX",
                                                               "role": "Senior Associate, Global Benefits & Compensation",
                                                               "company_name": "Gemini",
                                                               "company_num_employees": "51-100",
                                                               "employment_type": "full time",
                                                               "location": null,
                                                               "remote": true,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/f7f4701d089a85298f4ad0eae225564f6adca442.jpg",
                                                               "url": "https://findwork.dev/XlL0DEX/senior-associate-global-benefits-compensation-at-gemini",
                                                               "text": "Gemini is looking to hire a Senior Associate, Global Benefits & Compensation to join their team. This is a full-time position that can be done remotely anywhere in the United States.",
                                                               "date_posted": "2025-01-15T05:00:00Z",
                                                               "keywords": [],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "XkRODPM",
                                                               "role": "Backend Reliability Engineer",
                                                               "company_name": "Interop Labs",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": null,
                                                               "remote": true,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/e009bbb390068b7914d7c946564c87b44376cc00.jpg",
                                                               "url": "https://findwork.dev/XkRODPM/backend-reliability-engineer-at-interop-labs",
                                                               "text": "<p>We are seeking a Backend Engineer with expertise in distributed systems to expand fault-tolerance and reliability characteristics of our blockchain automation, relaying, and indexing services. In this role, you will be responsible for proactively identifying reliability and functional problems in day-to-day operation of our stack, design and implement long-term solutions, as well as short-term mitigations. You will be looking after  backend applications that facilitate cross-chain protocol workflows, such as asset transfer and generalized message passing, while ensuring that our systems are fault-tolerant and highly available.</p><h2>Your responsibilities</h2><ul><li><strong>Reliability:</strong> Broadening and deepening observability as necessary to proactively identify functional and reliability issues, coming up with long-term solutions while also mitigating short-term  impact.</li><li><strong>Diagnostics:</strong> Doing detective work investigating cross-chain and single-chain workflows, understanding complex behaviours and inventing optimal tweaks or improvements.</li><li><strong>Network Liveness:</strong> Our team builds and operates the execution layer of the Axelar Network - we are responsible for ensuring every transaction on the network is delivered quickly and reliably.</li><li><strong>System Implementation:</strong> Build highly reliable and scalable backend components for blockchain indexing and cross-chain protocols. Develop microservices that operate across diverse execution environments, including Kubernetes and AWS Lambdas.</li><li><strong>Distributed Systems:</strong> Leverage your expertise in distributed systems to ensure fault tolerance, graceful failure handling, and transparent recovery across our services.</li></ul><h2>Your profile</h2><ul><li>Strong experience working with distributed systems at scale.</li><li>Deep knowledge of fault tolerance in distributed systems and building software that fails gracefully and recovers transparently.</li><li>Experience working with distributed messaging frameworks (RabbitMQ, AMPQ, or similar) and message driven applications.</li><li>Experience building and orchestrating microservices running in different execution environments like Kubernetes and AWS lambdas.</li><li>We use GoLang, Terraform, AWS in our day-to-day work. You may not be an expert with all of these technologies, but we are looking for somebody with strong skills with some of them or with transferable experience.</li></ul><h2>Why us?</h2><ul><li>Autonomous, distributed environment with the opportunity to work collaboratively in a diverse team across the world.</li><li>The scope to contribute to high impact work and really make a difference in a decentralized protocol.</li><li>The chance to challenge yourself whilst learning heaps of stuff in the process.</li><li>Unlimited time off throughout the year to rest and recharge.</li><li>Competitive compensation with stock options, experiencing growth from the initial phase.</li></ul><h2>About us</h2><p><strong>Interop Labs builds interoperability technology.</strong></p><p>Interoperability between blockchains is crucial technology infrastructure for the growth of Web3 and the advancement of internet technology as a whole. Interop Labs is the initial developer of <strong>Axelar Network</strong> - the programmable Web3 interoperability platform, scaling the next generation of internet applications to billions of users. Axelar network’s key attributes are programmability, security and scalability.</p>",
                                                               "date_posted": "2025-01-15T05:00:00Z",
                                                               "keywords": [
                                                                   "golang",
                                                                   "terraform",
                                                                   "aws",
                                                                   "rabbitmq",
                                                                   "kubernetes",
                                                                   "blockchain",
                                                                   "web3"
                                                               ],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "nalZDAX",
                                                               "role": "Blockchain Operations Engineer",
                                                               "company_name": "Interop Labs",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": null,
                                                               "remote": true,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/e009bbb390068b7914d7c946564c87b44376cc00.jpg",
                                                               "url": "https://findwork.dev/nalZDAX/blockchain-operations-engineer-at-interop-labs",
                                                               "text": "<p>As a Blockchain Operations Engineer, you will be responsible for the upkeep and maintenance of the Axelar Network. You will take ownership of the network and its functions and ensure smooth operations. You will work with BD and Product teams to prioritize various initiatives around the network and contribute to tooling for the network.</p><h2>Your responsibilities</h2><ul><li>Manage releases and rollout upgrades to the network in collaboration with our validators.</li><li>Develop and iterate on tooling around network deployment, monitoring, security and other network ops related functions.</li><li>Drive governance of the network including the delegation program.</li><li>Strengthen our security posture and refining protocols for offline signing.</li><li>Improve the infrastructure and deployment to improve team’s agility and velocity.</li><li>Improve and iterate on internal tooling that our protocol engineers use to develop new features.</li></ul><h2>Your Profile</h2><ul><li>Good understanding of cryptography.</li><li>Scripting and tooling experience preferably in Javascript/Golang.</li><li>Experience managing a blockchain network and coordinating upgrades.</li><li>Familiarity with containers and Kubernetes in a cloud environment.</li><li>Experience with monitoring and alerting tools (Grafana, Prometheus, etc.).</li><li>Familiarity with modern CI/CD tools.</li><li>Security first coding and deployment mindset.</li><li>Understanding of blockchains / DeFi as a user.</li><li>Experience with the cosmos sdk and cosmos based networks.</li><li>Familiarity with the IBC protocol.</li><li>Experience operating validators or nodes for various blockchains.</li><li>Strong sense of ownership, with the ability to lead and share knowledge to reach solutions as well as the keenness to learn.</li><li>You enjoy being hands on, being a self starter that thrives well in ambiguity.</li><li>A problem solver at heart that can envision successful outcomes.</li></ul><h2>Why us?</h2><ul><li>Autonomous, distributed environment with the opportunity to work collaboratively in a diverse team worldwide.</li><li>The scope to contribute to high-impact work and make a difference in a decentralized protocol.</li><li>The chance to challenge yourself while learning heaps of stuff in the process.</li><li>Unlimited time off throughout the year to rest and recharge.</li><li>Competitive compensation with stock options, experiencing growth from the initial phase.</li></ul><h2>About us</h2><p><strong>Interop Labs builds interoperability technology.</strong></p><p>Interoperability between blockchains is crucial technology infrastructure for the growth of Web3 and the advancement of internet technology as a whole. Interop Labs is the initial developer of <strong>Axelar Network</strong> - the programmable Web3 interoperability platform, scaling the next generation of internet applications to billions of users. Axelar network’s key attributes are programmability, security and scalability.</p>",
                                                               "date_posted": "2025-01-15T05:00:00Z",
                                                               "keywords": [
                                                                   "prometheus",
                                                                   "grafana",
                                                                   "golang",
                                                                   "javascript",
                                                                   "containers",
                                                                   "kubernetes",
                                                                   "blockchain",
                                                                   "web3"
                                                               ],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "XE5wv6X",
                                                               "role": "Business Development & Partnerships Manager",
                                                               "company_name": "Wintermute",
                                                               "company_num_employees": "1-10",
                                                               "employment_type": "full time",
                                                               "location": "New York, United States",
                                                               "remote": true,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/14706a542fcfcd2c99c785b9f5298d35c8018aab.jpg",
                                                               "url": "https://findwork.dev/XE5wv6X/business-development-partnerships-manager-at-wintermute",
                                                               "text": "<h2>About Wintermute</h2><p>Wintermute is one of the largest crypto-native algorithmic trading companies in digital assets. We provide liquidity algorithmically across most cryptocurrency exchanges and trading platforms, a broad range of OTC trading solutions as well as support high profile blockchain projects and traditional financial institutions moving into crypto. Wintermute also has a Wintermute Ventures arm that invests in early stage DeFi projects.</p><p>Wintermute was founded in 2017 by industry leaders and has successfully navigated crypto industry cycles. Culturally, we combine the best of the two worlds: the technology standards of high-frequency trading firms in traditional markets and the innovative and entrepreneurial culture of technology startups. To Wintermute digital assets is not just another asset class, we believe in the innovative potential of blockchain, the fundamental innovations, we have a long-term view on the digital asset market and are taking a leadership position in building an innovative and compliant market. Read more <a>here</a>.</p><h2>Business Development at Wintermute</h2><p>We are looking for a Business Development & Partnerships Manager in New York to support and continue our ambitious expansion in the region. We are looking for someone who knows the US financial services markets both from a traditional finance and digital assets perspective. You will be responsible for building new as well as growing Wintermute’s existing businesses globally.</p><p>You will own opportunities in the region from end to end and develop your own strategic growth plan, while also getting advice and guidance from the team. We have the best liquidity products in the market, we work with many of the most prominent blockchain projects, we have many strategic growth opportunities in the pipeline, and a long line of counterparties wanting to develop relationships with us. We have no legacy processes, no corporate bureaucracy, no multiple levels of approvals, yet the highest standards of professionalism.</p><h2>Responsibilities:</h2><ul><li>Grow institutional OTC business globally - this includes developing and executing your own growth plan in the region where you will be responsible for.</li><li>Work closely with other teams to bring new products (e.g. new derivatives products) to the market, this includes collecting customer feedback, testing products, launch plans, etc</li><li>Grow the crypto project Liquidity provision business - deepen and build relationships with high profile projects in the region, as well as local VCs and other important ecosystem players</li><li>Growth partner relationships with important partners such as exchanges, custodians, lenders and other infrastructure providers</li><li>Execute a structured business development process and work with the teams to further improve operational efficiency (e.g. CRM, effectiveness of campaigns, etc)</li><li>Keep track of key launches and news in the crypto eco-system and proactively identify cooperation and business development opportunities</li></ul><h2>Hard Skills Requirements:</h2><ul><li>Experience in both traditional financial and digital assets services from high performing teams.</li><li>eCommerce experience would also be advantageous.</li><li>Experience with spot and derivatives OTC products, especially options is required.</li><li>Experience in business development, partnerships or any client-facing role (B2B sales, investment banking, etc)</li><li>Experience delivering business results - be ready to talk about numbers/quota achievement, etc</li><li>Excellent communication skills, both verbal and written; the role is more around providing education to counterparties about our services rather than a standard sales pitch. Therefore it’s important to come across convincing, concise, precise and a good listener whilst also being clear on the next steps as well as ensuring timely follow ups.</li><li>Trading knowledge or crypto knowledge - is a strong advantage; willingness, aptitude and curiosity to understand the fundamentals of blockchain technologies, algorithmic trading and Liquidity provision is crucial</li><li>BSc/MSc in Business/Economics/Finance or any related degree</li></ul><h2>Join our dynamic team and benefit from:</h2><ul><li>Working at one of the most innovative trading firms globally.</li><li>Engaging projects offering accelerated responsibilities and ownership compared to traditional finance environments.</li><li>Great company culture: informal, non-hierarchical, ambitious, highly professional with a startup vibe, collaborative and entrepreneurial.</li></ul><p><strong>Note:</strong> Please ensure you have eligibility to work in the US without a visa.</p><h2>Find out more</h2><ul><li><a>Website</a></li><li><a>Twitter</a></li><li><a>Linkedin</a></li><li><a>Youtube</a></li></ul>",
                                                               "date_posted": "2025-01-15T05:00:00Z",
                                                               "keywords": [
                                                                   "blockchain",
                                                                   "cryptocurrency"
                                                               ],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "QV59v6n",
                                                               "role": "BD & Sales Executive",
                                                               "company_name": "UNCX Network",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": null,
                                                               "remote": true,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/6bd18310e41cc6fc98d47eeb86c6531115426005.jpg",
                                                               "url": "https://findwork.dev/QV59v6n/bd-sales-executive-at-uncx-network",
                                                               "text": "<p>We are seeking a highly motivated and experienced Sales Representative to join our growing team at UNCX.</p><p>The successful candidate will be responsible for generating leads, closing sales, and maintaining strong relationships with our clients. This role requires a proactive individual with excellent communication skills and a passion for sales.</p><h2>Responsibilities:</h2><ul><li>Identify and target potential customers through various channels.</li><li>Develop and maintain relationships with existing clients.</li><li>Present and demonstrate our products/services to potential clients.</li><li>Negotiate contracts and close deals to achieve sales targets.</li><li>Provide exceptional customer service and support to clients.</li><li>Collaborate with the sales team to develop effective strategies.</li><li>Track and report on sales performance metrics.</li><li>Stay updated on industry trends and competition activities.</li></ul><h2>Requirements:</h2><ul><li>Proven experience as a Sales Representative or similar role. (Especially with web3 projects)</li><li>Strong knowledge of sales principles and practices in Web3 business.</li><li>Excellent communication, negotiation, and interpersonal skills.</li><li>Ability to build and maintain lasting relationships with clients.</li><li>Self-motivated with a results-driven approach.</li><li>Ability to work independently and as part of a team.</li><li>Proficiency in Google tools and CRM software.</li></ul><h2>Benefits:</h2><ul><li>Fixed salary + variable/commission structure.</li><li>Professional development opportunities.</li><li>Friendly and supportive work environment.</li><li>Opportunities for career growth (we’re still early!).</li></ul><h2>How to Apply:</h2><p>If you are a passionate and results-oriented sales professional looking for a rewarding career with a growing company, we would love to hear from you. Please send your resume, a cover letter and make sure to add your Telegram username to   <a>kevin@unicrypt.network</a>.</p>",
                                                               "date_posted": "2025-01-15T05:00:00Z",
                                                               "keywords": [
                                                                   "web3"
                                                               ],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "Qg6elOn",
                                                               "role": "Research Scientist (CryptoEconomics)",
                                                               "company_name": "CEL",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": null,
                                                               "remote": true,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/f427b542962bd8d10f47b585854e132fec361371.jpg",
                                                               "url": "https://findwork.dev/Qg6elOn/research-scientist-cryptoeconomics-at-cel",
                                                               "text": "<h2>About CryptoEconLab</h2><p>CryptoEconLab (CEL) designs next-generation crypto protocols—from initial design to governance and ecosystem growth. Our work spans token design, incentive engineering, market construction, and cutting-edge simulations.</p><h2>The Role</h2><p>We need a Research Scientist who can architect protocols from the ground up using first principles. You’ll synthesize project visions, design new token economies, mitigate adverse incentives, and guide projects from ideation to whitepaper to real-world deployment.</p><h2>Key Responsibilities</h2><ul><li><strong>Protocol Design</strong>: Invent token economies and emission mechanisms that align with project KPIs and guard against economic exploits, particularly in DeFi, DePIN, and public goods ecosystems.</li><li><strong>Adverse Incentive Mitigation</strong>: Identify collusion, sybil, or other attack vectors and propose robust defenses.</li><li><strong>Market & Auction Construction</strong>: Develop pricing, bidding, and matching systems that foster efficient discovery and fair participation.</li><li><strong>Simulation & Digital Twin</strong>: Model agent-based behaviors, forecast circulating supply, and inform governance decisions with data-driven insights.</li><li><strong>Practical Implementation</strong>: Work closely with engineers to ensure that theoretical designs translate into functioning smart contracts and mainnet-ready architectures.</li><li><strong>Research Leadership</strong>: Supervise junior research scientists, providing guidance on methodologies, deliverables, and professional growth. Maintain a strong research reputation and following (e.g., publications, conference speaking engagements) and represent CEL as an industry-leading cryptoeconomic research hub.</li></ul><h2>Qualifications</h2><ul><li><strong>PhD or equivalent experience</strong> in Computer Science, Statistics or Applied Mathematics, or a related technical discipline.</li><li>Track record of creating, deploying or operating new protocols or mechanisms in the crypto space.</li><li>Strong grasp of game theory, distributed systems, and cryptoeconomic principles.</li><li>Strong practical software engineering skills.</li><li>Creative and analytical mind.</li><li><strong>Demonstrated ability to communicate</strong> complex designs succinctly to both technical and non-technical audiences.</li><li><strong>High energy and motivation</strong> for a fast-paced startup environment.</li></ul><h2>Why Join Us</h2><ul><li><strong>High-Impact Work</strong>: Shape groundbreaking protocols from scratch.</li><li><strong>Collaborative Environment</strong>: Join a team of leading experts in cryptoeconomics and decentralized governance.</li><li><strong>Competitive Compensation</strong>: 100-140k USD/year + benefits.</li><li><strong>Flexible, Remote-First Culture</strong>: Work with a global network of top talent across US, Europe and Asia.</li></ul><p><strong>Ready to define the next generation of cryptoeconomic systems?</strong> Send your CV and any relevant publications to   <a>hiring@cel.build</a> with the subject line “<strong>Research Scientist Application</strong>”.</p>",
                                                               "date_posted": "2025-01-15T05:00:00Z",
                                                               "keywords": [],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "n7l6pgQ",
                                                               "role": "DeFi Trader/Developer (all levels)",
                                                               "company_name": "Wintermute",
                                                               "company_num_employees": "1-10",
                                                               "employment_type": "full time",
                                                               "location": "London, United Kingdom",
                                                               "remote": false,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/14706a542fcfcd2c99c785b9f5298d35c8018aab.jpg",
                                                               "url": "https://findwork.dev/n7l6pgQ/defi-traderdeveloper-all-levels-at-wintermute",
                                                               "text": "<h2>About Wintermute</h2><p>Wintermute is one of the largest crypto-native algorithmic trading companies in digital assets. We provide liquidity algorithmically across most cryptocurrency exchanges and trading platforms, a broad range of OTC trading products as well as support high profile blockchain projects and traditional financial institutions moving into crypto. We actively participate in the development of the blockchain ecosystem through investments, partnerships, and incubation of projects.</p><p>Wintermute was founded in 2017 by industry leaders and has successfully navigated multiple crypto industry cycles. Culturally, we combine the best of the two worlds: the technology standards of high-frequency trading firms in traditional markets and the innovative and entrepreneurial culture of technology startups. Read more <a>here</a>.</p><h2>Working in the DeFi team</h2><p>We are always on a look out for potential talent to join our DeFi team. Whether you are a developer, trader or a graduate, we are keen to hear from you. The focus is to help us build and maintain the systems that drive our on-chain searching. You will focus both on designing and implementing trading strategies as well as the core microservices and backend infrastructure required by the trading engine.</p><p>Our trading is very technologically focused and our traders are akin to programmatic problem solvers. Similar to the ethos of most builders within the space, this role requires you to wear many hats. You will work and contribute across multiple code bases in a variety of languages whilst pushing and exploring the frontiers of the design space within the ecosystem.</p><p>We pride ourselves on running a tight knit and collaborative team and so you can expect to work closely with experienced traders and developers who will be teaching and guiding you on how to contribute and improve our systems. Team members are encouraged to cultivate their own narratives, challenge each other and investigate new domains together.</p><h2>Requirements:</h2><ul><li>Proficiency in programming with at least one of the following: Python, Rust or Go</li><li>Comfortable working on Linux environments and Git version control</li><li>Experience with programmatic statistical analysis and quantitative / analytic skills</li><li>High level understanding of high-frequency market making strategies</li><li>Understanding of blockchain fundamentals and mechanics of the EVM</li><li>Familiarity with smart contract development and the Foundry toolkit</li><li>A passion for learning about protocol microstructure and design mechanisms</li></ul><h2>Note:</h2><ul><li>Although we are unable to accept fully remote candidates, we support significant flexibility in regards to working from home and working hours.</li><li>For UK - we are able to offer work permits and help with relocation</li><li>For Singapore - we are able to sponsor an Employment Pass for exceptional candidates however, we do prefer applicants to have a Singapore PR.</li></ul>",
                                                               "date_posted": "2025-01-15T05:00:00Z",
                                                               "keywords": [
                                                                   "rust",
                                                                   "python",
                                                                   "blockchain",
                                                                   "cryptocurrency"
                                                               ],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "Mb93DEQ",
                                                               "role": "Investment Manager (US focused)",
                                                               "company_name": "Wintermute",
                                                               "company_num_employees": "1-10",
                                                               "employment_type": "full time",
                                                               "location": null,
                                                               "remote": true,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/14706a542fcfcd2c99c785b9f5298d35c8018aab.jpg",
                                                               "url": "https://findwork.dev/Mb93DEQ/investment-manager-us-focused-at-wintermute",
                                                               "text": "<h2>About Wintermute</h2><p>Wintermute is one of the largest crypto native algorithmic trading companies in digital assets. We provide liquidity across most cryptocurrency exchanges and trading platforms, a broad range of OTC trading solutions as well as support high profile blockchain projects and traditional financial institutions moving into crypto. Wintermute also has a Wintermute Ventures arm that invests in early stage DeFi projects.</p><p>Wintermute was founded in 2017 and has successfully navigated industry cycles. Culturally, we combine the best of the two worlds: the technology standards of high-frequency trading firms in traditional markets and the innovative and entrepreneurial culture of technology startups. To Wintermute digital assets is not just another asset class, we believe in the innovative potential of blockchain, the fundamental innovations, we have a long-term view on the digital asset market and are taking a leadership position in building an innovative and compliant market. You can read more <a>here</a>.</p><h2>About Wintermute Ventures</h2><p>Wintermute Ventures is the investment arm of Wintermute. Drawing from Wintermute’s expertise in pioneering DeFi trading and powering liquidity across the entire ecosystem, Wintermute Ventures is uniquely positioned to back early-stage Web3 projects with hands-on support. Focused on long-term growth, the company takes a flexible approach, investing from early ideation to later-stage expansion. Committed to developing strategic relationships and driving positive outcomes, Wintermute Ventures prioritizes decentralized ownership, ensuring its investments align with the company’s broader vision of a decentralized future. Since 2020, it has invested in over 100 projects.</p><p>You will play an integral part in growing our investment portfolio, be part of building our pipeline of new investments, and establish a strong network with founders in the industry. You will join an investment team where your main focus will be leading our direct investment efforts in growth-stage technology / blockchain companies in the United States.</p><h2>Responsibilities - You will need to be flexible and adaptable. Some examples of your role:</h2><ul><li><strong>Sourcing:</strong> proactively identifying new investment opportunities with crypto infrastructure (Defi, Cefi etc.) and qualifying inbound leads for the firm by meeting with entrepreneurs.</li><li><strong>Analysis:</strong> Conduct analysis on market and investment trends in the blockchain industry, inclusive of market research, data collection and feasibility studies on potential blockchain investments;</li><li><strong>Due Diligence:</strong> Performing due diligence on investment prospects to drive investment decisions including market research, product reviews, competitive analysis, metrics analysis, customer/user reviews and technical diligence.</li><li><strong>Portfolio Work:</strong> Communicating with the Wintermute portfolio founders to provide support</li><li><strong>Ecosystem Building:</strong> being an active contributor to the blockchain/cryptocurrencies community by organizing activities, participating in local events and looking for ways to help grow the Wintermute Ventures franchisee.</li><li><strong>Admin:</strong> Assist with admin projects such as liaising and coordinating with internal / external parties including auditors, custody providers, cap table management software and general administrative support as needed across the venture business</li></ul><h2>Hard Skills Requirements</h2><ul><li>Experience interacting with DeFi protocols and a native understanding of blockchain technology with experience reviewing white papers or crypto projects.</li><li>Bachelor degree in Business, Science Finance, Commerce, Economics or related field, or equivalent practical experience</li><li>An understanding of venture capital and crypto deal terms</li><li>A minimum of 3 years of professional experience in consulting, investing or high growth tech with financial modelling capability</li><li>The ability to think analytically and strategically about investment decisions and ongoing work with existing portfolio companies.</li><li>The ability to work well within a team and be self-guided on a day-to-day basis</li><li>Strong written and analytical skills for deal analysis and internal reporting.</li><li>Strong relationship building skills and enjoy networking with project founders and broader community</li><li>A demonstrated history of being proactive.</li></ul><h2>Bonus Requirements</h2><ul><li>A technical background or experience in data science is a plus.</li><li>Strong network in crypto is a plus</li><li>Former background from working within the crypto industry at a infrastructure player (custodian, trading firm, exchange or similar)</li></ul><h2>Perks</h2><ul><li>Engaging projects offering accelerated responsibility and ownership compared to traditional finance environments</li><li>Performance-based compensation with significant earning potential</li><li>Flat company structure: your ideas get heard by the right people very quickly</li><li>Work flexibility: This role is open to remote candidates located in the US</li><li>Dynamic and Multicultural work environment (20 nationalities and counting!)</li></ul>",
                                                               "date_posted": "2025-01-15T05:00:00Z",
                                                               "keywords": [
                                                                   "web3",
                                                                   "blockchain",
                                                                   "cryptocurrency"
                                                               ],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "n2Yd0bX",
                                                               "role": "Graphic Designer & Marketing Assistant",
                                                               "company_name": "Carpay",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": null,
                                                               "remote": true,
                                                               "logo": null,
                                                               "url": "https://findwork.dev/n2Yd0bX/graphic-designer-marketing-assistant-at-carpay",
                                                               "text": "<p>Looking for a full time hire to assist with the below.</p><p>Requirements:</p><ul><li><p>Graphic design for direct mailers & social media/google paid marketing campaigns</p></li><li><p>Minimum software skills: adobe suite (photoshop,illustrator, premier pro etc) + figma</p><p></p></li></ul><p>Beneficial skills (not required) or a keenness to learn the below:</p><ul><li><p>Managing Google marketing (google ads, GA4, google tag manager)</p></li><li><p>Managing Meta marketing campaigns</p></li><li><p>Managing / coordinating direct mailers</p></li><li><p>Set-up & monitoring of email marketing campaigns</p></li><li><p>Producing blog posts & writing or refining copy for marketing campaigns</p></li><li><p>Video editing skills</p></li></ul><p>Budget is $50,000 per annum with potential to grow. This role will work closely with the director of marketing and CEO of the company for direction on marketing campaign designs.</p><p>We are a 20 person start-up SaaS company focused on a niche in the auto industry called Buy Here Pay Here. We love to work with people who are self-starters and keen to learn new skills. Visit our website to find out more about what we do: <a href=\"http://www.carpay.com\" rel=\"nofollow noreferrer\">www.carpay.com</a>.</p><p>Email <a href=\"mailto:jess@carpay.com\" rel=\"nofollow noreferrer\">jess@carpay.com</a> with a sample of your recent design work to apply. Alternatively, click 'Apply for this position' button below to apply via Upwork.</p>",
                                                               "date_posted": "2025-01-14T22:00:39Z",
                                                               "keywords": [
                                                                   "illustrator",
                                                                   "figma",
                                                                   "photoshop"
                                                               ],
                                                               "source": "Dribbble"
                                                           },
                                                           {
                                                               "id": "Qg6e1mn",
                                                               "role": "Rust Developer",
                                                               "company_name": "Selby Jennings",
                                                               "company_num_employees": null,
                                                               "employment_type": null,
                                                               "location": "Bolton, UK",
                                                               "remote": true,
                                                               "logo": null,
                                                               "url": "https://findwork.dev/Qg6e1mn/rust-developer-at-selby-jennings",
                                                               "text": "Tech used: Blockchain, Ethereum, Rust, Security, Solidity, gRPC, Cryptography<br>We are an innovative trading platform focused on enhancing trading efficiency and security for our users. Our platform offers a comprehensive suite of tools for on-chain traders and supports multiple blockchains, including Ethereum, Solana, Base, and Blast.<br>More details and option to apply: <a href=\"https:&#x2F;&#x2F;devitjobs.uk&#x2F;jobs&#x2F;Selby-Jennings-Rust-Developer--Blockchain-Trading&#x2F;rdg\" rel=\"nofollow\">https:&#x2F;&#x2F;devitjobs.uk&#x2F;jobs&#x2F;Selby-Jennings-Rust-Developer--Blo...</a>",
                                                               "date_posted": "2025-01-14T20:29:19Z",
                                                               "keywords": [
                                                                   "grpc",
                                                                   "ethereum",
                                                                   "rust",
                                                                   "solidity",
                                                                   "blockchain"
                                                               ],
                                                               "source": "Hn"
                                                           },
                                                           {
                                                               "id": "QV59V7n",
                                                               "role": "AI Product Engineer",
                                                               "company_name": "Vertex",
                                                               "company_num_employees": null,
                                                               "employment_type": null,
                                                               "location": null,
                                                               "remote": true,
                                                               "logo": null,
                                                               "url": "https://findwork.dev/QV59V7n/ai-product-engineer-at-vertex",
                                                               "text": "<a href=\"https:&#x2F;&#x2F;vertexinc.wd1.myworkdayjobs.com&#x2F;VertexInc&#x2F;job&#x2F;Remote-USA&#x2F;AI-Product-Engineer_JR101667-1\" rel=\"nofollow\">https:&#x2F;&#x2F;vertexinc.wd1.myworkdayjobs.com&#x2F;VertexInc&#x2F;job&#x2F;Remote...</a><br>We are hiring an AI Product Engineer to join the strategy team to use the latest and greatest in AI to push Vertex forward into an AI-first company.<br>If you want to test drive being a technical founder, have experience building the full stack of an AI product from 0 to 1, and want to make a dramatic impact on in a public company, please apply.",
                                                               "date_posted": "2025-01-14T15:36:20Z",
                                                               "keywords": [],
                                                               "source": "Hn"
                                                           },
                                                           {
                                                               "id": "nYPYVAX",
                                                               "role": "Senior UI / UX Designer (Mobile & Web)",
                                                               "company_name": "Volo Sports",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": null,
                                                               "remote": true,
                                                               "logo": null,
                                                               "url": "https://findwork.dev/nYPYVAX/senior-ui-ux-designer-mobile-web-at-volo-sports",
                                                               "text": "<h1>About the company</h1><p>Volo is an adult social sports company with more than 350,000 users across the US. Our users leverage Volo to organize, meet, and play within their community through fitness and social activities. Whether it's a performance sport like soccer or volleyball, or a social activity like cornhole, Volo provides something real. Real interaction, real activity, real fun, and real impact.</p><h1>Proof we are awesome</h1><ul><li><p>Ranked among Inc. 5000 Fastest Growing Companies</p></li><li><p>Serving more than 45,000 kids in free youth programs</p></li><li><p>Over 350,000 adult participants nationwide</p></li><li><p>8 city markets & counting...</p></li></ul><p>If you have a desire to make a difference through community and sports, Volo could be your next and final career destination.</p><h1>About the job</h1><p><strong>Location:</strong> Remote, willingness to travel to DC ~3x/yr preferred </p><p><strong>Salary Range:</strong> $140,000 - $180,000 </p><p>We are looking for a UI/UX Designer to work closely with our product managers, department heads and senior leaders to craft web and mobile experiences for our e-commerce platform, consumer application, and business operations platform.  They will work collaboratively with our product and engineering teams to ensure cohesive and comprehensive app delivery.  The UI/UX Designer will be responsible for designing and ensuring simple UI to ensure the best UX possible for our users and our staff, including: gathering and prioritizing product and customer requirements, defining the product vision, and working closely with engineering, sales, marketing and support to ensure functionality and experience is top tier. The UI/UX Designer is also expected to run beta and pilot programs with early-stage products and samples and be an expert with respect to the competition. </p><p><strong>Responsibilities will include:</strong></p><ul><li><p>Translating requirements into style guides, design systems, design patterns and attractive user interfaces</p></li><li><p>Producing high-quality UI design solutions through wireframes, visual and graphic designs, flow diagrams, and prototypes.</p></li><li><p>Designing and testing UI elements such as CTAs, banners, page layouts, page designs, and page flows.</p></li><li><p>Creating UI elements and tools such as navigation menus, search boxes, tabs, and widgets for our digital assets.</p></li><li><p>Designing UI elements such as input controls, navigational components and informational components</p></li></ul><p><strong>Expected skill set & experience:</strong></p><ul><li><p>Creative artist with excellent craftsmanship and problem solving skills.</p></li><li><p>Mastery of Figma, and other modern design and prototyping tools.</p></li><li><p>A minimum of 3 years UI/UX design experience for digital products or services with proven ability to create wireframes, high-fidelity mockups, interactive prototypes, and design specifications.</p></li><li><p>Deep knowledge of UI components. and a portfolio of work that showcases excellence in creative mobile and web UI design, meticulous attention to detail and end user problem-solving.</p></li><li><p>Proven experience creating and organizing design systems and components. </p></li><li><p>Ability to thrive, be flexible and deliver creative and quality work in a fast-paced environment.</p></li><li><p>Deep experience handling several complex projects simultaneously.</p></li><li><p>Flexible and comfortable with ambiguity and change during a project.</p></li><li><p>Excellent written & verbal communication skills with the ability to present ideas with confidence with senior leaders.</p></li><li><p>Willingness to take on and manage multiple tasks to keep things in motion. </p></li></ul><p>We are looking for a driven team member interested in collaborating to create great experiences that improve the lives of our users through great design. </p><p><strong><em>“WOW” US WITH YOUR PORTFOLIO AND A BRIEF BLURB DESCRIBING WHAT MAKES YOU SPECIAL </em></strong></p><p></p><p><em>Volo is an equal opportunity employer and all qualified applicants will receive consideration for employment without regard to race, color, religion, national origin, sex, sexual orientation, age, disability, gender identity, marital or veteran status, or any other protected class.</em></p>",
                                                               "date_posted": "2025-01-14T15:05:51Z",
                                                               "keywords": [
                                                                   "figma",
                                                                   "ux"
                                                               ],
                                                               "source": "Dribbble"
                                                           },
                                                           {
                                                               "id": "MrJaorM",
                                                               "role": "Senior Product Designer",
                                                               "company_name": "ScaleLabs",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": null,
                                                               "remote": true,
                                                               "logo": null,
                                                               "url": "https://findwork.dev/MrJaorM/senior-product-designer-at-scalelabs",
                                                               "text": "<p><strong>Description:</strong> We are seeking a skilled user researcher, UX designer, and UI designer to join our team full-time. In this hybrid role that blends traditional product design responsibilities (user research, UX design, and UI design) with participation in the sales process, you’ll play a pivotal part in sales scoping projects, ongoing client engagements, and design deliverables.</p><p>Our team values collaboration, continuous learning, and delivering exceptional work. You’ll be part of a supportive, fully remote team that regularly engages in cross-functional projects. We take pride in tackling impactful challenges for clients across various industries. Expect to work on innovative projects that push your design skills and contribute directly to our clients' success. You’ll attend client calls, capture user flows in real time, create wireframes and interfaces for web and mobile, and refine requirements for ongoing projects.</p><p><strong>Responsibilities:</strong></p><p><strong>Client Engagement:</strong></p><ul><li><p>Participate in client scoping calls, documenting findings and capturing user flows in real-time.</p></li><li><p>Work with clients to gather and refine requirements for ongoing projects.</p></li></ul><p><strong>Design Deliverables:</strong></p><ul><li><p>Deliver wireframes for web and mobile designs, tailored to client bottlenecks and business needs.</p></li><li><p>Design visually compelling interfaces for web and mobile applications.</p></li><li><p>Create occasional designs for websites and sales decks as needed.</p></li></ul><p><strong>Collaboration:</strong></p><ul><li><p>Collaborate with sales and development teams to create design input for proposals.</p></li></ul><p><strong>Project Management:</strong></p><ul><li><p>Manage multiple projects simultaneously, adapting to different client industries and requirements, while enjoying flexibility and autonomy as part of our fully remote team that emphasizes work-life balance.</p></li></ul><p><strong>Qualifications:</strong>** In addition to competitive compensation, we offer benefits such as stipends for tools and professional development.</p><p><strong>Experience and Background:</strong></p><ul><li><p>3-5 years of experience in UX research and UI design, with a strong portfolio showcasing web and mobile projects.</p></li><li><p>Prior experience working in an agency environment or with diverse client projects is highly desirable.</p></li></ul><p><strong>Technical Skills:</strong></p><ul><li><p>Proficiency in design tools like Figma or similar platforms.</p></li><li><p>Strong skills in capturing user flows, wireframes, and crafting pixel-perfect UI designs.</p></li></ul><p><strong>Collaboration and Communication:</strong></p><ul><li><p>Experience working closely with development teams and product managers to ensure design feasibility and implementation.</p></li><li><p>Demonstrated ability to collaborate effectively with sales teams during client interactions.</p></li><li><p>Excellent verbal and written communication skills.</p></li></ul><p><strong>Problem-Solving and Organization:</strong></p><ul><li><p>Adaptable to evolving requirements and capable of problem-solving in fast-paced environments.</p></li><li><p>Strong organizational skills and ability to manage and prioritize tasks across multiple client projects.</p></li></ul>",
                                                               "date_posted": "2025-01-14T08:09:38Z",
                                                               "keywords": [
                                                                   "figma",
                                                                   "ux"
                                                               ],
                                                               "source": "Dribbble"
                                                           },
                                                           {
                                                               "id": "nKJVyyX",
                                                               "role": "Senior Product Designer",
                                                               "company_name": "TeamBridge",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": null,
                                                               "remote": true,
                                                               "logo": null,
                                                               "url": "https://findwork.dev/nKJVyyX/senior-product-designer-at-teambridge",
                                                               "text": "<p>Hi 👋 I’m Tito. Co-Founder and Co-CEO of TeamBridge. I’m looking to hire a Senior Product Designer who will be reporting directly to me.</p><p>60% of the US workforce is hourly, and that number goes up to more than 70% globally. The people who work these jobs are more in demand than ever before. Their skill sets are tactical, real, and often times absolutely essential. At TeamBridge, we are builders. TeamBridge is a composable workforce OS. Giving non-technical leaders the building blocks to deliver the processes and policies that help them win in employee facing apps that feel like magic.</p><p>Myself and my co-founder Arjun, come from a product design background and are looking for a skilled product thinker with the visual craft and ability to think in larger systems that will help take our product to the next level.</p><p>We’ve are a fast growing team. We raised our Series B in mid 2024, led by General Catalyst and Mayfield. While this role will be a Senior IC position, there is plenty of room to grow, build a team and own a massive piece of our product vision.</p><p>The Problem Our product is mission-critical to our customers. It is the backbone and operating system for nearly everything they do. We need to deliver delightful experiences that build trust and unlock innovative and elegant ways to configure and manage experiences and policies at scale. We need to understand our customers needs fundamentally, and build reusable components that can be combine in creative ways to deliver immense value across many industries.</p><p>We want to:</p><ul><li><p>Build a best in class platform tool</p></li><li><p>Create no-code/low-code builder experiences that unlock even advanced technical features for non-technical users</p></li><li><p>Blend enterprise power with ease of use and value</p></li></ul><h2>Your Role</h2><p>In the long term, you will own large projects end to end, and help to define the vision of our product offering.</p><p>In the short term, you will collaborate closely with me and focus more on execution of individual projects as you familiarize yourself with our space, customers, and how we do product at TeamBridge.</p><p>For this role, experience on cross-functional teams in high quality product organizations, as well as startup experience is a plus. Tactical visual skills and an eye for quality and modern interfaces will help us define TeamBridge as a cutting-edge platform. Technical and product skills to think in systems to own and deliver even complex B2B product interfaces will help you ship and deliver even when resources are light.</p><p>You could be a great fit if</p><ul><li><p>You are innately curious, you can’t stop problem solving, and you often find yourself focusing that attention to become embedded and obsessed with end users and the unique ways they complete their work</p></li><li><p>You have tactical product mindset that allows understand where engineers or users might not be thinking the same as you.</p></li><li><p>You care about quality and delight. You have the thoughtfulness and capacity to create experiences that don’t just solve a problem, but do so in a way that builds trust, love and even admiration from other product teams.</p></li><li><p>You can achieve clarity and alignment through communication habits, organization and creative problem solving.</p></li><li><p>You can design. You can gather requirements, build user flows, experiment, refine and deliver at a consumer grade quality.</p></li><li><p>You’ve got a process that works, tools and operation skills that achieve success, but are also flexible to grow and adapt as needed.</p></li><li><p>You are eager to learn and if a project requires a skill set you don’t have, you aren’t afraid to try something new.</p></li></ul><p>⠀</p><h2>Our Culture</h2><p>TeamBridge has a culture of humility and hustle. We are self aware about the things we need to get better at, and the drive to do so. [Add details about what this means in practice] We are teammates, and communicate with candor and optimism about where we are and where we are going. We are a culture of doers, with a bias toward action. [Add details about what this means in practice]. Ultimately /we care. We care about eachother, our customers, and our mission.</p><p>Interview Process</p><ol><li><p>Intro Call with Tito (Co-Founder and Co-CEO) - 20 mins</p></li><li><p>Product Experience Deep Dive - 45 mins</p></li><li><p>Assignment</p><ul><li><p>Prepare Assignment Async</p></li><li><p>Present Results - 60 mins</p></li></ul></li><li><p>Final Round Onsite Interview - 4 hours</p><ul><li><p>Mostly focused on cross-functional Interviews to meet more of the team. This is a critical hire for us and a role that will touch a lot of functions - we want to make sure you'll meet folks you'll be working closely with</p></li></ul></li></ol><p>⠀ Benefits</p><ul><li><p>Unlimited PTO</p></li><li><p>Maternity/Paternity Leave</p></li><li><p>100% employer paid health, dental, vision (70% for dependents)</p><p></p><p></p></li></ul><p>TeamBridge’s success will be dependent on building a team and culture where great people thrive and achieve incredible things. I hope that excites you enough to apply. TeamBridge provides equal employment opportunities (EEO) to all employees and applicants for employment without regard to race, color, religion, sex, national origin, age, disability, genetics, sexual orientation, gender identity, or gender expression. We are committed to a diverse and inclusive workforce and welcome people from all backgrounds, experiences, perspectives, and abilities.</p><p>To request reasonable accommodations, please contact tg@teambridge.com</p>",
                                                               "date_posted": "2025-01-14T05:51:39Z",
                                                               "keywords": [
                                                                   "embedded",
                                                                   "backbone"
                                                               ],
                                                               "source": "Dribbble"
                                                           },
                                                           {
                                                               "id": "XoAb7GQ",
                                                               "role": "Customer Support Specialist (m/w/d) // First Bananas GmbH",
                                                               "company_name": "First Bananas",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": "Berlin, Germany",
                                                               "remote": false,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/0e307d4ef55c7c9a42ad316fb008fbde5d7ea839.jpg",
                                                               "url": "https://findwork.dev/XoAb7GQ/customer-support-specialist-mwd-first-bananas-gmbh-at-first-bananas",
                                                               "text": "Hey there! Ready to join a team that's all about fun and innovation? At First Bananas GmbH, we're on a mission to revolutionize the iGaming world with our awesome mobile gaming apps. As a Customer Support Specialist, you'll be the friendly face (or voice) helping our players have the best experience possible. Our crew of passionate gamers and creators is dedicated to making every game not just exciting but also fair and sustainable. We're looking for someone who loves games as much as we do and is eager to keep things fresh and fun for our players. If you're into creating positive vibes and solving problems with a smile, come and be a part of our journey to lead sustainable innovations in digital entertainment. Let's make gaming even more amazing together!\n\n<strong>Tasks</strong>\n<ul>\n \t<li>Chat with players to help them solve any game-related issues or questions they have.</li>\n \t<li>Collaborate with the dev team to report bugs and suggest improvements based on player feedback.</li>\n \t<li>Create and update support resources like FAQs and guides to help players get the most out of our games.</li>\n \t<li>Engage with our gaming community on social media and forums to keep the conversations lively and positive.</li>\n \t<li>Monitor player feedback to identify trends and provide insights to the team for new game features.</li>\n</ul>\n<strong>Requirements</strong>\n<ul>\n \t<li>Great communication skills to help players with any questions or issues they might have.</li>\n \t<li>A passion for gaming and understanding of mobile gaming apps.</li>\n \t<li>Problem-solving skills to quickly figure out solutions and keep players happy.</li>\n \t<li>Ability to work in a team and collaborate with developers and designers.</li>\n \t<li>Flexibility to handle different tasks and adapt to new challenges in a fast-paced environment.</li>\n</ul>\n<strong>Benefits</strong>\n<ul>\n \t<li>Centrally located office on Berlin's iconic Kurfürstendamm, complete with a rooftop offering amazing views of the city</li>\n \t<li>Above-average compensation</li>\n \t<li>Additional vacation days</li>\n \t<li>Company laptop</li>\n \t<li>Company stock options</li>\n \t<li>Employee discounts</li>\n \t<li>Flexible working hours</li>\n \t<li>Free beverages</li>\n</ul>\nJoin First Bananas as a Customer Support Specialist! Be part of our fun, innovative team and help us create gaming experiences that players love. Apply now and let’s make games awesome together!",
                                                               "date_posted": "2025-01-14T05:00:00Z",
                                                               "keywords": [],
                                                               "source": "Berlinstartupjobs"
                                                           },
                                                           {
                                                               "id": "nvDrkLM",
                                                               "role": "Analyst, Private Fund Sales",
                                                               "company_name": "Grayscale",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": "Stamford, United States",
                                                               "remote": false,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/4879e627a10da1b1b400312e602f5d9ff26bcad5.jpg",
                                                               "url": "https://findwork.dev/nvDrkLM/analyst-private-fund-sales-at-grayscale",
                                                               "text": "Grayscale is looking to hire an Analyst, Private Fund Sales to join their team. This is a full-time position that is based in Stamford CT.",
                                                               "date_posted": "2025-01-14T05:00:00Z",
                                                               "keywords": [],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "MAdRJgQ",
                                                               "role": "Intern, Software Engineer (Jan-Jun 2025)",
                                                               "company_name": "QCP Capital",
                                                               "company_num_employees": null,
                                                               "employment_type": null,
                                                               "location": "Singapore, Singapore",
                                                               "remote": false,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/d63bb0b77cff2b548bd1cd7061aa26af54b77833.jpg",
                                                               "url": "https://findwork.dev/MAdRJgQ/intern-software-engineer-jan-jun-2025-at-qcp-capital",
                                                               "text": "QCP Capital is looking to hire an Intern, Software Engineer (Jan-Jun 2025) to join their team. This is an internship position that is based in Singapore.",
                                                               "date_posted": "2025-01-14T05:00:00Z",
                                                               "keywords": [],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "nD5ewYQ",
                                                               "role": "People Business Partner, GTM",
                                                               "company_name": "Anchorage Digital",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": null,
                                                               "remote": true,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/41555a45e1fa86d262d956931972b6c4ca8dddb5.jpg",
                                                               "url": "https://findwork.dev/nD5ewYQ/people-business-partner-gtm-at-anchorage-digital",
                                                               "text": "Anchorage Digital is looking to hire a People Business Partner, GTM to join their team. This is a full-time position that can be done remotely anywhere in the United States.",
                                                               "date_posted": "2025-01-14T05:00:00Z",
                                                               "keywords": [],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "X88pzOX",
                                                               "role": "Relationship Manager, Private Clients",
                                                               "company_name": "Sygnum",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": "Zurich, Switzerland",
                                                               "remote": false,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/308651ea8b3eacda182b071bf257f652df1b80f3.jpg",
                                                               "url": "https://findwork.dev/X88pzOX/relationship-manager-private-clients-at-sygnum",
                                                               "text": "Sygnum is looking to hire a Relationship Manager, Private Clients to join their team. This is a full-time position that is based in Zurich.",
                                                               "date_posted": "2025-01-14T05:00:00Z",
                                                               "keywords": [],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "njj5DDn",
                                                               "role": "Program Associate - Ascent",
                                                               "company_name": "Outlier Ventures",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": "London, United Kingdom",
                                                               "remote": false,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/bfcf8825325691f98d83ca53d4d9367d1aa05072.jpg",
                                                               "url": "https://findwork.dev/njj5DDn/program-associate-ascent-at-outlier-ventures",
                                                               "text": "<h2>About Outlier Ventures</h2><p>Outlier Ventures is the world’s leading Web3 accelerator and most active Web3 investor, with a renowned reputation as the go-to authority for Web3 founders, investors and partners.</p><p>Founded in 2014, it works with startups at various stages of their lifecycle from pre-seed / seed (via Base Camp) to later stage about to launch (or live) token networks (via its Ascent program) specialising in a New Data Economy, Infrastructure, DeFi, AI, bringing together a network of 1,000 ’s of the world’s leading web 3 founders, protocols, VCs to mentor, and invest in start-ups.</p><p>Outlier Ventures’ portfolio includes leading Web3 projects including Biconomy, Boson Protocol, Brave, Cheqd, Cudos, DIA Data, Fetch.ai, Futureverse, IOTA, Ocean Protocol, Root Network and XAI.</p><p>For more information visit <a>https://outlierventures.io/</a>.</p><h2>About the Token Launch Team</h2><p>Our purpose and focus at Outlier is to support the best Web3 founders globally. We work with a leading team of experts, helping accelerate their growth and drive mass adoption. Via our headline program, Ascent, and via tailored ecosystem growth engagements, we help web3 projects at each stage of their token development, in the lead-up to going live or supporting a token in-market, through to inspiring and activating a community of passionate network stakeholders and community members.</p><h2>About the role</h2><p>In this role, you will be working in a focused skunkworks team at Outlier, to dynamically partner with web3 projects going to market to grow their network, community and impact.</p><p>You will be supporting the Token Launch team and Ascent program lead to deliver the Token Launch Accelerator; offering the opportunity to work directly with some of the most exciting token launches and growing web3 communities. This is an organised, connector role, that will be the engine room of our team ensuring communication and delivery work for our partner teams.</p><h3>Project management</h3><ul><li>Managing internal workflows and driving process improvements</li><li>Act as the central hub of product / business knowledge for this program</li><li>Report project performance based on business objectives and agreed key performance indicators</li><li>Help project teams set goals and maintain accountability</li></ul><h3>Web3 growth partner</h3><ul><li>Partnering with founders and web3 project teams on token launches</li><li>Supporting portfolio companies to develop growth strategies</li><li>Project managing launch and ecosystem growth campaigns</li></ul><h3>Relationship development</h3><ul><li>Act as a focal point to bring the OV network to the cohort</li><li>Network building and mapping among markets, exchanges and external partners</li><li>Researching and analysing data to support founder outcomes</li><li>Actively contributing to the blockchain/cryptocurrencies community</li></ul><h2>We are looking for someone who has the following:</h2><h3>Essential skills</h3><ul><li>A connector and enabler who can pull together and effectively organise subject matter experts, team members and both internal and external partners</li><li>Obsession with blockchain/cryptocurrencies</li><li>An understanding of community development and ecosystem growth in web3</li></ul><h3>Personal attributes</h3><ul><li>2-3 years of experience gained as an analyst, project manager or consultant</li><li>An organised problem solver with high agency and a lifelong learner</li><li>Comfortable with complexity and insatiably curious</li><li>Strong desire and drive to succeed</li><li>Hard working with a positive attitude</li></ul><p>Package is subject to relevant experience. It will bias towards performance related bonuses, including the opportunity to invest directly into pre-launch token projects on the same terms as the Outlier Ventures partnership.</p><h2>Why work with us</h2><p>We are not only passionate about building the future, but we also have the depth of niche crypto expertise necessary in legal, structuring, branding, and token engineering to execute and help guide a project from zero to one. We have been accelerating Web 3 founders since 2014 and have helped raise over $350 million USD in funding. You will have the opportunity to work with some of the most exciting projects globally and with a world-class team of web3 experts.</p><p>We have built a massive global partner network that can be brought to bear on any challenge, and our portfolio success record speaks volumes. The projects we work with inevitably become immersed into our benevolent multibillion-dollar token network ecosystem of shared goals, team spirit, and deep talent pools.</p><p>We work closely with our founders at every stage of development they are in, and we bring a legacy of proven value to the table. We invite you to join us and apply.</p><p>Let’s build a better Internet together.</p><h2>Our values</h2><ul><li><strong>Champion founders</strong><ul><li>We passionately believe in the power of founders to impact positive change on society</li><li>We invest in our time and resources to help founders realise their potential.</li><li>We help the ecosystem allocate their time, attention and resources to the best founders to help make the most positive impact</li></ul></li><li><strong>Positive by nature, driven by growth</strong><ul><li>We are optimistic about our collective future and determined to do our part to get us there</li><li>We are highly convinced that The Web can and should be better</li><li>Whether bull or bear markets, we will continue with our goal until we see billions of users benefiting from the key principles of sovereignty, privacy and digital property rights<strong>Integrity breeds trust</strong></li><li>We are trusted advisors to founders, co-investors, partners and our team at OV</li><li>We respect our peers and colleagues by showing up and delivering each and every day</li><li>We believe we have a responsibility to make as much of our knowledge and understanding available to as many people as possible, in as accessible a way as possible</li></ul></li></ul>",
                                                               "date_posted": "2025-01-14T05:00:00Z",
                                                               "keywords": [
                                                                   "blockchain",
                                                                   "web3"
                                                               ],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "Q4qW12M",
                                                               "role": "Chat Protocol Research Lead",
                                                               "company_name": "Logos",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": null,
                                                               "remote": true,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/f53df7a5dd3429f38a0f3f4b4b7c9a6430c6af07.jpg",
                                                               "url": "https://findwork.dev/Q4qW12M/chat-protocol-research-lead-at-logos",
                                                               "text": "<p>Logos is a movement supporting the development of the decentralised web. Logos technologies lay the foundations for a freer internet upon which communities can evolve into network states. Each protocol in the Logos stack seeks to empower its users while upholding civil liberties and fundamental freedoms.</p><h2>About Waku</h2><p>A family of generalised P2P communications protocols. The messaging layer of the Logos stack. <a>Waku</a> is private, censorship resistant, modular, and scalable by design. This combination of features makes Waku suitable to run in a wide range of environments, including phones and browsers, while upholding its users’ rights to private communications.</p><h2>About Status</h2><p>A blockchain-based super app that combines private messaging, a wallet, a DApp browser, and tools for web3 community management. <a>Status</a> aims to be a truly decentralised communication tool and, since its founding in 2017, has been progressively removing reliance on centralised infrastructure. The application leverages Waku and other technologies developed under the IFT umbrella.</p><h2>Key responsibilities</h2><ul><li>Research and document the current chat and related app protocols implemented in the Status application</li><li>Design and specify new application protocols that use Waku, Codex and other IFT technologies; ensure the protocols are securely scalable and privacy-preserving.</li><li>Use a layered protocol approach that is mindful and explicit about what it requires, what it provides, under what threat models, and with what trade-offs.</li><li>Build PoCs to demonstrate the working of new or modified protocols in nimlang and JavaScript.</li><li>Liaise with the Waku research team to understand the Waku protocols and how to build secure applications using them.</li><li>Liaise with Status leadership to agree on properties for new protocols and related user-facing features.</li><li>Collaborate with the expert researchers within Vac and apply their specialised knowledge in cryptography and other related fields.</li><li>Collaborate with Waku test engineers to simulate and test behaviour of new and modified protocols</li></ul><h2>You will ideally have</h2><ul><li>A strong academic background with proven experience in applied research and translating research findings into user-facing products.</li><li>Excellent verbal and written skills, especially in interpreting and compiling new technical specification documents</li><li>Experience with off-the-shelf networking stacks such as libp2p</li><li>Familiarity with encryption and key exchange mechanisms</li><li>Experience with building end-to-end instant messaging protocols</li><li>Experience with low level/strongly typed languages (C/C++/Go/Rust)</li><li>A strong alignment to our mission: <a>https://waku.org/about/</a></li></ul><h2>Bonus points:</h2><ul><li>Comfortable working remotely and asynchronously</li><li>Experience working for an open source organisation.</li><li>Experience with cryptography such as OTR, X3DH, Noise protocol.</li><li>Experience in, and passion for, blockchain and decentralized technologies.</li></ul><p><em>[Don’t worry if you don’t meet all of these criteria, we’d still love to hear from you anyway if you think you’d be a great fit for this role. Just explain to us why in your cover letter].</em></p><h2>Hiring process</h2><ul><li>Interview with our People Ops team</li><li>Interview with Waku Research Lead</li><li>Pair programming with Waku Team member on take home task</li><li>Interview with Chat/App Protocol Team Lead and Status App Lead</li><li>Interview with Waku Lead</li></ul><p><em>The steps may change along the way if we see it makes sense to adapt the interview stages, so please consider the above as a guideline.</em></p><h2>Compensation</h2><p>The expected compensation range for this role is $120,000 - $150,000 (negotiable, dependent on how we assess your skills and experience throughout our interview process). We are happy to pay in any mix of fiat/crypto.</p>",
                                                               "date_posted": "2025-01-14T05:00:00Z",
                                                               "keywords": [
                                                                   "javascript",
                                                                   "rust",
                                                                   "blockchain",
                                                                   "web3"
                                                               ],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "XzZW9BX",
                                                               "role": "Product Designer",
                                                               "company_name": "Mozaiq",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": null,
                                                               "remote": true,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/a872c3db4c3253266d08595f01bd8b7d115ce411.jpg",
                                                               "url": "https://findwork.dev/XzZW9BX/product-designer-at-mozaiq",
                                                               "text": "<p><strong>🚀 Join Our Team: Product Designer at Mozaiq</strong></p><p>We’re on the hunt for a highly skilled product designer with strong web design and conversion optimization thinking skills. By joining our team, you’ll work in an amazing environment, grow professionally, and create incredible things in digital product design. We are all about collaboration, clear communication, initiative taking, solution finding, empathy over ego, and good work-life balance. You’ll be responsible for creating websites and products for one of the largest medical Saas products in the US and will require you to effectively communicate their brand, message, and goals. You’ll combine creative design skills with technical expertise to craft visually engaging and responsive websites that help convert prospects to leads for marketing efforts. You’ll also need to pay close attention to user experience, functionality, and aesthetics, having familiarity with UX design systems that help make developer lives easier. We’re all about creating incredible web experiences, all with the goal of increasing conversion rates. We’ve won several design awards for our web work, and are looking for a product designer that wants to be part of our growing team. </p><p><strong>Your role:</strong></p><ul><li><p>Working with cross-functional teams including stakeholders, project managers, and developers to understand requirements and deliver designs that align with the project goals.</p></li><li><p>Designing the overall layout, visual appearance, and user interface of web experiences.</p></li><li><p>Ensuring web properties are optimized for various devices and screen sizes (desktop, tablet, mobile).</p></li><li><p>Creating wireframes and interactive prototypes to visualize and test design concepts.</p></li><li><p>Creating graphics, images, icons, and other visual elements that enhance the website's appeal.</p></li><li><p>Incorporating the client's or company's branding guidelines and ensuring a consistent brand identity throughout the websites.</p></li><li><p>Keeping up-to-date with design trends, emerging technologies, and industry best practices.</p></li><li><p>Conducting usability tests and making design adjustments based on user feedback and data analysis.</p></li></ul><p></p><p><strong>Requirements:</strong></p><ul><li><p>4+ years of experience as a product designer with a portfolio showcasing your design process, from lo-fi concepts or user flows to wireframes to finalized designs.</p></li><li><p>Proficiency in design and prototyping in Figma.</p></li><li><p>Experience working with and contributing to design systems.</p></li><li><p>Familiarity with front-end development and the ability to collaborate effectively with engineers.</p></li><li><p>Strong attention to detail and the ability to prioritize and manage multiple projects simultaneously.</p></li><li><p>Assertiveness, well-developed communication skills, and independence in action</p></li><li><p>Analytical thinking to solve problems</p></li><li><p>Excellent English skills, comfortable with doing presentations to clients and other members of the team.</p></li></ul><p><strong>About Us</strong></p><p>Mozaiq is a fast growing team based in the US and Europe. We specialize in building amazing and incredible global teams that work cohesively together to provide support for some of the most sophisticated tech-focused marketing orgs. </p><p></p><p><strong>Why Mozaiq?</strong></p><ul><li><p><strong>Global Family</strong>: We’re a tight-knit and diverse group, representing multiple nationalities and cultures. Working with us means joining a global family that supports and learns from each other.</p></li><li><p><strong>Passionate Work</strong>: We’re passionate about what we do, and we’re committed to delivering exceptional work that makes our clients shine.</p></li><li><p><strong>Inclusive Culture</strong>: Our culture is inclusive, diverse, and always evolving. We believe in fostering an environment where everyone can thrive, learn, and grow. (dependent on your country): (dependent on your country):</p></li></ul><p></p><p><strong>Benefits (Dependent on your country)</strong></p><ul><li><p>Work from anywhere culture</p></li><li><p>Flexible time off policy</p></li><li><p>Ample paid leave</p></li><li><p>In-person team-building vacations</p></li><li><p>Supplement healthcare insurance coverage</p></li><li><p>Subsidized Sports and fitness membership</p></li></ul><p>The work is remote as our team is spread across the continents. We are open to flexible hours, however we may need you to be online between 18:00 and 20:30 CET (as part of the marketing team is US based, 6-9 hours behind).</p><p></p>",
                                                               "date_posted": "2025-01-13T22:57:41Z",
                                                               "keywords": [
                                                                   "figma",
                                                                   "coverage",
                                                                   "ux"
                                                               ],
                                                               "source": "Dribbble"
                                                           },
                                                           {
                                                               "id": "MdVRdDn",
                                                               "role": "Head of Product Design",
                                                               "company_name": "Endear",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": null,
                                                               "remote": true,
                                                               "logo": null,
                                                               "url": "https://findwork.dev/MdVRdDn/head-of-product-design-at-endear",
                                                               "text": "<h2>About the Role</h2><p>We're seeking an experienced lead to own and scale our product design function. As our first dedicated design hire, you'll have the unique opportunity to shape our design culture and processes from the ground up while working closely with our executive team. This is a critical leadership role that will help define the future of retail technology.</p><h2>About Us</h2><p>Endear is building the first modern CRM for retail teams. We empower brands to drive more in-store sales by giving their retail teams AI-powered tools to have 10x more personalized, human conversations with customers. Despite retail being 6x larger than eCommerce, brick-and-mortar retail has been largely overlooked by the technology industry. We're changing that by enabling thousands of salespeople to leverage customer data in meaningful ways.j</p><h2>What You'll Own</h2><ul><li><p>End-to-end product design process, from research and ideation to high-fidelity designs and implementation</p></li><li><p>User research and testing initiatives</p></li><li><p>Design team culture, processes, and hiring as we scale</p></li><li><p>Cross-functional collaboration with engineering, product, and leadership teams</p></li><li><p>Product design strategy aligned with business objectives</p></li><li><p>UX improvements driven by customer feedback and data</p></li></ul><h2>What We're Looking For</h2><ul><li><p>Proven track record of scaling product design at early-stage startups</p></li><li><p>Strong portfolio demonstrating end-to-end product design work</p></li><li><p>Ability to balance user needs with business requirements</p></li><li><p>Excellence in UI/UX design, interaction design, and visual design</p></li><li><p>Strong communication skills and ability to articulate design decisions</p></li><li><p>Data-driven approach to design with experience in user research</p></li><li><p>Comfort with ambiguity and ability to work autonomously</p></li><li><p>Very comfortable in Figma and similar tools</p></li><li><p>Very comfortable with handing-off designs to engineering teams</p></li><li><p>Experience designing complex B2B applications is a plus</p></li><li><p>Experience with AI-powered design tools is a plus</p></li></ul><h2>Required Experience</h2><ul><li><p>7+ years of product design experience</p></li><li><p>Multiple years of experience at early-stage startups</p></li><li><p>Track record of building and scaling design functions from scratch</p></li><li><p>Experience working directly with executive teams and stakeholders</p></li><li><p>History of mentoring other designers and leading design initiatives</p></li></ul><h2>Why This Role Matters</h2><p>As our first dedicated design hire, you'll have unprecedented opportunity to shape our product's future. You'll work directly with our co-founders to elevate our design function while having significant impact on a product used by thousands of retail professionals daily. We're processing billions of data points and building high-converting experiences that need thoughtful, scalable design solutions.</p><h2>Our Work Environment</h2><ul><li><p>Remote-first culture built on trust and autonomy</p></li><li><p>Small, highly effective team (20-ish employees)</p></li><li><p>Fast-paced environment with shifting priorities</p></li><li><p>High-ownership culture where outcomes matter</p></li><li><p>Collaborative atmosphere that values learning and teaching</p></li></ul><h2>Benefits</h2><ul><li><p>Competitive compensation package with equity</p></li><li><p>Comprehensive healthcare including dental and vision</p></li><li><p>Home office or co-working space stipend</p></li><li><p>Flexible PTO with unlimited vacation days</p></li><li><p>Opportunity to shape the future of retail technology</p></li></ul><h2>About Our Company</h2><p>Founded 5 years ago, Endear has demonstrated strong product-market fit and reached profitability multiple times. Our platform was built from the ground up by technical leaders who have scaled data platforms to hundreds of millions of users and been at startups from early-stage through IPO. We make measured, high-conviction decisions at every milestone to ensure long-term success while realizing our massive potential in the retail market.</p><h2>How to Apply</h2><p>If you're excited about owning and scaling product design at a fast-growing startup, we'd love to hear from you. Please include:</p><ul><li><p>Your portfolio</p></li><li><p>A note about your experience scaling design at early-stage companies</p></li></ul><p>Endear is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all employees.</p>",
                                                               "date_posted": "2025-01-13T21:55:24Z",
                                                               "keywords": [
                                                                   "figma",
                                                                   "ux"
                                                               ],
                                                               "source": "Dribbble"
                                                           },
                                                           {
                                                               "id": "XRLj4dQ",
                                                               "role": "Exhibit Designer",
                                                               "company_name": "HealyKohler Design Inc.",
                                                               "company_num_employees": null,
                                                               "employment_type": null,
                                                               "location": "Washington, DC",
                                                               "remote": false,
                                                               "logo": null,
                                                               "url": "https://findwork.dev/XRLj4dQ/exhibit-designer-at-healykohler-design-inc",
                                                               "text": "<h3>Job description</h3>EXHIBIT DESIGNER POSITION<br><br>HealyKohler Design, a museum planning and exhibit design firm, is seeking a highly motivated and creative exhibit designer to join our expanding team in our Washington, DC office.  <br><br>You will work collaboratively within our multi-disciplinary team to create and integrate all aspects of an exhibit experience into the physical space. You will be responsible for creating conceptual renderings and visualizations, fly-through animations, development drawings, and documentation and specification packages.  <br><br>Qualifications: <br>•\t1-3 years of experience in exhibit design or related field?<br>•\tExcellent verbal and written skills with the ability to effectively communicate with all team members including clients<br>•\tOrganized, independent, self-starter<br>•\tAbility to work in a dynamic and fluid environment<br>•\tAttention to detail, accuracy, and quality<br>•\tProven experience in multiple phases of the design process, including conceptualization, design development, and construction documentation <br><br>Responsibilities:<br>•\tCollaborate with team members, subcontractors, vendors and clients<br>•\tCreate designs for interactive experiences, collections, and immersive environments <br>•\tParticipate in all phases of design projects from planning and concept design through documentation and fabrication and installation administration <br>•\tAdhere to and facilitate project schedules and budget requirements<br>•\tTravel as needed to project sites and fabrication reviews<br><br>Education:<br>•\tBA or MA in Industrial Design, Exhibit Design, Architecture, or Interior Design<br><br>Skills:<br>•\tProficiency in AutoCAD, Sketchup, V-ray <br>•\tProficiency in Adobe Creative Suite and Microsoft Office<br><br>To Apply:<br>•\tSend resume and a link to your digital portfolio or samples of your work to Susan Healy:  sh@healykohler.com<br><br><br><br>",
                                                               "date_posted": "2025-01-13T20:35:00Z",
                                                               "keywords": [],
                                                               "source": "Coroflot"
                                                           },
                                                           {
                                                               "id": "XoAbPeQ",
                                                               "role": "FOUNDING AI ENGINEER",
                                                               "company_name": "BUELA.ai",
                                                               "company_num_employees": null,
                                                               "employment_type": null,
                                                               "location": "Remote (US or close to US timezones preferred)",
                                                               "remote": false,
                                                               "logo": null,
                                                               "url": "https://findwork.dev/XoAbPeQ/founding-ai-engineer-at-buelaai",
                                                               "text": "Buela.ai is on a mission to democratize software development for non-technical people. We are a VC-backed early-stage (stealth) startup that has raised millions. We are a remote-first team of 15 people across the world. The company is HQ in San Francisco Bay Area. Co-founders are serial entrepreneurs who have had successful exits.<br>Buela.ai is an AI-native agentic solution built on a complex multi-agent AI framework that empowers non-technical users to build applications seamlessly.<br>We seek an innovative and experienced Founding AI Engineer to lead our artificial intelligence initiatives and drive the integration of AI capabilities into our agentic no-code SaaS platform. In this role, you will develop and implement AI strategies that enhance our product offerings, improve user experiences, and create competitive advantages in the market. As the founding AI Engineer, you&#x27;ll play a crucial part in developing the core technology to democratize software development. It&#x27;s also an excellent opportunity for someone looking to grow into a leadership position and build a team.<br>If you are looking to join the excitement of an early-stage startup and help launch a game-changing solution, click here for more information &gt;  <a href=\"https:&#x2F;&#x2F;buela.hiringthing.com&#x2F;job&#x2F;879572&#x2F;founding-ai-engineer\" rel=\"nofollow\">https:&#x2F;&#x2F;buela.hiringthing.com&#x2F;job&#x2F;879572&#x2F;founding-ai-enginee...</a>",
                                                               "date_posted": "2025-01-13T08:41:07Z",
                                                               "keywords": [],
                                                               "source": "Hn"
                                                           },
                                                           {
                                                               "id": "n98zKOX",
                                                               "role": "Senior Product Designer (UI/UX Designer)",
                                                               "company_name": "Jaumo",
                                                               "company_num_employees": "1-10",
                                                               "employment_type": "contract",
                                                               "location": null,
                                                               "remote": true,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/Jaumo",
                                                               "url": "https://findwork.dev/n98zKOX/senior-product-designer-uiux-designer-at-jaumo",
                                                               "text": "<h2>Our mission</h2><p>At Jaumo, we’re on a mission to revolutionize how people connect. We’re expanding beyond dating. Building new apps to help people meet, grow, and thrive in every area of life. </p><p>From friendships to wellness, creativity, and beyond, we’re creating meaningful experiences that bring people together. By focusing on the power of community, we’re fostering a more human-centered world where everyone feels they belong</p><h2>Our values</h2><ul><li><p><strong>User-Focused:</strong> Honest. Transparent. Dedicated to our users.</p></li><li><p><strong>Constant Improvement:</strong> Deliver top-tier products. Embrace change and innovation.</p></li><li><p><strong>Ownership:</strong> Drive strategy with responsibility and commitment to our mission.</p></li><li><p><strong>One Team:</strong> Collaborate across boundaries. Value diverse perspectives. Keep it fun.</p></li><li><p><strong>Simplicity:</strong> Do more with less. No BS.</p></li></ul><h2>The role</h2><p>As a Product Designer, you’ll play a <strong>key role</strong> in crafting intuitive, user-centered, and visually <strong>stunning designs</strong> for our apps.</p><p>You thrive on solving complex problems, experimenting with unconventional solutions, and uncovering new opportunities in uncharted territory. You’ll <strong>own the design process</strong> and collaborate with product managers, developers, and stakeholders to deliver seamless, engaging user experiences.</p><p>With seven apps and <strong>millions of downloads</strong> monthly, this role is critical to scaling our reach across platforms and driving global growth. You’ll work on our flagship <strong>Jaumo</strong> app and <strong>new ventures in new verticals</strong>. </p><p>2025 is a transformative year for us. We’re building a brand-new <strong>portfolio of apps beyond dating</strong>, redefining how people connect, grow, and thrive. We’re seeking a talented Product Designer to bring these bold ideas to life.</p><h2>What you'll do</h2><ul><li><p><strong>Your work will play a critical role</strong> in shaping experiences that help millions of users worldwide connect and thrive.</p></li><li><p><strong>Design intuitive, user-friendly UI mockups</strong> for our flagship Jaumo app and new apps beyond dating.</p></li><li><p><strong>Own and evolve our app design systems</strong>, creating scalable systems for current and future products.</p></li><li><p><strong>Collaborate with cross-functional teams</strong> to ensure seamless design implementation.</p></li><li><p><strong>Enhance UX/UI</strong> through research, competitor analysis, and industry trends.</p></li><li><p><strong>Lead the full design process</strong> for new apps, from concept to final designs, while integrating stakeholder feedback.</p></li><li><p><strong>Stay ahead of design trends</strong> to ensure fresh, innovative, and engaging experiences.</p><p></p></li></ul><h2>What we're looking for</h2><ul><li><p><strong>Visionary Designer</strong>: You have a strong track record designing consumer mobile apps for Android and iOS, ideally apps used by millions of monthly users.</p></li><li><p><strong>Hands-On Creator</strong>: You love diving into the details and bringing ideas to life. You prefer hands-on creation over managing large teams.</p></li><li><p><strong>Startup-Minded</strong>: You thrive in dynamic, fast-paced environments, bringing creativity, adaptability, and resourcefulness to every challenge. You have a proven ability to work autonomously and proactively in a remote setup.</p></li><li><p><strong>Technically Skilled</strong>: You’re a pro with Figma and skilled at building and evolving design systems.</p></li><li><p><strong>Pragmatic & Independent</strong>: You strike the perfect balance between design<strong> </strong>excellence and practical execution, solving problems and delivering results independently.</p></li><li><p><strong>Passion for Design</strong>: You stay current on design/UX trends, love analyzing competitors, and consistently apply best practices to improve your work.</p></li><li><p><strong>Strong Communication</strong>: Clear, concise, and collaborative—both written (we use Notion and Slack) and verbal (video calls).</p></li><li><p><strong>Bonus</strong>:</p><ul><li><p>Experience with UX research, user testing, or growth-focused design strategies, UI copywriting</p></li><li><p>Familiarity with the dating app space or other high-growth app categories.</p><p></p></li></ul></li></ul><h2>Why you'll love it</h2><ul><li><p><strong>Empowering Culture: </strong>We’re diverse, supportive, and inclusive, working closely with our founders.</p></li><li><p><strong>Work-life balance</strong>: Results matter, not hours.</p></li><li><p><strong>Meaningful work</strong>: Help millions find friends, love, and happiness. </p></li><li><p><strong>Ideal environment</strong>: Fact- and engineering-driven with a 'no BS' policy.</p></li><li><p><strong>Well-Being Focus:</strong> 30 days paid vacation, local holidays, competitive salary.</p></li></ul><h2>Application process</h2><p>Our application process is transparent and consists of four individual steps:</p><ol><li><p><strong>Online application</strong> with your portfolio (~10 mins): Tell us who you are and show your work.</p></li><li><p><strong>Culture interview </strong>(~30 mins) Meet<strong> </strong>our CEO/Founder. See if we're a match.</p></li><li><p><strong>Mini-Task</strong> (~2 hours): Showcase your skills.</p></li><li><p><strong>Team interview</strong> (~90 mins): Meet future colleagues. Ask questions directly. </p></li></ol><p>We value your time and provide insights into our company throughout the process. No surprises.</p><p>Please provide all the necessary information in English.</p><p><strong>Apply now! Let’s build something amazing together.</strong></p>",
                                                               "date_posted": "2025-01-13T07:46:02Z",
                                                               "keywords": [
                                                                   "ios",
                                                                   "android",
                                                                   "figma",
                                                                   "ux"
                                                               ],
                                                               "source": "Dribbble"
                                                           },
                                                           {
                                                               "id": "XoAbl8Q",
                                                               "role": "Software Developer in Test (Low Level Programming)",
                                                               "company_name": "Vac",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": null,
                                                               "remote": true,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/b649eb881b3ef6faf85dd9aa100770230c476a1a.jpg",
                                                               "url": "https://findwork.dev/XoAbl8Q/software-developer-in-test-low-level-programming-at-vac",
                                                               "text": "<h2>About Vac</h2><p><a>public good protocols</a> for the decentralized web. We do applied research based on which we build protocols, libraries and publications.</p><h2>The role</h2><p>We are seeking a skilled and passionate Software Developer in Test with experience in Low Level Programming to join our Vac QA team. As a Test Automation Engineer, you will play a crucial role in ensuring the reliability, performance, and scalability of distributed systems within Vac and the <a>IFT</a>.</p><p>Your responsibilities will include automating comprehensive test plans, as well as contributing to the identification and resolution of complex issues. Leveraging your expertise in programming and systems knowledge, you will help validating the functionality of distributed systems.</p><h2>Key responsibilities</h2><ul><li>Implement (Nim, Rust, TS, Python), and maintain integration tests in collaboration with other QAs and Devs.</li><li>Execute and automate test plans, test cases, and test scripts to validate the functionality, performance, and scalability of distributed systems.</li><li>Identify, reproduce, and debug complex issues in distributed systems, working closely with Logos development teams.</li><li>Work with Docker, Kubernetes, and POSIX-like systems.</li><li>Create and maintain scalable test automation frameworks.</li><li>Integrate automated tests into CI pipelines using tools like Github Actions.</li></ul><h2>You ideally will have</h2><ul><li>Solid experience with systems programming languages like Rust, Nim, Go.</li><li>Working knowledge of Docker, Kubernetes, and POSIX-like systems.</li><li>Experience with scripting languages like Python.</li><li>Knowledge of tests automation tools, best practices and design patterns.</li><li>Excellent written and conversational communication skills.</li><li>Alignment with our core values and principles.</li></ul><h2>Bonus points</h2><ul><li>Experience with off-the-shelf networking stacks such as libp2p.</li><li>Experience in blockchain technology.</li><li>Experience working for an open-source organization.</li><li>Experience with desktop UI automation.</li></ul><p>[Don’t worry if you don’t meet all of these criteria, we’d still love to hear from you anyway if you think you’d be a great fit for this role. Just explain to us why in your cover letter].</p><h2>Hiring process</h2><p>The hiring process for this role will be:</p><ol><li>Interview with our POps team</li><li>Interview with team member from the Vac QA team</li><li>Take home assignment & interview with team member from the Vac QA team</li><li>Interview with Vac team lead</li></ol><p>The steps may change along the way if we see it makes sense to adapt the interview stages, so please consider the above as a guideline.</p><p><strong>Compensation</strong></p><p>The expected compensation range for this role is negotiable, dependent on how we assess your skills and experience throughout our interview process. We are happy to pay in any mix of fiat/crypto.</p>",
                                                               "date_posted": "2025-01-13T05:00:00Z",
                                                               "keywords": [
                                                                   "rust",
                                                                   "qa",
                                                                   "docker",
                                                                   "python",
                                                                   "kubernetes",
                                                                   "blockchain",
                                                                   "github"
                                                               ],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "Q03rV3n",
                                                               "role": "Product Design intern",
                                                               "company_name": "AminoChain",
                                                               "company_num_employees": null,
                                                               "employment_type": null,
                                                               "location": "New York, United States",
                                                               "remote": false,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/c4f7bd7d0c21222496a1c53c5124932fa144cf10.jpg",
                                                               "url": "https://findwork.dev/Q03rV3n/product-design-intern-at-aminochain",
                                                               "text": "AminoChain is looking to hire a Product Design intern to join their team. This is an internship position that is based in New York NY.",
                                                               "date_posted": "2025-01-13T05:00:00Z",
                                                               "keywords": [],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "XO9aYWQ",
                                                               "role": "RISC Zero College Program",
                                                               "company_name": "RISC Zero",
                                                               "company_num_employees": null,
                                                               "employment_type": "contract",
                                                               "location": null,
                                                               "remote": true,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/c2a4900bea8dfc100ce438a3ebdd620c0bf5675a.jpg",
                                                               "url": "https://findwork.dev/XO9aYWQ/risc-zero-college-program-at-risc-zero",
                                                               "text": "RISC Zero is looking to hire a RISC Zero College Program to join their team. This is a contract position that can be done remotely anywhere in the United States.",
                                                               "date_posted": "2025-01-13T05:00:00Z",
                                                               "keywords": [],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "Xq2EPdn",
                                                               "role": "Junior Business Development Manager - DeFi",
                                                               "company_name": "Arrakis Finance",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": null,
                                                               "remote": true,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/0f71388ad3b804fb04ef837e78de980978018b66.jpg",
                                                               "url": "https://findwork.dev/Xq2EPdn/junior-business-development-manager-defi-at-arrakis-finance",
                                                               "text": "<p>Arrakis aims to disrupt the current market-making industry by providing the infrastructure to enable every project in the world that wants to launch a token to benefit from non-custodial, trust-less, and automated on-chain market-making strategies. We believe in a world where every organization, from a small startup to a large enterprise, will be tokenized and traded on-chain. For this world, Arrakis is building the tools to create the necessary liquidity to enable this token economy to rival and out-compete the traditional financial industry.</p><h2>The role</h2><p>As the Junior Business Development Manager, you will grow the Arrakis customer base by researching, networking and reaching out to the top projects in the web3 industry. Help acquire new TVL to the protocol and help make Arrakis the largest decentralized market making protocol in the world.</p><h2>What you’ll accomplish:</h2><ul><li>Scanning the web3 market for new partners and establishing the first point of contact</li><li>Building and nurturing relationships with leading DeFi projects.</li><li>Qualifying existing business development opportunities and moving the over the finish line</li><li>Work closely with the business development and marketing team on new ways of driving growth</li></ul><h2>Requirements</h2><p>Our ideal candidate has:</p><ul><li>At least 1yrs experience within a B2B sales role</li><li>Experience selling technical DeFi solutions</li><li>Web3 native using DeFi protocols every day/week</li><li>Good knowledge of DeFi / finance concepts such as impermanent loss, Uniswap v3, LVR, deep liquidity, arbitrage and MEV</li><li>Track record of managing partnerships, closing deals, and overachieving your revenue goals</li><li>Comfortable in fast-paced environments and having ambitious targets</li><li>An amazing communicator and natural salesperson.</li><li>Well-organized with strong time management skills and a proactive personality</li></ul><h2>Benefits</h2><p>Join an amazing team of industry veterans focused on revolutionizing web3 market making, collaborating with major projects like MakerDAO, Uniswap, Aave, Lido, operating fully remotely with members spanning Zug, Paris, New York, Berlin supported by world-class investors including Uniswap Labs, Robot Ventures, Accel, Longhash, and more.</p><h2>What we offer:</h2><ul><li>Competitive salary + performance-based compensation</li><li>SPICE token package</li><li>Work remotely or with the Founders in person, in Switzerland</li><li>Chance to travel the world to go to exciting events, connecting with key industry players</li><li>Join amazing in-person offsites all over the world</li></ul>",
                                                               "date_posted": "2025-01-13T05:00:00Z",
                                                               "keywords": [
                                                                   "web3"
                                                               ],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "nwaK10M",
                                                               "role": "Principal Platform Engineer",
                                                               "company_name": "Helius",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": null,
                                                               "remote": true,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/aeeac639b6f2ae77b19be96d1342dbde379dbd88.jpg",
                                                               "url": "https://findwork.dev/nwaK10M/principal-platform-engineer-at-helius",
                                                               "text": "<h2>About Helius</h2><p>Helius is a leading developer platform on the Solana blockchain, dedicated to inspiring and accelerating the creation of crypto-powered software. Our mission is to empower developers and businesses by providing them with the tools and resources they need to build the future of decentralized applications. We specialize in developing RPCs, indexers, webhooks, APIs, and more for the Solana ecosystem.</p><p>We’ve raised over $34M from Haun Ventures, Founders Fund, Foundation Capital, 6th Man Ventures, Reciprocal Ventures, Chapter One and angel investors including Solana co-founders Anatoly Yakovenko and Raj Gokal, and Balaji Srinivasan. Our team members have previously built mission-critical, scalable infrastructure at AWS, Coinbase, Stripe, Google, Digital Ocean, and more. Here is the <a>elius Manifesto</a> so you know what to expect if you join Helius.  </p><h2>Role Description</h2><p>We are looking for a Principal Engineer to help found our Platform Engineering Team. You will be responsible for building the internal developer platform and accelerating our engineering team. Your work will involve scaling our host & software management solutions to support thousands of bare-metal servers, including our Solana validator(s) and our RPC fleet. You will build service frameworks which provision and manage globally distributed services, ensuring high-reliability and uptime as they handle billions of customer requests per day.</p><p>If you have a passion for blockchain technology and a strong sense of ownership, we’d love to hear from you!</p><h2>Responsibilities</h2><ul><li>Design, implement, and manage automated systems for deploying, monitoring, and maintaining our bare-metal servers and services.</li><li>Develop and maintain CI/CD pipelines to streamline the deployment process.</li><li>Enhance the security of our infrastructure and networks by implementing best practices and proactive measures.</li><li>Monitor system performance, identify and resolve issues to ensure high availability and reliability.</li><li>Lead incident response and root cause analysis for system outages and issues.</li><li>Implement robust security measures to safeguard sensitive data and protect against cyber threats and attacks.</li><li>Collaborate with the engineering team to optimize performance and scalability of our services.</li><li>Establish and enforce policies and procedures to ensure compliance with industry standards and regulations.</li></ul><h2>Requirements</h2><ul><li>A minimum of 8 years of experience in a DevOps or Site Reliability Engineering role, preferably in a high-performance, low latency environment.</li><li>Experience managing and optimizing bare-metal server environments.</li><li>Expert scripting and programming skills (e.g., Bash, Python, Go).</li><li>Experience in Rust, Golang, Java, or a similar language.</li><li>Proficiency with monitoring and logging tools (e.g., Prometheus, Grafana, ELK stack).</li><li>Strong knowledge of automation tools and frameworks (e.g., Ansible, Terraform, Puppet, Chef).</li><li>Expertise in CI/CD tools and practices (e.g., Jenkins, GitLab CI, CircleCI).</li><li>Excellent problem-solving skills and the ability to troubleshoot complex issues.</li><li>Strong communication skills and the ability to collaborate effectively with cross-functional teams.</li><li>Ability to work independently and take ownership of projects from start to finish.</li></ul><h2>Preferred Qualifications</h2><ul><li>Experience with blockchain technologies, particularly Solana.</li><li>Prior experience in a startup or fast-paced environment.</li></ul><h2>What We Offer</h2><ul><li>Competitive salary and equity package</li><li>Flexible work hours and remote-friendly environment</li><li>Generous vacation and time-off policy</li><li>Opportunities for personal and professional growth in a fast-paced, dynamic industry</li></ul><p>Helius is an equal opportunity employer.</p>",
                                                               "date_posted": "2025-01-13T05:00:00Z",
                                                               "keywords": [
                                                                   "jenkins",
                                                                   "circleci",
                                                                   "grafana",
                                                                   "rust",
                                                                   "ansible",
                                                                   "golang",
                                                                   "chef",
                                                                   "terraform",
                                                                   "prometheus",
                                                                   "puppet",
                                                                   "python",
                                                                   "aws",
                                                                   "blockchain",
                                                                   "bash",
                                                                   "gitlab"
                                                               ],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "QeqJPRQ",
                                                               "role": "Senior Software Engineer",
                                                               "company_name": "Helius",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": null,
                                                               "remote": true,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/aeeac639b6f2ae77b19be96d1342dbde379dbd88.jpg",
                                                               "url": "https://findwork.dev/QeqJPRQ/senior-software-engineer-at-helius",
                                                               "text": "<h2>About Helius</h2><p>Helius is a leading developer platform on the Solana blockchain, dedicated to inspiring and accelerating the creation of crypto-powered software. Our mission is to empower developers and businesses by providing them with the tools and resources they need to build the future of decentralized applications. We specialize in developing RPCs, indexers, webhooks, APIs, and more for the Solana ecosystem.</p><p>We’ve raised over $34M from Haun Ventures, Founders Fund, Foundation Capital, 6th Man Ventures, Reciprocal Ventures, Chapter One and angel investors including Solana co-founders Anatoly Yakovenko and Raj Gokal, and Balaji Srinivasan. Our team members have previously built mission-critical, scalable infrastructure at AWS, Coinbase, Stripe, Google, Digital Ocean, and more. Here is the <a>Helius Manifesto</a> so you know what to expect if you join Helius.  </p><h2>Role Description</h2><p>We are looking for a Senior Backend/Infrastructure Engineer with experience in building and scaling distributed systems to join our growing team. If you have a passion for blockchain technology and a high sense of ownership, we’d love to hear from you!</p><h2>Responsibilities:</h2><ul><li>Design, implement, and maintain scalable and reliable backend infrastructure to support our growing suite of developer tools and services</li><li>Collaborate with cross-functional teams to ensure seamless integration of infrastructure components with existing systems</li><li>Identify bottlenecks and optimize performance of our services to handle increasing traffic and load</li><li>Develop monitoring and alerting systems to maintain high levels of system availability and performance</li><li>Continuously improve system architecture, security, and best practices to stay up-to-date with industry standards</li><li>Mentor and support other team members in understanding and implementing complex technical concepts</li></ul><h2>Requirements:</h2><ul><li>3+ years of experience in backend development and infrastructure engineering, with a focus on distributed systems</li><li>Strong understanding of blockchain technology, particularly the Solana ecosystem</li><li>Proficient in programming languages such as Rust, Go, and Typescript</li><li>Experience with cloud computing platforms (AWS, GCP, Azure) and containerization technologies (Docker, Kubernetes)</li><li>Knowledge of database technologies (SQL, NoSQL) and data processing frameworks (Apache Kafka, RabbitMQ)</li><li>Strong problem-solving and analytical skills, with the ability to adapt to new technologies quickly</li><li>Excellent communication and collaboration skills, with a high degree of ownership and agency</li></ul><h2>What We Offer</h2><ul><li>Competitive salary and equity package</li><li>Flexible work hours and remote-friendly environment</li><li>Generous vacation and time-off policy</li><li>Opportunities for personal and professional growth in a fast-paced, dynamic industry</li></ul><p>Helius is an equal opportunity employer.</p>",
                                                               "date_posted": "2025-01-13T05:00:00Z",
                                                               "keywords": [
                                                                   "azure",
                                                                   "rabbitmq",
                                                                   "kubernetes",
                                                                   "sql",
                                                                   "rust",
                                                                   "docker",
                                                                   "apache",
                                                                   "typescript",
                                                                   "kafka",
                                                                   "nosql",
                                                                   "aws",
                                                                   "gcp",
                                                                   "blockchain"
                                                               ],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "ny5963n",
                                                               "role": "DeFi Developer",
                                                               "company_name": "Re7 Capital",
                                                               "company_num_employees": null,
                                                               "employment_type": "contract",
                                                               "location": null,
                                                               "remote": true,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/43c7476d69cb7b8cbb0b6a3bb35563679f381375.jpg",
                                                               "url": "https://findwork.dev/ny5963n/defi-developer-at-re7-capital",
                                                               "text": "<h2>About us</h2><p>Re7 Capital is a London-based cryptoasset investment firm, utilising our deep crypto network and proprietary data infrastructure to drive investment decisions for a number of DeFi and alpha strategies. We also work with leading projects and blockchains to design their DeFi ecosystem, provide on-chain risk curation and vault management services through Re7 Labs. Re7 has a dynamic team with a strong background in investment management, data science and crypto.</p><h2>The role</h2><p>To support the continued expansion of the firm, we are seeking a motivated DeFi Developer to join our team. Reporting directly to the Head of Technology, you will take full ownership of our hedging bot, which ensures delta neutrality by managing deposits into AMM protocols and shorting equivalent long exposures on perpetual exchanges.</p><h2>Responsibilities</h2><ul><li>Assess and enhance the existing hedging infrastructure e.g. by developing a new bot from scratch.</li><li>Maintain the hedging bot by integrating new connectors for interacting with various AMM protocols across EVM and non-EVM networks.</li><li>Identify, debug, and test code issues to ensure stability and efficiency.</li><li>Backtest strategies to analyze performance and adjust rebalancing thresholds based on market volatility.</li><li>Develop and maintain a live reporting system to monitor performance metrics and provide actionable insights.</li></ul><h2>Requirements</h2><ul><li>Proficiency in Python.</li><li>Experience with one of the main smart contract languages eg Solidity or Move.</li><li>Experience with algorithmic trading.</li><li>Strong background in data analysis and backtesting trading strategies.</li><li>Proficiency in SQL databases, GraphQL sources, and handling time-series data.</li><li>Familiarity with TypeScript, Rust.</li><li>In-depth understanding of major DeFi AMMs(e.g., Curve, Uniswap V2/V3, Aerodrome).</li><li>Familiarity with Linux environments and Git version control.</li></ul><h2>Benefits</h2><ul><li>A dynamic and collaborative work environment</li><li>Opportunities for professional growth and development in a rapidly evolving and dynamic industry</li><li>Remote-first set up with opportunities to meet with the team in person</li><li>Competitive package</li></ul><h2>Application process</h2><ul><li>Your resume.</li><li>A cover letter detailing your interest in the role.</li><li>Your response to the following challenge:<ul><li>Create a high-level logic description and workflow chart for a trading bot that hedges impermanent loss on a Uniswap V2 ETH/USDC pool using perpetuals on Binance. Include a backtest of your strategy.</li></ul></li></ul>",
                                                               "date_posted": "2025-01-13T05:00:00Z",
                                                               "keywords": [
                                                                   "sql",
                                                                   "rust",
                                                                   "graphql",
                                                                   "solidity",
                                                                   "python",
                                                                   "typescript"
                                                               ],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "nJRgN2n",
                                                               "role": "Senior Cryptography Engineer",
                                                               "company_name": "BOB",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": null,
                                                               "remote": true,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/298734dbcdb07974ad3d31b4f9c36ff07ba71da0.jpg",
                                                               "url": "https://findwork.dev/nJRgN2n/senior-cryptography-engineer-at-bob",
                                                               "text": "<p>We are building BOB, a hybrid L2 that combines the best of Bitcoin and Ethereum. We seek an experienced Senior Cryptography Engineer to support the design, implementation, and launch of a novel BitVM bridge with Bitcoin security.</p><h2>The role</h2><p>You enjoy proactively identifying and resolving engineering problems by applying your knowledge on cryptographic techniques. You will lead the implementation and improvements around the cryptographic building blocks (SNARKs, Winternitz signatures, …) of the BitVM bridge. Working closely with the core team, you’ll contribute to research problems and be a trusted point of contact for improving BOB.</p><h2>What you will do</h2><ul><li>Architect and build the BOB Bitcoin bridge leveraging BitVM in close collaboration with the core team.</li><li>Architect and build the BOB Bitcoin security infrastructure with Babylon in close collaboration with the core team.</li><li>Engage in research discussions with the core team on the BOB core protocols.</li><li>Share knowledge with other team members on cryptography and Bitcoin best practices.</li></ul><h2>Requirements</h2><ul><li>Three years or more of hands-on Rust development experience.</li><li>One year of experience of deploying protocols into production that leverage advanced cryptographic techniques (SNARKs, STARKS, MPC, …) with measurable TVL.</li><li>Strong interest in Bitcoin, including Bitcoin script, BitVM, and Taproot.</li><li>Excellent communication skills in a remote setting.</li></ul><h2>Nice to have</h2><ul><li>Background in consensus protocols</li><li>Experience with Solidity</li><li>Contributions to open-source projects</li></ul><h2>Benefits</h2><ul><li>Research-oriented team</li><li>Solve novel problems</li><li>Stock options</li><li>Remote working</li><li>30-day vacation</li><li>Allowance for a co-working space</li><li>Yearly retreat</li></ul>",
                                                               "date_posted": "2025-01-13T05:00:00Z",
                                                               "keywords": [
                                                                   "bitcoin",
                                                                   "ethereum",
                                                                   "rust",
                                                                   "solidity"
                                                               ],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "n5Z12eQ",
                                                               "role": "Senior Talent Manager",
                                                               "company_name": "Immutable",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": "Sydney, Australia",
                                                               "remote": false,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/e4a7acf03ed4fd3ac4149e79e9115f38b415f1d2.jpg",
                                                               "url": "https://findwork.dev/n5Z12eQ/senior-talent-manager-at-immutable",
                                                               "text": "Immutable is looking to hire a Senior Talent Manager to join their team. This is a full-time position that is based in Sydney.",
                                                               "date_posted": "2025-01-13T05:00:00Z",
                                                               "keywords": [],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "M3G9g9M",
                                                               "role": "Dev Ops Engineer",
                                                               "company_name": "Hume",
                                                               "company_num_employees": "1-10",
                                                               "employment_type": "full time",
                                                               "location": "Los Angeles, United States",
                                                               "remote": true,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/72298024559034e233a1fa970eb063660a756267.jpg",
                                                               "url": "https://findwork.dev/M3G9g9M/dev-ops-engineer-at-hume",
                                                               "text": "<h2>What We Are Looking For</h2><p>Hume is looking for an experienced DevOps Engineer to build and maintain scalable, secure, and efficient infrastructure for deploying applications, services, and AI/ML models.</p><p>You will work closely with Hume’s creative and engineering teams to streamline deployments, manage cloud environments, and ensure high system availability and performance.</p><p>We want to create artists that feel alive and are truly creative. You should love the intersection of art and technology. This is your opportunity to work with a company building something truly unique at that intersection.</p><p>Our current virtual artists have millions of streams on Spotify and generate millions of views on Instagram/TikTok.</p><h3>Cloud Infrastructure Management</h3><ul><li>Design, implement, and manage scalable cloud environments (GCP experience preferred) for deploying applications, services, and AI/ML models.</li><li>Optimize cloud resources for cost efficiency while maintaining high availability and fault tolerance.</li><li>Implement cloud-native solutions using services such as GCE, API Gateway, Cloud Run, and Kubernetes.</li></ul><h3>CI/CD Pipeline Development</h3><ul><li>Build and maintain robust CI/CD pipelines to automate the testing, deployment, and scaling of machine learning models and full-stack applications.</li><li>Ensure smooth integration of code from multiple teams (ML, backend, frontend) through automated pipelines and version control systems (Git).</li><li>Automate infrastructure provisioning using tools like Terraform or CloudFormation</li></ul><h3>Monitoring and Incident Management</h3><ul><li>Set up monitoring, logging, and alerting solutions using tools like Prometheus, Grafana, ELK Stack, or Datadog.</li><li>Implement automated health checks, error tracking, and incident response processes to ensure system reliability.</li><li>Conduct root cause analysis (RCA) for incidents and implement long-term solutions to prevent recurrence.</li></ul><h3>Security and Compliance</h3><ul><li>Ensure system security through best practices, including setting up firewalls, encryption, and access control mechanisms.</li><li>Implement DevSecOps practices, including vulnerability scanning and automated security testing in CI/CD pipelines.</li><li>Maintain compliance with industry standards and regulations.</li></ul><h2>What We’re Looking For</h2><ul><li>3+ years of experience as a DevOps Engineer or similar role.</li><li>Excellent problem-solving skills and a proactive approach to identifying and resolving issues.</li><li>Strong communication skills, with the ability to collaborate effectively across teams.</li><li>2+ years of experience for senior designing and developing online and production grade ML systems.</li><li><strong>Bonus Points</strong>: Startup experience - someone who thrives in a fast paced environment, can dive into the weeds and take full ownership of workflows from end to end.</li><li><strong>Bonus Points:</strong> Knowledge of Web3 tech and decentralized systems</li></ul><p>$110,000 - $130,000 a year</p><p>The actual annual salary paid for this position will be based on several factors, including but not limited to, skills, prior experiences, training, company needs, and current market demands. The annual salary range for this position is subject to change and may be adjusted in the future. This position may also be eligible for salary increases, bonuses, equity awards, and benefits.</p>",
                                                               "date_posted": "2025-01-13T05:00:00Z",
                                                               "keywords": [
                                                                   "prometheus",
                                                                   "ml",
                                                                   "gcp",
                                                                   "terraform",
                                                                   "cloudformation",
                                                                   "datadog",
                                                                   "web3",
                                                                   "grafana",
                                                                   "kubernetes"
                                                               ],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "MmjgPOX",
                                                               "role": "Business Development Manager",
                                                               "company_name": "Glitter",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": null,
                                                               "remote": true,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/c4d64a0fc667b6c930fbbd6571e8ba7ff8623f05.jpg",
                                                               "url": "https://findwork.dev/MmjgPOX/business-development-manager-at-glitter",
                                                               "text": "<h2>Responsibilities:</h2><ul><li>Managing and retaining relationships with existing partners, developing and implementing a business strategy for attracting new industry-leading partners</li><li>Researching business opportunities and viable income streams, build a world-class business/sales pipeline</li><li>Advise Marketing team with planning and strategies for campaign ideation, development and execution.</li><li>Strategy sessions with the Founder and executives to ensure clear focus and milestones</li></ul><h2>Requirements</h2><ul><li>5+ years of experience in business development for an Internet/technology company</li><li>2+ years experience in AI agent business development</li><li>Strong AI agent and technical background preferred</li><li>Strong connections with top tier projects preferred</li><li>Understanding of AI agent, blockchain technology, smart contracts, NFT Financialization ecosystem</li><li>Experience building and running a structured sales process at a growing technology company</li><li>Strong communication and collaboration skills, with the ability to tailor messaging to a wide variety of audiences at differing levels of technical sophistication</li><li>Excellent analytical, problem-solving and decision-making skills</li></ul>",
                                                               "date_posted": "2025-01-13T05:00:00Z",
                                                               "keywords": [
                                                                   "blockchain",
                                                                   "nft"
                                                               ],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "nZl6EkM",
                                                               "role": "DeFi Analyst and Customer Success/Account Manager",
                                                               "company_name": "Yieldschool",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": null,
                                                               "remote": true,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/87e2ccb72cc190e63cb07b1667ee956c34ab2ca7.jpg",
                                                               "url": "https://findwork.dev/nZl6EkM/defi-analyst-and-customer-successaccount-manager-at-yieldschool",
                                                               "text": "<h2>Who you are</h2><p>You’re a DeFi native with a deep, above-average understanding of crypto/on-chain protocols and their underlying mechanics. You’ve studied over 100 on-chain protocols, dissected whitepapers, and spend hours on crypto twitter staying ahead of trends. You have a sharp ability to filter through noise, conduct fundamental analysis, understand the risks, trade-offs and competitive advantages, and assess whether an asset holds real value.</p><p>Moreover, you’re also a great communicator who can break down complex topics and explain them in ways that feel intuitive to beginners. You’re deeply passionate about DeFi and care about making a real, direct impact by helping onboard more people into the space safely and intelligently. You’re also excited about joining a successful and fast-growing company with great culture and a massive vision.</p><p>If this sounds like you, keep reading below.</p><h2>About us</h2><p>Yieldschool specializes in onboarding and educating HNWI into Decentralized Finance (DeFi), also known as the Primary Crypto Markets. We guide our Members to securely access these markets and invest in quality crypto assets at earlier, cheaper stages, leveraging a proven system that has delivered significant results. Over 500 Members have used our system, with some achieving 500%, 1,000%, and even 3,000%+ gains in the past 12 months.</p><p>We believe that DeFi is the future, and today’s decentralized infrastructure presents an unparalleled opportunity for early adopters to gain a competitive edge. Our strategic, long-term approach is focused on real value, steering away from speculation and meme coins, and enabling investors to participate in the evolution of web3 technology.</p><p>Our founder, Frank Hepworth, is a Licensed Regulatory Financial Attorney who has worked at one of Canada’s top law firms. He’s consulted crypto exchanges on which assets they could legally list, written their policies and procedures, and negotiated with the government on their behalf. His work has contributed to the approval of the first crypto ETFs listed on the Toronto Stock Exchange.</p><p>Our rapidly growing team consists of industry professionals with diverse background and expertise across law, academia, engineering, and traditional finance, all driven by a shared passion for DeFi and a dedication to empowering others to succeed in this space.</p><h2>About the role</h2><p>We’re hiring a DeFi Analyst & Customer Success/Account Manager (referred to internally as an “Associate”\") to work directly with our clients. In this role, you’ll meet with clients one-on-one via video calls to help them strategically navigate DeFi, build custom portfolios, and make progress toward their goals using our proven system.</p><p>You’ll need back-of-hand familiarity with all things DeFi—terms like “bridging,”\" “perps,”\" and “burner wallets”\" should already be part of your working vocabulary, and you should be able to speak and act on them without preparation. This is a hands-on role where you’ll provide guidance and support while ensuring clients stay on track with the service we offer.</p><p>Beyond managing client relationships, you’ll also identify opportunities to offer additional services to qualified clients. For these sales, you’ll earn commission, alongside a per-client flat compensation that forms your baseline earnings.</p><p>Additionally, you’ll participate in 1-2 group calls per month, either as a researcher/presenter sharing insights on DeFi trends or as a commentator offering analysis and contributing to discussions.</p><p>We’re growing quickly, and this role is key to maintaining the high level of service we provide to our clients. If you’re passionate about DeFi, skilled in client management, and have experience in high-ticket B2C sales or low-ticket B2B sales, we want to hear from you.</p><h2>Qualifications</h2><ul><li>Deep crypto and DeFi expertise.</li><li>Strong client management and relationship-building skills.</li><li>Excellent verbal and written communication skills.</li><li>Self-motivated, goal-oriented, and capable of thriving in a fast-paced environment.</li><li>Demonstrated track record of meeting or exceeding targets in client-facing roles.</li><li>Tech-savvy and a fast learner, with the ability to quickly adapt to new tools/platforms.</li><li>Experience in high-ticket B2C or low-ticket B2B sales (preferred but not required).</li><li>Genuine passion for decentralized markets and web3 technology.</li></ul><h2>How to apply</h2><p>Please send (1) your resume and (2) a short video introducing yourself to   <a>sofi@yieldschool.com</a> with the subject line “Application for DeFi Analyst & Customer Success/Account Manager”.</p><p>In the video, please state the following:</p><ul><li>Tell us about yourself, how you got started in DeFi and your experience as an investor</li><li>Your experience in a similar role</li><li>Why you are applying for this role</li><li>What makes you a great candidate</li></ul><p>If you’ve done any written research/reports, feel free to submit them to stand out from other candidates.</p><p>If you have experience in account management and sales, please share the metrics that show your track record. We would be looking for Closing Ratio/Conversion rates, at minimum.</p>",
                                                               "date_posted": "2025-01-12T05:00:00Z",
                                                               "keywords": [
                                                                   "web3"
                                                               ],
                                                               "source": "Cryptocurrencyjobs"
                                                           },
                                                           {
                                                               "id": "XxqdL5n",
                                                               "role": "Account Executive, Institutional",
                                                               "company_name": "SFOX",
                                                               "company_num_employees": null,
                                                               "employment_type": "full time",
                                                               "location": null,
                                                               "remote": true,
                                                               "logo": "https://findwork-dev-images.s3.amazonaws.com/full/163cac128b463132439f39de37758d4a5c884013.jpg",
                                                               "url": "https://findwork.dev/XxqdL5n/account-executive-institutional-at-sfox",
                                                               "text": "sFOX is looking to hire an Account Executive, Institutional to join their team. This is a full-time position that can be done remotely anywhere in the United States.",
                                                               "date_posted": "2025-01-12T05:00:00Z",
                                                               "keywords": [],
                                                               "source": "Cryptocurrencyjobs"
                                                           }
                                                       ]);
  const [formData, setFormData] = useState({
    job_title: '',
    location: '',
    category: '',
    gender: '',
    qualification: '',
  });


  useEffect(()=>{

  },[]);
  const handleSubmit = (e) => {
      e.preventDefault();
      setCount(0);
    };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  function handleOnclick() {
    setFormData(
        {
            job_title: '',
            location: '',
            category: '',
            gender: '',
            qualification: '',
        }
    )
  }

  // Filter jobs based on the formData (location, category)
  const filteredJobs = jobs.filter((job) => {
    return (
      (formData.job_title ? job.role.toLowerCase().includes(formData.job_title.toLowerCase()) : true) &&
      (formData.location ? (job.location?job.location.toLowerCase().includes(formData.location.toLowerCase()):false): true) &&
      (formData.category ?(job.category?job.category.toLowerCase().includes(formData.category.toLowerCase()):false): true)
    );
  });




  const jobsToDisplay = filteredJobs.slice(count, count + 4);

  return (
    <>
      <section className="j-container">
        <Nav />
        <div className="contact">
          <h3>{filteredJobs.length >= 500 ? "500+" : filteredJobs.length} Jobs Available</h3>
        </div>
        <div className="jobs-container">
          <div className="J-filter">
            <h3>Filter</h3>
            <form onSubmit={handleSubmit}>
              <input
                className="j-title-Inp"
                type="text"
                placeholder="Job Title"
                name="job_title"
                value={formData.job_title}
                onChange={handleChange}
              />
              <input
                className="j-title-Inp"
                type="text"
                placeholder="Location"
                name="location"
                value={formData.location}
                onChange={handleChange}
              />
              <input
                className="j-title-Inp"
                type="text"
                placeholder="Category"
                name="category"
                value={formData.category}
                onChange={handleChange}
              />
              <input
                className="j-title-Inp"
                type="text"
                placeholder="Gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              />
              <input
                className="j-title-Inp"
                type="text"
                placeholder="Qualification"
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
              />
              <button className="J-Find-Btn" type="submit">Find</button>
            </form>
            <button onClick={handleOnclick} className="J-Find-Btn">Reset</button>
          </div>

          <div className="jobsAvailable">
            <div className="j-Heading">
              <h3>Job Listing:</h3>
            </div>

            {jobsToDisplay.map((job, index) => (
              <div className="job" key={index}>
                <div className="jobleft">
                  <div className="jobLogo">
                    <img src="source/job-logo.jpg" alt="job-logo" />
                  </div>
                  <div className="jobleftInfo">
                    <div id="jname">
                      <a href={job.url || "#"}>{job.role || "J-Role-Not-Mentioned"}</a>
                    </div>
                    <p><i className="fa-solid fa-location-dot location-logo"></i>{job.location || "-----------"}</p>
                  </div>
                </div>
                <div className="jobright">
                  <a className="heart" href="#"><i className="fa-regular fa-heart"></i></a>
                  <a className="applyBtn" href={job.url || "#"}>Apply Now</a>
                </div>
              </div>
            ))}

            <div className="j-btns">
              <button className="j-prevbtn" onClick={() => setCount(count - 4)} disabled={count <= 0}>
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              <button className="j-nextbtn" onClick={() => setCount(count + 4)} disabled={count + 4 >= filteredJobs.length}>
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BrowsJobs;


