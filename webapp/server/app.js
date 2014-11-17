/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var mongoose = require('mongoose');
var config = require('./config/environment');
var nodemailer = require('nodemailer');

var smtpTransporter = nodemailer.createTransport("SMTP", {
    service: "Gmail",
    auth: {
        user: "joetz.projecten3@gmail.com",
        pass: "Joetzp3Groep9"
    }
});

smtpTransporter.sendMail({
    from: "joetz.projecten3@gmail.com",
    to: "joetz.projecten3@gmail.com"
})

// Connect to database
mongoose.connect(config.mongo.uri, config.mongo.options);

// Populate DB with sample data
if(config.seedDB) { require('./config/seed'); }

// Setup server
var app = express();
var server = require('http').createServer(app);
var socketio = require('socket.io')(server, {
  serveClient: (config.env === 'production') ? false : true,
  path: '/socket.io-client'
});
require('./config/socketio')(socketio);
require('./config/express')(app);
require('./routes')(app);

// Start server
server.listen(config.port, config.ip, function () {
  console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});

// Expose app
exports = module.exports = app;