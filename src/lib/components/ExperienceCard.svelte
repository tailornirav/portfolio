<script lang="ts">
	import type { Experience } from '$lib/types/index.js';

	interface Props {
		experience: Experience;
	}

	let { experience }: Props = $props();
</script>

<article
	class="group border border-green-900/30 bg-green-950/5 transition-colors hover:border-green-500/40"
>
	<div class="grid gap-6 p-6 sm:p-8 md:grid-cols-[220px_1fr]">
		<div class="space-y-1">
			<p class="font-mono text-sm font-semibold text-green-400">{experience.dateRange}</p>
			<p class="font-mono text-xs tracking-wider text-gray-500">{experience.statusLabel}</p>
		</div>

		<div class="space-y-4">
			<div>
				<h3 class="font-mono text-base font-bold tracking-wide text-white">
					{experience.title}
				</h3>
				<p class="mt-1 font-mono text-sm text-gray-400">{experience.company}</p>
			</div>

			<ul class="space-y-2">
				{#each experience.highlights as highlight, i (i)}
					<li class="flex gap-3 text-sm text-gray-300">
						<span class="mt-0.5 shrink-0 text-green-500">&gt;</span>
						<span>{highlight}</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</article>
