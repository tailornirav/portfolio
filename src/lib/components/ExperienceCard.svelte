<script lang="ts">
	import type { ExperienceEntry } from '$lib/types/portfolio';

	interface Props {
		entry: ExperienceEntry;
	}

	let { entry }: Props = $props();
</script>

<div class="grid grid-cols-[180px_1fr] border-b border-[#1a2a1a] last:border-b-0">
	<!-- Left: date / status column -->
	<div class="border-r border-[#1a2a1a] py-8 pr-6">
		<p class="font-mono text-xs font-semibold text-[#00b341]">{entry.dateRange}</p>
		<p class="mt-1 font-mono text-[10px] tracking-widest text-[#2a5a2a]">{entry.status}</p>
	</div>

	<!-- Right: content column -->
	<div class="py-8 pl-8">
		<h3 class="font-mono text-sm font-bold tracking-widest text-[#e8f5e8]">{entry.title}</h3>
		<p class="mt-1 font-mono text-xs text-[#4a7a4a]">{entry.company}</p>

		<div class="mt-5 space-y-2 border-t border-[#1a2a1a] pt-4">
			{#each entry.bullets as bullet}
				<p class="font-mono text-xs leading-relaxed text-[#6a9a6a]">
					<span class="mr-2 text-[#00b341]">&gt;</span>{bullet}
				</p>
			{/each}
		</div>
	</div>
</div>
