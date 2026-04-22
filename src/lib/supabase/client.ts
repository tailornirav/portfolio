import { createBrowserClient, createServerClient, isBrowser } from '@supabase/ssr';
import { env } from '$env/dynamic/public';
import type { Database } from './types';

const PUBLIC_SUPABASE_URL = env.PUBLIC_SUPABASE_URL ?? '';
const PUBLIC_SUPABASE_ANON_KEY = env.PUBLIC_SUPABASE_ANON_KEY ?? '';

export const isSupabaseConfigured = Boolean(PUBLIC_SUPABASE_URL && PUBLIC_SUPABASE_ANON_KEY);

import type { CookieOptionsWithName } from '@supabase/ssr';

export interface CookieToSet {
	name: string;
	value: string;
	options?: CookieOptionsWithName;
}

export interface ServerClientCookies {
	getAll: () => { name: string; value: string }[];
	setAll: (cookies: CookieToSet[]) => void;
}

/**
 * Create a Supabase client for browser or server-side Load functions.
 * Pass the SvelteKit `cookies` helper through `cookies` when instantiating
 * from a `+*.server.ts` file so session state is propagated across the edge.
 */
export function createSupabaseClient(cookies?: ServerClientCookies) {
	if (isBrowser()) {
		return createBrowserClient<Database>(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY);
	}

	return createServerClient<Database>(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
		cookies: {
			getAll: () => cookies?.getAll() ?? [],
			setAll: (all) => cookies?.setAll(all)
		}
	});
}
