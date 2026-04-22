<script lang="ts">
	interface Props {
		lines: string[];
		title?: string;
	}

	let { lines, title = 'terminal' }: Props = $props();
</script>

<div class="overflow-hidden border border-green-900/40 bg-black/80">
	<div class="flex items-center gap-2 border-b border-green-900/40 px-4 py-2">
		<span class="h-2 w-2 rounded-full bg-red-500/60"></span>
		<span class="h-2 w-2 rounded-full bg-yellow-500/60"></span>
		<span class="h-2 w-2 rounded-full bg-green-500/60"></span>
		<span class="ml-2 font-mono text-xs text-gray-500">{title}</span>
	</div>
	<div class="space-y-1 p-4">
		{#each lines as line, i (i)}
			<p class="font-mono text-xs text-green-400">
				<span class="text-gray-500">$</span>
				{line}
			</p>
		{/each}
		<p class="animate-pulse font-mono text-xs text-green-400">█</p>
	</div>
</div>
