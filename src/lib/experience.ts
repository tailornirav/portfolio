export interface Experience {
	id: string;
	period: string;
	company: string;
	role: string;
	summary: string;
}

export interface Education {
	id: string;
	period: string;
	degree: string;
	institution: string;
}

export interface CapabilityGroup {
	title: string;
	items: string[];
}

export const experiences: Experience[] = [
	{
		id: 'zeliot',
		period: '2022 - PRESENT',
		company: 'Zeliot',
		role: 'Lead Systems Engineer',
		summary:
			'Architected offline-first mobile infrastructure handling high-frequency telemetry data in low-connectivity environments. Reduced sync conflict rates by 94% through custom CRDT implementation.'
	},
	{
		id: 'beekle',
		period: '2020 - 2022',
		company: 'Beekle.ai',
		role: 'iOS Architect',
		summary:
			'Led the transition from monolithic MVVM to a modular composable architecture. Integrated early-stage CoreML models for edge processing of auditory signals.'
	},
	{
		id: 'cognni',
		period: '2018 - 2020',
		company: 'Cognni',
		role: 'Software Developer',
		summary:
			'Developed core data processing pipelines for enterprise security compliance. Built internal CLI tools deployed across the engineering organization.'
	}
];

export const education: Education[] = [
	{
		id: 'bu',
		period: '2016 - 2020',
		degree: 'BSc (Hons) Software Engineering',
		institution: 'Bournemouth University'
	}
];

export const capabilities: CapabilityGroup[] = [
	{
		title: 'Edge & Mobile',
		items: ['Swift / SwiftUI', 'Objective-C', 'Core Data / Realm', 'Offline-First Sync']
	},
	{
		title: 'Distributed Systems',
		items: ['Docker / K8s', 'gRPC / Protobuf', 'Event Sourcing', 'AWS Architecture']
	},
	{
		title: 'Data & Languages',
		items: ['Python / Rust', 'PostgreSQL', 'Redis / Memcached', 'GraphQL']
	},
	{
		title: 'Intelligence',
		items: ['Gemini API integration', 'CoreML / Vision', 'On-device Inference', 'Vector DBs']
	}
];
