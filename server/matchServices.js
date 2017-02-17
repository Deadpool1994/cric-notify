const request = require('request');

var get_commentary_data = (callback) => {

    request("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20cricket.commentary%20where%20match_id%3D193984&format=json&diagnostics=true&env=store%3A%2F%2F0TxIGQMQbObzvU4Apia0V0&callback=", function(err,res,body){
      console.log(err);
      console.log(res);
      if(err){
        return err;
      }
      callback(JSON.parse(body));
  });
};

var get_scorecard_data = (callback) => {

    request("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20cricket.scorecard.live&format=json&diagnostics=true&env=store%3A%2F%2F0TxIGQMQbObzvU4Apia0V0&callback=", function(err,res,body){
      console.log(err);
      console.log(res);
      callback(JSON.parse(body));
  });
};

module.exports = {
  get_commentary_data,
  get_scorecard_data
};
