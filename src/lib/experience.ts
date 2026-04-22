export interface ExperienceHighlight {
	label: string;
	body: string;
}

export interface Experience {
	id: string;
	period: string;
	company: string;
	role: string;
	lede?: string;
	highlights: ExperienceHighlight[];
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
		id: 'sentiero',
		period: 'SEPT 2024 - PRESENT',
		company: 'iOS Architect & Enterprise Developer',
		role: 'Project — Sentiero (Intelligent Adventure Planner)',
		lede: 'Architected a native iOS application that replaces static map databases with a dynamic, AI-driven spatial routing engine.',
		highlights: [
			{
				label: 'GeoAI & Intelligent Routing',
				body: 'Integrated Google Gemini LLMs to parse natural language constraints and synthesize geographical coordinates, paired with a mathematical terrain difficulty grading system.'
			},
			{
				label: 'Performance Optimization',
				body: 'Built the frontend using SwiftUI and Apple MapKit, optimizing background thread processing within an MVVM architecture to render complex topographical polylines at 60 FPS.'
			},
			{
				label: 'Resilient Infrastructure',
				body: 'Engineered an offline-first dual-storage system using iOS UserDefaults and Firebase NoSQL, ensuring robust app functionality in zero-connectivity environments.'
			},
			{
				label: 'Data Pipelines',
				body: 'Developed a Python script utilizing GeoPandas and the Ramer-Douglas-Peucker (RDP) algorithm to compress raw OpenStreetMap GPS data by 80% before batch-uploading it to Firestore.'
			}
		]
	},
	{
		id: 'zeliot',
		period: 'FEB 2023 - SEPT 2024',
		company: 'Zeliot',
		role: 'Senior Backend Engineer',
		highlights: [
			{
				label: 'System Architecture',
				body: 'Built highly robust, scalable backend microservices using Node.js and Redis, leveraging an event-driven architecture for seamless communication.'
			},
			{
				label: 'Data Processing',
				body: 'Collaborated with cross-functional teams to design and implement real-time data processing pipelines using Apache Kafka.'
			},
			{
				label: 'High Availability',
				body: 'Optimized core system performance and fine-tuned databases to manage massive volumes of incoming data efficiently.'
			},
			{
				label: 'Integration & Leadership',
				body: 'Designed and maintained secure RESTful APIs for React front-end integrations, while mentoring junior developers and fostering a collaborative environment.'
			}
		]
	},
	{
		id: 'beekle',
		period: '2022 - 2023',
		company: 'Beekle.ai',
		role: 'Software Engineer (Long-term Contractor)',
		highlights: [
			{
				label: 'Automation Systems',
				body: 'Engineered automated meeting-recording bots for high-traffic video conferencing platforms, including Google Meet, Zoom, and Microsoft Teams.'
			},
			{
				label: 'AI Integration',
				body: 'Integrated Nvidia Riva via gRPC protocols to execute high-performance, real-time speech-to-text transcription and complex audio processing.'
			},
			{
				label: 'Ecosystem Expansion',
				body: 'Developed accompanying Google Chrome Extensions and integrated calendar APIs across Google and Microsoft platforms.'
			},
			{
				label: 'Cloud Infrastructure',
				body: 'Architected the complete backend utilizing AWS services, specifically ECS, ECR, and S3, ensuring low-latency communication between distributed services.'
			}
		]
	},
	{
		id: 'cognni-coupon',
		period: '2023',
		company: 'Cognni.ai & Coupon',
		role: 'Freelance Software Engineer',
		highlights: [
			{
				label: 'Enterprise Integration (Cognni.ai)',
				body: 'Executed a highly complex Proof of Concept (POC) to safely retrieve and organize enterprise communications — including Emails, Drive, and Chats — from a Google Workspace organization.'
			},
			{
				label: 'Data Queuing (Cognni.ai)',
				body: 'Built a continuous backend service that fed unique data into an AWS SQS Queue for downstream intelligence analysis, utilizing complex SQL cursors and Google APIs.'
			},
			{
				label: 'Full-Stack Delivery (Coupon)',
				body: 'Pitched and delivered an application to connect coupon buyers and sellers within a strict one-month timeframe, developing the frontend in React.js and the backend utilizing Node.js and TypeScript.'
			}
		]
	},
	{
		id: 'purplefront-bsnl',
		period: '2022',
		company: 'Purplefront / BSNL',
		role: 'Remote Front-End & Part-Time Python Developer',
		highlights: [
			{
				label: 'Front-End Engineering (Purplefront)',
				body: 'Acted as a remote React.js developer for the Simplilearn platform, building responsive, server-less components. Managed NoSQL databases (MongoDB, Cassandra) while implementing Redux and Flux for frontend performance optimization.'
			},
			{
				label: 'Networking Logic (BSNL)',
				body: 'Developed core backend logic and REST APIs utilizing Python and the Django framework. Managed low-level networking protocols to handle IPv4 and IPv6 data structures, engineering custom algorithms for user allocation and automated data deductions from queued IP messages.'
			}
		]
	},
	{
		id: 'freelance-2021',
		period: '2021',
		company: 'Independent Contracts',
		role: 'Freelance Full-Stack Developer (Post-COVID Independent Projects)',
		highlights: [
			{
				label: 'Transportation ERP (Maa Arbuda)',
				body: 'Designed an admin panel for a transportation business using Node.js, MySQL, and Sequelize. Engineered WhatsApp text capabilities via Twilio APIs and integrated live map tracking via outsourced Android coordinates.'
			},
			{
				label: 'E-Commerce Platform (Prizema.in)',
				body: 'Built a textile e-commerce website leveraging Laravel, Eloquent, and Bootstrap. Engineered the product management admin panel and automated e-bill generation systems.'
			},
			{
				label: 'Car Rental Software',
				body: 'Developed a local business application utilizing Node.js, React.js, and Express.js to log rental transactions, seamlessly integrating RazorPay for online payment processing.'
			},
			{
				label: 'Business Blog Platform',
				body: 'Constructed a custom blog utilizing Bootstrap and Express.js, featuring an admin panel and a specialized mechanism allowing content publishing directly via email.'
			}
		]
	},
	{
		id: 'keyconcepts-provab',
		period: '2018 - 2021',
		company: 'Key Concepts LLP / Provab',
		role: '.NET & Node.js Developer',
		highlights: [
			{
				label: 'System Upgrades',
				body: 'Transitioned a legacy enterprise sports application from .NET Framework 4 to .NET Core 2.0 and Angular, writing complex C# Razor pages.'
			},
			{
				label: 'Backend Engineering',
				body: 'Shifted toward backend architecture, creating RESTful APIs utilizing Node.js, TypeScript, and Nest.js.'
			},
			{
				label: 'Integrations & Migrations',
				body: 'Engineered complex third-party API integrations, specifically incorporating Twilio for communications and Stripe for payments. Managed SQL Server databases and authored stored procedures before spearheading the data migration to Firebase Realtime DB and Redis.'
			}
		]
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
