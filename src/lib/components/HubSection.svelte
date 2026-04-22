<section
	id="work"
	class="grid grid-cols-1 gap-px border border-zinc-800 bg-zinc-800 md:grid-cols-12"
>
	<div class="flex flex-col justify-between bg-black p-8 md:col-span-4">
		<div>
			<span class="font-label-caps mb-2 block text-zinc-500">DIGITAL IDENTITY</span>
			<h2 class="font-h2 mb-8 text-white uppercase">The Hub</h2>
		</div>

		<div class="space-y-4">
			<p class="font-code-sm text-zinc-400">Direct transmission coordinates.</p>
			<a
				href="https://www.linkedin.com/in/tailornirav"
				rel="external noopener noreferrer"
				target="_blank"
				class="hover-terminal font-code-sm group flex w-full items-center justify-center gap-3 border border-white bg-black px-6 py-4 text-white uppercase transition-colors"
			>
				<span
					class="material-symbols-outlined text-lg group-hover:text-[#00FF41]"
					aria-hidden="true"
				>
					contactless
				</span>
				CONNECT ON LINKEDIN
			</a>
		</div>
	</div>

	<div class="relative min-h-[300px] bg-black p-8 md:col-span-8">
		<div
			class="absolute inset-0 m-8 border border-zinc-800 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,65,0.06),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(0,255,65,0.04),transparent_60%)]"
			aria-hidden="true"
		></div>

		<svg
			class="pointer-events-none absolute inset-0 h-full w-full opacity-30 mix-blend-luminosity"
			viewBox="0 0 400 300"
			preserveAspectRatio="xMidYMid slice"
			aria-hidden="true"
		>
			<defs>
				<pattern id="hub-lines" width="20" height="20" patternUnits="userSpaceOnUse">
					<path d="M0 10 L20 10" stroke="#222" stroke-width="0.5" />
					<path d="M10 0 L10 20" stroke="#222" stroke-width="0.5" />
				</pattern>
			</defs>
			<rect width="400" height="300" fill="url(#hub-lines)" />
			<polyline
				points="40,240 120,180 160,200 220,120 280,160 360,80"
				fill="none"
				stroke="#333"
				stroke-width="1"
			/>
			<polyline
				points="20,60 80,90 140,70 200,110 260,90 340,130"
				fill="none"
				stroke="#333"
				stroke-width="1"
			/>
			<circle cx="220" cy="120" r="2" fill="#555" />
			<circle cx="280" cy="160" r="2" fill="#555" />
		</svg>

		<div class="relative z-10 flex h-full items-center justify-center">
			<div class="space-y-2 text-center">
				<span class="material-symbols-outlined text-4xl text-zinc-700" aria-hidden="true">
					qr_code_scanner
				</span>
				<p class="font-code-sm tracking-widest text-zinc-500 uppercase">Awaiting Scan</p>
			</div>
		</div>
	</div>
</section>
