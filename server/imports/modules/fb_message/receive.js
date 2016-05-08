import {messagesStore, initialMessageConst} from '../steps/message_store.js';
import {sendMessageRequestToFacebook, sendTextMessage} from './send.js';
import {getCase, Cases} from '../../../../lib/collections/cases_collection.js';

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
    var attachment = event.message.attachments && event.message.attachments[0];
  }

  var myCase = getCase();
  console.log('Case', myCase);
  Cases.update({senderId}, {$inc: {step: 1}});
  if (myCase.step == 2) {
    sendShareLocationMessage(senderId);
    return;
  }

  if (myCase.step == 3) {
    // Receive location.
    console.log('receive location', attachment, postback, text);
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

var sendShareLocationMessage = function (senderId) {
  sendTextMessage(senderId, 'Please share with us your collection');
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
    var locationName = title;

    console.log('Got location : ' + locationName + ' with coordinates : ' + JSON.stringify(coordinates));
  }
};