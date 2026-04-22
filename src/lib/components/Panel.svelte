<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		label?: string;
		title?: string;
		class?: string;
		children: Snippet;
	}

	let { label, title, class: className = '', children }: Props = $props();
</script>

<section class={`border border-emerald-500/20 bg-neutral-950/60 p-6 ${className}`}>
	{#if label}
		<p class="font-mono text-[0.65rem] tracking-[0.35em] text-neutral-500">{label}</p>
	{/if}
	{#if title}
		<h2 class="mt-2 font-mono text-lg tracking-[0.12em] text-neutral-100 uppercase">{title}</h2>
	{/if}
	<div class="mt-4 text-sm text-neutral-300">
		{@render children()}
	</div>
</section>
