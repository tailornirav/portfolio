import type {
	ExperienceEntry,
	NavLink,
	Project,
	SkillCategory,
	SocialLink
} from '$lib/types/portfolio';

export const navLinks: NavLink[] = [
	{ label: 'MANIFESTO', href: '#manifesto' },
	{ label: 'ARCHITECTURE', href: '#architecture' },
	{ label: 'EXPERIENCE', href: '#experience' },
	{ label: 'LOGS', href: '#logs' }
];

export const socialLinks: SocialLink[] = [
	{ label: 'GITHUB', href: 'https://github.com' },
	{ label: 'LINKEDIN', href: 'https://linkedin.com' },
	{ label: 'SOURCE_CODE', href: '#' },
	{ label: 'ENCRYPTED_COMMS', href: '#' }
];

export const experienceEntries: ExperienceEntry[] = [
	{
		id: 'ios-arch',
		dateRange: 'Sept 2024 – Present',
		status: 'CURRENT_EXECUTION',
		title: 'IOS ARCHITECT & ENTERPRISE DEVELOPER',
		company: 'Sentiero Project / Independent',
		bullets: [
			'Engineered Sentiero project focusing on advanced GeoAI integration.',
			'Led performance optimization across complex enterprise iOS architectures.',
			'Designed and deployed resilient infrastructure for high-load environments.'
		]
	},
	{
		id: 'senior-backend',
		dateRange: 'Feb 2023 – Sept 2024',
		status: 'TERMINATED_PROCESS',
		title: 'SENIOR BACKEND ENGINEER',
		company: '@ Zeliot',
		bullets: [
			'Spearheaded system architecture design for massive-scale data ingestion.',
			'Developed robust data processing pipelines handling real-time telemetry.',
			'Maintained 99.99% high availability across distributed backend services.'
		]
	},
	{
		id: 'sw-engineer',
		dateRange: '2022 – 2023',
		status: 'CONTRACTOR',
		title: 'SOFTWARE ENGINEER',
		company: '@ Beekle.ai',
		bullets: [
			'Built complex automation systems for enterprise workflows.',
			'Integrated advanced AI models including Nvidia Riva for speech recognition.',
			'Architected scalable cloud infrastructure deployments.'
		]
	},
	{
		id: 'freelance-eng',
		dateRange: '2023',
		status: 'FREELANCE_MODULE',
		title: 'FREELANCE ENGINEER',
		company: '@ Cognni.ai & Coupon',
		bullets: [
			'Delivered seamless enterprise integration solutions for Cognni.ai.',
			'Executed end-to-end full-stack delivery for the Coupon platform.'
		]
	},
	{
		id: 'remote-frontend',
		dateRange: '2022',
		status: 'REMOTE_NODE',
		title: 'REMOTE FRONT-END & PYTHON DEVELOPER',
		company: 'Purplefront / BSNL',
		bullets: [
			'Developed React-based client interfaces for Purplefront.',
			'Engineered complex networking logic using Python/Django for BSNL infrastructure.'
		]
	},
	{
		id: 'freelance-fullstack',
		dateRange: '2021',
		status: 'FREELANCE_MODULE',
		title: 'FREELANCE FULL-STACK DEVELOPER',
		company: 'Independent Contracts',
		bullets: [
			'Architected Transportation ERP system (Maa Arbuda).',
			'Developed high-conversion E-Commerce platform (Prizema.in).',
			'Built comprehensive Car Rental Software management tools.'
		]
	},
	{
		id: 'dotnet-node',
		dateRange: '2018 – 2021',
		status: 'INITIALIZATION',
		title: '.NET & NODE.JS DEVELOPER',
		company: 'Key Concepts LLP / Provab',
		bullets: [
			'Executed critical system upgrades across legacy .NET environments.',
			'Transitioned core services to modern Node.js backend engineering patterns.'
		]
	}
];

export const skillCategories: SkillCategory[] = [
	{
		name: 'EDGE & MOBILE',
		items: ['Swift / SwiftUI', 'React Native', 'Flutter', 'Svelte / SvelteKit', 'Offline-First Apps']
	},
	{
		name: 'DISTRIBUTED SYSTEMS',
		items: ['Docker / K8s', 'gRPC / Protobuf', 'Event Sourcing', 'MQ Architecture']
	},
	{
		name: 'DATA & LANGUAGES',
		items: ['Python / Rust', 'PostgreSQL', 'Redis / Memcached', 'GraphQL']
	},
	{
		name: 'INTELLIGENCE',
		items: ['Gemini API Integration', 'On-device Inference', 'Vector DBs']
	}
];

export const projects: Project[] = [
	{
		id: 'sentiero',
		label: 'PROPRIETARY SPATIAL ENGINE — PRIVATE REPOSITORY',
		title: 'SENTIERO',
		description:
			'Next-generation spatial mapping utilizing Gemini LLM combined with native SwiftUI architecture. Designed for real-time environment analysis and decentralized pathfinding.',
		tags: ['GeoAI', 'SwiftUI', 'On-device Inference'],
		status: 'ROUTE CALCULATED — ACCURACY: 9.4%'
	}
];
