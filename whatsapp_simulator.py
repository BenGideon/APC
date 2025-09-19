#!/usr/bin/env python3
"""
WhatsApp Simulator for Amigos Pet Clinic
Simulates sending WhatsApp messages without requiring Twilio credentials
Saves message logs and shows what would be sent
"""

import json
import os
from datetime import datetime

def simulate_whatsapp_message(to_number, name, pet_type):
    """Simulate sending WhatsApp message"""
    try:
        # Format phone number
        if not to_number.startswith('+'):
            formatted_number = f"+1{to_number}"
        else:
            formatted_number = to_number
        
        # Create message content
        message_body = f"""🐾 *Amigos Pet Clinic* 🐾

Hello {name}! 

Thank you for contacting us about your {pet_type}. We've received your inquiry and our team will get back to you within 24-48 hours.

📍 *Location:* 4215 Spencer Hwy, Pasadena, TX 77504
📞 *Phone:* (832) 991-8811

*Business Hours:*
Mon-Fri: 8:00AM - 5:00PM
Saturday: 8:00AM - 3:00PM
Sunday: Closed

For emergencies, please contact VCA Animal Emergency Hospital Southeast.

We look forward to caring for your pet! 🐕🐱"""
        
        # Log the message
        log_entry = {
            "timestamp": datetime.now().isoformat(),
            "to_number": formatted_number,
            "name": name,
            "pet_type": pet_type,
            "message": message_body,
            "status": "simulated_success"
        }
        
        # Save to log file
        log_file = "whatsapp_messages_log.json"
        try:
            if os.path.exists(log_file):
                with open(log_file, 'r') as f:
                    logs = json.load(f)
            else:
                logs = []
            
            logs.append(log_entry)
            
            with open(log_file, 'w') as f:
                json.dump(logs, f, indent=2)
        except Exception as e:
            print(f"Warning: Could not save to log file: {e}")
        
        # Display the message
        print(f"📱 SIMULATED WhatsApp Message to {formatted_number}")
        print("=" * 60)
        print(message_body)
        print("=" * 60)
        print(f"✅ Message simulated successfully for {name}")
        print()
        
        return True
        
    except Exception as e:
        print(f"❌ Error simulating message to {to_number}: {e}")
        return False

def process_contacts():
    """Process all contacts and simulate WhatsApp messages"""
    try:
        with open('data/contacts.json', 'r') as f:
            contacts = json.load(f)
        
        if not contacts:
            print("No contacts found")
            return
        
        print(f"🚀 WhatsApp Message Simulator - Processing {len(contacts)} contact(s)")
        print("=" * 70)
        
        success_count = 0
        for i, contact in enumerate(contacts, 1):
            name = contact.get('name', 'Customer')
            phone = contact.get('phone', '')
            pet_type = contact.get('petType', 'pet')
            
            print(f"\n{i}. Processing: {name} ({phone}) - {pet_type}")
            
            if phone:
                success = simulate_whatsapp_message(phone, name, pet_type)
                if success:
                    success_count += 1
            else:
                print(f"❌ No phone number for {name}")
        
        print("=" * 70)
        print(f"✅ Simulation complete! {success_count}/{len(contacts)} messages processed")
        print(f"📋 Message log saved to: whatsapp_messages_log.json")
        print("\n💡 To send real WhatsApp messages:")
        print("1. Get Twilio account credentials")
        print("2. Update whatsapp_sender.py with real credentials")
        print("3. Run whatsapp_sender.py instead of this simulator")
        
    except FileNotFoundError:
        print("❌ No data/contacts.json file found")
    except json.JSONDecodeError:
        print("❌ Error reading contacts.json file")
    except Exception as e:
        print(f"❌ Error: {e}")

def simulate_single_message(phone, name="Customer", pet_type="pet"):
    """Simulate WhatsApp message to a single phone number"""
    print(f"🚀 WhatsApp Message Simulator - Single Message")
    print("=" * 50)
    return simulate_whatsapp_message(phone, name, pet_type)

if __name__ == '__main__':
    import sys
    
    if len(sys.argv) > 1:
        # Single phone number provided
        phone = sys.argv[1]
        name = sys.argv[2] if len(sys.argv) > 2 else "Customer"
        pet_type = sys.argv[3] if len(sys.argv) > 3 else "pet"
        simulate_single_message(phone, name, pet_type)
    else:
        # Process all contacts
        process_contacts()
