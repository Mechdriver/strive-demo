const express = require('express');
const path = require('path');
const http = require('http');
const app = express();

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

http.createServer(app).listen(1337, () => {
  console.log('Express server listening on port 1337');
});
