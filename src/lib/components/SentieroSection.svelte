<script lang="ts">
	let email = $state('');
	let status = $state<'idle' | 'submitting' | 'success' | 'error'>('idle');
	let message = $state('');

	const topoLines = Array.from({ length: 12 }, (_, i) => 60 + i * 40);

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		if (!email || status === 'submitting') return;

		status = 'submitting';
		message = '';

		try {
			const res = await fetch('/api/testflight', {
				method: 'POST',
				headers: { 'content-type': 'application/json' },
				body: JSON.stringify({ email })
			});

			const data = (await res.json().catch(() => ({}))) as { error?: string };

			if (!res.ok) {
				status = 'error';
				message = data.error ?? 'TRANSMISSION FAILED';
				return;
			}

			status = 'success';
			message = 'REQUEST LOGGED — CHECK YOUR INBOX';
			email = '';
		} catch {
			status = 'error';
			message = 'NETWORK UNREACHABLE';
		}
	}
</script>

<section id="sentiero" class="relative overflow-hidden border border-zinc-800 bg-black">
	<div class="grid grid-cols-1 md:grid-cols-2">
		<div
			class="flex flex-col justify-center border-b border-zinc-800 p-8 md:border-r md:border-b-0 md:p-12"
		>
			<div class="space-y-6">
				<div class="inline-flex items-center gap-2 border border-zinc-800 bg-zinc-900/50 px-3 py-1">
					<span class="inline-block h-2 w-2 bg-[#00FF41]" aria-hidden="true"></span>
					<span class="font-code-sm tracking-wider text-zinc-400 uppercase">
						Native iOS · SwiftUI · MapKit · Firebase · Gemini
					</span>
				</div>

				<h2 class="font-h1 text-white uppercase">SENTIERO</h2>

				<p class="font-body-mono max-w-md leading-relaxed text-zinc-400">
					An iOS hiking and outdoor-routing app that uses Google Gemini to generate natural-language
					routes and checklists, MapKit for draggable waypoint editing and walking directions, and
					Firebase for offline-first plan sync across devices.
				</p>

				<div class="flex flex-wrap gap-3">
					<a
						href="https://github.com/tailornirav/Sentiero"
						rel="external noopener noreferrer"
						target="_blank"
						class="hover-terminal font-code-sm inline-flex items-center gap-2 border border-zinc-700 bg-black px-4 py-2 text-white uppercase transition-colors"
					>
						<span class="material-symbols-outlined text-sm" aria-hidden="true">code</span>
						VIEW SOURCE
					</a>
				</div>

				<form class="mt-4 flex border border-zinc-800 p-1" onsubmit={handleSubmit}>
					<label class="sr-only" for="sentiero-email">Email for TestFlight</label>
					<input
						id="sentiero-email"
						type="email"
						required
						disabled={status === 'submitting'}
						bind:value={email}
						placeholder="ENTER EMAIL FOR TESTFLIGHT"
						autocomplete="email"
						class="font-code-sm w-full border-none bg-black px-4 text-white uppercase placeholder-zinc-600 focus:ring-0 focus:outline-none disabled:opacity-50"
					/>
					<button
						type="submit"
						disabled={status === 'submitting'}
						class="font-code-sm bg-white px-6 py-2 text-black uppercase transition-colors hover:bg-[#00FF41] disabled:opacity-50"
					>
						{status === 'submitting' ? 'SENDING' : 'REQUEST'}
					</button>
				</form>

				{#if status === 'success'}
					<p class="font-code-sm tracking-wider text-[#00FF41] uppercase">&gt; {message}</p>
				{:else if status === 'error'}
					<p class="font-code-sm tracking-wider text-red-400 uppercase">&gt; {message}</p>
				{/if}
			</div>
		</div>

		<div class="relative flex min-h-[400px] items-center justify-center bg-zinc-950 p-8">
			<div
				class="relative flex aspect-[9/19] w-full max-w-[280px] flex-col overflow-hidden border border-zinc-800 bg-black shadow-2xl"
			>
				<div class="flex h-6 items-center justify-between border-b border-zinc-800 px-4">
					<span class="font-code-sm text-[8px] text-zinc-500">SENTIERO.APP</span>
					<span class="material-symbols-outlined text-[10px] text-zinc-500" aria-hidden="true">
						signal_cellular_alt
					</span>
				</div>

				<div class="relative flex-1 overflow-hidden">
					<svg
						class="absolute inset-0 h-full w-full"
						viewBox="0 0 280 560"
						preserveAspectRatio="xMidYMid slice"
						aria-hidden="true"
					>
						<defs>
							<radialGradient id="topo-glow" cx="50%" cy="40%" r="60%">
								<stop offset="0%" stop-color="#00FF41" stop-opacity="0.15" />
								<stop offset="100%" stop-color="#00FF41" stop-opacity="0" />
							</radialGradient>
						</defs>
						<rect width="280" height="560" fill="#050505" />
						<rect width="280" height="560" fill="url(#topo-glow)" />
						{#each topoLines as y (y)}
							<path
								d={`M -20 ${y} Q 70 ${y + (y % 80 ? 30 : -30)} 140 ${y + 10} T 300 ${y - 10}`}
								fill="none"
								stroke="#1f2937"
								stroke-width="0.7"
							/>
						{/each}
						<path
							d="M 40 480 Q 90 400 130 360 T 220 220 T 250 120"
							fill="none"
							stroke="#00FF41"
							stroke-width="1.5"
							stroke-opacity="0.8"
						/>
						<circle cx="40" cy="480" r="3" fill="#00FF41" />
						<circle cx="250" cy="120" r="3" fill="#00FF41" />
					</svg>

					<div
						class="absolute right-4 bottom-4 left-4 border border-[#00FF41] bg-black/80 p-3 backdrop-blur-sm"
					>
						<p class="font-code-sm text-[#00FF41] uppercase">Route Calculated</p>
						<p class="font-code-sm mt-1 text-[10px] text-zinc-400 uppercase">Variance: 0.02%</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
