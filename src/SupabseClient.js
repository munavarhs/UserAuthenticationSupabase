import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://basioiurbbyfoonfqluu.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJhc2lvaXVyYmJ5Zm9vbmZxbHV1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM0MzQwMDMsImV4cCI6MjA0OTAxMDAwM30.skC6T1PCR9PG-ohfD7zKorpWiDR9FyYmcnmQMcXmutc'
export const supabase = createClient(supabaseUrl, supabaseKey)