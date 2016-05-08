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
  var attachment;
  if (event.message) {
    var text = event.message.text;
    if (event.message.attachments) {
      attachment = event.message.attachments[0];
    }
  }

  var myCase = getCase(senderId);
  // Ask for location
  if (myCase.step == 2) {
    sendShareLocationMessage(senderId);
    raiseStep(senderId);
    // Save payload
    Cases.update({senderId}, {$set: {payload: postback && postback.payload}});
    return;
  }
  // Ask for phone number
  if (myCase.step == 3) {
    // Check if we haven't received location
    if (!attachment || attachment.type != 'location') {
      sendShareLocationMessage(senderId);
      return;
    }
    var location = getCoordinates(attachment);
    if (location) {
      // Save location
      Cases.update({senderId}, {$set: location});
    }
    // Ask for phone number
    sendSharePhoneNumber(senderId);
    raiseStep(senderId);
    return;
  }
  // Receive phone number
  if (myCase.step == 4) {
    // validate phone number
    Cases.update({senderId}, {$set: {phoneNumber: text}});
    raiseStep(senderId);

    // Debug
    console.log('DEBUG - case', Cases.findOne({senderId}));
    return;
  }
  // raise step
  raiseStep(senderId);

  if (text) {
    handleFbText(senderId, text);
  } else if (postback) {
    handleFbPostback(senderId, postback);
  } else if (attachment) {
    handleFbAttachment(senderId, attachment);
  }
};

var raiseStep = function (senderId) {
  Cases.update({senderId}, {$inc: {step: 1}});
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

var sendSharePhoneNumber = function (senderId) {
  sendTextMessage(senderId, 'Please share your phone number so the 911 will call you.');
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
  }
};

var getCoordinates = function (attachment) {
  return attachment.payload && attachment.payload.coordinates;
};