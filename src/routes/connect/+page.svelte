<script lang="ts">
	import { enhance } from '$app/forms';
	import Panel from '$components/Panel.svelte';
	import type { ActionData } from './$types';

	let { form }: { form: ActionData } = $props();
</script>

<svelte:head><title>CONNECT // SYSTEM_ARCHITECT</title></svelte:head>

<Panel label="CONNECT" title="ENCRYPTED TRANSMISSION">
	<p class="max-w-lg text-sm text-neutral-400">
		Submit a message. Stored server-side in Supabase. Delivered via edge runtime.
	</p>

	<form method="POST" use:enhance class="mt-6 flex max-w-xl flex-col gap-4 font-mono text-xs">
		<label class="flex flex-col gap-2 tracking-[0.2em] text-neutral-300">
			<span>EMAIL</span>
			<input
				name="email"
				type="email"
				required
				value={form?.email ?? ''}
				class="border border-emerald-500/30 bg-black/60 px-4 py-3 text-xs tracking-[0.15em] text-neutral-100 focus:border-emerald-400 focus:outline-none"
			/>
		</label>
		<label class="flex flex-col gap-2 tracking-[0.2em] text-neutral-300">
			<span>MESSAGE</span>
			<textarea
				name="body"
				rows="5"
				required
				class="border border-emerald-500/30 bg-black/60 px-4 py-3 text-xs tracking-[0.15em] text-neutral-100 focus:border-emerald-400 focus:outline-none"
				>{form?.body ?? ''}</textarea
			>
		</label>

		<button
			type="submit"
			class="self-start border border-emerald-400/80 px-6 py-3 tracking-[0.35em] text-emerald-200 transition-colors hover:bg-emerald-500/10"
		>
			TRANSMIT
		</button>

		{#if form?.error}
			<p class="text-red-400">{form.error}</p>
		{:else if form?.success}
			<p class="text-emerald-300">
				&gt; ACK: Transmission received{form.queued ? ' (queued - Supabase not configured)' : ''}.
			</p>
		{/if}
	</form>
</Panel>
