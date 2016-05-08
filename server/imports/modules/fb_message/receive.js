import {messagesStore, initialMessageConst} from './send.js';
import {sendMessageRequestToFacebook} from './send.js';

/**
 * Handle new incoming message from facebook
 * @param sender
 * @param postback
 * @param text
 */
export function handleFbMessageEvent(event) {
  var senderId = event.sender.id;
  var postback = event.postback;
  if (event.message) {
    var text = event.message.text;
    var attachment = event.message.attachments[0];
  }

  if (text) {
    handleFbText(senderId, text);
  } else if (postback) {
    handleFbPostback(senderId, postback);
  } else if (attachment) {
    handleFbAttachment(senderId, postback);
  }
};

var handleFbText = function (senderId, text) {
  sendMessageRequestToFacebook(senderId, messagesStore[initialMessageConst]);
};

var handleFbPostback = function (senderId, postback) {
  var payload = postback && postback.payload;
  console.log('receive payload', payload);
  sendMessageRequestToFacebook(senderId, messagesStore[payload]);
};

var handleFbAttachment = function (senderId, attachment) {
  if (!attachment) {
    console.error('handleFbAttachment must get attachment');
    return;
  }
  var type = attachment.type;
  var url = (attachment.payload && attachment.payload.url)
    || attachment.url;
  var title = attachment.title;

  if (type == 'image') {
    // Handle incoming image
  } else if (type == 'video') {
    // Handle incoming video
  } else if (type == 'audio') {
    // Handle incoming audio
  } else if (type == 'location') {
    // Handle incoming location
    var coordinates = attachment.payload && attachment.payload.coordinates;
  }
};