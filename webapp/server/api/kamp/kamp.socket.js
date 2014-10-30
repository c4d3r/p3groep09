/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Kamp = require('./kamp.model');

exports.register = function(socket) {
  Kamp.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Kamp.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('kamp:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('kamp:remove', doc);
}