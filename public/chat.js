$(function() {
  var socket   = io.connect()
    , $posts   = $('ul#posts')
    , $message = $('input#message')
    ;
   
  //"login"イベントをつくって、サーバーからきたらする処理。
  socket.on('login', function(data) {
    //ソケットIDを表示させる。
    var $li = $('<li>').text(data + ' joined.');
    $posts.prepend($li);
  });

  //"POST"イベントを用意して、サーバーからきたらする処理。
  socket.on('post', function(data) {
    //表示する。
    var $li = $('<li>').text(data.id + ' say: ' + data.post);
    $posts.prepend($li);
  });

  //入力して、ボタンをクリックしたらする処理。
  $('input#update').on('click', function(e) {

    var message = $message.val();
    if (message.length === 0) return;
    //サーバーに"post"として送る。
    socket.emit('post', message);
    //入力内容を空にする。
    $message.val('');
  });
});
