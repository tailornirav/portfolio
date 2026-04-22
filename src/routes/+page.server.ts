import type { PageServerLoad } from './$types';
import type { Config } from '@sveltejs/adapter-vercel';
import {
	experienceEntries,
	navLinks,
	projects,
	skillCategories,
	socialLinks
} from '$lib/data/portfolio';

// Vercel Fluid compute (successor to edge functions).
// Provides fast cold-starts and global distribution without the edge runtime constraints.
export const config: Config = {
	isr: { expiration: 60 }
};

export const load: PageServerLoad = async () => {
	return {
		navLinks,
		socialLinks,
		experienceEntries,
		skillCategories,
		projects
	};
};
