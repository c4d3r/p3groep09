/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Activiteit = require('./activiteit.model')
var Gebruiker = require('../gebruiker/gebruiker.model');

// Get list of activiteiten
exports.index = function(req, res) {
  Activiteit.find(function (err, activiteiten) {
    if(err) { return handleError(res, err); }
    return res.json(200, activiteiten);
  });
};

// Get a single activiteit
exports.show = function(req, res) {
  Activiteit
  .findById(req.params.id)
  .populate('contact')
  .exec(function (err, activiteit) {
    if(err) { return handleError(res, err); }
    if(!activiteit) { return res.send(404); }
    return res.json(activiteit);
  });
};

// Creates a new activiteit in the DB.
exports.create = function(req, res) {
  Activiteit.create(req.body, function(err, activiteit) {
    if(err) { return handleError(res, err); }
    return res.json(201, activiteit);
  });
};

// Updates an existing activiteit in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Activiteit.findById(req.params.id, function (err, activiteit) {
    if (err) { return handleError(res, err); }
    if(!activiteit) { return res.send(404); }
    var updated = _.merge(activiteit, req.body);
    console.log(updated);
    updated.save(function (err) {
      if(err) { console.log(err); }
      return res.json(200, activiteit);
      console.log("werkt");
    });
  });
};

exports.inschrijven = function(req, res) {

    Activiteit.findById(req.params.id, function(err, activiteit) {

        var _activiteit = activiteit;

        Gebruiker.findById(req.body.user._id, function(err, user) {
            _activiteit.addInschrijving(user);
            _activiteit.save();
        });

    });
}

// Deletes a activiteit from the DB.
exports.destroy = function(req, res) {
  Activiteit.findById(req.params.id, function (err, activiteit) {
    if(err) { return handleError(res, err); }
    if(!activiteit) { return res.send(404); }
    activiteit.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}