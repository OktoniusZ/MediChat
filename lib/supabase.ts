import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xlgaccsayhmgtstjrffb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhsZ2FjY3NheWhtZ3RzdGpyZmZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMzNDkxNjIsImV4cCI6MjA1ODkyNTE2Mn0.MmqHPZ0jyUL6VE_5NPlT2OS0QI5NJqnmlW6pAOJdPO0';

export const supabase = createClient(supabaseUrl, supabaseKey);