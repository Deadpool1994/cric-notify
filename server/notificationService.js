
var sendScoreNotification = (admin, data, curr_team)=>{


    // This registration token comes from the client FCM SDKs.
    var topic = "('movies' in topics || 'movies' in topics)";
    // See the "Defining the message payload" section below for details
    // on how to define a message payload.
    var notificationBody;
    if(data.type === "ball"){
      notificationBody = `${data.shc},${data.r} run,${data.c}`;
    }else{
      notificationBody = `${data.c}`;
    }
    var payload = {
      notification: {
        title: `${curr_team} ${data.tl}-${data.wkts} (${data.ov}-${data.n})`,
        body: notificationBody,
        image: 'https://cdn.vectorstock.com/i/composite/35,44/cricket-icon-vector-783544.jpg',
        click_action: "http://localhost:3000/#!/"
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
    admin.messaging().sendToCondition(topic, payload,options)
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
};

module.exports = {
  sendScoreNotification
};
