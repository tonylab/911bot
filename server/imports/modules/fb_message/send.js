'use strict';

import settings from '../settings'
import {HTTP} from 'meteor/http';

export function sendTextMessage(recipientId, msgTxt) {
  var messageData = {
    text: msgTxt
  };

  sendMessageRequestToFacebook(recipientId, messageData);
};


export function sendBubbles(recipientId, bubbles) {
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

export function sendButtons(recipientId, text, buttons) {
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

export function sendMessageRequestToFacebook(recipientId, msgData) {
  var requestData = {
    recipient: {id: recipientId},
    message: msgData
  };

  var url = 'https://graph.facebook.com/v2.6/me/messages?access_token=' + settings.FB_PAGE_TOKEN;
  console.log('post to url', url, 'data', msgData);
  var result = HTTP.post(url, {
    headers: {
      "content-type": "application/json"
    },
    data : requestData
  });

  console.log('Post result', result);
};