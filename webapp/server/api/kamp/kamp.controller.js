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
var Kamp = require('./kamp.model');

// Get list of kampen
exports.index = function(req, res) {
  Kamp
  .find()
  .exec(function (err, kampen) {
    if(err) { return handleError(res, err); }
    return res.json(200, kampen);
  });
};

// Get a single kamp
exports.show = function(req, res) {
  Kamp
  .findById(req.params.id, function (err, kamp) {
    if(err) { return handleError(res, err); }
    if(!kamp) { return res.send(404); }
    return res.json(kamp);
  })
  .populate('inschrijvingen');
};

// Creates a new kamp in the DB.
exports.create = function(req, res) {
  Kamp.create(req.body, function(err, kamp) {
    if(err) { return handleError(res, err); }
    return res.json(201, kamp);
  });
};

// Updates an existing kamp in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Kamp.findById(req.params.id, function (err, kamp) {
    if (err) { return handleError(res, err); }
    if(!kamp) { return res.send(404); }
    var updated = _.merge(kamp, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, kamp);
    });
  });
};

// Deletes a kamp from the DB.
exports.destroy = function(req, res) {
  Kamp.findById(req.params.id, function (err, kamp) {
    if(err) { return handleError(res, err); }
    if(!kamp) { return res.send(404); }
    kamp.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

exports.findByVakantie = function(req, res) {
  var vakantie = req.query.vakantie;

  //Mongodb werkt met ISODates
  Kamp.find({"vakantie": vakantie}, function(err, result){
    if(err){ return handleError(res, err); }
    return res.json(200, result);
  });
};


function handleError(res, err) {
  return res.send(500, err);
}
