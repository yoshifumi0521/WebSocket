# WebSocketの勉強

Expressとsocket.ioを使って、WebScocketを利用する。

通信を行うためのAPI

①サーバーから、送信元のクライアントだけ送る。
socket.emit(“イベント名”,データ);

②サーバーから、送信元以外のクライアント全員に送る。
socket.broadcast.emit(‘イベント名’,データ);

③サーバーから、すべてのクライアントに送る場合。
io.sockets.emit(‘イベント名’,データ);

詳しくは、ブログで書いた。
http://yoshifumisato.jeez.jp/wordpress/post/javascript/1176




