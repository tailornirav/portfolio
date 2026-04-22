<script lang="ts">
	import type { SkillCategory } from '$lib/types/index.js';

	interface Props {
		categories: SkillCategory[];
	}

	let { categories }: Props = $props();
</script>

<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
	{#each categories as category (category.title)}
		<div class="space-y-4">
			<h3
				class="border-b border-green-900/40 pb-2 font-mono text-xs font-bold tracking-widest text-white"
			>
				{category.title}
			</h3>
			<ul class="space-y-2">
				{#each category.skills as skill, i (i)}
					<li class="flex items-center gap-2 text-sm text-gray-400">
						<span class="text-green-500">&gt;</span>
						{skill}
					</li>
				{/each}
			</ul>
		</div>
	{/each}
</div>
