const request = require('request');
var CronJob = require('cron').CronJob;
var matchService = require('./matchServices.js');
const firebase = require('./firebaseAdmin.js')

var startCRONJob = () => {

var admin =   firebase.initializeFirebase();
  new CronJob('*/30 * * * * *', () => {


    setTimeout(function(){

      // This registration token comes from the client FCM SDKs.
      var registrationToken = "eNryYYKSKAk:APA91bH5aTPbZJflLxwfbYhqAz7rBrXDOZ95NgCX2GRYIkfHzfaG7A-AtBXjhbL2H6_6LyDjCcew8mZXGlh64nBfKLEUAF713rncyE7SwIKIpVbkaPxrrByY9QwoYhxneX733nlHFpxZ";

      // See the "Defining the message payload" section below for details
      // on how to define a message payload.
      var payload = {
        notification: {
          title: "$GOOG up 1.43% on the day",
          body: "$GOOG gained 11.80 points to close at 835.67, up 1.43% on the day."
      },data: {
          score: "850",
          time: "2:45"
      }
      };

      var options = {
        priority: "high"
      };

      // Send a message to the device corresponding to the provided
      // registration token.
      admin.messaging().sendToDevice(registrationToken, payload,options)
      .then(function(err, response) {
        if(err){
            console.log("Error : ", err.results);
        }
        // See the MessagingDevicesResponse reference documentation for
        // the contents of response.
        console.log("Successfully sent message:", err);
      })
      .catch(function(error) {
        console.log("Error sending message: XXX", error);
      });

    }, 1000);

//    var data = matchService.get_scorecard_data(firebase);
  }, () => {
    console.log("stop the cron job");
  },
  true,
  'America/Los_Angeles'
  );
};

module.exports = {
  startCRONJob
};
