$(function() {
  var socket = io.connect();

  socket.on('connect', function() {
   
   console.log('クライアントが接続');

   
   //socket.emit('msg send', 'message from client');

    //socket.on('msg push', function(data) {

      //console.log("クライアントが"); // 'message from server'
    
    
    //});
   
   
   
   
   });
});
