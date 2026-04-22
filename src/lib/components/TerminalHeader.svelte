<script lang="ts">
	import { page } from '$app/state';
	import { resolve } from '$app/paths';
	import type { Pathname } from '$app/types';

	interface NavLink {
		href: Pathname;
		label: string;
	}

	const links: NavLink[] = [
		{ href: '/manifesto', label: 'MANIFESTO' },
		{ href: '/architecture', label: 'ARCHITECTURE' },
		{ href: '/experience', label: 'EXPERIENCE' },
		{ href: '/logs', label: 'LOGS' }
	];

	let pathname = $derived(page.url?.pathname ?? '/');
</script>

<header class="sticky top-0 z-40 border-b border-emerald-500/10 bg-black/90 backdrop-blur">
	<div
		class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-xs tracking-[0.2em]"
	>
		<a
			href={resolve('/')}
			class="font-mono text-emerald-400 transition-colors hover:text-emerald-300"
			aria-label="Return to hub"
		>
			ARCH_OS_V2.0
		</a>

		<nav aria-label="Primary" class="hidden items-center gap-8 font-mono text-neutral-400 md:flex">
			{#each links as link (link.href)}
				{@const active = pathname.startsWith(link.href)}
				<a
					href={resolve(link.href)}
					class="transition-colors hover:text-emerald-300"
					class:text-emerald-400={active}
					aria-current={active ? 'page' : undefined}
				>
					{#if active}
						<span class="border border-emerald-500/60 px-2 py-1">{link.label}</span>
					{:else}
						{link.label}
					{/if}
				</a>
			{/each}
		</nav>

		<a
			href={resolve('/connect')}
			class="border border-neutral-500 px-4 py-2 font-mono text-[0.65rem] tracking-[0.35em] text-neutral-200 transition-colors hover:border-emerald-400 hover:text-emerald-300"
		>
			CONNECT
		</a>
	</div>
</header>
