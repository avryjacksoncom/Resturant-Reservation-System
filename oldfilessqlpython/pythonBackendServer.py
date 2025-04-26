import mysql.connector  
import smtplib
import re
from email.mime.text import MIMEText
from email_validator import validate_email, EmailNotValidError


from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/signal', methods=['POST'])
def receive_signal():
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
        partySize = recentUser[1]
        time = recentUser[2]
        reservationId = recentUser[3]
        email = recentUser[4]
        firstName = recentUser[5]
        phoneNumber = recentUser[6]
        # (datetime.date(2025, 4, 24), 4, datetime.timedelta(seconds=50700), 1053, 'avryjacksoncom@gmail.com', 'Weeeeee', '7143069542')
        # # avryjacksoncom@gmail.com
        
        body = (
            f"This is your reservation details for your recent reservation!!!\n"
            f"Here are the details below!!\n"
            f"Date: {date}\n"
            f"Time: {time}\n"
            f"Party Size: {partySize}\n"
            f"Reservation ID: {reservationId}\n"
            f"Name: {firstName}\n"
            f"Phone Number: {phoneNumber}"
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

        # logic here.
        return jsonify({"status": "success", "message": "Signal received"})

    return jsonify({"status": "error", "message": "Unknown signal"}), 400





@app.route('/signal2', methods=['POST'])
def receive_signal2():
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
        partySize = recentUser[1]
        time = recentUser[2]
        reservationId = recentUser[3]
        email = recentUser[4]
        firstName = recentUser[5]
        phoneNumber = recentUser[6]
        # (datetime.date(2025, 4, 24), 4, datetime.timedelta(seconds=50700), 1053, 'avryjacksoncom@gmail.com', 'Weeeeee', '7143069542')
        # # avryjacksoncom@gmail.com
        
        body = (
            f"Your reservation has been cancelled with Din Tai Fung!\n"
            f"Here are the details below!!\n"
            f"Date: {date}\n"
            f"Time: {time}\n"
            f"Party Size: {partySize}\n"
            f"Reservation ID: {reservationId}\n"
            f"Name: {firstName}\n"
            f"Phone Number: {phoneNumber}"
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
                # msg['To'] = ', '.join(recipients)
                msg['To'] = recipients
                with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp_server:
                   smtp_server.login(sender, password)
                   smtp_server.sendmail(sender, recipients, msg.as_string())
                print("Message sent!")
            else:
                print("not a valid email")
        
        
        send_email(subject, body, sender, recipients, password)

        # logic here.
        return jsonify({"status": "success", "message": "Signal received"})

    return jsonify({"status": "error", "message": "Unknown signal"}), 400


if __name__ == '__main__':
    app.run(debug=True)
