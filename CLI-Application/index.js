console.log("This page is working");

//importing the twit package
var Twit = require('twit');

//initalizing the authentication
var config = require('./config');
var T = new Twit(config);

//conatins the message to be tweeted 
var tweetPost = {
	status: '#great. This is sample tweet'
}

//contains parameters necessary for to post a tweet
T.post('statuses/update',tweetPost,tweetData);

//run the post  function to my twitter account
function tweetData(err, data, response){
	if(err){
		console.log("Something went wrong");
	}
	else{
		console.log("It Worked");
	}
};


//section to search for tweets. Commented out as the Tweet function is already running
//contains the tweet to search
//var params = {
//	q: 'easterpraise since:2017-04-01', 
//	count: 2
//};

//conatins the tweet search parameters
//T.get('search/tweets',params, gotData); 

//return the result in Json format
//function gotData(err, data, response){
//	var tweets = data.statuses;
//	for (var i = 0; i < tweets.length; i++){
//		console.log(tweets[i].text);
//	} 
	//console.log(data);
//};