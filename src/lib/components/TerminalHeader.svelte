<script lang="ts">
	import { onMount } from 'svelte';

	const sections = ['work', 'experience', 'skills', 'sentiero'] as const;
	type SectionId = (typeof sections)[number];

	let active = $state<SectionId>('work');

	onMount(() => {
		const io = new IntersectionObserver(
			(entries) => {
				for (const e of entries) {
					if (e.isIntersecting && sections.includes(e.target.id as SectionId)) {
						active = e.target.id as SectionId;
					}
				}
			},
			{ rootMargin: '-40% 0px -50% 0px', threshold: 0 }
		);

		for (const id of sections) {
			const el = document.getElementById(id);
			if (el) io.observe(el);
		}

		return () => io.disconnect();
	});

	const linkBase =
		"border-b pb-1 font-['Space_Grotesk'] text-xs tracking-widest uppercase transition-all duration-75 md:text-sm";
	const linkIdle = 'text-zinc-400 border-transparent hover:text-[#00FF41]';
	const linkActive = 'text-[#00FF41] border-[#00FF41]';
</script>

<nav
	class="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b border-zinc-800 bg-black/95 px-4 backdrop-blur md:px-12"
>
	<a
		href="#top"
		class="font-h2 text-lg font-bold tracking-tighter text-white uppercase"
		aria-label="Return to top"
	>
		NIRAV TAILOR
	</a>

	<div class="hidden items-center gap-8 md:flex">
		<a href="#work" class="{linkBase} {active === 'work' ? linkActive : linkIdle}">WORK</a>
		<a href="#experience" class="{linkBase} {active === 'experience' ? linkActive : linkIdle}"
			>EXPERIENCE</a
		>
		<a href="#skills" class="{linkBase} {active === 'skills' ? linkActive : linkIdle}">SKILLS</a>
		<a href="#sentiero" class="{linkBase} {active === 'sentiero' ? linkActive : linkIdle}"
			>SENTIERO</a
		>
	</div>

	<div class="flex gap-4">
		<a
			href="https://github.com/tailornirav"
			rel="external noopener noreferrer"
			target="_blank"
			class="hover-terminal font-code-sm border border-zinc-800 px-4 py-2 text-xs uppercase transition-colors"
		>
			GITHUB
		</a>
		<a
			href="https://www.linkedin.com/in/tnirav"
			rel="external noopener noreferrer"
			target="_blank"
			class="hover-terminal font-code-sm border border-white bg-black px-4 py-2 text-xs text-white uppercase transition-colors"
		>
			CONNECT
		</a>
	</div>
</nav>
