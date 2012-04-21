var app = require('express').createServer()
  , io = require('socket.io').listen(app);

app.listen(8000);

// router section
app.get('/(index.html)?', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});


// socket event handlers
io.sockets.on('connection', function (socket) {
  socket.on('ferret', function (name, fn) {
  	console.log('ferret = '+name);
    fn('woot');
  });
});
