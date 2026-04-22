<script lang="ts">
	import { siteConfig, projects, skillCategories, experiences } from '$lib/data/site.js';
	import { resolve } from '$app/paths';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import SkillGrid from '$lib/components/SkillGrid.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import TerminalBlock from '$lib/components/TerminalBlock.svelte';

	const ellipseIndices = Array.from({ length: 8 }, (_, i) => i);
</script>

<svelte:head>
	<title>{siteConfig.name} // {siteConfig.role}</title>
</svelte:head>

<!-- Hero Section -->
<section class="border-b border-green-900/30 bg-gradient-to-b from-green-950/10 to-black">
	<div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
		<div class="max-w-3xl">
			<p class="mb-4 font-mono text-xs tracking-widest text-gray-500">
				CURRENTLY BASED IN {siteConfig.location}
			</p>
			<h1
				class="font-mono text-3xl leading-tight font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
			>
				{siteConfig.name}
				<br />
				<span class="text-gray-400">/ {siteConfig.role}</span>
			</h1>
			<div class="mt-8 border-l-2 border-green-500 pl-4">
				<p class="max-w-xl font-mono text-sm leading-relaxed text-gray-300">
					{siteConfig.tagline}
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Digital Identity / The Hub Section -->
<section class="border-b border-green-900/30">
	<div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
		<div class="grid gap-8 lg:grid-cols-2">
			<div class="border border-green-900/30 bg-green-950/5 p-6 sm:p-8">
				<p class="mb-2 font-mono text-xs tracking-widest text-gray-500">DIGITAL IDENTITY</p>
				<h2 class="mb-6 font-mono text-2xl font-bold text-white">THE HUB</h2>
				<div class="mb-6 grid grid-cols-2 gap-4">
					<div>
						<p class="font-mono text-xs text-gray-500">Direct transmission coordinates</p>
					</div>
					<div>
						<p class="font-mono text-xs text-gray-500">ENCRYPTED PIPELINE</p>
					</div>
				</div>
				<a
					href={siteConfig.email}
					rel="external"
					class="inline-flex items-center gap-2 border border-green-500 px-5 py-2.5 font-mono text-xs tracking-wider text-green-400 transition-colors hover:bg-green-500/20"
				>
					<span class="h-2 w-2 animate-pulse rounded-full bg-green-500"></span>
					SEND CONTENT TO DEVLOG
				</a>
			</div>

			<div class="border border-green-900/30 bg-green-950/5 p-6 sm:p-8">
				<TerminalBlock
					title="system_status"
					lines={[
						'initializing ARCH_OS v2.0...',
						'loading system modules...',
						'status: ALL SYSTEMS OPERATIONAL',
						`uptime: ${Math.floor((Date.now() - new Date('2018-01-01').getTime()) / 86400000)} days`,
						'ready for input...'
					]}
				/>
			</div>
		</div>
	</div>
</section>

<!-- Featured Project: Sentiero -->
<section class="border-b border-green-900/30">
	<div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
		<div class="grid items-center gap-8 lg:grid-cols-2">
			<div>
				<ProjectCard project={projects[0]} />
			</div>
			<div class="relative overflow-hidden border border-green-900/30 bg-green-950/5 p-1">
				<div
					class="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-gray-900 via-green-950/20 to-black"
				>
					<div class="space-y-2 text-center">
						<div class="relative mx-auto h-48 w-48">
							<svg viewBox="0 0 200 200" class="h-full w-full">
								{#each ellipseIndices as i (i)}
									<ellipse
										cx="100"
										cy="100"
										rx={80 - i * 8}
										ry={40 - i * 3}
										fill="none"
										stroke="rgb(34 197 94 / {0.15 + i * 0.05})"
										stroke-width="0.5"
										transform="rotate({i * 5} 100 100)"
									/>
								{/each}
							</svg>
						</div>
						<div class="inline-block border border-green-500 bg-green-500/10 px-4 py-2">
							<p class="font-mono text-xs text-green-400">ROUTE CALCULATED</p>
							<p class="font-mono text-xs text-gray-500">ANCHORED: 0 KM</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- System Architecture / Skills -->
<section class="border-b border-green-900/30">
	<div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
		<SectionHeader title="SYSTEM ARCHITECTURE / CAPABILITIES" />
		<SkillGrid categories={skillCategories} />
	</div>
</section>

<!-- Experience Highlights -->
<section class="border-b border-green-900/30">
	<div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
		<SectionHeader title="EXPERIENCE HIGHLIGHTS" />
		<div class="space-y-4">
			{#each experiences.slice(0, 3) as exp (exp.id)}
				<div
					class="border border-green-900/30 bg-green-950/5 p-6 transition-colors hover:border-green-500/40"
				>
					<div class="flex flex-col gap-4 sm:flex-row sm:items-start">
						<div class="shrink-0">
							<p
								class="inline-block border border-green-500/30 px-2 py-1 font-mono text-xs text-green-400"
							>
								{exp.dateRange}
							</p>
						</div>
						<div class="flex-1">
							<h3 class="font-mono text-sm font-bold text-white">{exp.company}</h3>
							<p class="mt-0.5 font-mono text-xs text-gray-500 uppercase">{exp.statusLabel}</p>
							<p class="mt-2 text-sm text-gray-400">{exp.highlights[0]}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
		<div class="mt-8 text-center">
			<a
				href={resolve('/experience')}
				class="inline-flex items-center gap-2 border border-green-500 px-6 py-2.5 font-mono text-xs tracking-wider text-green-400 transition-colors hover:bg-green-500/20"
			>
				VIEW FULL EXPERIENCE_LOG &rarr;
			</a>
		</div>
	</div>
</section>

<!-- Status Bar -->
<section>
	<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
		<div class="grid gap-6 sm:grid-cols-3">
			<div class="text-center sm:text-left">
				<p class="font-mono text-xs tracking-widest text-gray-500">SYSTEM STATUS</p>
				<p class="mt-1 font-mono text-sm text-green-400">OPERATIONAL</p>
			</div>
			<div class="text-center">
				<p class="font-mono text-xs tracking-widest text-gray-500">ACTIVE THREADS</p>
				<p class="mt-1 font-mono text-sm text-green-400">7 PROCESSES</p>
			</div>
			<div class="text-center sm:text-right">
				<p class="font-mono text-xs tracking-widest text-gray-500">BUILD VERSION</p>
				<p class="mt-1 font-mono text-sm text-green-400">{siteConfig.version}</p>
			</div>
		</div>
	</div>
</section>
