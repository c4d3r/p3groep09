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
var Inschrijving = require('./inschrijving.model');

// Get list of inschrijvingen
exports.index = function(req, res) {
  Inschrijving.find(function (err, inschrijvingen) {
    if(err) { return handleError(res, err); }
    return res.json(200, inschrijvingen);
  });
};

// Get a single inschrijving
exports.show = function(req, res) {
  Inschrijving
  .findById(req.params.id, function (err, inschrijving) {
    if(err) { return handleError(res, err); }
    if(!inschrijving) { return res.send(404); }
    return res.json(inschrijving);
  })
  .populate('gebruiker')
  .populate('kamp');
};

// Creates a new inschrijving in the DB.
exports.create = function(req, res) {
  console.log(req.body);
  Inschrijving.create(req.body, function(err, inschrijving) {
    if(err) { return handleError(res, err); }
    return res.json(201, inschrijving);
  });
};

// Updates an existing inschrijving in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Inschrijving.findById(req.params.id, function (err, inschrijving) {
    if (err) { return handleError(res, err); }
    if(!inschrijving) { return res.send(404); }
    var updated = _.merge(inschrijving, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, inschrijving);
    });
  });
};

// Deletes a inschrijving from the DB.
exports.destroy = function(req, res) {
  Inschrijving.findById(req.params.id, function (err, inschrijving) {
    if(err) { return handleError(res, err); }
    if(!inschrijving) { return res.send(404); }
    inschrijving.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
