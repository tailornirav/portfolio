<script lang="ts">
	import { resolve } from '$app/paths';

	const year = new Date().getFullYear();
	const externalLinks = [
		{ label: 'GITHUB', href: 'https://github.com' },
		{ label: 'LINKEDIN', href: 'https://linkedin.com' },
		{ label: 'SOURCE_CODE', href: 'https://github.com' }
	];
</script>

<footer
	class="mt-24 border-t border-emerald-500/10 py-8 font-mono text-[0.65rem] tracking-[0.3em] text-neutral-500"
>
	<div
		class="mx-auto flex max-w-6xl flex-col gap-4 px-6 md:flex-row md:items-center md:justify-between"
	>
		<span>&copy; {year} SYSTEM_ARCHITECT // ALL RIGHTS RESERVED</span>
		<nav aria-label="Footer" class="flex flex-wrap gap-6">
			{#each externalLinks as link (link.label)}
				<a
					href={link.href}
					class="transition-colors hover:text-emerald-300"
					rel="external noopener noreferrer"
					target="_blank">{link.label}</a
				>
			{/each}
			<a href={resolve('/connect')} class="transition-colors hover:text-emerald-300">
				ENCRYPTED_COMMS
			</a>
		</nav>
	</div>
</footer>
