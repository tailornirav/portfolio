<script lang="ts">
	import { resolve } from '$app/paths';
	import Panel from '$components/Panel.svelte';
	import ExperienceEntry from '$components/ExperienceEntry.svelte';
	import { experiences } from '$lib/experience';

	const capabilities = [
		{
			group: 'EDGE & MOBILE',
			items: ['SwiftUI / SwiftCLI', 'Objective-C', 'Core Data / Realm', 'Offline-First Sync']
		},
		{
			group: 'DISTRIBUTED SYSTEMS',
			items: ['Docker / K8s', 'gRPC / Protobuf', 'Event Sourcing', 'NVQ Architectures']
		},
		{
			group: 'DATA & LANGUAGES',
			items: ['Python / Rust', 'PostgreSQL', 'Redis / Memcached', 'GraphQL']
		},
		{
			group: 'INTELLIGENCE',
			items: ['Nvidia API Integration', 'LLM / Vision', 'On-Device Inference', 'Vector DBs']
		}
	];
</script>

<section class="grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_1fr]">
	<Panel class="lg:col-span-2">
		<div class="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
			<div>
				<p class="font-mono text-[0.65rem] tracking-[0.35em] text-emerald-400">
					CURRENTLY BASED IN BHUBANESWAR, IN.
				</p>
				<h1
					class="mt-4 font-mono text-2xl leading-snug tracking-[0.15em] text-neutral-100 uppercase md:text-3xl"
				>
					NIRAV TAILOR
				</h1>
				<p class="mt-2 font-mono text-sm tracking-[0.2em] text-neutral-400">
					/ SOFTWARE ENGINEER &amp; iOS ARCHITECT
				</p>
			</div>
			<div class="max-w-md border-l-2 border-emerald-400/70 pl-4 text-sm text-neutral-300">
				<p>
					I believe in offline-first resilience. I architect systems that survive zero-connectivity
					environments, ensuring robust performance regardless of network conditions.
				</p>
			</div>
		</div>
	</Panel>

	<Panel label="DIGITAL IDENTITY" title="THE HUB">
		<p class="mt-2 text-xs tracking-[0.3em] text-neutral-500">Direct transmission coordinates</p>
		<div class="mt-6">
			<a
				href={resolve('/connect')}
				class="inline-flex items-center gap-3 border border-emerald-400/80 px-5 py-3 font-mono text-[0.65rem] tracking-[0.35em] text-neutral-100 transition-colors hover:border-emerald-300 hover:bg-emerald-500/10"
			>
				<span
					class="inline-block h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.85)]"
				></span>
				SAVE CONTACT TO DEVICE
			</a>
		</div>
	</Panel>

	<Panel class="min-h-[220px]">
		<div
			class="relative flex h-full w-full items-center justify-center overflow-hidden border border-emerald-500/20 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15),transparent_60%)]"
		>
			<p class="font-mono text-[0.65rem] tracking-[0.35em] text-neutral-500">AWAITING PING_</p>
		</div>
	</Panel>

	<Panel class="lg:col-span-2">
		<div class="grid gap-6 md:grid-cols-[1fr_auto] md:items-start">
			<div>
				<div
					class="flex items-center gap-2 font-mono text-[0.6rem] tracking-[0.35em] text-emerald-400"
				>
					<span class="border border-emerald-500/60 px-2 py-1">PROPRIETARY SPATIAL ENGINE</span>
					<span class="border border-neutral-600 px-2 py-1 text-neutral-400"
						>PRIVATE REPOSITORY</span
					>
				</div>
				<h2 class="mt-5 font-mono text-xl tracking-[0.1em] text-neutral-100 uppercase">SENTIERO</h2>
				<p class="mt-3 max-w-lg text-sm text-neutral-300">
					Next-generation spatial mapping utilizing Gemini LLMs combined with native SwiftUI
					architectures. Designed for real-time environment analysis and decentralized pathfinding.
				</p>

				<a
					href="mailto:hello@example.com?subject=Sentiero%20TestFlight%20Access"
					class="mt-6 inline-flex items-center gap-3 border border-neutral-300 bg-neutral-100 px-6 py-3 font-mono text-[0.65rem] tracking-[0.35em] text-black transition-colors hover:bg-emerald-300"
					rel="external noopener noreferrer"
				>
					REQUEST TESTFLIGHT ACCESS
				</a>
			</div>
			<div
				class="min-h-[160px] w-full min-w-[220px] border border-emerald-500/30 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.12),transparent_60%)] md:w-[260px]"
			>
				<div class="flex h-full flex-col justify-end p-3">
					<div class="border border-emerald-500/50 bg-black/60 p-3">
						<p class="font-mono text-[0.55rem] tracking-[0.3em] text-emerald-400">
							ROUTE CALCULATED
						</p>
						<p class="mt-1 font-mono text-[0.55rem] tracking-[0.3em] text-neutral-400">
							ACCURACY: 0.82M
						</p>
					</div>
				</div>
			</div>
		</div>
	</Panel>

	<Panel label="SYSTEM ARCHITECTURE / CAPABILITIES" class="lg:col-span-2">
		<div class="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
			{#each capabilities as cap (cap.group)}
				<div class="border border-emerald-500/20 p-4">
					<p class="font-mono text-[0.6rem] tracking-[0.35em] text-emerald-400">{cap.group}</p>
					<ul class="mt-3 space-y-1 font-mono text-xs text-neutral-300">
						{#each cap.items as item (item)}
							<li>{item}</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</Panel>

	<Panel label="EXPERIENCE HIGHLIGHTS" class="lg:col-span-2">
		<div class="mt-4 divide-y divide-emerald-500/10">
			{#each experiences.slice(0, 3) as entry (entry.id)}
				<ExperienceEntry {entry} />
			{/each}
		</div>
		<a
			href={resolve('/experience')}
			class="mt-6 inline-block font-mono text-[0.65rem] tracking-[0.35em] text-emerald-400 transition-colors hover:text-emerald-300"
		>
			&gt; VIEW FULL EXPERIENCE_LOG
		</a>
	</Panel>
</section>
