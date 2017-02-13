var socket = io();

socket.on('connect',() =>{
  console.log('connected to server');
});

socket.on('disconnect',() =>{
  console.log('disconnected to server');
});

socket.on('commentary-data',(data)=>{
  console.log('got the data');
  $("body").append("<p>data</p>");
  console.log(data);
});
