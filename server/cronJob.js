const request = require('request');
var CronJob = require('cron').CronJob;
var matchService = require('./matchServices.js');
const firebase = require('./firebaseAdmin.js')

var startCRONJob = () => {
  new CronJob('*/30 * * * * *', () => {
//    matchService.get_scorecard_data(firebase.storeScorecardData);
    matchService.get_commentary_data(firebase.storeOverData);
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
