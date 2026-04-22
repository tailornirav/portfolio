import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	compilerOptions: {
		// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
		runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true)
	},
	kit: {
		// adapter-vercel: runtime:'edge' is deprecated by Vercel in favour of Fluid compute.
		// Per-route Vercel config is handled via the `config` export in each +page.server.ts.
		adapter: adapter()
	}
};

export default config;
