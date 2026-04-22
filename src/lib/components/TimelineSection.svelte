<script lang="ts" generics="T extends { id: string; period: string }">
	import type { Snippet } from 'svelte';

	interface Props {
		id: string;
		title: string;
		entries: T[];
		entry: Snippet<[T]>;
	}

	let { id, title, entries, entry }: Props = $props();
</script>

<section {id} class="space-y-12">
	<h2 class="font-h2 border-b border-zinc-800 pb-4 text-white uppercase">{title}</h2>

	<div class="relative pl-8 md:pl-0">
		<div
			class="absolute top-0 bottom-0 left-[7px] w-px bg-zinc-800 md:left-[150px]"
			aria-hidden="true"
		></div>

		<div class="space-y-16">
			{#each entries as item (item.id)}
				<div class="group relative md:flex md:gap-12">
					<div
						class="absolute left-[-33px] mt-1 md:static md:w-[150px] md:flex-shrink-0 md:text-right"
					>
						<span
							class="absolute left-0 z-10 block h-4 w-4 border border-zinc-500 bg-black transition-colors group-hover:border-[#00FF41] group-hover:bg-[#00FF41] md:hidden"
							aria-hidden="true"
						></span>

						<span
							class="font-code-sm relative hidden pr-6 text-[#00FF41] uppercase md:inline-block"
						>
							{item.period}
							<span
								class="absolute top-1 right-[-8px] z-10 block h-4 w-4 border border-zinc-500 bg-black transition-colors group-hover:border-[#00FF41] group-hover:bg-[#00FF41]"
								aria-hidden="true"
							></span>
						</span>

						<span class="font-code-sm mb-2 ml-8 block text-[#00FF41] uppercase md:hidden">
							{item.period}
						</span>
					</div>

					<div
						class="border border-zinc-800 bg-black p-6 transition-colors group-hover:border-zinc-600 md:flex-1"
					>
						{@render entry(item)}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
