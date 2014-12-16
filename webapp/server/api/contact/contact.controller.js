/**
 * Created by Bram on 7/11/2014.
 */
'use strict'

var _ = require('lodash');
var Contact = require('./contact.model');
var Gebruiker = require('../gebruiker/gebruiker.model');
var nodemailer = require('nodemailer');
var smtpTransporter = require('nodemailer-smtp-transport');


// Get list of emails
exports.index = function (req, res) {
    Contact.find(function (err, contacts) {
        if (err) {
            return handleError(res, err);
        }
        return res.json(200, contacts);
    });
};

// Get a single email
exports.show = function (req, res) {
    Contact.findById(req.params.id, function (err, contact) {
        if (err) {
            return handleError(res, err);
        }
        if (!contact) {
            return res.send(404);
        }
        return res.json(contact);
    });
};

// Creates a new email in the DB and send the mail to the joetz email adress.
exports.create = function (req, res) {

    var newContact = new Contact(req.body);
    var i = Gebruiker.findOne({});

    newContact.save(function (err, contact) {
        Gebruiker.findOne({_id: newContact.sendBy}, function (err, gebruiker) {
            var _gebruiker = gebruiker;

            console.log(_gebruiker);

            smtpTransporter = nodemailer.createTransport("SMTP", {
                service: "Gmail",
                auth: {
                    user: "joetz.projecten3@gmail.com",
                    pass: "Joetzp3Groep9"
                }});

            var mailOptions = {
                from: "joetz.projecten3@gmail.com",
                to: "joetz.projecten3@gmail.com",
                subject: newContact.onderwerp,
                text: newContact.bericht + "\nAfzender: " +  _gebruiker.email
            }
            //console.log(smtpTransporter + 'test');

            smtpTransporter.sendMail(mailOptions, function (error, info) {
                console.log("test");
                if (error) {
                    console.log(error);
                } else {
                    console.log('Message sent:');
                }
            });
        });
        console.log(Gebruiker.findOne({_id: newContact.sendBy}));




        if (err) {
            return handleError(res, err);
        }
        return res.json(201, contact);
    });
};

// Updates an existing email in the DB.
exports.update = function (req, res) {
    if (req.body._id) {
        delete req.body._id;
    }
    Contact.findById(req.params.id, function (err, contact) {
        if (err) {
            return handleError(res, err);
        }
        if (!contact) {
            return res.send(404);
        }
        var updated = _.merge(contact, req.body);
        updated.save(function (err) {
            if (err) {
                return handleError(res, err);
            }
            return res.json(200, contact);
        });
    });
};

// Deletes a email from the DB.
exports.destroy = function (req, res) {
    Contact.findById(req.params.id, function (err, contact) {
        if (err) {
            return handleError(res, err);
        }
        if (!contact) {
            return res.send(404);
        }
        contact.remove(function (err) {
            if (err) {
                return handleError(res, err);
            }
            return res.send(204);
        });
    });
};

exports.send = function (req, res) {
    console.log('tis is bait');
    smtpTransporter = nodemailer.createTransport("SMTP", {
        service: "Gmail",
        auth: {
            user: "joetz.projecten3@gmail.com",
            pass: "Joetzp3Groep9"
        }});

    var mailOptions = {
        from: "joetz.projecten3@gmail.com",
        to: "joetz.projecten3@gmail.com",
        subject: req.subject,
        text: req.body
    }
    console.log(smtpTransporter + 'test');

    smtpTransporter.sendMail(mailOptions, function (error, info) {
        console.log("test");
        if (error) {
            console.log(error);
        } else {
            console.log('Message sent:');
        }
    });
    console.log("something?")
};


function handleError(res, err) {
    return res.send(500, err);
}