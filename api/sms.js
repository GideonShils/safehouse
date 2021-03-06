let secrets = require('../secrets');

let accountSid = secrets.accountSid;
let authToken = secrets.authToken;

let twilio = require('twilio');
let client = new twilio(accountSid, authToken);

let sendSMS = function (number, message) {
    randomCode = Math.floor(1000 + Math.random() * 9000);
    client.messages.create({
        body: message + randomCode,
        to: '+' + number, // Text this number
        from: '+15207292514' // From a valid Twilio number
    })
        .then((message) => console.log(message.sid));
        return randomCode;
}

let sms =  {
    sendSMS
}

module.exports = sms;