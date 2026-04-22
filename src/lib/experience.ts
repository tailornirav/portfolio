import type { Experience } from '$supabase/types';

export const statusLabel: Record<Experience['status'], string> = {
	current_execution: 'CURRENT_EXECUTION',
	terminated_process: 'TERMINATED_PROCESS',
	contractor: 'CONTRACTOR',
	freelance_module: 'FREELANCE_MODULE',
	remote_node: 'REMOTE_NODE',
	initialization: 'INITIALIZATION'
};
