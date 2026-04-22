<script lang="ts">
	interface Pillar {
		icon: string;
		title: string;
		body: string;
	}

	const stack = [
		'SwiftUI',
		'MapKit',
		'Firebase',
		'Google Gemini',
		'HealthKit',
		'Sign in with Apple'
	];

	const pillars: Pillar[] = [
		{
			icon: 'route',
			title: 'AI Route Generation',
			body: 'Gemini parses a natural-language prompt and returns a structured JSON route — coordinates, summary, difficulty, activity — rendered as a polyline on MapKit.'
		},
		{
			icon: 'my_location',
			title: 'Live Walk Tracking',
			body: 'GPS walk sessions with monotonic loop progress, ETA estimation, Open-Meteo weather, and an opt-in HealthKit workout export on completion.'
		},
		{
			icon: 'edit_location_alt',
			title: 'Custom Route Editor',
			body: 'SwiftUI bridged to MKMapView for draggable waypoint editing, with MKDirections walking paths debounced and rate-limited under Apple’s GEO throttle.'
		},
		{
			icon: 'cloud_sync',
			title: 'Offline-First Sync',
			body: 'LocalPlanManager + CloudPlanManager merge on appear and prefer the richer local checklist, so plans stay usable without connectivity.'
		}
	];
</script>

<section id="sentiero" class="relative overflow-hidden border border-zinc-800 bg-black">
	<div
		class="pointer-events-none absolute -top-32 -right-24 h-64 w-64 bg-[#00FF41] opacity-[0.05] blur-[120px]"
		aria-hidden="true"
	></div>

	<header class="flex items-center justify-between border-b border-zinc-800 px-6 py-3 md:px-8">
		<div class="flex items-center gap-3">
			<span class="inline-block h-2 w-2 bg-[#00FF41]" aria-hidden="true"></span>
			<span class="font-label-caps text-zinc-500">FEATURED_PROJECT.APP</span>
		</div>
		<span class="font-code-sm tracking-widest text-zinc-600 uppercase">iOS · 2024 —</span>
	</header>

	<div class="relative space-y-10 p-6 md:p-10">
		<div class="grid grid-cols-1 gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-start">
			<div class="space-y-6">
				<div>
					<span class="font-label-caps text-zinc-500">CASE STUDY</span>
					<h2 class="font-h1 mt-3 text-white uppercase">
						<span class="text-[#00FF41]">/</span> SENTIERO
					</h2>
					<p class="font-code-sm mt-3 tracking-widest text-zinc-400 uppercase">
						Intelligent Adventure Planner
					</p>
				</div>

				<p class="font-body-mono max-w-xl leading-relaxed text-zinc-300">
					A native iOS hiking companion that replaces static map databases with a dynamic, AI-driven
					routing engine. Describe the walk you want — distance, place, style — and Gemini emits a
					structured trail that Sentiero renders, tracks, and syncs offline-first.
				</p>

				<ul class="flex flex-wrap gap-2" aria-label="Technology stack">
					{#each stack as tech (tech)}
						<li
							class="font-code-sm border border-zinc-800 bg-zinc-950 px-3 py-1 text-zinc-300 uppercase"
						>
							{tech}
						</li>
					{/each}
				</ul>

				<div class="flex flex-wrap gap-3 pt-2">
					<a
						href="https://github.com/tailornirav/Sentiero"
						rel="external noopener noreferrer"
						target="_blank"
						class="hover-terminal font-code-sm group inline-flex items-center gap-3 border border-white bg-white px-5 py-3 text-black uppercase transition-colors hover:bg-[#00FF41]"
					>
						<span class="material-symbols-outlined text-lg" aria-hidden="true">code</span>
						VIEW SOURCE
					</a>
					<a
						href="https://github.com/tailornirav/Sentiero#readme"
						rel="external noopener noreferrer"
						target="_blank"
						class="hover-terminal font-code-sm group inline-flex items-center gap-3 border border-zinc-700 bg-black px-5 py-3 text-white uppercase transition-colors"
					>
						<span class="material-symbols-outlined text-lg" aria-hidden="true">description</span>
						READ THE CASE STUDY
					</a>
				</div>
			</div>

			<div class="border border-zinc-800 bg-zinc-950/50 p-5 font-mono text-[12px] leading-relaxed">
				<div class="flex items-center justify-between border-b border-zinc-800 pb-2">
					<span class="font-label-caps text-zinc-500">SAMPLE PROMPT</span>
					<span class="font-code-sm tracking-widest text-zinc-600">GEMINI › JSON</span>
				</div>
				<p class="mt-3 text-zinc-300">
					<span class="text-[#00FF41]">&gt;</span> 12 km circular from Durdle Door, moderate difficulty,
					coastal views, under 3 hours.
				</p>
				<pre class="mt-4 overflow-x-auto whitespace-pre text-zinc-400"><span class="text-zinc-600"
						>// TrekRoute</span
					>
{`{
  "name": "Durdle Door Loop",
  "distance_km": 11.8,
  "difficulty": "moderate",
  "activity": "hike",
  "polyline": [[50.621, -2.277], …]
}`}</pre>
			</div>
		</div>

		<ul
			class="grid grid-cols-1 gap-px border border-zinc-800 bg-zinc-800 sm:grid-cols-2 lg:grid-cols-4"
			aria-label="Project pillars"
		>
			{#each pillars as pillar (pillar.title)}
				<li class="group flex flex-col gap-3 bg-black p-5 transition-colors hover:bg-zinc-950">
					<span
						class="material-symbols-outlined flex h-10 w-10 items-center justify-center border border-zinc-800 text-zinc-500 transition-colors group-hover:border-[#00FF41] group-hover:text-[#00FF41]"
						aria-hidden="true"
					>
						{pillar.icon}
					</span>
					<h3 class="font-h3 text-white uppercase">{pillar.title}</h3>
					<p class="font-code-sm leading-relaxed text-zinc-400">{pillar.body}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>
