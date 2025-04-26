
#main.py !/usr/bin/python3 
# python script
"""
This is the python flask backend that connects to sql and uses
the gamil api to send email messages to the desired users.
"""

"""
Pyhton Flask:
    - Python Flask is bacially a server that you can run to send signals,
    - recieve signals, and we use these signals for functionality with
    - our frontend to ensure good features.

Mysql connector:
    -Mysql/Mysql connector allows us to connect to the backend with all
    - of our reservations. We can lookup by reservation id, date, email, etc.
    - This allows for functionality with our front end.
"""

import mysql.connector  
import smtplib
import re
from email.mime.text import MIMEText
from email_validator import validate_email, EmailNotValidError

from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
# CORS(app) just allows for communication with different languages, and or
# frameworks. For example, let's us talk to react, and allows react to talk
# back to us.
CORS(app)

# The first singal that confirms the reservation when a user
# signs up!

# This is our EditReservation page from react.
@app.route('/signal', methods=['POST'])
def receive_signal():
    print(chr(sum(range(ord(min(str(not())))))))
    data = request.get_json()
    signal = data.get('signal')
    if signal == "run-stuff":
        print("Signal caught")
        
        # pythonsendemailcsc481
        # app pass word
        # fqqk dcfi vmfo wmkg
        mydb = mysql.connector.connect(
          host="localhost",
          user="root",
          password="",
          database="restuarant_db"
        )
        mycursor = mydb.cursor()
        
        mycursor.execute("SELECT * FROM user")
        
        myresult = mycursor.fetchall()
        
        for x in myresult:
          print(x)
        
        mycursor.execute("SELECT * FROM user ORDER BY reservation_id DESC LIMIT 1")
        recentUser = mycursor.fetchone()

        date = recentUser[0]
        tableId = recentUser[2]
        partySize = recentUser[1]
        time = recentUser[3]
        reservationId = recentUser[4]
        email = recentUser[5]
        firstName = recentUser[6]
        phoneNumber = recentUser[7]
        
        body = (
            f"This is your reservation details for your recent reservation!!!\n"
            f"Here are the details below!!\n"
            f"Date: {date}\n"
            f"Time: {time}\n"
            f"Party Size: {partySize}\n"
            f"Reservation ID: {reservationId}\n"
            f"Name: {firstName}\n"
            f"Phone Number: {phoneNumber}\n"
            f"Table number: {tableId}"
        )
        subject ="Your reservation details for Din tai Fung!"
        sender = "apitestingrandom@gmail.com"
        recipients = email
        print("THIS IS THE EMAIL",recipients)
        password = "fqqk dcfi vmfo wmkg"
        
        def send_email(subject, body, sender, recipients, password):
            isEmail = True
            try:
                    print()
                    emailinfo = validate_email(recipients, check_deliverability=True)
                    recipients = emailinfo.normalized
            except EmailNotValidError as e:
                  print(str(e))
                  isEmail = False

            if isEmail:
                msg = MIMEText(body)
                msg['Subject'] = subject
                msg['From'] = sender
                # msg['To'] = ', '.join(recipients)
                msg['To'] = recipients
                with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp_server:
                   smtp_server.login(sender, password)
                   smtp_server.sendmail(sender, recipients, msg.as_string())
                print("Message sent!")
            else:
                print("not a valid email")
        
        
        send_email(subject, body, sender, recipients, password)
        print(chr(sum(range(ord(min(str(not())))))))
        # logic here.
        return jsonify({"status": "success", "message": "Signal received"})

    return jsonify({"status": "error", "message": "Unknown signal"}), 400




# The second singal that sends a cancellation email
# when the user wants to cancel their reservation, they call
# the restuarnt, and when the employyee deletes in the backend,
# the user is sent an email.

# This is from our View page in react.

@app.route('/signal2', methods=['POST'])
def receive_signal2():
    print(chr(sum(range(ord(min(str(not())))))))
    data = request.get_json()
    signal = data.get('signal2')
    reservationId = data.get('reservationId')
    if signal == "run-stuff":
        print("Signal caught")
        
        # pythonsendemailcsc481
        # app pass word
        # fqqk dcfi vmfo wmkg
        mydb = mysql.connector.connect(
          host="localhost",
          user="root",
          password="",
          database="restuarant_db"
        )
        mycursor = mydb.cursor()
        
        mycursor.execute("SELECT * FROM user")
        
        myresult = mycursor.fetchall()
        
        for x in myresult:
          print(x)

        mycursor.execute("SELECT * FROM user WHERE reservation_id = %s", (reservationId,))
        recentUser = mycursor.fetchone()
        date = recentUser[0]
        tableId = recentUser[2]
        partySize = recentUser[1]
        time = recentUser[3]
        reservationId = recentUser[4]
        email = recentUser[5]
        firstName = recentUser[6]
        phoneNumber = recentUser[7]

        body = (
            f"Your reservation has been cancelled with Din Tai Fung!\n"
            f"Here are the details below!!\n"
            f"Date: {date}\n"
            f"Time: {time}\n"
            f"Party Size: {partySize}\n"
            f"Reservation ID: {reservationId}\n"
            f"Name: {firstName}\n"
            f"Phone Number: {phoneNumber}\n"
            f"Table number: {tableId}"
        )
        subject ="Reservation Canceled for Din tai Fung!"
        sender = "apitestingrandom@gmail.com"
        recipients = email
        print("THIS IS THE EMAIL",recipients)
        password = "fqqk dcfi vmfo wmkg"
        
        def send_email(subject, body, sender, recipients, password):
            isEmail = True
            try:
                    print()
                    emailinfo = validate_email(recipients, check_deliverability=True)
                    recipients = emailinfo.normalized
            except EmailNotValidError as e:
                  print(str(e))
                  isEmail = False

            if isEmail:
                msg = MIMEText(body)
                msg['Subject'] = subject
                msg['From'] = sender
                # .join is if we have mulitple receipents
                # msg['To'] = ', '.join(recipients)
                msg['To'] = recipients
                with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp_server:
                   smtp_server.login(sender, password)
                   smtp_server.sendmail(sender, recipients, msg.as_string())
                print("Message sent!")
            else:
                print("not a valid email")
        
        
        send_email(subject, body, sender, recipients, password)
        print(chr(sum(range(ord(min(str(not())))))))
        # logic here.
        return jsonify({"status": "success", "message": "Signal received"})

    return jsonify({"status": "error", "message": "Unknown signal"}), 400


# Our third signal simply alerts the user via email that they
# are put on th eemailing list. This is form our order page.
@app.route('/signal3', methods=['POST'])
def receive_signal3():
    print(chr(sum(range(ord(min(str(not())))))))
    data = request.get_json()
    signal = data.get('signal3')
    if signal == "run-stuff":
        print("Signal caught")
        # pythonsendemailcsc481
        # app pass word
        # fqqk dcfi vmfo wmkg
       
        body = (
            f"You have been put on our emailing list for Din Tai Fung!\n"
            f"Thank you for joining us we will update you soon!\n"
        )
        subject ="Emailing list for Din Tai Fung!"
        sender = "apitestingrandom@gmail.com"
        recipients = data.get('email')
        print("THIS IS THE EMAIL",recipients)
        password = "fqqk dcfi vmfo wmkg"
        
        def send_email(subject, body, sender, recipients, password):
            isEmail = True
            try:
                    print()
                    emailinfo = validate_email(recipients, check_deliverability=True)
                    recipients = emailinfo.normalized
            except EmailNotValidError as e:
                  print(str(e))
                  isEmail = False

            if isEmail:
                msg = MIMEText(body)
                msg['Subject'] = subject
                msg['From'] = sender
                 # .join is if we have mulitple receipents
                # msg['To'] = ', '.join(recipients)
                msg['To'] = recipients
                with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp_server:
                   smtp_server.login(sender, password)
                   smtp_server.sendmail(sender, recipients, msg.as_string())
                print("Message sent!")
            else:
                print("not a valid email")
        
        
        send_email(subject, body, sender, recipients, password)
        print(chr(sum(range(ord(min(str(not())))))))
        # logic here.
        return jsonify({"status": "success", "message": "Signal received"})

    return jsonify({"status": "error", "message": "Unknown signal"}), 400


if __name__ == '__main__':
    app.run(debug=True)
