<script lang="ts">
	interface Props {
		lines: string[];
		class?: string;
	}

	let { lines, class: className = '' }: Props = $props();
</script>

<div class="font-mono text-xs text-[#4a9a4a] {className}">
	{#each lines as line}
		<p class="leading-relaxed">&gt; {line}</p>
	{/each}
</div>
