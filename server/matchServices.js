const request = require('request');
const utils = require('./utils.js');

var get_commentary_data = (data, callback) => {
    if(data.query.results){
      var liveMatches = utils.convertToArray(data.query.results.Scorecard);
      var counter = 0;
      for(var liveMatch of liveMatches){
        request("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20cricket.commentary%20where%20match_id%3D"+liveMatch.mid+"&format=json&diagnostics=true&env=store%3A%2F%2F0TxIGQMQbObzvU4Apia0V0&callback=", function(err,res,body){
          if(err){
            console.log(err);
            return err;
          }
          callback.storeOverData(data,counter, JSON.parse(body));
          counter++;
      });
      }
    }else{
      console.log("no matches today");
    }
};

var get_scorecard_data = (callback) => {

    request("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20cricket.scorecard.live&format=json&diagnostics=true&env=store%3A%2F%2F0TxIGQMQbObzvU4Apia0V0&callback=", function(err,res,body){
      if(err){
        console.log(err);
        return err;
      }
      if(JSON.parse(body).query.results){
        callback.storeScorecardData(JSON.parse(body));
        get_commentary_data(JSON.parse(body), callback);
        return JSON.parse(body);
      }else{
        console.log("no matches today");
      }

  });
};

module.exports = {
  get_commentary_data,
  get_scorecard_data
};
