<script lang="ts">
	import './layout.css';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { navItems, siteConfig } from '$lib/data/site.js';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&display=swap"
		rel="stylesheet"
	/>
	<title>{siteConfig.name} // {siteConfig.role}</title>
	<meta name="description" content={siteConfig.tagline} />
</svelte:head>

<div id="top" class="flex min-h-screen flex-col bg-black">
	<Nav items={navItems} siteName={siteConfig.version} />
	<main class="flex-1">
		{@render children()}
	</main>
	<Footer config={siteConfig} />
</div>
