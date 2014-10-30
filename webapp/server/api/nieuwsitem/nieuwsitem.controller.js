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
var Nieuwsitem = require('./nieuwsitem.model');

// Get list of nieuwsitems
exports.index = function(req, res) {
  Nieuwsitem.find(function (err, nieuwsitems) {
    if(err) { return handleError(res, err); }
    return res.json(200, nieuwsitems);
  });
};

// Get a single nieuwsitem
exports.show = function(req, res) {
  Nieuwsitem.findById(req.params.id, function (err, nieuwsitem) {
    if(err) { return handleError(res, err); }
    if(!nieuwsitem) { return res.send(404); }
    return res.json(nieuwsitem);
  });
};

// Creates a new nieuwsitem in the DB.
exports.create = function(req, res) {
  Nieuwsitem.create(req.body, function(err, nieuwsitem) {
    if(err) { return handleError(res, err); }
    return res.json(201, nieuwsitem);
  });
};

// Updates an existing nieuwsitem in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Nieuwsitem.findById(req.params.id, function (err, nieuwsitem) {
    if (err) { return handleError(res, err); }
    if(!nieuwsitem) { return res.send(404); }
    var updated = _.merge(nieuwsitem, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, nieuwsitem);
    });
  });
};

// Deletes a nieuwsitem from the DB.
exports.destroy = function(req, res) {
  Nieuwsitem.findById(req.params.id, function (err, nieuwsitem) {
    if(err) { return handleError(res, err); }
    if(!nieuwsitem) { return res.send(404); }
    nieuwsitem.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}