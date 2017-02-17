const request = require('request');
var CronJob = require('cron').CronJob;
var matchService = require('./matchServices.js');
const firebase = require('./firebaseAdmin.js')


// var get_data = (callback) => {
//
//     request('https://query.yahooapis.com/v1/public/yql?q=desc%20cricket.commentary&format=json&diagnostics=true&env=store%3A%2F%2F0TxIGQMQbObzvU4Apia0V0&callback=', function(err,res,body){
//     callback(body);
//   });
// };

var startCRONJob = () => {
  new CronJob('*/30 * * * * *', () => {
    matchService.get_commentary_data(firebase.storeOverData);
  }, () => {
    console.log("stop the cron job");
  },
  true,
  'America/Los_Angeles'
  );
};

module.exports = {
  // get_data,
  startCRONJob
};
