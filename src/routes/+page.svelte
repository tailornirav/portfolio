<script lang="ts">
	import type { PageData } from './$types';
	import NavBar from '$lib/components/NavBar.svelte';
	import TerminalBoot from '$lib/components/TerminalBoot.svelte';
	import ExperienceCard from '$lib/components/ExperienceCard.svelte';
	import SkillGrid from '$lib/components/SkillGrid.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import Footer from '$lib/components/Footer.svelte';

	interface Props {
		data: PageData;
	}

	let { data }: Props = $props();

	const bootLines = $derived([
		'Querying chronological execution path...',
		`${data.experienceEntries.length} records found.`,
		'Rendering system architecture history...'
	]);
</script>

<svelte:head>
	<title>ARCH_OS_V2.0 — System Architect</title>
	<meta name="description" content="iOS Architect & Enterprise Developer — Portfolio" />
</svelte:head>

<div class="min-h-screen bg-[#0a0f0a] text-[#e8f5e8]">
	<NavBar links={data.navLinks} active="EXPERIENCE" />

	<main class="pt-16">
		<!-- ── EXPERIENCE LOG ── -->
		<section id="experience" class="px-8 py-16">
			<div class="mx-auto max-w-5xl">
				<!-- Section header -->
				<div class="mb-8">
					<div class="mb-4 flex items-center gap-3">
						<span class="h-3 w-3 bg-[#00ff41]"></span>
						<h1 class="font-mono text-2xl font-bold tracking-widest text-[#e8f5e8]">
							EXPERIENCE_LOG
						</h1>
					</div>
					<TerminalBoot lines={bootLines} />
				</div>

				<!-- Experience table -->
				<div class="border border-[#1a2a1a]">
					{#each data.experienceEntries as entry (entry.id)}
						<ExperienceCard {entry} />
					{/each}
				</div>
			</div>
		</section>

		<!-- ── ARCHITECTURE / SKILLS ── -->
		<section id="architecture" class="px-8 py-16">
			<div class="mx-auto max-w-5xl">
				<div class="mb-8">
					<h2 class="font-mono text-lg font-bold tracking-widest text-[#e8f5e8]">
						SYSTEM ARCHITECTURE / CAPABILITIES
					</h2>
					<div class="mt-2 h-px bg-[#1a2a1a]"></div>
				</div>

				<SkillGrid categories={data.skillCategories} />
			</div>
		</section>

		<!-- ── PROJECTS ── -->
		<section id="manifesto" class="px-8 py-16">
			<div class="mx-auto max-w-5xl">
				<div class="mb-8">
					<h2 class="font-mono text-lg font-bold tracking-widest text-[#e8f5e8]">
						PROJECT_MANIFEST
					</h2>
					<div class="mt-2 h-px bg-[#1a2a1a]"></div>
				</div>

				<div class="space-y-px border border-[#1a2a1a]">
					{#each data.projects as project (project.id)}
						<ProjectCard {project} />
					{/each}
				</div>
			</div>
		</section>
	</main>

	<Footer links={data.socialLinks} />
</div>
