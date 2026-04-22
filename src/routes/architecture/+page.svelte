<script lang="ts">
	import Panel from '$components/Panel.svelte';

	const stack = [
		{
			title: 'EDGE LAYER',
			body: 'SvelteKit server loaders deployed to Vercel edge runtime for sub-50ms origin response.'
		},
		{
			title: 'DATA LAYER',
			body: 'Supabase + Postgres with typed contracts generated directly from the production schema.'
		},
		{
			title: 'CLIENT LAYER',
			body: 'Svelte 5 runes compiled to tiny, hydration-light islands. Tailwind utility classes only.'
		},
		{
			title: 'INTELLIGENCE LAYER',
			body: 'On-device model inference with vector retrieval for contextual assistant flows.'
		}
	];
</script>

<svelte:head><title>ARCHITECTURE // SYSTEM_ARCHITECT</title></svelte:head>

<Panel label="ARCHITECTURE" title="EDGE-FIRST STACK">
	<div class="mt-4 grid gap-4 md:grid-cols-2">
		{#each stack as tier (tier.title)}
			<div class="border border-emerald-500/20 p-4">
				<p class="font-mono text-[0.65rem] tracking-[0.35em] text-emerald-400">{tier.title}</p>
				<p class="mt-2 text-sm text-neutral-300">{tier.body}</p>
			</div>
		{/each}
	</div>
</Panel>
