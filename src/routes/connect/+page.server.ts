import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { isSupabaseConfigured } from '$supabase/client';

export const actions: Actions = {
	default: async ({ request, locals: { supabase } }) => {
		const form = await request.formData();
		const email = String(form.get('email') ?? '').trim();
		const body = String(form.get('body') ?? '').trim();

		if (!email || !body) {
			return fail(400, { email, body, error: 'Email and message are required.' });
		}

		if (!/^\S+@\S+\.\S+$/.test(email)) {
			return fail(400, { email, body, error: 'Provide a valid email address.' });
		}

		if (!isSupabaseConfigured) {
			return { success: true, queued: true };
		}

		const { error } = await supabase.from('messages').insert({ email, body });

		if (error) {
			return fail(500, { email, body, error: 'Transmission failed. Try again.' });
		}

		return { success: true, queued: false };
	}
};
