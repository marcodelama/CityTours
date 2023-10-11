import { createClient } from '@supabase/supabase-js';

const apiUrl='https://vrvwyckiodwnonchxegs.supabase.co'
const apiKey= 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZydnd5Y2tpb2R3bm9uY2h4ZWdzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NjYyMzMwMCwiZXhwIjoyMDEyMTk5MzAwfQ.tXxEQRNxcaaSs4xH8I_V_cP8PUVJrPp8GPrVvXBLwlc'
export const supabase = createClient(apiUrl, apiKey);