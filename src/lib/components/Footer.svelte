<script lang="ts">
	import type { SiteConfig } from '$lib/types/index.js';

	interface Props {
		config: SiteConfig;
	}

	let { config }: Props = $props();
	const year = new Date().getFullYear();
</script>

<footer class="border-t border-green-900/40 bg-black py-8">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex flex-col items-center justify-between gap-4 sm:flex-row">
			<p class="font-mono text-xs tracking-wider text-gray-500">
				&copy; {year}
				{config.name} // SYSTEM_ARCHITECT
			</p>
			<div class="flex items-center gap-6">
				{#if config.github}
					<a
						href={config.github}
						target="_blank"
						rel="external noopener noreferrer"
						class="font-mono text-xs tracking-wider text-gray-500 transition-colors hover:text-green-400"
					>
						GITHUB
					</a>
				{/if}
				{#if config.linkedin}
					<a
						href={config.linkedin}
						target="_blank"
						rel="external noopener noreferrer"
						class="font-mono text-xs tracking-wider text-gray-500 transition-colors hover:text-green-400"
					>
						LINKEDIN
					</a>
				{/if}
				<a
					href="#top"
					class="font-mono text-xs tracking-wider text-gray-500 transition-colors hover:text-green-400"
				>
					SOURCE_CODE
				</a>
			</div>
		</div>
	</div>
</footer>
