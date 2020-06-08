
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const path = require('path');
const PORT = process.env.PORT || 5000;
const io = require ('socket.io').listen(server);

const arrPeerId = [];

io.on('connection', socket => {
    socket.emit('ONLINE_PEER_ARRAY', arrPeerId)

    socket.on('NEW_PEER_ID', peerId => {
      arrPeerId.push(peerId);
      
      io.emit('NEW_CLIENT_CONNECT', peerId, console.log("NEW_CLIENT_CONNECT:",peerId))
      
    })
  }
);

app.use(express.json({ extendet: true}));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, 'build')));
  app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
  
});
}
server.listen(PORT);
console.log('http://localhost:'+`${PORT}`)