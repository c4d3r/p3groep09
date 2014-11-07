
function onSave(socket, doc, cb) {
    socket.emit('nieuwsitem:save', doc);
}

function onRemove(socket, doc, cb) {
    socket.emit('nieuwsitem:remove', doc);
}