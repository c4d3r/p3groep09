/**
 * Created by Bram on 7/11/2014.
 */


var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    nodemailer = require('nodemailer');


var ContactSchema = new Schema({
    sendBy: {type: Schema.ObjectId, ref: 'Gebruiker'},
    sendDate: {type: Date},
    onderwerp: {type: String},
    bericht: {type: String}
});

//EmailSchema.path('onderwerp').required(true, 'Text mag niet leeg zijn');
//EmailSchema.path('bericht').required(true, 'Onderwerp mag niet leeg zijn');

var smtpTransporter = nodemailer.createTransport("SMTP", {
    service: "Gmail",
    auth: {
        user: "joetz.projecten3@gmail.com",
        pass: "Joetzp3Groep9"
    }
});

module.exports = mongoose.model('Contact', ContactSchema);
