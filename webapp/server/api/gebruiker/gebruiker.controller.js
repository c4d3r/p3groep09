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

// Updates an existing thing in the DB.
exports.update = function(req, res) {
    if(req.body._id) { delete req.body._id; }
    Gebruiker.findById(req.params.id, function (err, thing) {
        if (err) { return handleError(res, err); }
        if(!thing) { return res.send(404); }
        var updated = _.merge(thing, req.body);
        updated.save(function (err) {
            if (err) { return handleError(res, err); }
            return res.json(200, thing);
        });
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

function handleError(res, err) {
    return res.send(500, err);
}