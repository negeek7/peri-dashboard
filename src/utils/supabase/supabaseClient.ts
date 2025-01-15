import { createClient } from "@supabase/supabase-js";


const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

console.log(process.env.NEXT_PUBLIC_SUPABASE_URL, "process.env.NEXT_PUBLIC_SUPABASE_URL");


export const supabase = createClient(supabaseUrl, supabaseAnonKey)