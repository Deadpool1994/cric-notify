const request = require('request');
var CronJob = require('cron').CronJob;
var matchService = require('./matchServices.js');
const firebase = require('./firebaseAdmin.js')

var startCRONJob = () => {
  new CronJob('*/30 * * * * *', () => {
    var data = matchService.get_scorecard_data(firebase);  
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
