<script lang="ts">
	const year = new Date().getFullYear();

	const links = [
		{ label: 'GITHUB', href: 'https://github.com/tailornirav' },
		{ label: 'LINKEDIN', href: 'https://www.linkedin.com/in/tnirav' },
		{ label: 'SOURCE', href: 'https://github.com/tailornirav/portfolio' }
	];
</script>

<footer
	class="mt-24 flex w-full flex-col items-center justify-between gap-4 border-t border-zinc-800 bg-black px-6 py-8 md:flex-row md:px-12"
>
	<div class="text-[10px] font-bold tracking-widest text-white uppercase">
		&copy; {year} NIRAV TAILOR // SYSTEMS ARCHITECT
	</div>

	<div class="flex items-center gap-2 border border-zinc-800 px-3 py-1">
		<span class="inline-block h-2 w-2 animate-pulse bg-[#00FF41]" aria-hidden="true"></span>
		<span class="font-code-sm text-[10px] tracking-widest text-zinc-400 uppercase">
			SYSTEM STATUS: OPERATIONAL.
		</span>
	</div>

	<div class="flex gap-6">
		{#each links as link (link.label)}
			<a
				href={link.href}
				rel="external noopener noreferrer"
				target="_blank"
				class="cursor-crosshair text-[10px] tracking-widest text-zinc-500 uppercase transition-colors hover:text-[#00FF41]"
			>
				{link.label}
			</a>
		{/each}
	</div>
</footer>
