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

		{#if item.lede}
			<p class="font-body-mono mb-4 text-zinc-300">{item.lede}</p>
		{/if}

		<ul class="font-body-mono space-y-3 text-zinc-400">
			{#each item.highlights as h (h.label)}
				<li class="flex gap-3">
					<span class="mt-[2px] shrink-0 text-[#00FF41]" aria-hidden="true">&gt;</span>
					<span>
						<span class="font-h3 text-[11px] tracking-[0.1em] text-white uppercase">
							{h.label}:
						</span>
						<span class="ml-1">{h.body}</span>
					</span>
				</li>
			{/each}
		</ul>
	{/snippet}
</TimelineSection>

<TimelineSection id="education" title="EDUCATION" entries={education}>
	{#snippet entry(item: Education)}
		<h3 class="font-h3 mb-2 text-white uppercase">{item.degree}</h3>
		<p class="font-code-sm text-zinc-500 uppercase">{item.institution}</p>
	{/snippet}
</TimelineSection>
