importScripts('https://www.gstatic.com/firebasejs/3.6.9/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.6.9/firebase-messaging.js');


// Initialize Firebase
var config = {
  apiKey: "AIzaSyBbiwQW52lAI1T1Zb2Zq8aQvl-ARXl8RlA",
  authDomain: "notify-cricket.firebaseapp.com",
  databaseURL: "https://notify-cricket.firebaseio.com",
  storageBucket: "notify-cricket.appspot.com",
  messagingSenderId: "814109789225"
};
firebase.initializeApp(config);
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload){
  const title = "mohit rami";
  const options = {
    body: payload.data.status
  }
  return self.registration.showNotification(title, options);
});
