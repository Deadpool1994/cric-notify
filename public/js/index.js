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
  window.we = data;
  // var notification = new Notification(data);
});

$('document').ready(function(){
  console.log("logging");
  if(!("Notification" in window)){
    alert('Browser too old to support Notification');
  }
  else if(Notification.permission !== "denied"){
    //Asking for Notification permission
    Notification.requestPermission(function(permission){
      if(permission === "granted"){
        var notification = new Notification('Run', {
    			body: 'Jadeja to T Islam, out Caught by Rahul!! Loses his patience.',
    			icon: 'https://lh3.googleusercontent.com/-rmTI5PWyjkA/AAAAAAAAAAI/AAAAAAAAABc/yXkZnCGdnHk/s120-c/photo.jpg' // optional
    		});

        //Close Notification after 10 seconds
        setTimeout(function(){
          console.log('timing out...');
          notification.close();
        }, 10000)
      }
    });
  }
});
