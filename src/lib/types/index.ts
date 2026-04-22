export interface NavItem {
	label: string;
	href: string;
	isActive?: boolean;
}

export interface Experience {
	id: string;
	dateRange: string;
	statusLabel: string;
	title: string;
	company: string;
	highlights: string[];
}

export interface Project {
	id: string;
	title: string;
	description: string;
	tags: string[];
	repoType: string;
	demoUrl?: string;
	sourceUrl?: string;
}

export interface SkillCategory {
	title: string;
	skills: string[];
}

export interface SiteConfig {
	name: string;
	role: string;
	location: string;
	tagline: string;
	version: string;
	github?: string;
	linkedin?: string;
	email?: string;
}
