<script lang="ts">
	import type { Project } from '$lib/types/portfolio';

	interface Props {
		project: Project;
	}

	let { project }: Props = $props();
</script>

<div class="grid grid-cols-1 gap-px bg-[#1a2a1a] md:grid-cols-2">
	<!-- Info panel -->
	<div class="bg-[#0a0f0a] p-10">
		<p class="mb-4 font-mono text-[9px] tracking-widest text-[#00ff41]">
			&gt; {project.label}
		</p>
		<h3 class="font-mono text-2xl font-bold tracking-widest text-[#e8f5e8]">{project.title}</h3>
		<p class="mt-4 font-mono text-xs leading-loose text-[#6a9a6a]">{project.description}</p>

		<div class="mt-6 flex flex-wrap gap-2">
			{#each project.tags as tag}
				<span class="border border-[#1a3a1a] px-2 py-1 font-mono text-[9px] tracking-widest text-[#4a7a4a]">
					{tag}
				</span>
			{/each}
		</div>
	</div>

	<!-- Visual panel -->
	<div class="relative flex items-end justify-end overflow-hidden bg-[#050a05] p-6">
		<!-- Abstract terrain visualization -->
		<div class="absolute inset-0 flex items-center justify-center opacity-20">
			<svg viewBox="0 0 400 300" class="h-full w-full" xmlns="http://www.w3.org/2000/svg">
				{#each Array(12) as _, i}
					<ellipse
						cx="200"
						cy="{150 + i * 8}"
						rx="{180 - i * 12}"
						ry="{30 - i * 1.5}"
						fill="none"
						stroke="#00ff41"
						stroke-width="0.5"
						opacity="{1 - i * 0.07}"
					/>
				{/each}
			</svg>
		</div>

		<!-- Status badge -->
		<div class="relative z-10 border border-[#00ff41]/40 bg-[#0a0f0a]/80 px-4 py-2">
			<p class="font-mono text-[9px] tracking-widest text-[#00ff41]">{project.status}</p>
		</div>
	</div>
</div>
