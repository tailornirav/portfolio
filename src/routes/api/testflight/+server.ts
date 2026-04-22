import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { env } from '$env/dynamic/private';
import { sendEmail } from '$lib/server/email';

export const prerender = false;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface TestFlightBody {
	email?: unknown;
}

export const POST: RequestHandler = async ({ request, getClientAddress }) => {
	let body: TestFlightBody;

	try {
		body = (await request.json()) as TestFlightBody;
	} catch {
		return json({ error: 'Malformed request body.' }, { status: 400 });
	}

	const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
	if (!email || !EMAIL_RE.test(email) || email.length > 254) {
		return json({ error: 'A valid email address is required.' }, { status: 400 });
	}

	const notifyTo = env.CONTACT_NOTIFY_EMAIL;
	if (!notifyTo) {
		return json({ error: 'Notifications are not configured.' }, { status: 503 });
	}

	const ip = getClientAddress();
	const subject = `Sentiero TestFlight request — ${email}`;
	const text = [
		'A visitor requested access to the Sentiero TestFlight programme.',
		'',
		`Email:   ${email}`,
		`Source:  ${ip}`,
		`When:    ${new Date().toISOString()}`
	].join('\n');

	const result = await sendEmail({ to: notifyTo, subject, text, replyTo: email });

	if (!result.ok) {
		return json({ error: result.error }, { status: 502 });
	}

	return json({ ok: true });
};
