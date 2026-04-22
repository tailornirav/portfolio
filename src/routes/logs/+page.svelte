<script lang="ts">
	import Panel from '$components/Panel.svelte';

	const logs = [
		{ ts: '2026.04.22', entry: 'Initialized portfolio edge deployment on Vercel.' },
		{ ts: '2026.04.18', entry: 'Migrated session persistence to @supabase/ssr cookie bridge.' },
		{ ts: '2026.04.02', entry: 'Ran Core Web Vitals audit - LCP 1.1s on 4G throttle.' }
	];
</script>

<svelte:head><title>LOGS // SYSTEM_ARCHITECT</title></svelte:head>

<Panel label="LOGS" title="RUNTIME JOURNAL">
	<ul class="mt-4 divide-y divide-emerald-500/10 font-mono text-sm">
		{#each logs as log (log.ts)}
			<li class="flex gap-4 py-3">
				<span class="text-emerald-400">{log.ts}</span>
				<span class="text-neutral-300">{log.entry}</span>
			</li>
		{/each}
	</ul>
</Panel>
