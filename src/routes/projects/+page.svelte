<script lang="ts">
	import { projects, siteConfig } from '$lib/data/site.js';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
</script>

<svelte:head>
	<title>PROJECTS // {siteConfig.name}</title>
</svelte:head>

<div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
	<SectionHeader
		title="PROJECT_REGISTRY"
		lines={[
			'Scanning active repositories...',
			`${projects.length} projects indexed.`,
			'Rendering project manifests...'
		]}
	/>

	<div class="grid gap-6 lg:grid-cols-2">
		{#each projects as project (project.id)}
			<ProjectCard {project} />
		{/each}
	</div>
</div>
