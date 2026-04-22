<script lang="ts">
	import { skillCategories, siteConfig } from '$lib/data/site.js';
	import SkillGrid from '$lib/components/SkillGrid.svelte';
	import SectionHeader from '$lib/components/SectionHeader.svelte';
	import TerminalBlock from '$lib/components/TerminalBlock.svelte';
</script>

<svelte:head>
	<title>SKILLS // {siteConfig.name}</title>
</svelte:head>

<div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
	<SectionHeader
		title="SYSTEM_ARCHITECTURE"
		lines={[
			'Loading capability matrix...',
			'Mapping technology graph...',
			'All modules loaded successfully.'
		]}
	/>

	<div class="mb-16">
		<SkillGrid categories={skillCategories} />
	</div>

	<div class="border-t border-green-900/40 pt-16">
		<SectionHeader title="RUNTIME_DIAGNOSTICS" />
		<div class="grid gap-6 md:grid-cols-2">
			<TerminalBlock
				title="capabilities.sh"
				lines={[
					'scanning edge & mobile subsystems...',
					'Swift/SwiftUI :: LOADED',
					'Objective-C :: LOADED',
					'Core Data/Realm :: LOADED',
					'Offline-First Architecture :: ACTIVE',
					'status: mobile stack READY'
				]}
			/>
			<TerminalBlock
				title="distributed.sh"
				lines={[
					'scanning distributed systems...',
					'Docker/K8s :: ORCHESTRATED',
					'gRPC/Protocol :: CONNECTED',
					'Event Sourcing :: STREAMING',
					'HA Architecture :: 99.99% UPTIME',
					'status: backend stack READY'
				]}
			/>
		</div>
	</div>

	<div class="mt-16 border-t border-green-900/40 pt-16">
		<SectionHeader title="METHODOLOGY" />
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each [{ title: 'OFFLINE-FIRST', desc: 'Architecture designed to function without connectivity. CRDT-based sync conflict resolution via custom OQOT implementation.' }, { title: 'EDGE COMPUTING', desc: 'Computation pushed to the edge for minimal latency. On-device ML inference with CoreML and optimized model pipelines.' }, { title: 'RESILIENT SYSTEMS', desc: 'Circuit breakers, graceful degradation, and self-healing architectures. Built for zero-downtime deployments.' }] as method (method.title)}
				<div
					class="border border-green-900/30 bg-green-950/5 p-6 transition-colors hover:border-green-500/40"
				>
					<h3 class="mb-3 font-mono text-sm font-bold text-white">{method.title}</h3>
					<p class="text-sm leading-relaxed text-gray-400">{method.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</div>
