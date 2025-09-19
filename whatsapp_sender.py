#!/usr/bin/env python3
"""
WhatsApp Message Sender for Amigos Pet Clinic
Sends WhatsApp messages to contact form submissions using Twilio API
"""

import json
import os
from twilio.rest import Client
from datetime import datetime

# Twilio Configuration (from environment variables)
TWILIO_ACCOUNT_SID = os.getenv("TWILIO_ACCOUNT_SID")
TWILIO_AUTH_TOKEN = os.getenv("TWILIO_AUTH_TOKEN")
TWILIO_WHATSAPP_NUMBER = os.getenv("TWILIO_WHATSAPP_NUMBER", "whatsapp:+14155238886")

def send_whatsapp_message(to_number, name, pet_type):
    """Send WhatsApp message to the contact"""
    try:
        # Check if credentials are available
        if not TWILIO_ACCOUNT_SID or not TWILIO_AUTH_TOKEN:
            print("❌ Twilio credentials not found in environment variables")
            return False
            
        # Initialize Twilio client
        client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)
        
        # Format phone number for WhatsApp
        if not to_number.startswith('+'):
            # Assume US number if no country code
            to_whatsapp = f"whatsapp:+1{to_number}"
        else:
            to_whatsapp = f"whatsapp:{to_number}"
        
        # Create message content
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
        
        # Send message
        message = client.messages.create(
            body=message_body,
            from_=TWILIO_WHATSAPP_NUMBER,
            to=to_whatsapp
        )
        
        print(f"WhatsApp message sent to {to_number}")
        print(f"Message SID: {message.sid}")
        return True
        
    except Exception as e:
        print(f"Error sending WhatsApp message to {to_number}: {e}")
        return False

def process_contacts():
    """Process contacts and send WhatsApp messages"""
    try:
        # Load contacts from JSON file
        with open('data/contacts.json', 'r') as f:
            contacts = json.load(f)
        
        if not contacts:
            print("No contacts found")
            return
        
        print(f"Processing {len(contacts)} contact(s)...")
        
        # Send WhatsApp message to each contact
        for contact in contacts:
            name = contact.get('name', 'Customer')
            phone = contact.get('phone', '')
            pet_type = contact.get('petType', 'pet')
            
            if phone:
                success = send_whatsapp_message(phone, name, pet_type)
                if success:
                    print(f"✅ Message sent to {name} ({phone})")
                else:
                    print(f"❌ Failed to send message to {name} ({phone})")
            else:
                print(f"❌ No phone number for {name}")
        
        print("WhatsApp processing complete!")
        
    except FileNotFoundError:
        print("No contacts.json file found")
    except json.JSONDecodeError:
        print("Error reading contacts.json file")
    except Exception as e:
        print(f"Error processing contacts: {e}")

def send_single_message(phone, name="Customer", pet_type="pet"):
    """Send WhatsApp message to a single phone number"""
    return send_whatsapp_message(phone, name, pet_type)

if __name__ == '__main__':
    print("WhatsApp Message Sender for Amigos Pet Clinic")
    print("=" * 50)
    
    # Check if running for all contacts or single number
    import sys
    if len(sys.argv) > 1:
        # Single phone number provided
        phone = sys.argv[1]
        name = sys.argv[2] if len(sys.argv) > 2 else "Customer"
        pet_type = sys.argv[3] if len(sys.argv) > 3 else "pet"
        
        print(f"Sending message to {phone}...")
        success = send_single_message(phone, name, pet_type)
        if success:
            print("✅ Message sent successfully!")
        else:
            print("❌ Failed to send message")
    else:
        # Process all contacts from JSON file
        process_contacts()
