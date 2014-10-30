/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Inschrijving = require('./inschrijving.model');

exports.register = function(socket) {
  Inschrijving.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Inschrijving.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('inschrijving:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('inschrijving:remove', doc);
}