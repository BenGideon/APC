import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface Appointment {
  id: string
  created_at: string
  appointment_date: string
  appointment_time: string
  pet_name: string
  pet_type: string
  owner_name: string
  owner_email: string
  owner_phone: string
  service_type: string
  notes?: string
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
  payment_status: 'pending' | 'paid' | 'refunded'
}

export interface Service {
  id: string
  name: string
  duration: number // in minutes
  price: number
  description: string
  active: boolean
}

export interface TimeSlot {
  id: string
  date: string
  time: string
  available: boolean
  appointment_id?: string
}
