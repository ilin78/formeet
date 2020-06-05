
const { ExpressPeerServer } = require('peer');


const PORT = process.env.PORT || 9000;

const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const server = app.listen(PORT);

const peerServer = ExpressPeerServer(server, {
  debug: true,
  path: '/myapp'
});



app.use('/peerjs', peerServer);