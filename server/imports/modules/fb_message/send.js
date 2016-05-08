'use strict';

import settings from '../settings'

export function sendTextMessage (recipientId, msgTxt) {
  var messageData = {
    text: msgTxt
  };

  sendMessageRequestToFacebook(recipientId, messageData);
};


export function sendBubbles (recipientId, bubbles) {
  var messageData = {
    attachment: {
      type: "template",
      payload: {
        template_type: "generic",
        elements: bubbles
      }
    }
  };

  sendMessageRequestToFacebook(recipientId, messageData);
};

export function sendButtons (recipientId, text, buttons) {
  var messageData = {
    attachment: {
      type: "template",
      payload: {
        template_type: "button",
        text,
        buttons
      }
    }
  };

  sendMessageRequestToFacebook(recipientId, messageData);
};

export function sendMessageRequestToFacebook (recipientId, msgData) {
  var requestData = {
    recipient: {id: recipientId},
    message: msgData
  };

  request({
    url: 'https://graph.facebook.com/v2.6/me/messages?access_token=' + settings.FB_PAGE_TOKEN,
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