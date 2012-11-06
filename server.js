// Express
var express = require('express')
  , http = require('http')
  , app = express()
  ;

app.use(express.static(__dirname + '/public'));

var server = http.createServer(app).listen(3000);
console.log('server start:', 3000);

// Socket.IO
var io = require('socket.io')
  , io = io.listen(server)
  ;

//接続されたらする処理
io.sockets.on('connection', function(socket) {
  
  console.log("サーバーの接続");
  //"login"イベントで、ソケットのIDを送る。
  io.sockets.emit('login', socket.id);

  //"post"イベントを用意して、クライアントからリクエストがきたらする処理。
  socket.on('post', function(data) {
    //クライアントに送る。
    io.sockets.emit('post', { id: socket.id, post: data });
  });



});
