'use strict';

var request = require('request'),
    moment = require('moment'),
    settings = require('../settings');


const token = settings.FB_PAGE_TOKEN;

var sendTextMessage = function (senderId, msgTxt) {
  var messageData = {
    text: msgTxt
  };

  var requestData = {
    recipient: {id: senderId},
    message: messageData
  };

  request({
    url: 'https://graph.facebook.com/v2.6/me/messages?access_token=' + token,
    method: 'POST',
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(requestData)
  }, function (error, response, body) {
    if (error) {
      console.log('Error sending message: ', error);
    } else if (response.body.error) {
      console.log('Error: ', response.body.error);
    } else {
      console.log(body);
    }
  });
};

var sendBubbles = function (senderId, bubbles) {
  var messageData = {
    attachment: {
      type: "template",
      payload: {
        template_type: "generic",
        elements: bubbles
      }
    }
  };
  var requestData = {
    recipient: {id: senderId},
    message: messageData
  };

  request({
    url: 'https://graph.facebook.com/v2.6/me/messages?access_token=' + token,
    method: 'POST',
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(requestData)
  }, function (error, response, body) {
    if (error) {
      console.log('Error sending message: ', error);
    } else if (response.body.error) {
      console.log('Error: ', response.body.error);
    } else {
      console.log(body);
    }
  });
};

module.exports = {
  sendTextMessage,
  sendBubbles
};
