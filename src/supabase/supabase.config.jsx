import { createClient } from '@supabase/supabase-js';

//Grado de seguridad: Proteger accesos mediante función createClient
export const supabase = createClient(
    import.meta.env.REACT_APP_SUPABASE_URL,
    import.meta.env.REACT_APP_SUPABASE_ANON_KEY
);