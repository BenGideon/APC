#!/usr/bin/env python3
"""
Convert contacts.json to Excel and send emails
Run this script periodically to process contact form submissions
"""

import json
import pandas as pd
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime
import os

# Email configuration (update with your settings)
SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587
EMAIL_ADDRESS = "your-clinic-email@gmail.com"  # Update this
EMAIL_PASSWORD = "your-app-password"  # Update this

def load_contacts():
    """Load contacts from JSON file"""
    try:
        with open('data/contacts.json', 'r') as f:
            return json.load(f)
    except FileNotFoundError:
        print("No contacts.json file found")
        return []
    except json.JSONDecodeError:
        print("Error reading contacts.json")
        return []

def save_to_excel(contacts):
    """Save contacts to Excel file"""
    if not contacts:
        print("No contacts to save")
        return
    
    df = pd.DataFrame(contacts)
    
    # Reorder columns
    column_order = ['timestamp', 'name', 'email', 'phone', 'petType', 'reason']
    df = df[column_order]
    
    # Rename columns for better readability
    df.columns = ['Timestamp', 'Name', 'Email', 'Phone', 'Pet Type', 'Reason for Visit']
    
    # Save to Excel
    filename = f"contact_submissions_{datetime.now().strftime('%Y%m%d_%H%M%S')}.xlsx"
    df.to_excel(filename, index=False)
    print(f"Contacts saved to {filename}")

def send_confirmation_email(contact):
    """Send confirmation email to contact"""
    try:
        msg = MIMEMultipart()
        msg['From'] = EMAIL_ADDRESS
        msg['To'] = contact['email']
        msg['Subject'] = "Thank you for contacting Amigos Pet Clinic"
        
        body = f"""
Dear {contact['name']},

Thank you for contacting Amigos Pet Clinic! We have received your inquiry regarding your {contact['petType']}.

Our team will review your message and get back to you within 24-48 hours during our business hours:
- Monday - Friday: 8:00AM - 5:00PM
- Saturday: 8:00AM - 3:00PM
- Sunday: Closed

If this is an emergency, please contact VCA Animal Emergency Hospital Southeast.

For immediate questions, you can also call us at (832) 991-8811.

Best regards,
Amigos Pet Clinic Team
4215 Spencer Hwy, Pasadena, TX 77504
"""
        
        msg.attach(MIMEText(body, 'plain'))
        
        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.starttls()
        server.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
        server.sendmail(EMAIL_ADDRESS, contact['email'], msg.as_string())
        server.quit()
        
        print(f"Email sent to {contact['email']}")
        return True
    except Exception as e:
        print(f"Error sending email to {contact['email']}: {e}")
        return False

def main():
    """Main function to process contacts"""
    print("Processing contact form submissions...")
    
    # Load contacts
    contacts = load_contacts()
    
    if not contacts:
        print("No contacts to process")
        return
    
    print(f"Found {len(contacts)} contact(s)")
    
    # Save to Excel
    save_to_excel(contacts)
    
    # Send confirmation emails (optional - uncomment if you want to send emails)
    # for contact in contacts:
    #     send_confirmation_email(contact)
    
    print("Processing complete!")

if __name__ == '__main__':
    main()
