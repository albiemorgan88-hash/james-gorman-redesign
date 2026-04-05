import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://smhzgkvatlwbaxlyhnbm.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNtaHpna3ZhdGx3YmF4bHlobmJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIzMzM5MDIsImV4cCI6MjA4NzkwOTkwMn0.THuy6XYL94S2QWYlrAOacoBf_P7030VxZJwrjNc98Ss'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type TrackerItem = {
  id: string
  name: string
  status: string
  notes: string
  created_at: string
  updated_at: string
}

export const STATUSES = ['Lead', 'Contacted', 'Meeting', 'Proposal', 'Won', 'Lost'] as const
export type Status = typeof STATUSES[number]

export const STATUS_COLORS: Record<Status, { bg: string; text: string }> = {
  Lead:      { bg: 'bg-gray-100',   text: 'text-gray-700' },
  Contacted: { bg: 'bg-blue-100',   text: 'text-blue-700' },
  Meeting:   { bg: 'bg-amber-100',  text: 'text-amber-700' },
  Proposal:  { bg: 'bg-purple-100', text: 'text-purple-700' },
  Won:       { bg: 'bg-green-100',  text: 'text-green-700' },
  Lost:      { bg: 'bg-red-100',    text: 'text-red-700' },
}
