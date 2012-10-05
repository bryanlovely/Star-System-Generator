// Extensions to basic javascript
require('./extensions');


// Module dependencies

var express = require('express')
    , routes = require('./routes')
    , socket = require('socket.io')
    , events = require('./events')
    , baseModelFactory = require('./models/baseModel')
	, spaceCharts = require('./dierollerandchart')
	, dieRoller = require('roll')
    ;
global.spaceCharts = spaceCharts;
global.dieRoller = dieRoller;



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
app.get('/numberofstars', routes.numberOfStars);
app.get('/firstgasgiant', routes.firstGasGiant);
app.get('/placeplanetaryorbits', routes.placePlanetaryOrbits);
app.get('/gasGiantPlacement', routes.gasGiantPlacement);
app.get('/remainingOrbits', routes.remainingOrbits);
app.get('/placeMoons', routes.placeMoons);

app.listen(8000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});




events.testGlobal('message',events.testCallback);
var foo = new baseModelFactory.baseModel();
//console.log(foo);





io.sockets.on('connection', events.connection);


