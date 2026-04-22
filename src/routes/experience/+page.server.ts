import type { PageServerLoad } from './$types';
import { fallbackExperiences } from '$server/experiences';
import { isSupabaseConfigured } from '$supabase/client';

export const load: PageServerLoad = async ({ locals: { supabase } }) => {
	if (!isSupabaseConfigured) {
		return { experiences: fallbackExperiences };
	}

	const { data, error } = await supabase
		.from('experiences')
		.select('*')
		.order('ordinal', { ascending: true });

	if (error || !data?.length) {
		return { experiences: fallbackExperiences };
	}

	return { experiences: data };
};
