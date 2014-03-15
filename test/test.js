
var TwitterMocker = require('../index');

  //tgpbotlol keys
var keys = {
  consumer_key:         'OXS0qpgCJqvzkeDLpHehw'
  , consumer_secret:      'ImmAcrTw3NLfRHSAOnJIprfYivnf208Q6sYe7SXLes'
  , access_token:         '2391639451-cqhNYGf9S5obVKpXKYbo2HdSoy27aZFeOsa7HPl'
  , access_token_secret:  'zzAkg6hua9u0yC61kI5joC5rEOMm5djDdTTORjgpyXHdr'
};

TwitterMocker.init({
  keys: keys,
  annoyee: 'backalleychats',
  track: undefined,
  tweetOutputFormat: '@@TWEET@@ YEEE'
});