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
		company: 'Sentiero · iOS Hiking & Outdoor-Routing App',
		role: 'iOS Architect & Enterprise Developer — github.com/tailornirav/Sentiero',
		lede: 'SwiftUI hiking companion that combines MapKit, Firebase, Google Gemini, and Apple Health to plan, customise, and track outdoor routes — complete with AI-generated trails and checklists, live walk tracking, and offline-first plans.',
		highlights: [
			{
				label: 'AI Route Generation',
				body: 'Integrated Google Gemini to parse natural-language prompts and emit structured JSON routes — coordinates, summary, difficulty, and activity type — then rendered as polylines on MapKit alongside AI-generated preparation checklists.'
			},
			{
				label: 'Live Walk Tracking',
				body: 'Built a MapKit-based home surface with GPS walk tracking, weather (Open-Meteo), monotonic progress for loop routes, ETA estimation, and an optional Apple Health workout export on completion.'
			},
			{
				label: 'Custom Route Editor',
				body: 'Bridged SwiftUI to MKMapView via UIViewRepresentable to support draggable waypoint annotations, with MKDirections walking paths between waypoints — debounced and rate-limited to stay under Apple’s ~50 req/min GEO throttle.'
			},
			{
				label: 'Auth & Identity',
				body: 'Implemented Sign in with Apple and anonymous Firebase Auth behind a RootSecurityGate, and namespaced all local storage under per-UID UserDefaults keys so each account has isolated plans and hiking stats on-device.'
			},
			{
				label: 'Offline-First Sync',
				body: 'Engineered a dual-storage model — LocalPlanManager + CloudPlanManager — that merges on appearance and prefers the richer local checklist when reconciling with Firestore, so plans stay usable without connectivity.'
			},
			{
				label: 'Architecture',
				body: 'Shipped a modular MVVM SwiftUI app driven by a shared GlobalRouter for cross-tab deep-links (activeTab, routeToFocusOnMap, planNavigationPath), with services cleanly separating Auth, Database, Weather, Gemini, HealthKit, and directions rate-limiting.'
			},
			{
				label: 'Security & Secrets',
				body: 'Gated Gemini and OpenWeather keys behind a runtime-loaded Secrets.plist (gitignored) surfaced via APIConfig, and scoped Firestore collections (public_routes, users/{uid}/savedRoutes, users/{uid}/activePlans) to per-user ownership.'
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
		id: 'lfs',
		period: '2021',
		company: 'Linux From Scratch · Custom Wayland OS',
		role: 'Personal Systems R&D — github.com/tailornirav/lfs',
		lede: 'Built a complete Linux distribution from source on bare metal — a self-directed deep-dive into compilers, init systems, and the UNIX userspace.',
		highlights: [
			{
				label: 'Build Toolchain',
				body: 'Authored LFS/BLFS shell scripts that parse package versions directly from source-archive filenames, so upgrading a dependency only touches the download URL — no script edits required.'
			},
			{
				label: 'System Assembly',
				body: 'Bootstrapped a custom XFS-rooted system with a hand-configured Linux kernel, Sway on Wayland, foot terminal, swaybg, grim/slurp, polkit, D-Bus, and elogind/seatd for a fully-functional modern desktop.'
			},
			{
				label: 'Media Pipeline',
				body: 'Compiled the entire audio/video stack from source — FFmpeg, PulseAudio, ALSA, Opus/OGG/FLAC/Speex, x264/x265, libvpx, Theora, FDK-AAC, LAME, and SDL2 — tuned with custom CFLAGS per package.'
			},
			{
				label: 'Language Toolchains',
				body: 'Built Rust, LLVM/Clang, NodeJS, Python (with SQLite), and LuaJIT from source, culminating in an end-to-end source build of Firefox running on the compiled stack.'
			},
			{
				label: 'Networking & Security',
				body: 'Integrated OpenSSH, OpenVPN, FUSE/SSHFS; automated network configuration and home-directory dotfile sync from a private git remote so a fresh install boots into a personalised, working environment.'
			},
			{
				label: 'Performance',
				body: 'Tuned MAKEFLAGS and CFLAGS to complete a full source build in ~5 hours on a Ryzen 3400G / 16GB / SSD — 3.5h for LLVM + Rust + Firefox, 1.5h for core LFS and the remaining userspace.'
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
		id: 'herts',
		period: '2024 - 2026',
		degree: 'BSc (Hons) Computer Science (Information Technology)',
		institution: 'University of Hertfordshire'
	}
];

export const capabilities: CapabilityGroup[] = [
	{
		title: 'Apple Platform',
		items: ['Swift / SwiftUI', 'UIKit', 'MapKit', 'Core Data / Realm', 'Offline-First Sync']
	},
	{
		title: 'Cloud & Infra',
		items: [
			'Vercel',
			'Cloudflare',
			'AWS (ECS / ECR / S3 / SQS)',
			'Docker / K8s',
			'Linux & System Administration'
		]
	},
	{
		title: 'Backend & Data',
		items: [
			'Node.js / TypeScript',
			'Python / Rust',
			'PostgreSQL / MySQL',
			'Redis / Memcached',
			'Firebase & Supabase'
		]
	},
	{
		title: 'Intelligence',
		items: [
			'Gemini API integration',
			'Nvidia Riva (gRPC)',
			'CoreML / Vision',
			'On-device Inference',
			'Vector DBs'
		]
	}
];
