
/**
 * Module dependencies.
 */

var express = require('express')
    , routes = require('./routes')
    , socket = require('socket.io')
    , events = require('./events')
    , charts = require('./charts')
    , chartHandler = require('./dierollerandchart')
    , baseModelFactory = require('./models/baseModel')
    ;

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



// set up chart handlers
global.spaceCharts = chartHandler.chartHandlers(charts);

events.testGlobal('message',events.testCallback);
var foo = new baseModelFactory.baseModel();
console.log(foo);





io.sockets.on('connection', events.connection);
