const request = require('request');

var get_commentary_data = (callback) => {

    request('https://query.yahooapis.com/v1/public/yql?q=desc%20cricket.commentary&format=json&diagnostics=true&env=store%3A%2F%2F0TxIGQMQbObzvU4Apia0V0&callback=', function(err,res,body){
    callback(body);
  });
};

module.exports = {
  get_commentary_data
};
