const firebase = require('firebase');

 var startFirebase = () => {
  console.log('trying to connect firebase ....');
  firebase.initializeApp({
    serviceAccount: './server/json/notify-cricket_service_account.json',
    databaseURL: 'https://notify-cricket.firebaseio.com/'
  });

  var ref = firebase.database().ref();
  ref.once('value')
     .then(function(snap){
       console.log('snap.value is: ',snap.val());
     });
 };

 module.exports = {startFirebase};
