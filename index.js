var twitWrapper = require('./utils/twitWrappers');

var errorF = function (err) {
  console.log('darn');
  console.log(err);
};

exports.init = function (params) {
  twitWrapper.setAuthKeys(params.keys);

  twitWrapper.getUsersIdQ(params.annoyee)
    .then(function (userId) {
      console.log('Starting to Mock: ' + params.annoyee + ' ' + userId);

      var streamParams = {
        follow: ''+userId
      };

      if (params.track)
        streamParams.track = params.track;

      return twitWrapper.startStream(streamParams);
    })
    .then(function (stream) {
      watchStreamAndPost(stream, params.tweetOutputFormat);
    })
    .fail(errorF)
  ;
};

var watchStreamAndPost = function (stream, tweetOutputFormat) {
  console.log('init-ing mocking')
  stream.on('tweet', function (tweet) {
    console.log('Incoming Tweet: ' + tweet.text);

    var mocktweet = tweetOutputFormat.replace('@@TWEET@@',tweet.text);

    twitWrapper.postStatusQ({ status: mocktweet, in_reply_to_status_id: tweet.id })
      .then(function (result) {
        console.log('Posted Mock Tweet: ' + mocktweet);
      })
      .fail(errorF)
    ;
  });
};