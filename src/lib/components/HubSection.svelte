<script lang="ts">
	interface Channel {
		label: string;
		value: string;
		href: string;
		icon: string;
		external: boolean;
	}

	const channels: Channel[] = [
		{
			label: 'EMAIL',
			value: 'me@tailornirav.dev',
			href: 'mailto:me@tailornirav.dev',
			icon: 'mail',
			external: false
		},
		{
			label: 'WEBSITE',
			value: 'tailornirav.dev',
			href: 'https://tailornirav.dev',
			icon: 'language',
			external: true
		},
		{
			label: 'GITHUB',
			value: '@tailornirav',
			href: 'https://github.com/tailornirav',
			icon: 'code',
			external: true
		},
		{
			label: 'LINKEDIN',
			value: '/in/tnirav',
			href: 'https://www.linkedin.com/in/tnirav',
			icon: 'hub',
			external: true
		}
	];
</script>

<section id="work" class="relative border border-zinc-800 bg-black">
	<div
		class="pointer-events-none absolute -top-24 -right-24 h-64 w-64 bg-[#00FF41] opacity-[0.04] blur-[120px]"
		aria-hidden="true"
	></div>

	<header class="flex items-center justify-between border-b border-zinc-800 px-6 py-3 md:px-8">
		<div class="flex items-center gap-3">
			<span class="inline-block h-2 w-2 animate-pulse bg-[#00FF41]" aria-hidden="true"></span>
			<span class="font-label-caps text-zinc-500">DIGITAL_IDENTITY.SYS</span>
		</div>
		<span class="font-code-sm tracking-widest text-zinc-600 uppercase">$ whoami</span>
	</header>

	<div class="relative p-6 md:p-10">
		<div class="mb-10 max-w-xl">
			<h2 class="font-h2 text-white uppercase">
				<span class="text-[#00FF41]">&gt;</span> THE HUB
			</h2>
			<p class="font-code-sm mt-4 leading-relaxed text-zinc-400">
				Direct transmission coordinates. The fastest path into my inbox — no forms, no funnels.
			</p>
		</div>

		<ul
			class="grid grid-cols-1 gap-px border border-zinc-800 bg-zinc-800 sm:grid-cols-2"
			aria-label="Contact channels"
		>
			{#each channels as channel (channel.label)}
				<li>
					<a
						href={channel.href}
						rel="external noopener noreferrer"
						target={channel.external ? '_blank' : undefined}
						class="group relative flex items-center gap-5 bg-black p-5 transition-colors hover:bg-zinc-950"
					>
						<span
							class="material-symbols-outlined flex h-11 w-11 shrink-0 items-center justify-center border border-zinc-800 text-zinc-500 transition-colors group-hover:border-[#00FF41] group-hover:text-[#00FF41]"
							aria-hidden="true"
						>
							{channel.icon}
						</span>

						<div class="min-w-0 flex-1">
							<div class="font-label-caps text-zinc-500 group-hover:text-[#00FF41]">
								{channel.label}
							</div>
							<div class="mt-1 truncate font-mono text-sm text-white group-hover:text-[#00FF41]">
								{channel.value}
							</div>
						</div>

						<span
							class="material-symbols-outlined shrink-0 text-sm text-zinc-700 transition-all group-hover:translate-x-0.5 group-hover:text-[#00FF41]"
							aria-hidden="true"
						>
							arrow_outward
						</span>
					</a>
				</li>
			{/each}
		</ul>

		<div
			class="mt-8 flex flex-col items-stretch gap-3 border border-zinc-800 bg-zinc-950/50 p-5 sm:flex-row sm:items-center sm:justify-between"
		>
			<div>
				<p class="font-label-caps text-zinc-500">STATUS</p>
				<p class="font-code-sm mt-1 text-zinc-300">
					<span class="text-[#00FF41]">&gt;</span> Open for senior backend, iOS, and full-stack roles
					in the UK.
				</p>
			</div>
			<a
				href="mailto:me@tailornirav.dev?subject=Let%27s%20talk"
				rel="external"
				class="hover-terminal font-code-sm group inline-flex items-center justify-center gap-3 border border-white bg-white px-6 py-3 whitespace-nowrap text-black uppercase transition-colors hover:bg-[#00FF41]"
			>
				<span class="material-symbols-outlined text-lg" aria-hidden="true">send</span>
				OPEN SECURE CHANNEL
			</a>
		</div>
	</div>
</section>
