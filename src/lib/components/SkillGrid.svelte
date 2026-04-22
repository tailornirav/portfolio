<script lang="ts">
	import type { SkillCategory } from '$lib/types/portfolio';

	interface Props {
		categories: SkillCategory[];
	}

	let { categories }: Props = $props();
</script>

<div class="grid grid-cols-2 gap-px bg-[#1a2a1a] md:grid-cols-4">
	{#each categories as cat}
		<div class="bg-[#0a0f0a] p-6">
			<h4 class="mb-4 font-mono text-[10px] font-bold tracking-widest text-[#00ff41]">
				{cat.name}
			</h4>
			<ul class="space-y-1.5">
				{#each cat.items as item}
					<li class="font-mono text-xs text-[#4a7a4a]">
						<span class="mr-1 text-[#1a4a1a]">•</span>
						{item}
					</li>
				{/each}
			</ul>
		</div>
	{/each}
</div>
