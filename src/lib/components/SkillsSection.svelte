<script lang="ts">
	import { capabilities } from '$lib/experience';
</script>

<section id="skills" class="space-y-8">
	<h2 class="font-h2 border-b border-zinc-800 pb-4 text-white uppercase">
		SYSTEM ARCHITECTURE / CAPABILITIES
	</h2>

	<div
		class="grid grid-cols-1 gap-px border border-zinc-800 bg-zinc-800 sm:grid-cols-2 lg:grid-cols-4"
	>
		{#each capabilities as group (group.title)}
			<div
				class="group border border-transparent bg-black p-6 transition-colors hover:border-white"
			>
				<h3
					class="font-h3 mb-6 border-b border-zinc-800 pb-2 text-zinc-400 uppercase group-hover:text-white"
				>
					{group.title}
				</h3>
				<ul class="font-code-sm space-y-3 text-zinc-500">
					{#each group.items as item (item)}
						<li class="flex items-center gap-2">
							<span class="text-[#00FF41]" aria-hidden="true">&gt;</span>
							<span>{item}</span>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</section>
