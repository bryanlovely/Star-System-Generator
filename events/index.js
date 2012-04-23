
/**
 * Sockets.io event handlers
 */


exports.connection = function (socket) {
  socket.on('ferret', exports.ferret);
}


exports.ferret = function (name, fn) {
    console.log('ferret = '+name);
    fn('woot');
}

