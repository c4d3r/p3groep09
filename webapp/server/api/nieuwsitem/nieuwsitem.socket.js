/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Nieuwsitem = require('./nieuwsitem.model');

exports.register = function(socket) {
  Nieuwsitem.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Nieuwsitem.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('nieuwsitem:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('nieuwsitem:remove', doc);
}