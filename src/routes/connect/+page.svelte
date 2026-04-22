<script lang="ts">
	import Panel from '$components/Panel.svelte';

	const channels = [
		{ label: 'EMAIL', value: 'hello@example.com', href: 'mailto:hello@example.com' },
		{ label: 'GITHUB', value: '@tailornirav', href: 'https://github.com/tailornirav' },
		{ label: 'LINKEDIN', value: '/in/tailornirav', href: 'https://linkedin.com/in/tailornirav' }
	];
</script>

<svelte:head><title>CONNECT // SYSTEM_ARCHITECT</title></svelte:head>

<Panel label="CONNECT" title="TRANSMISSION CHANNELS">
	<p class="max-w-lg text-sm text-neutral-400">
		No forms, no trackers. Route your signal through one of the channels below.
	</p>

	<ul class="mt-6 divide-y divide-emerald-500/10 font-mono text-sm">
		{#each channels as channel (channel.label)}
			<li class="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between">
				<span class="text-[0.65rem] tracking-[0.35em] text-emerald-400">{channel.label}</span>
				<a
					href={channel.href}
					class="text-neutral-200 transition-colors hover:text-emerald-300"
					rel="external noopener noreferrer"
				>
					{channel.value}
				</a>
			</li>
		{/each}
	</ul>
</Panel>
