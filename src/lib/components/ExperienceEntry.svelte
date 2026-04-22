<script lang="ts">
	import type { Experience } from '$supabase/types';
	import { statusLabel } from '$lib/experience';

	interface Props {
		entry: Experience;
	}

	let { entry }: Props = $props();
</script>

<article
	class="grid grid-cols-1 border-b border-emerald-500/10 last:border-b-0 md:grid-cols-[220px_1fr]"
>
	<div class="border-b border-emerald-500/10 p-6 md:border-r md:border-b-0">
		<p class="font-mono text-[0.7rem] tracking-[0.25em] text-emerald-400">{entry.period}</p>
		<p class="mt-2 font-mono text-[0.65rem] tracking-[0.3em] text-neutral-500">
			{statusLabel[entry.status]}
		</p>
	</div>

	<div class="p-6">
		<h3 class="font-mono text-lg tracking-[0.1em] text-neutral-100 uppercase">{entry.title}</h3>
		<p class="mt-1 font-mono text-sm text-neutral-400">{entry.company}</p>

		<ul class="mt-5 space-y-2 font-mono text-sm text-neutral-300">
			{#each entry.highlights as highlight (highlight)}
				<li class="flex gap-3">
					<span aria-hidden="true" class="text-emerald-400">&gt;</span>
					<span class="text-neutral-300">{highlight}</span>
				</li>
			{/each}
		</ul>
	</div>
</article>
