/**
 * Created by Bram on 7/11/2014.
 */
'use strict'

var _ = require('lodash');
var Contact = require('./contact.model');
var nodemailer = require('nodemailer');

// Get list of emails
exports.index = function(req, res) {
    Contact.find(function (err, contacts) {
        if(err) { return handleError(res, err); }
        return res.json(200, contacts);
    });
};

// Get a single email
exports.show = function(req, res) {
    Contact.findById(req.params.id, function (err, contact) {
        if(err) { return handleError(res, err); }
        if(!contact) { return res.send(404); }
        return res.json(contact);
    });
};

// Creates a new email in the DB.
exports.create = function(req, res) {
    Contact.create(req.body, function(err, contact) {
        if(err) { return handleError(res, err); }
        return res.json(201, contact);
    });
};

// Updates an existing email in the DB.
exports.update = function(req, res) {
    if(req.body._id) { delete req.body._id; }
    Contact.findById(req.params.id, function (err, contact) {
        if (err) { return handleError(res, err); }
        if(!contact) { return res.send(404); }
        var updated = _.merge(contact, req.body);
        updated.save(function (err) {
            if (err) { return handleError(res, err); }
            return res.json(200, contact);
        });
    });
};

// Deletes a email from the DB.
exports.destroy = function(req, res) {
    Contact.findById(req.params.id, function (err, contact) {
        if(err) { return handleError(res, err); }
        if(!contact) { return res.send(404); }
        contact.remove(function(err) {
            if(err) { return handleError(res, err); }
            return res.send(204);
        });
    });
};
exports.transporter = function(){
    var smtpTransporter = nodemailer.createTransport("SMTP", {
        service: "Gmail",
        auth: {
            user: "joetz.projecten3@gmail.com",
            pass: "Joetzp3Groep9"
        }
    });
    return smtpTransporter;
};

exports.send = function(){

}


function handleError(res, err) {
    return res.send(500, err);
}