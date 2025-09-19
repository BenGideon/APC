-- Supabase Database Schema for Amigos Pet Clinic

-- Enable Row Level Security
ALTER DATABASE postgres SET "app.jwt_secret" TO 'your-jwt-secret';

-- Create appointments table
CREATE TABLE appointments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  appointment_date DATE NOT NULL,
  appointment_time TIME NOT NULL,
  pet_name VARCHAR(100) NOT NULL,
  pet_type VARCHAR(50) NOT NULL,
  owner_name VARCHAR(100) NOT NULL,
  owner_email VARCHAR(255) NOT NULL,
  owner_phone VARCHAR(20) NOT NULL,
  service_type VARCHAR(100) NOT NULL,
  notes TEXT,
  status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
  payment_status VARCHAR(20) DEFAULT 'pending' CHECK (payment_status IN ('pending', 'paid', 'refunded')),
  stripe_payment_intent_id VARCHAR(255),
  total_amount DECIMAL(10,2)
);

-- Create services table
CREATE TABLE services (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  duration INTEGER NOT NULL, -- in minutes
  price DECIMAL(10,2) NOT NULL,
  description TEXT,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create time_slots table for availability management
CREATE TABLE time_slots (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  date DATE NOT NULL,
  time TIME NOT NULL,
  available BOOLEAN DEFAULT true,
  appointment_id UUID REFERENCES appointments(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(date, time)
);

-- Create admin users table
CREATE TABLE admin_users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  name VARCHAR(100) NOT NULL,
  role VARCHAR(50) DEFAULT 'admin',
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default services
INSERT INTO services (name, duration, price, description) VALUES
('General Checkup', 30, 75.00, 'Comprehensive health examination to keep your pet in optimal condition'),
('Vaccination', 20, 45.00, 'Essential vaccines to protect your pet from common diseases'),
('Grooming', 60, 60.00, 'Professional grooming to keep your pet clean and healthy'),
('Surgery Consultation', 45, 120.00, 'Consultation for surgical procedures'),
('Emergency Visit', 30, 150.00, 'Urgent care for emergency situations'),
('Dental Care', 45, 120.00, 'Professional dental cleaning and oral health care');

-- Generate time slots for the next 3 months (9 AM to 6 PM, 30-minute intervals, Mon-Sat)
DO $$
DECLARE
  current_date DATE := CURRENT_DATE;
  end_date DATE := CURRENT_DATE + INTERVAL '3 months';
  time_slot TIME;
BEGIN
  WHILE current_date <= end_date LOOP
    -- Skip Sundays (0 = Sunday)
    IF EXTRACT(DOW FROM current_date) != 0 THEN
      time_slot := '09:00:00';
      WHILE time_slot <= '17:30:00' LOOP
        -- Skip lunch hour (12:00-13:00)
        IF time_slot NOT BETWEEN '12:00:00' AND '12:59:59' THEN
          INSERT INTO time_slots (date, time) VALUES (current_date, time_slot);
        END IF;
        time_slot := time_slot + INTERVAL '30 minutes';
      END LOOP;
    END IF;
    current_date := current_date + INTERVAL '1 day';
  END LOOP;
END $$;

-- Enable Row Level Security
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE time_slots ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Create policies for public access to services and time slots
CREATE POLICY "Services are viewable by everyone" ON services
  FOR SELECT USING (active = true);

CREATE POLICY "Time slots are viewable by everyone" ON time_slots
  FOR SELECT USING (true);

-- Create policies for appointments (users can insert their own)
CREATE POLICY "Anyone can create appointments" ON appointments
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Users can view their own appointments" ON appointments
  FOR SELECT USING (owner_email = current_setting('request.jwt.claims', true)::json->>'email');

-- Create policies for admin users
CREATE POLICY "Admin users can view all data" ON appointments
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE email = current_setting('request.jwt.claims', true)::json->>'email' 
      AND active = true
    )
  );

CREATE POLICY "Admin users can manage services" ON services
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE email = current_setting('request.jwt.claims', true)::json->>'email' 
      AND active = true
    )
  );

CREATE POLICY "Admin users can manage time slots" ON time_slots
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM admin_users 
      WHERE email = current_setting('request.jwt.claims', true)::json->>'email' 
      AND active = true
    )
  );

-- Create indexes for better performance
CREATE INDEX idx_appointments_date_time ON appointments(appointment_date, appointment_time);
CREATE INDEX idx_appointments_email ON appointments(owner_email);
CREATE INDEX idx_appointments_status ON appointments(status);
CREATE INDEX idx_time_slots_date ON time_slots(date);
CREATE INDEX idx_time_slots_available ON time_slots(available);

-- Create functions for appointment management
CREATE OR REPLACE FUNCTION book_appointment(
  p_appointment_date DATE,
  p_appointment_time TIME,
  p_pet_name VARCHAR,
  p_pet_type VARCHAR,
  p_owner_name VARCHAR,
  p_owner_email VARCHAR,
  p_owner_phone VARCHAR,
  p_service_type VARCHAR,
  p_notes TEXT DEFAULT NULL
) RETURNS UUID AS $$
DECLARE
  appointment_id UUID;
  service_price DECIMAL(10,2);
BEGIN
  -- Get service price
  SELECT price INTO service_price FROM services WHERE name = p_service_type AND active = true;
  
  -- Create appointment
  INSERT INTO appointments (
    appointment_date, appointment_time, pet_name, pet_type,
    owner_name, owner_email, owner_phone, service_type, notes, total_amount
  ) VALUES (
    p_appointment_date, p_appointment_time, p_pet_name, p_pet_type,
    p_owner_name, p_owner_email, p_owner_phone, p_service_type, p_notes, service_price
  ) RETURNING id INTO appointment_id;
  
  -- Mark time slot as unavailable
  UPDATE time_slots 
  SET available = false, appointment_id = appointment_id
  WHERE date = p_appointment_date AND time = p_appointment_time;
  
  RETURN appointment_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create function to get available time slots
CREATE OR REPLACE FUNCTION get_available_slots(p_date DATE)
RETURNS TABLE(time TIME, available BOOLEAN) AS $$
BEGIN
  RETURN QUERY
  SELECT ts.time, ts.available
  FROM time_slots ts
  WHERE ts.date = p_date
  ORDER BY ts.time;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
