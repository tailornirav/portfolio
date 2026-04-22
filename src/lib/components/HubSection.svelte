<script lang="ts">
	type Step = 'idle' | 'requesting' | 'requested' | 'verifying' | 'unlocked' | 'error';

	let step = $state<Step>('idle');
	let emailInput = $state('');
	let pinInput = $state('');
	let phone = $state<string | null>(null);
	let message = $state('');

	async function requestPin(e: SubmitEvent) {
		e.preventDefault();
		if (!emailInput || step === 'requesting') return;

		step = 'requesting';
		message = '';

		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'content-type': 'application/json' },
				body: JSON.stringify({ action: 'request-pin', email: emailInput })
			});
			const data = (await res.json().catch(() => ({}))) as { error?: string };
			if (!res.ok) {
				step = 'error';
				message = data.error ?? 'REQUEST FAILED';
				return;
			}
			step = 'requested';
			message = 'PIN DISPATCH QUEUED — CHECK YOUR INBOX';
		} catch {
			step = 'error';
			message = 'NETWORK UNREACHABLE';
		}
	}

	async function verifyPin(e: SubmitEvent) {
		e.preventDefault();
		if (!pinInput || step === 'verifying') return;

		step = 'verifying';
		message = '';

		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'content-type': 'application/json' },
				body: JSON.stringify({ action: 'verify-pin', pin: pinInput })
			});
			const data = (await res.json().catch(() => ({}))) as {
				ok?: boolean;
				phone?: string;
				error?: string;
			};
			if (!res.ok || !data.ok) {
				step = 'error';
				message = data.error ?? 'INVALID PIN';
				return;
			}
			phone = data.phone ?? null;
			step = 'unlocked';
			message = '';
		} catch {
			step = 'error';
			message = 'NETWORK UNREACHABLE';
		}
	}

	function reset() {
		step = 'idle';
		emailInput = '';
		pinInput = '';
		message = '';
		phone = null;
	}

	const vcardHref = $derived(
		pinInput ? `/api/vcard?pin=${encodeURIComponent(pinInput)}` : '/api/vcard'
	);
</script>

<section
	id="work"
	class="grid grid-cols-1 gap-px border border-zinc-800 bg-zinc-800 md:grid-cols-12"
>
	<div class="flex flex-col justify-between gap-8 bg-black p-8 md:col-span-5">
		<div>
			<span class="font-label-caps mb-2 block text-zinc-500">DIGITAL IDENTITY</span>
			<h2 class="font-h2 mb-6 text-white uppercase">The Hub</h2>
			<p class="font-code-sm mb-8 text-zinc-400">Direct transmission coordinates.</p>

			<dl class="space-y-4 font-mono text-sm">
				<div>
					<dt class="font-label-caps text-zinc-500">NAME</dt>
					<dd class="mt-1 text-white">Nirav Tailor</dd>
				</div>

				<div>
					<dt class="font-label-caps text-zinc-500">EMAIL</dt>
					<dd class="mt-1">
						<a
							href="mailto:me@tailornirav.dev"
							rel="external noopener noreferrer"
							class="text-[#00FF41] underline-offset-4 hover:underline"
						>
							me@tailornirav.dev
						</a>
					</dd>
				</div>

				<div>
					<dt class="font-label-caps text-zinc-500">WEBSITE</dt>
					<dd class="mt-1">
						<a
							href="https://tailornirav.dev"
							rel="external noopener noreferrer"
							target="_blank"
							class="text-white underline-offset-4 hover:text-[#00FF41] hover:underline"
						>
							tailornirav.dev
						</a>
					</dd>
				</div>

				<div>
					<dt class="font-label-caps text-zinc-500">PHONE</dt>
					<dd class="mt-1 flex items-center gap-3">
						{#if step === 'unlocked' && phone}
							<a
								href={`tel:${phone.replace(/\s+/g, '')}`}
								rel="external noopener noreferrer"
								class="font-mono text-[#00FF41]"
							>
								{phone}
							</a>
						{:else}
							<span class="font-mono text-zinc-600 select-none" aria-label="Phone number hidden">
								+•• •••• ••••••
							</span>
							<span
								class="font-code-sm border border-zinc-800 px-2 py-0.5 text-[10px] tracking-widest text-zinc-500 uppercase"
							>
								PIN-GATED
							</span>
						{/if}
					</dd>
				</div>
			</dl>
		</div>

		<div class="space-y-3">
			<a
				href={vcardHref}
				rel="external noopener noreferrer"
				class="hover-terminal font-code-sm group flex w-full items-center justify-center gap-3 border border-white bg-black px-6 py-4 text-white uppercase transition-colors"
			>
				<span
					class="material-symbols-outlined text-lg group-hover:text-[#00FF41]"
					aria-hidden="true"
				>
					contacts
				</span>
				DOWNLOAD VCARD
			</a>
			<p class="font-code-sm text-[10px] tracking-widest text-zinc-500 uppercase">
				{step === 'unlocked'
					? '> PHONE WILL BE EMBEDDED IN THE VCARD.'
					: '> VCARD OMITS PHONE UNTIL PIN IS VERIFIED.'}
			</p>
		</div>
	</div>

	<div class="relative bg-black p-8 md:col-span-7">
		<div
			class="absolute inset-0 m-8 border border-zinc-800 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,65,0.06),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(0,255,65,0.04),transparent_60%)]"
			aria-hidden="true"
		></div>

		<div class="relative z-10 flex h-full min-h-[320px] flex-col justify-center gap-6">
			<div>
				<span class="font-label-caps text-zinc-500">SECURE CHANNEL</span>
				<h3 class="font-h3 mt-2 text-white uppercase">UNLOCK PHONE NUMBER</h3>
				<p class="font-code-sm mt-3 max-w-md text-zinc-400">
					Phone number is withheld by default. Submit your email below — a PIN is dispatched via
					out-of-band email. Enter the PIN to reveal the number and embed it in the downloadable
					vCard.
				</p>
			</div>

			{#if step !== 'requested' && step !== 'unlocked' && step !== 'verifying'}
				<form onsubmit={requestPin} class="space-y-3">
					<label class="sr-only" for="hub-email">Your email</label>
					<div class="flex border border-zinc-800 p-1">
						<input
							id="hub-email"
							type="email"
							required
							disabled={step === 'requesting'}
							bind:value={emailInput}
							placeholder="YOUR.EMAIL@DOMAIN.COM"
							autocomplete="email"
							class="font-code-sm w-full border-none bg-black px-4 text-white uppercase placeholder-zinc-600 focus:ring-0 focus:outline-none disabled:opacity-50"
						/>
						<button
							type="submit"
							disabled={step === 'requesting'}
							class="font-code-sm bg-white px-6 py-2 text-black uppercase transition-colors hover:bg-[#00FF41] disabled:opacity-50"
						>
							{step === 'requesting' ? 'SENDING' : 'REQUEST PIN'}
						</button>
					</div>
				</form>
			{/if}

			{#if step === 'requested' || step === 'verifying' || step === 'unlocked'}
				<form onsubmit={verifyPin} class="space-y-3">
					<label class="sr-only" for="hub-pin">PIN</label>
					<div class="flex border border-zinc-800 p-1">
						<input
							id="hub-pin"
							type="text"
							inputmode="numeric"
							pattern="[0-9]*"
							autocomplete="one-time-code"
							required
							disabled={step === 'verifying' || step === 'unlocked'}
							bind:value={pinInput}
							placeholder="ENTER 6-DIGIT PIN"
							class="font-code-sm w-full border-none bg-black px-4 tracking-[0.5em] text-white uppercase placeholder-zinc-600 focus:ring-0 focus:outline-none disabled:opacity-50"
						/>
						<button
							type="submit"
							disabled={step === 'verifying' || step === 'unlocked'}
							class="font-code-sm bg-white px-6 py-2 text-black uppercase transition-colors hover:bg-[#00FF41] disabled:opacity-50"
						>
							{#if step === 'unlocked'}
								UNLOCKED
							{:else if step === 'verifying'}
								CHECKING
							{:else}
								VERIFY
							{/if}
						</button>
					</div>
				</form>
			{/if}

			{#if message}
				<p
					class="font-code-sm tracking-wider uppercase"
					class:text-[#00FF41]={step === 'requested' || step === 'unlocked'}
					class:text-red-400={step === 'error'}
					class:text-zinc-400={step === 'requesting' || step === 'verifying'}
				>
					&gt; {message}
				</p>
			{/if}

			{#if step === 'unlocked'}
				<button
					type="button"
					onclick={reset}
					class="font-code-sm self-start text-[10px] tracking-widest text-zinc-500 uppercase hover:text-[#00FF41]"
				>
					&gt; RE-LOCK
				</button>
			{/if}
		</div>
	</div>
</section>
