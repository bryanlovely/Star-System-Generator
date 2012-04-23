
/**
 * Module dependencies.
 */

var express = require('express')
    , routes = require('./routes')
    , socket = require('socket.io')
    , events = require('./events');

var app = module.exports = express.createServer();
var io = socket.listen(app);

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);

app.listen(8000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});





io.sockets.on('connection', events.connection);


// socket event handlers
/*
io.sockets.on('connection', function (socket) {
  socket.on('ferret', function (name, fn) {
  	console.log('ferret = '+name);
    fn('woot');
  });
});
*/
