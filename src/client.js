import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://sxdozymxvqkmfoxfysqo.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN4ZG96eW14dnFrbWZveGZ5c3FvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDYzMTc4NTAsImV4cCI6MTk2MTg5Mzg1MH0.obDdI2Sra7kqznDtIncwjwPsuKQIzzIhQA_AahsjN7I'

const supabase = createClient(
  supabaseUrl,
  supabaseKey
)

export default supabase