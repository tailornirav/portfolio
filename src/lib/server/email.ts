import { env } from '$env/dynamic/private';

export interface EmailPayload {
	to: string;
	subject: string;
	text: string;
	replyTo?: string;
}

/**
 * Send an email via the Resend HTTP API. Resend is a single-purpose
 * transactional email service and only requires a POST to /emails, so we
 * avoid adding an SDK dependency entirely.
 *
 * Returns `{ ok: true }` on a 2xx response from Resend, `{ ok: false, error }`
 * otherwise so callers can surface a friendly message without leaking
 * provider internals.
 */
export async function sendEmail(
	payload: EmailPayload
): Promise<{ ok: true } | { ok: false; error: string }> {
	const apiKey = env.RESEND_API_KEY;
	const from = env.CONTACT_FROM_EMAIL;

	if (!apiKey || !from) {
		return { ok: false, error: 'Email delivery is not configured.' };
	}

	try {
		const res = await fetch('https://api.resend.com/emails', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
				authorization: `Bearer ${apiKey}`
			},
			body: JSON.stringify({
				from,
				to: payload.to,
				subject: payload.subject,
				text: payload.text,
				reply_to: payload.replyTo
			})
		});

		if (!res.ok) {
			return { ok: false, error: `Email provider returned ${res.status}.` };
		}

		return { ok: true };
	} catch {
		return { ok: false, error: 'Could not reach the email provider.' };
	}
}
