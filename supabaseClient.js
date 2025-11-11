import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://pegmezthspukzcevfwks.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1Ni...'; // tu anon key

export const supabase = createClient(supabaseUrl, supabaseKey);
