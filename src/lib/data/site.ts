import type { SiteConfig, NavItem, Experience, Project, SkillCategory } from '$lib/types/index.js';

export const siteConfig: SiteConfig = {
	name: 'NIRAV TAILOR',
	role: 'SOFTWARE ENGINEER & iOS ARCHITECT',
	location: 'AHMEDABAD, IN',
	tagline:
		'I believe in offline-first resilience... I architect systems that survive zero-connectivity environments, ensuring robust performance regardless of network conditions.',
	version: 'ARCH_OS_V2.0',
	github: 'https://github.com',
	linkedin: 'https://linkedin.com',
	email: 'mailto:hello@example.com'
};

export const navItems: NavItem[] = [
	{ label: 'WORK', href: '/' },
	{ label: 'EXPERIENCE', href: '/experience' },
	{ label: 'SKILLS', href: '/skills' },
	{ label: 'PROJECTS', href: '/projects' }
];

export const experiences: Experience[] = [
	{
		id: 'sentiero',
		dateRange: 'Sept 2024 – Present',
		statusLabel: 'CURRENT_EXECUTION',
		title: 'iOS ARCHITECT & ENTERPRISE DEVELOPER',
		company: 'Sentiero Project / Independent',
		highlights: [
			'Engineered Sentiero project focusing on advanced GeoAI integration.',
			'Led performance optimization across complex enterprise iOS architectures.',
			'Designed and deployed resilient infrastructure for high-load environments.'
		]
	},
	{
		id: 'zeliot',
		dateRange: 'Feb 2023 – Sept 2024',
		statusLabel: 'TERMINATED_PROCESS',
		title: 'SENIOR BACKEND ENGINEER',
		company: '@ Zeliot',
		highlights: [
			'Spearheaded system architecture design for massive-scale data ingestion.',
			'Developed robust data processing pipelines handling real-time telemetry.',
			'Maintained 99.99% high availability across distributed backend services.'
		]
	},
	{
		id: 'beekle',
		dateRange: '2022 – 2023',
		statusLabel: 'CONTRACTOR',
		title: 'SOFTWARE ENGINEER',
		company: '@ Beekle.ai',
		highlights: [
			'Built complex automation systems for enterprise workflows.',
			'Integrated advanced AI models including Nvidia Riva for speech recognition.',
			'Architected scalable cloud infrastructure deployments.'
		]
	},
	{
		id: 'freelance-2023',
		dateRange: '2023',
		statusLabel: 'FREELANCE_MODULE',
		title: 'FREELANCE ENGINEER',
		company: '@ Cognni.ai & Coupon',
		highlights: [
			'Delivered seamless enterprise integration solutions for Cognni.ai.',
			'Executed end-to-end full-stack delivery for the Coupon platform.'
		]
	},
	{
		id: 'purplefront',
		dateRange: '2022',
		statusLabel: 'REMOTE_NODE',
		title: 'REMOTE FRONT-END & PYTHON DEVELOPER',
		company: 'Purplefront / BSNL',
		highlights: [
			'Developed React-based client interfaces for Purplefront.',
			'Engineered complex networking logic using Python/Django for BSNL infrastructure.'
		]
	},
	{
		id: 'freelance-2021',
		dateRange: '2021',
		statusLabel: 'FREELANCE_MODULE',
		title: 'FREELANCE FULL-STACK DEVELOPER',
		company: 'Independent Contracts',
		highlights: [
			'Architected Transportation ERP system (Maa Arbuda).',
			'Developed high-conversion E-Commerce platform (Prizema.in).',
			'Built comprehensive Car Rental Software management tools.'
		]
	},
	{
		id: 'key-concepts',
		dateRange: '2018 – 2021',
		statusLabel: 'INITIALIZATION',
		title: '.NET & NODE.JS DEVELOPER',
		company: 'Key Concepts LLP / Provab',
		highlights: [
			'Executed critical system upgrades across legacy .NET environments.',
			'Transitioned core services to modern Node.js backend engineering patterns.'
		]
	}
];

export const projects: Project[] = [
	{
		id: 'sentiero',
		title: 'SENTIERO',
		description:
			'Next-generation spatial mapping utilizing Gemini LLMs combined with native MapKit architectures. Designed for real-time environment analysis and decentralized pathfinding.',
		tags: ['PROPRIETARY SPATIAL ENGINE', 'PRIVATE REPOSITORY'],
		repoType: 'private'
	},
	{
		id: 'the-hub',
		title: 'THE HUB',
		description:
			'Digital identity coordination platform with encrypted communications and secure credential management.',
		tags: ['DIGITAL IDENTITY', 'ENCRYPTED COMMS'],
		repoType: 'public'
	}
];

export const skillCategories: SkillCategory[] = [
	{
		title: 'EDGE & MOBILE',
		skills: ['Swift / SwiftUI', 'Objective-C', 'Core Data / Realm', 'Offline-First Apps']
	},
	{
		title: 'DISTRIBUTED SYSTEMS',
		skills: ['Docker / K8s', 'gRPC / Protocol', 'Event Sourcing', 'HA Architecture']
	},
	{
		title: 'DATA & LANGUAGES',
		skills: ['Python / Rust', 'PostgreSQL', 'Redis / Memcache', 'GraphQL']
	},
	{
		title: 'INTELLIGENCE',
		skills: ['Gemini API Integration', 'CoreML / PyTorch', 'On-Device Inference', 'Vector DBs']
	}
];
