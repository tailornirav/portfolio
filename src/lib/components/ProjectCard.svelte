<script lang="ts">
	import type { Project } from '$lib/types/index.js';

	interface Props {
		project: Project;
	}

	let { project }: Props = $props();
</script>

<article
	class="border border-green-900/30 bg-green-950/5 p-6 transition-colors hover:border-green-500/40 sm:p-8"
>
	<div class="mb-4 flex flex-wrap gap-2">
		{#each project.tags as tag, i (i)}
			<span class="flex items-center gap-1.5 font-mono text-xs tracking-wider text-green-400">
				<span class="inline-block h-1.5 w-1.5 rounded-full bg-green-500"></span>
				{tag}
			</span>
		{/each}
	</div>

	<h3 class="mb-3 font-mono text-xl font-bold tracking-wider text-white">
		{project.title}
	</h3>

	<p class="mb-6 text-sm leading-relaxed text-gray-400">
		{project.description}
	</p>

	<div class="flex gap-3">
		<div
			class="flex-1 border border-green-900/40 bg-black px-4 py-2 font-mono text-xs tracking-wider text-gray-500"
		>
			ENTER SHELL FOR TESTFLIGHT
		</div>
		<button
			class="border border-green-500 px-4 py-2 font-mono text-xs tracking-wider text-green-400 transition-colors hover:bg-green-500/20"
		>
			REQUEST
		</button>
	</div>
</article>
