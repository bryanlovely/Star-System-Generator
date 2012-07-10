
/**
 * Sockets.io event handlers
 */

key = {};
timer = {};

exports.connection = function (socket) {
	console.log(socket);
	key[socket.id] = 0;
  //socket.on('ferret', exports.ferret);
  	timer[socket.id] = setInterval(
  	function() {
  		console.log("=== timer");
  		socket.emit("timerTick",key[socket.id]);
  		key[socket.id]++;
  	},
  	10000
  );
}


exports.ferret = function (name, fn) {
    console.log('ferret = '+name);
    var result = {foo: 'bar', baz: 'woot'};
    fn(result);
}

exports.testGlobal = function (message, callback) {
	console.log( message );
	callback();
}

exports.testCallback = function () {
	console.log( "callback" );
}
