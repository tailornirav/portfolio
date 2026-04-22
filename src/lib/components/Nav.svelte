<script lang="ts">
	import type { NavItem } from '$lib/types/index.js';
	import { page } from '$app/state';
	import { resolve } from '$app/paths';

	interface Props {
		items: NavItem[];
		siteName: string;
	}

	let { items, siteName }: Props = $props();
	let mobileOpen = $state(false);
</script>

<nav class="sticky top-0 z-50 border-b border-green-900/40 bg-black/95 backdrop-blur-sm">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<a href={resolve('/')} class="font-mono text-sm font-bold tracking-widest text-green-400">
				{siteName}
			</a>

			<div class="hidden items-center gap-1 md:flex">
				{#each items as item (item.href)}
					<a
						href={resolve(item.href as '/')}
						class="px-3 py-1.5 font-mono text-xs tracking-wider transition-colors
							{page.url.pathname === item.href
							? 'border border-green-500 bg-green-500/10 text-green-400'
							: 'text-gray-400 hover:text-green-400'}"
					>
						{item.label}
					</a>
				{/each}
				<a
					href="mailto:hello@example.com"
					class="ml-4 border border-green-500 px-4 py-1.5 font-mono text-xs tracking-wider text-green-400 transition-colors hover:bg-green-500/20"
				>
					CONNECT
				</a>
			</div>

			<button
				onclick={() => (mobileOpen = !mobileOpen)}
				class="border border-green-500/50 px-3 py-1.5 font-mono text-xs text-green-400 md:hidden"
			>
				{mobileOpen ? '[CLOSE]' : '[MENU]'}
			</button>
		</div>

		{#if mobileOpen}
			<div class="border-t border-green-900/40 pt-2 pb-4 md:hidden">
				{#each items as item (item.href)}
					<a
						href={resolve(item.href as '/')}
						onclick={() => (mobileOpen = false)}
						class="block px-3 py-2 font-mono text-xs tracking-wider
							{page.url.pathname === item.href ? 'text-green-400' : 'text-gray-400 hover:text-green-400'}"
					>
						{item.label}
					</a>
				{/each}
				<a
					href="mailto:hello@example.com"
					class="mx-3 mt-2 block border border-green-500 px-4 py-2 text-center font-mono text-xs tracking-wider text-green-400"
				>
					CONNECT
				</a>
			</div>
		{/if}
	</div>
</nav>
