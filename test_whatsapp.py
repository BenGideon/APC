#!/usr/bin/env python3
"""
Test WhatsApp functionality without Twilio credentials
This version will show you what would be sent without actually sending
"""

import json
import sys
from datetime import datetime

def format_whatsapp_message(name, pet_type):
    """Format the WhatsApp message that would be sent"""
    message_body = f"""
🐾 *Amigos Pet Clinic* 🐾

Hello {name}! 

Thank you for contacting us about your {pet_type}. We've received your inquiry and our team will get back to you within 24-48 hours.

📍 *Location:* 4215 Spencer Hwy, Pasadena, TX 77504
📞 *Phone:* (832) 991-8811

*Business Hours:*
Mon-Fri: 8:00AM - 5:00PM
Saturday: 8:00AM - 3:00PM
Sunday: Closed

For emergencies, please contact VCA Animal Emergency Hospital Southeast.

We look forward to caring for your pet! 🐕🐱
"""
    return message_body

def test_single_message(phone, name="Customer", pet_type="pet"):
    """Test WhatsApp message format for a single contact"""
    print(f"📱 WhatsApp Message Preview for {phone}")
    print("=" * 50)
    message = format_whatsapp_message(name, pet_type)
    print(message)
    print("=" * 50)
    print(f"✅ Message formatted successfully for {name} ({phone})")

def test_all_contacts():
    """Test WhatsApp messages for all contacts in JSON file"""
    try:
        with open('data/contacts.json', 'r') as f:
            contacts = json.load(f)
        
        if not contacts:
            print("No contacts found in data/contacts.json")
            return
        
        print(f"📋 Found {len(contacts)} contact(s) to process:")
        print("=" * 60)
        
        for i, contact in enumerate(contacts, 1):
            name = contact.get('name', 'Customer')
            phone = contact.get('phone', 'No phone')
            pet_type = contact.get('petType', 'pet')
            timestamp = contact.get('timestamp', 'No timestamp')
            
            print(f"\n{i}. Contact: {name}")
            print(f"   Phone: {phone}")
            print(f"   Pet: {pet_type}")
            print(f"   Submitted: {timestamp}")
            print(f"   Message Preview:")
            print("-" * 40)
            message = format_whatsapp_message(name, pet_type)
            print(message)
            print("-" * 40)
        
        print(f"\n✅ All {len(contacts)} messages formatted successfully!")
        print("\n💡 To actually send these messages:")
        print("1. Set up Twilio account and get credentials")
        print("2. Update whatsapp_sender.py with your credentials")
        print("3. Run: source venv/bin/activate && python whatsapp_sender.py")
        
    except FileNotFoundError:
        print("❌ No data/contacts.json file found")
    except json.JSONDecodeError:
        print("❌ Error reading contacts.json file")
    except Exception as e:
        print(f"❌ Error: {e}")

if __name__ == '__main__':
    print("🧪 WhatsApp Message Tester - Amigos Pet Clinic")
    print("=" * 60)
    
    if len(sys.argv) > 1:
        # Test single message
        phone = sys.argv[1]
        name = sys.argv[2] if len(sys.argv) > 2 else "Customer"
        pet_type = sys.argv[3] if len(sys.argv) > 3 else "pet"
        test_single_message(phone, name, pet_type)
    else:
        # Test all contacts
        test_all_contacts()
