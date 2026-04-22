<script lang="ts">
	interface Props {
		title: string;
		lines?: string[];
	}

	let { title, lines = [] }: Props = $props();
</script>

<div class="mb-10">
	<h2
		class="mb-3 flex items-center gap-3 font-mono text-lg font-bold tracking-widest text-white sm:text-xl"
	>
		<span class="inline-block h-3 w-3 bg-green-500"></span>
		{title}
	</h2>
	{#if lines.length > 0}
		<div class="space-y-0.5">
			{#each lines as line, i (i)}
				<p class="font-mono text-xs text-gray-500">&gt; {line}</p>
			{/each}
		</div>
	{/if}
</div>
