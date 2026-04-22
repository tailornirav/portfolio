<script lang="ts">
	import type { NavLink } from '$lib/types/portfolio';

	interface Props {
		links: NavLink[];
		active?: string;
	}

	let { links, active = '' }: Props = $props();
</script>

<nav class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-[#1a2a1a] bg-[#0a0f0a]/95 px-6 py-3 backdrop-blur-sm">
	<a href="/" class="font-mono text-sm font-bold tracking-widest text-[#e8f5e8]">
		ARCH_OS_V2.0
	</a>

	<div class="flex items-center gap-8">
		{#each links as link}
			<a
				href={link.href}
				class="font-mono text-xs tracking-widest transition-colors duration-150
					{active === link.label
					? 'border border-[#00ff41] px-2 py-0.5 text-[#00ff41]'
					: 'text-[#4a7a4a] hover:text-[#00ff41]'}"
			>
				{link.label}
			</a>
		{/each}
	</div>

	<a
		href="#contact"
		class="font-mono text-xs tracking-widest border border-[#4a7a4a] px-3 py-1.5 text-[#4a7a4a] transition-all duration-150 hover:border-[#00ff41] hover:text-[#00ff41]"
	>
		CONNECT
	</a>
</nav>
