/**
 * Created by Bram on 4/11/2014.
 */
'use strict';

var Categorie = require('./categorie.model');

exports.register = function(socket) {
    Categorie.schema.post('save', function (doc) {
        onSave(socket, doc);
    });
    Categorie.schema.post('remove', function (doc) {
        onRemove(socket, doc);
    });
}

function onSave(socket, doc, cb) {
    socket.emit('categorie:save', doc);
}

function onRemove(socket, doc, cb) {
    socket.emit('categorie:remove', doc);
}