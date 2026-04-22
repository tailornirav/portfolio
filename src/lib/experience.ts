export type ExperienceStatus =
	| 'current_execution'
	| 'terminated_process'
	| 'contractor'
	| 'freelance_module'
	| 'remote_node'
	| 'initialization';

export interface Experience {
	id: string;
	period: string;
	status: ExperienceStatus;
	title: string;
	company: string;
	highlights: string[];
	ordinal: number;
}

export const statusLabel: Record<ExperienceStatus, string> = {
	current_execution: 'CURRENT_EXECUTION',
	terminated_process: 'TERMINATED_PROCESS',
	contractor: 'CONTRACTOR',
	freelance_module: 'FREELANCE_MODULE',
	remote_node: 'REMOTE_NODE',
	initialization: 'INITIALIZATION'
};

export const experiences: Experience[] = [
	{
		id: '01',
		period: 'Sept 2024 - Present',
		status: 'current_execution',
		title: 'iOS Architect & Enterprise Developer',
		company: 'Sentiero Project / Independent',
		highlights: [
			'Engineered Sentiero project focusing on advanced GeoAI integration.',
			'Led performance optimization across complex enterprise iOS architectures.',
			'Designed and deployed resilient infrastructure for high-load environments.'
		],
		ordinal: 0
	},
	{
		id: '02',
		period: 'Feb 2023 - Sept 2024',
		status: 'terminated_process',
		title: 'Senior Backend Engineer',
		company: '@ Zeliot',
		highlights: [
			'Spearheaded system architecture design for massive-scale data ingestion.',
			'Developed robust data processing pipelines handling real-time telemetry.',
			'Maintained 99.99% high availability across distributed backend services.'
		],
		ordinal: 1
	},
	{
		id: '03',
		period: '2022 - 2023',
		status: 'contractor',
		title: 'Software Engineer',
		company: '@ Beekle.ai',
		highlights: [
			'Built complex automation systems for enterprise workflows.',
			'Integrated advanced AI models including Nvidia Riva for speech recognition.',
			'Architected scalable cloud infrastructure deployments.'
		],
		ordinal: 2
	},
	{
		id: '04',
		period: '2023',
		status: 'freelance_module',
		title: 'Freelance Engineer',
		company: '@ Cognni.ai & Coupon',
		highlights: [
			'Delivered seamless enterprise integration solutions for Cognni.ai.',
			'Executed end-to-end full-stack delivery for the Coupon platform.'
		],
		ordinal: 3
	},
	{
		id: '05',
		period: '2022',
		status: 'remote_node',
		title: 'Remote Front-End & Python Developer',
		company: 'Purplefront / BSNL',
		highlights: [
			'Developed React-based client interfaces for Purplefront.',
			'Engineered complex networking logic using Python/Django for BSNL infrastructure.'
		],
		ordinal: 4
	},
	{
		id: '06',
		period: '2021',
		status: 'freelance_module',
		title: 'Freelance Full-Stack Developer',
		company: 'Independent Contracts',
		highlights: [
			'Architected Transportation ERP system (Maa Arbuda).',
			'Developed high-conversion E-Commerce platform (Prizema.in).',
			'Built comprehensive Car Rental Software management tools.'
		],
		ordinal: 5
	},
	{
		id: '07',
		period: '2018 - 2021',
		status: 'initialization',
		title: '.NET & Node.js Developer',
		company: 'Key Concepts LLP / Provab',
		highlights: [
			'Executed critical system upgrades across legacy .NET environments.',
			'Transitioned core services to modern Node.js backend engineering patterns.'
		],
		ordinal: 6
	}
];
