/**
 * Created by Maxim on 27/10/2014.
 */
/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';
var Gebruiker = require('./gebruiker.model')
    , passport = require('passport')
    , config = require('../../config/environment')
    , jwt = require('jsonwebtoken')
    , _ = require('lodash');

// Get list of things
exports.index = function(req, res) {
    Gebruiker.find(function (err, things) {
        if(err) { return handleError(res, err); }
        return res.json(200, things);
    });
};

// Get a single thing
exports.show = function(req, res) {
    Gebruiker.findById(req.params.id, function (err, thing) {
        if(err) { return handleError(res, err); }
        if(!thing) { return res.send(404); }
        return res.json(thing);
    });
};

// Creates a new thing in the DB.
exports.create = function(req, res) {
    Gebruiker.create(req.body, function(err, thing) {
        if(err) { return handleError(res, err); }
        return res.json(201, thing);
    });
};

// Deletes a thing from the DB.
exports.destroy = function(req, res) {
    Gebruiker.findById(req.params.id, function (err, thing) {
        if(err) { return handleError(res, err); }
        if(!thing) { return res.send(404); }
        thing.remove(function(err) {
            if(err) { return handleError(res, err); }
            return res.send(204);
        });
    });
};

/**
 * Get my info
 */
exports.me = function(req, res, next) {
    var userId = req.user._id;
    Gebruiker.findOne({
        _id: userId
    }, '-salt -hashedPassword', function(err, user) { // don't ever give out the password or salt
        if (err) return next(err);
        if (!user) return res.json(401);
        res.json(user);
    });
};

/**
 * Change a users password
 */
exports.changePassword = function(req, res, next) {
    var userId = req.user._id;
    var oldPass = String(req.body.oldPassword);
    var newPass = String(req.body.newPassword);

    Gebruiker.findById(userId, function (err, user) {
        if(user.authenticate(oldPass)) {
            user.password = newPass;
            user.save(function(err) {
                if (err) return validationError(res, err);
                res.send(200);
            });
        } else {
            res.send(403);
        }
    });
};

/**
 * Authentication callback
 */
exports.authCallback = function(req, res, next) {
    res.redirect('/');
};

function handleError(res, err) {
    return res.send(500, err);
}
