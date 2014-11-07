/**
 * Created by Bram on 7/11/2014.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport("SMTP", {
    service: "Gmail",
    auth: {
        user: "test@test.com",
        pass: "test"
    }
});

transporter.sendMail({
    from: "",
    to: "",
    subject: "",
    text: "",
}, function (error, response) {
    if (error) {
        console.log(error);
    } else {
        console.log("Message send: " + response.message);
    }
    transporter.close();
});


var EmailSchema = new Schema({
    sendBy: {type: Schema.ObjectId, ref: 'GebruikerSchema'},
    sendDate: {type: Date},
    text: {type: String}
});

EmailSchema.path('text').required(true, 'Text mag niet leeg zijn');

module.export = mongoose.model('Email', EmailSchema);
