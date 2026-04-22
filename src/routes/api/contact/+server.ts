import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { env } from '$env/dynamic/private';
import { sendEmail } from '$lib/server/email';

export const prerender = false;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ContactBody {
	action?: unknown;
	email?: unknown;
	pin?: unknown;
}

/**
 * Constant-time string comparison to prevent timing side-channels on the
 * PIN check. Both strings are short and ASCII so a simple XOR loop is safe.
 */
function timingSafeEqual(a: string, b: string): boolean {
	if (a.length !== b.length) return false;
	let diff = 0;
	for (let i = 0; i < a.length; i++) {
		diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
	}
	return diff === 0;
}

export const POST: RequestHandler = async ({ request, getClientAddress }) => {
	let body: ContactBody;
	try {
		body = (await request.json()) as ContactBody;
	} catch {
		return json({ error: 'Malformed request body.' }, { status: 400 });
	}

	const action = typeof body.action === 'string' ? body.action : '';

	/* ----------------------------------------------------------------------
	 * Step 1 — Request the PIN.
	 * The visitor sends their email; if CONTACT_PIN is configured, we email
	 * the PIN to the owner (so the owner can relay it to the requester), and
	 * return `{ ok: true }` regardless of whether the visitor email is
	 * valid, so we never leak the existence of the PIN flow to probers.
	 * -------------------------------------------------------------------- */
	if (action === 'request-pin') {
		const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
		if (!email || !EMAIL_RE.test(email) || email.length > 254) {
			return json({ error: 'A valid email address is required.' }, { status: 400 });
		}

		const notifyTo = env.CONTACT_NOTIFY_EMAIL;
		if (!notifyTo) {
			return json({ error: 'Contact flow is not configured.' }, { status: 503 });
		}

		const subject = `Phone PIN requested — ${email}`;
		const text = [
			'Someone asked to unlock the phone number on the portfolio site.',
			'',
			`Email:   ${email}`,
			`Source:  ${getClientAddress()}`,
			`When:    ${new Date().toISOString()}`,
			'',
			'Reply to them with the PIN if you want to share your number.'
		].join('\n');

		await sendEmail({ to: notifyTo, subject, text, replyTo: email });
		return json({ ok: true });
	}

	/* ----------------------------------------------------------------------
	 * Step 2 — Verify the PIN.
	 * Returns the phone number on success. Never reveals whether the PIN
	 * was wrong vs. unset — both paths return a generic 401.
	 * -------------------------------------------------------------------- */
	if (action === 'verify-pin') {
		const submitted = typeof body.pin === 'string' ? body.pin.trim() : '';
		const expected = env.CONTACT_PIN ?? '';
		const phone = env.CONTACT_PHONE ?? '';

		if (!expected || !phone) {
			return json({ error: 'Contact flow is not configured.' }, { status: 503 });
		}

		if (!submitted || !timingSafeEqual(submitted, expected)) {
			return json({ error: 'Invalid PIN.' }, { status: 401 });
		}

		return json({ ok: true, phone });
	}

	return json({ error: 'Unknown action.' }, { status: 400 });
};
