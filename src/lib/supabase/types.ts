/**
 * Generated Supabase types. Replace with output of
 * `supabase gen types typescript --project-id <id> --schema public`
 * as tables evolve.
 */
export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
	public: {
		Tables: {
			experiences: {
				Row: {
					id: string;
					created_at: string;
					period: string;
					status:
						| 'current_execution'
						| 'terminated_process'
						| 'contractor'
						| 'freelance_module'
						| 'remote_node'
						| 'initialization';
					title: string;
					company: string;
					highlights: string[];
					ordinal: number;
				};
				Insert: {
					id?: string;
					created_at?: string;
					period: string;
					status:
						| 'current_execution'
						| 'terminated_process'
						| 'contractor'
						| 'freelance_module'
						| 'remote_node'
						| 'initialization';
					title: string;
					company: string;
					highlights: string[];
					ordinal?: number;
				};
				Update: Partial<Database['public']['Tables']['experiences']['Insert']>;
				Relationships: [];
			};
			messages: {
				Row: {
					id: string;
					created_at: string;
					email: string;
					body: string;
				};
				Insert: {
					id?: string;
					created_at?: string;
					email: string;
					body: string;
				};
				Update: Partial<Database['public']['Tables']['messages']['Insert']>;
				Relationships: [];
			};
		};
		Views: Record<string, never>;
		Functions: Record<string, never>;
		Enums: Record<string, never>;
		CompositeTypes: Record<string, never>;
	};
}

export type Experience = Database['public']['Tables']['experiences']['Row'];
export type Message = Database['public']['Tables']['messages']['Row'];
