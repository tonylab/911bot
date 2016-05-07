var request =  require('request');
var FbMessage = require('../../modules/fb_message');

var challengeToken =  function (req, res) {
  console.log('All req query', req.query);
  if (req.query['hub.verify_token'] === process.env.FACEBOOK_CHALANGE_RESPONCE) {
    res.send(req.query['hub.challenge']);
  } else {
    res.send('Error, wrong validation token');
  }
};

var handleIncomingMessage =  function (req, res) {
  var messagingEvents = req.body.entry[0].messaging;
  console.log(req.body);
  messagingEvents.forEach(event => {
    console.log(event);
    var sender = event.sender.id;
    var postback = event.postback;

    var attachments = event.message.attachments;
    if (attachments != undefined && attachments.length > 0) {
      attachments.forEach(attachment => {
        console.log(attachment);
      });
    }

    var text = event.message && event.message.text;
    FbMessage.receive.handleFbMessage(sender, postback, text);
  });
  res.sendStatus(200);
};






var getProfileInfo = function(userId){
  request({
    url: 'https://graph.facebook.com/v2.6/' + userId +
    '?fields=first_name,last_name,profile_pic&access_token='
    + process.env.FACEBOOK_PAGE_TOKEN,
    method: 'GET',
    headers: {
      "content-type": "application/json"
    }
  }, function(error, response, body) {
    if (error) {
      console.log('Error getting profile info: ', error);
    } else if (response.body.error) {
      console.log('Error getting profile info: ', response.body.error);
    } else {
      var profile = JSON.parse(body);
      // user.firstName = body['first_name'];
      // user.lastName = body['last_name'];
      // user.profileImageURL = body['profile_pic'];
      // user.save(function (err) {
      //   if(err){
      //     console.log('error saving new user with id :' + user.facebookId);
      //   } else {
      //     console.log('Succesffuly saved new user with id :' + user.facebookId);
      //   }
      // });
    }
  });
};

module.exports = {
  challengeToken,
  handleIncomingMessage
};