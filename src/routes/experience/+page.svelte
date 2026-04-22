<script lang="ts">
	import { experiences, siteConfig } from '$lib/data/site.js';
	import ExperienceCard from '$lib/components/ExperienceCard.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
</script>

<svelte:head>
	<title>EXPERIENCE_LOG // {siteConfig.name}</title>
</svelte:head>

<div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
	<SectionHeader
		title="EXPERIENCE_LOG"
		lines={[
			'Querying chronological execution path...',
			`${experiences.length} records found.`,
			'Rendering system architecture history...'
		]}
	/>

	<div class="space-y-4">
		{#each experiences as exp (exp.id)}
			<ExperienceCard experience={exp} />
		{/each}
	</div>
</div>
