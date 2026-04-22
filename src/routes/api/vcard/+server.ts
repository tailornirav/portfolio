import type { RequestHandler } from './$types';
import { env } from '$env/dynamic/private';
import { error } from '@sveltejs/kit';

export const prerender = false;

function timingSafeEqual(a: string, b: string): boolean {
	if (a.length !== b.length) return false;
	let diff = 0;
	for (let i = 0; i < a.length; i++) {
		diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
	}
	return diff === 0;
}

function buildVCard(includePhone: boolean): string {
	const phone = env.CONTACT_PHONE ?? '';
	const lines = [
		'BEGIN:VCARD',
		'VERSION:3.0',
		'N:Tailor;Nirav;;;',
		'FN:Nirav Tailor',
		'TITLE:Software Engineer & iOS Architect',
		'EMAIL;TYPE=INTERNET,PREF:me@tailornirav.dev',
		'URL:https://tailornirav.dev',
		'URL;type=GitHub:https://github.com/tailornirav',
		'URL;type=LinkedIn:https://www.linkedin.com/in/tailornirav'
	];

	if (includePhone && phone) {
		lines.splice(6, 0, `TEL;TYPE=CELL,VOICE:${phone}`);
	}

	lines.push('END:VCARD');
	return lines.join('\r\n') + '\r\n';
}

export const GET: RequestHandler = ({ url }) => {
	const submitted = url.searchParams.get('pin')?.trim() ?? '';
	const expected = env.CONTACT_PIN ?? '';
	const includePhone = expected.length > 0 && timingSafeEqual(submitted, expected);

	if (submitted && !includePhone) {
		error(401, 'Invalid PIN.');
	}

	const body = buildVCard(includePhone);
	return new Response(body, {
		headers: {
			'content-type': 'text/vcard; charset=utf-8',
			'content-disposition': 'attachment; filename="nirav-tailor.vcf"',
			'cache-control': 'no-store'
		}
	});
};
