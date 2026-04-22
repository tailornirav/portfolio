<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import TerminalHeader from '$components/TerminalHeader.svelte';
	import TerminalFooter from '$components/TerminalFooter.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>SYSTEM_ARCHITECT // Portfolio</title>
	<meta name="description" content="Edge-first portfolio built on SvelteKit + Supabase." />
</svelte:head>

<div class="flex min-h-screen flex-col bg-black text-neutral-200">
	<TerminalHeader />
	<main class="mx-auto w-full max-w-6xl grow px-6 py-12">
		{@render children()}
	</main>
	<TerminalFooter />
</div>
