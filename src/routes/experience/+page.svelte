<script lang="ts">
	import ExperienceEntry from '$components/ExperienceEntry.svelte';
	import { experiences } from '$lib/experience';
</script>

<svelte:head><title>EXPERIENCE_LOG // SYSTEM_ARCHITECT</title></svelte:head>

<header class="border-b border-emerald-500/20 pb-6">
	<h1 class="flex items-center gap-3 font-mono text-lg tracking-[0.2em] text-emerald-400">
		<span class="inline-block h-3 w-3 bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.85)]"
		></span>
		EXPERIENCE_LOG
	</h1>
	<div class="mt-6 space-y-1 font-mono text-xs text-neutral-400">
		<p>&gt; Querying chronological execution path...</p>
		<p>&gt; {experiences.length} records found.</p>
		<p>&gt; Rendering system architecture history...</p>
	</div>
</header>

<section class="mt-10 border border-emerald-500/20 bg-neutral-950/40">
	{#each experiences as entry (entry.id)}
		<ExperienceEntry {entry} />
	{/each}
</section>
