/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Contactpersoon = require('./contactpersoon.model');

exports.register = function(socket) {
  Contactpersoon.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Contactpersoon.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('contactpersoon:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('contactpersoon:remove', doc);
}