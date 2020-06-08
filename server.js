const PORT = process.env.PORT || 5000;
const INDEX = '/index.html';
const express = require('express');
const path = require('path');
const arrPeerId = [];
//___________________server______________________________________________

const server = express()
    .use(express.static(path.join(__dirname, 'build')))
    .get('*', (req, res) => res.sendFile(path.join(__dirname, 'build', 'index.html')))
    .listen(PORT, () => console.log(`Listening on ${PORT}`));

//__________________io___________________________________________________

const io = require ('socket.io').listen(server);

io.on('connection', socket => {
  socket.emit('ONLINE_PEER_ARRAY', arrPeerId)

  socket.on('NEW_PEER_ID', peerId => {
    socket.peerId = peerId
    arrPeerId.push(peerId);
    
    io.emit('NEW_CLIENT_CONNECT', peerId, console.log("NEW_CLIENT_CONNECT:",peerId));

  });

  socket.on('disconnect', () => {
    const index = arrPeerId.indexOf(socket.peerId);
    arrPeerId.splice(index, 1);
    io.emit ('SOMEONE_DISCONNECTED', socket.peerId)
  });

});
//_________________end__________________________________________________


