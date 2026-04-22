<script lang="ts">
	import type { SocialLink } from '$lib/types/portfolio';

	interface Props {
		links: SocialLink[];
	}

	let { links }: Props = $props();

	const year = new Date().getFullYear();
</script>

<footer class="flex flex-col items-start justify-between gap-4 border-t border-[#1a2a1a] px-8 py-6 md:flex-row md:items-center">
	<p class="font-mono text-[10px] tracking-widest text-[#2a5a2a]">
		© {year} SYSTEM_ARCHITECT // ALL RIGHTS RESERVED
	</p>

	<div class="flex gap-6">
		{#each links as link}
			<a
				href={link.href}
				target="_blank"
				rel="noopener noreferrer"
				class="font-mono text-[10px] tracking-widest text-[#2a5a2a] transition-colors duration-150 hover:text-[#00ff41]"
			>
				{link.label}
			</a>
		{/each}
	</div>
</footer>
