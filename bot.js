var Twit = require('twit');
var config = require('./config.js');
var T = new Twit(config);

tweeter();

setInterval(tweeter, 60*5*1000);

function tweeter() {
 var tweet = 'Here\'s a random number between 0 and 100: ' + 
Math.floor(Math.random()*100);
  
 
  T.post('statuses/update', { status: tweet }, tweeted);

 
  function tweeted(err, data, response) {
    if (err) {
      console.log(err);
    } else {
      console.log('Success: ' + data.text);
      //console.log(response);
    }
  };

}
