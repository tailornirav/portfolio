import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
		runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true)
	},
	kit: {
		adapter: adapter({
			runtime: 'edge',
			regions: ['iad1'],
			split: false
		}),
		alias: {
			$components: 'src/lib/components',
			$server: 'src/lib/server',
			$supabase: 'src/lib/supabase'
		}
	}
};

export default config;
