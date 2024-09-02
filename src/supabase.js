import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "Your api token here";
const supabaseKey =
  "Your supabaseKey";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
