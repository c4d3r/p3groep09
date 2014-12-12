/**
 * Created by Bram on 7/11/2014.
 */


var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    nodemailer = require('nodemailer');


var ContactSchema = new Schema({
    sendBy: {type: Schema.ObjectId, ref: "Gebruiker"},
    sendDate: {type: Date},
    onderwerp: {type: String},
    bericht: {type: String}
});

ContactSchema.path('onderwerp').required(true, 'Text mag niet leeg zijn');
ContactSchema.path('bericht').required(true, 'Onderwerp mag niet leeg zijn');

ContactSchema.post('send', function(contact){
    var smtpTransporter = nodemailer.createTransport("SMTP", {
        service: "Gmail",
        auth: {
            user: "joetz.projecten3@gmail.com",
            pass: "Joetzp3Groep9"
        }

    });
    smtpTransporter.sendMail({
        from: "joetz.projecten3@gmail.com",
        to: "joetz.projecten3@gmail.com",
        subject: contact.onderwerp,
        text: contact.bericht
    });
});

module.exports = mongoose.model('Contact', ContactSchema);
