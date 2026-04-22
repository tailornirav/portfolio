<script lang="ts">
	import HeroSection from '$components/HeroSection.svelte';
	import HubSection from '$components/HubSection.svelte';
	import SentieroSection from '$components/SentieroSection.svelte';
	import SkillsSection from '$components/SkillsSection.svelte';
	import TimelineSection from '$components/TimelineSection.svelte';
	import { education, experiences, type Education, type Experience } from '$lib/experience';
</script>

<svelte:head>
	<title>Nirav Tailor // Software Engineer</title>
	<meta
		name="description"
		content="Nirav Tailor — Software Engineer & iOS Architect. Offline-first resilience, distributed systems, and spatial intelligence."
	/>
	<meta property="og:title" content="Nirav Tailor // Software Engineer" />
	<meta
		property="og:description"
		content="Offline-first resilience, distributed systems, and spatial intelligence."
	/>
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary" />
</svelte:head>

<HeroSection />

<HubSection />

<SentieroSection />

<SkillsSection />

<TimelineSection id="experience" title="EXPERIENCE HIGHLIGHTS" entries={experiences}>
	{#snippet entry(item: Experience)}
		<h3 class="font-h3 mb-2 text-white uppercase">{item.company}</h3>
		<p class="font-code-sm mb-4 text-zinc-500 uppercase">{item.role}</p>
		<p class="font-body-mono text-zinc-400">{item.summary}</p>
	{/snippet}
</TimelineSection>

<TimelineSection id="education" title="EDUCATION" entries={education}>
	{#snippet entry(item: Education)}
		<h3 class="font-h3 mb-2 text-white uppercase">{item.degree}</h3>
		<p class="font-code-sm text-zinc-500 uppercase">{item.institution}</p>
	{/snippet}
</TimelineSection>
