const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');
const cronJob = require('./cronJob.js');
const firebase = require('./firebaseAdmin.js')

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

var dummy = (data) => {
  io.emit('commentary-data', data);
};

io.on('connection',(socket)=>{
  var data = cronJob.get_data(dummy);
});

server.listen(port, ()=>{
  console.log(`Remember PORT ${port}...`);
  firebase.initializeFirebase();
  cronJob.startCRONJob();
});
