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
  console.log('on connection');
  // var data = cronJob.get_data(dummy);
});

server.listen(port, ()=>{
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  console.log(`Remember PORT ${port}...`);
// var admin =   firebase.initializeFirebase();
  cronJob.startCRONJob();
});
