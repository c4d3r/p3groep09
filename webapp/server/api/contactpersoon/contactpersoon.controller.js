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
var Contactpersoon = require('./contactpersoon.model');

// Get list of contactpersonen
exports.index = function(req, res) {
  Contactpersoon.find(function (err, contactpersonen) {
    if(err) { return handleError(res, err); }
    return res.json(200, contactpersonen);
  });
};

// Get a single contactpersoon
exports.show = function(req, res) {
  Contactpersoon.findById(req.params.id, function (err, contactpersoon) {
    if(err) { return handleError(res, err); }
    if(!contactpersoon) { return res.send(404); }
    return res.json(contactpersoon);
  });
};

// Creates a new contactpersoon in the DB.
exports.create = function(req, res) {
  Contactpersoon.create(req.body, function(err, contactpersoon) {
    if(err) { return handleError(res, err); }
    return res.json(201, contactpersoon);
  });
};

// Updates an existing contactpersoon in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Contactpersoon.findById(req.params.id, function (err, contactpersoon) {
    if (err) { return handleError(res, err); }
    if(!contactpersoon) { return res.send(404); }
    var updated = _.merge(contactpersoon, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, contactpersoon);
    });
  });
};

// Deletes a contactpersoon from the DB.
exports.destroy = function(req, res) {
  Contactpersoon.findById(req.params.id, function (err, contactpersoon) {
    if(err) { return handleError(res, err); }
    if(!contactpersoon) { return res.send(404); }
    contactpersoon.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}