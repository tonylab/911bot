'use strict';

import settings from '../settings'
import {HTTP} from 'meteor/http';

export function sendTextMessage(recipientId, msgTxt) {
  var messageData = {
    text: msgTxt
  };

  sendMessageRequestToFacebook(recipientId, messageData);
};

export function sendImageMessage(recipientId, imageUrl) {
  var messageData = {
    "attachment": {
      "type": "image",
      "payload": {
        "url": imageUrl
      }
    }
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
  var newMsgData = msgData;
  if (msgData && msgData.externalData) {
    var externalType = msgData.externalData.type;
    if (externalType == 'text') {
      sendTextMessage(recipientId, msgData.externalData.text);
    } else if (externalType == 'image') {
      if (msgData.externalData.timeout) {
        Meteor.setTimeout(() => {
          sendImageMessage(recipientId, msgData.externalData.image);
        }, msgData.externalData.timeout);
      } else {
        sendImageMessage(recipientId, msgData.externalData.image);
      }
    }
    newMsgData = Object.assign({}, msgData);
    delete newMsgData.externalData;
  }

  var requestData = {
    recipient: {id: recipientId},
    message: newMsgData
  };

  var url = 'https://graph.facebook.com/v2.6/me/messages?access_token=' + settings.FB_PAGE_TOKEN;
  var result = HTTP.post(url, {
    headers: {
      "content-type": "application/json"
    },
    data: requestData
  });

  // console.log('Post result', result);
};