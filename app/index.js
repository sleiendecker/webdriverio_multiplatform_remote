const express = require('express'),
      app = express(),
      parseUserAgent = require("user-agent-parser"),
      http = require('http').Server(app),
      io = require('socket.io')(http),
      port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + 'public/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    let agent = parseUserAgent(socket.handshake.headers['user-agent']).browser.name;
    io.emit('chat message', {msg: msg, agent: agent});
  });
});

http.listen(port, "0.0.0.0", function(){
  console.log('listening on port:' + port);
});