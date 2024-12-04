import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jfhtnarnxpukrjppnyiz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpmaHRuYXJueHB1a3JqcHBueWl6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMjM2NzE0NCwiZXhwIjoyMDQ3OTQzMTQ0fQ.XUTRuA4KW2w8NF8A_mxtRuqsAj04lzS184Fhio--K70";
export const supabase = createClient(supabaseUrl, supabaseKey);
