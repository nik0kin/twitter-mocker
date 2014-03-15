
var Q = require('q'),
  Twit = require('twit');

var T;

exports.setAuthKeys = function (keys){
  T = new Twit(keys);
};

exports.getUsersIdQ = function () {
  return Q.promise(function (resolve, reject) {
    T.get('users/show', {screen_name: 'backalleychats'}, function (err, data) {
      if (err)
        reject(err);
      else
        resolve(data.id);
    });
  });
};

exports.startStream = function (params) {
  return T.stream('statuses/filter', params);
};

exports.postStatusQ = function (params) {
  return Q.promise(function (resolve, reject) {
    T.post('statuses/update', params, function(err, reply) {
      if (err)
        reject(err);
      else
        resolve(reply);
    });
  });
};