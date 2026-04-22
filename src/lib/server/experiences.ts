import type { Experience } from '$supabase/types';

/**
 * Seed data for the experience log. Lives on the edge server to avoid shipping
 * to the client. Swap `fallbackExperiences` for a Supabase query in
 * `load` functions once the `experiences` table is populated.
 */
export const fallbackExperiences: Experience[] = [
	{
		id: '01',
		created_at: new Date('2024-09-01').toISOString(),
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
		created_at: new Date('2023-02-01').toISOString(),
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
		created_at: new Date('2022-01-01').toISOString(),
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
		created_at: new Date('2023-06-01').toISOString(),
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
		created_at: new Date('2022-06-01').toISOString(),
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
		created_at: new Date('2021-01-01').toISOString(),
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
		created_at: new Date('2018-01-01').toISOString(),
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

export { statusLabel } from '$lib/experience';
