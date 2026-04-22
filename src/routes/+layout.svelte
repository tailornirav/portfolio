<script lang="ts">
	import './layout.css';
	import TerminalHeader from '$components/TerminalHeader.svelte';
	import TerminalFooter from '$components/TerminalFooter.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
	<link rel="mask-icon" href="/favicon.svg" color="#00FF41" />
</svelte:head>

<div class="grid-bg flex min-h-screen flex-col bg-black text-white">
	<TerminalHeader />
	<main class="mx-auto w-full max-w-7xl flex-1 space-y-32 px-4 py-24 md:px-12">
		{@render children()}
	</main>
	<TerminalFooter />
</div>
