/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Activiteit = require('./actviteit.model');

exports.register = function(socket) {
  Activiteit.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Activiteit.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('actviteit:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('actviteit:remove', doc);
}