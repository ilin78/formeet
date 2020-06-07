const PORT = process.env.PORT || 5000;

const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(PORT);


/*
const express = require('express');
const app = express();
const server = require('http').createServer(app);

const path = require('path');
const PORT = process.env.PORT || 5000;
const io = require ('socket.io').listen(server);

io.on('connection', socket => console.log(socket.id) );

app.use(express.static(path.join(__dirname, 'build')));
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
server.listen(PORT);
// "proxy":"http://localhost:5000",

*/