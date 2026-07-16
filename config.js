/* config.js — the ONLY file with your Supabase details in it.
   Both values are PUBLIC by design: the anon key is meant to ship inside the
   page, and RLS (rls.sql) is what protects the data. Verified 16 Jul 2026 by
   decoding the token: its role claim is "anon", and its project ref matches the
   URL. The service_role key and the database password are NOT public, bypass RLS
   completely, and must never appear here or anywhere in the browser. */
window.__SUPA__ = {
  url:     "https://orlebcuuomupdrpsudej.supabase.co",
  anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ybGViY3V1b211cGRycHN1ZGVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMzNTM0MjUsImV4cCI6MjA5ODkyOTQyNX0.w7-EokQop5B1ZtF9cjvlbcrIgcKmTIaOTVLus2sYy9Q"
};
