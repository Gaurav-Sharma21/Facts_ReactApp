import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://geiauordkwhhxvepieof.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdlaWF1b3Jka3doaHh2ZXBpZW9mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI3OTkwNzYsImV4cCI6MjAzODM3NTA3Nn0.loLZze86XjGQdQV4nkzTFm2TbhViMaGFJQNm6p3nmuM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
