/*
const PORT = process.env.PORT || 5000;

const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(PORT);
*/





const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 5000;

const server = require('http').createServer(app);

const io = require('socket.io')(server);
io.on('connection', socket => console.log(socket.id) );

app.use(express.static(path.join(__dirname, 'build')));
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
console.log('port:5000 Server started...')
server.listen(PORT);






io.on('connection', () => { /* … */ });
