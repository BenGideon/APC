#!/usr/bin/env python3
"""
Contact Form Handler for Amigos Pet Clinic
Saves form data to Excel and sends email responses
"""

from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime
import os
import logging

app = Flask(__name__)
CORS(app)

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Email configuration (update with your SMTP settings)
SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587
EMAIL_ADDRESS = "your-clinic-email@gmail.com"  # Update this
EMAIL_PASSWORD = "your-app-password"  # Update this
EXCEL_FILE = "contact_submissions.xlsx"

def save_to_excel(data):
    """Save contact form data to Excel file"""
    try:
        # Try to read existing file
        try:
            df = pd.read_excel(EXCEL_FILE)
        except FileNotFoundError:
            # Create new DataFrame if file doesn't exist
            df = pd.DataFrame()
        
        # Add new row
        new_row = pd.DataFrame([data])
        df = pd.concat([df, new_row], ignore_index=True)
        
        # Save to Excel
        df.to_excel(EXCEL_FILE, index=False)
        logger.info(f"Data saved to {EXCEL_FILE}")
        return True
    except Exception as e:
        logger.error(f"Error saving to Excel: {e}")
        return False

def send_email(to_email, name, pet_type):
    """Send confirmation email to the person who filled the form"""
    try:
        msg = MIMEMultipart()
        msg['From'] = EMAIL_ADDRESS
        msg['To'] = to_email
        msg['Subject'] = "Thank you for contacting Amigos Pet Clinic"
        
        # Email body
        body = f"""
Dear {name},

Thank you for contacting Amigos Pet Clinic! We have received your inquiry regarding your {pet_type}.

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
        
        # Send email
        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.starttls()
        server.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
        text = msg.as_string()
        server.sendmail(EMAIL_ADDRESS, to_email, text)
        server.quit()
        
        logger.info(f"Email sent to {to_email}")
        return True
    except Exception as e:
        logger.error(f"Error sending email: {e}")
        return False

@app.route('/submit-contact', methods=['POST'])
def submit_contact():
    """Handle contact form submission"""
    try:
        data = request.json
        
        # Prepare data for Excel
        excel_data = {
            'Timestamp': data.get('timestamp'),
            'Name': data.get('name'),
            'Email': data.get('email'),
            'Phone': data.get('phone'),
            'Pet Type': data.get('petType'),
            'Reason for Visit': data.get('reason')
        }
        
        # Save to Excel
        if save_to_excel(excel_data):
            # Send confirmation email
            send_email(
                data.get('email'),
                data.get('name'),
                data.get('petType')
            )
            
            return jsonify({'success': True, 'message': 'Form submitted successfully'})
        else:
            return jsonify({'success': False, 'message': 'Error saving data'}), 500
            
    except Exception as e:
        logger.error(f"Error processing form: {e}")
        return jsonify({'success': False, 'message': 'Server error'}), 500

@app.route('/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({'status': 'healthy'})

if __name__ == '__main__':
    print("Starting Contact Form Handler...")
    print(f"Excel file will be saved as: {EXCEL_FILE}")
    print("Remember to update EMAIL_ADDRESS and EMAIL_PASSWORD in the script!")
    app.run(host='0.0.0.0', port=5000, debug=True)
