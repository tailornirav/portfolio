export interface NavLink {
	label: string;
	href: string;
}

export interface ExperienceEntry {
	id: string;
	dateRange: string;
	status: string;
	title: string;
	company: string;
	bullets: string[];
}

export interface SkillCategory {
	name: string;
	items: string[];
}

export interface Project {
	id: string;
	label: string;
	title: string;
	description: string;
	tags: string[];
	status: string;
	href?: string;
}

export interface SocialLink {
	label: string;
	href: string;
}
