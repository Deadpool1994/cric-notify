var admin = require('firebase-admin');
var serviceAccount = require('./json/notify-cricket_service_account.json');
var utils = require('./utils.js');

var initializeFirebase = () => {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://notify-cricket.firebaseio.com/'
  });
  return admin;
};

var getFirebaseDB = () => {
  return admin.database();
};

var storeOverData = (s_data, counter , data) => {
  var over = utils.convertToArray(data.query.results.Over)[0];
  var ball = utils.convertToArray(over.Ball)[0];
  var scorecardData = utils.convertToArray(s_data.query.results.Scorecard);
  var match_id = scorecardData[counter].mid;
  var ob = scorecardData[counter].toss.bat;
  var curr_team = scorecardData[counter].teams[ob].sn
  var db_string = match_id+"/commentary/"+curr_team+"/"+over.num+"-"+ball.n;
  var db = getFirebaseDB();
  var ref = db.ref(db_string);

  ref.on('value', (snapshot) => {
    if(snapshot.exists()){
      console.log(db_string+'  data all ready there');
    }else{
      ref.set(data);
    }
  });
};

var storeScorecardData = (data) => {
  var liveMatches = utils.convertToArray(data.query.results.Scorecard);
  for(var liveMatch of liveMatches){
      var db_string = liveMatch.mid+"/scorecard";
      var db = getFirebaseDB();
      var ref = db.ref(db_string);
      ref.on('value', (snapshot) => {
        if(snapshot.exists()){
          console.log(db_string +'  data all ready there');
        }else{
          ref.set(data);
        }
      });
    }
  };
module.exports = {
  initializeFirebase,
  getFirebaseDB,
  storeOverData,
  storeScorecardData
};
