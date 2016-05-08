import {messagesStore, initialMessageConst} from '../steps/message_store.js';
import {sendMessageRequestToFacebook, sendTextMessage} from './send.js';
import {getCase, Cases, updateCase, generateCaseMessage} from '../../../../lib/collections/cases_collection.js';
import CallClient from '../call_client/call_client'
import settings from '../settings'

let xmlUrl = `${settings.BASE_URI}/twilio/call/step1`
var callClient = new CallClient(settings.TWILIO_SID, settings.TWILIO_TOKEN, settings.TWILIO_FROM, xmlUrl, settings.DISPATCH_CENTER_PHONE_NUMBER);

/**
 * Handle new incoming message from facebook
 * @param sender
 * @param postback
 * @param text
 */
export function handleFbMessageEvent(event) {
  var senderId = event.sender.id;
  var postback = event.postback;
  var attachment, text;
  if (event.message) {
    text = event.message.text;
    if (event.message.attachments) {
      attachment = event.message.attachments[0];
    }
  }

  var myCase = getCase(senderId),
    caseId = myCase._id;
  // Ask for location
  console.log('## myCase step =' + myCase.step);

  switch (myCase.step) {
    case 0:
      sendWelcomeMessage(senderId);
      raiseStep(myCase, senderId);
      break;
    case 1:
      if(!postback) {
        //sendWelcomeMessage(senderId)
      } else {
        handleFbPostback(caseId, senderId, postback);
        raiseStep(myCase, senderId);
      }
      break;
    case 2:
      if(!postback) {
        // IGNORE FOR NOW
      } else {
        sendShareLocationMessage(senderId);
        updateCase({_id: myCase._id}, {$set: {step2Payload: postback && postback.payload}})
        raiseStep(myCase, senderId);
      }
      return;
      break;
    case 3:
      // Check if we got location
      var location = attachment && attachment.type && attachment.type == 'location' && getCoordinates(attachment);
      if (!location) {
        sendShareLocationMessage(senderId);
      } else {
        updateCase({_id: myCase._id}, {$set: {location}});
        sendSharePhoneNumber(senderId);
        raiseStep(myCase, senderId);
      }
      break;
    case 4:
      // validate phone number
      updateCase({_id: myCase._id}, {$set: {phoneNumber: text}});
      generateCaseMessage(myCase._id);
      callClient.makeCall(myCase._id);
      raiseStep(myCase, senderId);
      sendConnectingYouWith911Message(senderId);
      handleFbPostback(caseId, senderId, {payload: myCase.step2Payload});
      return;
      break;
    case 5:
      handleFbPostback(caseId, senderId, postback);
      break;
  }
  console.log('## DEBUG - after all switch cases step=', Cases.findOne(myCase._id).step);
};

var raiseStep = function (myCase, senderId) {
  console.log ("## raiseStep of case id = " + myCase._id);
  updateCase({_id: myCase._id}, {$inc: {step: 1}});
};

var sendWelcomeMessage = function (senderId) {
  sendMessageRequestToFacebook(senderId, messagesStore[initialMessageConst]);
};

var handleFbText = function (senderId, text) {
  sendMessageRequestToFacebook(senderId, messagesStore[initialMessageConst]);
};


var handleFbPostback = function (caseId, senderId, postback) {
  var payload = postback && postback.payload;
  if (!messagesStore[payload]) {
    return;
  }
  if (caseId) {
    updateCase({_id: caseId}, {$set: {lastPayload: postback && postback.payload}})
  }
  sendMessageRequestToFacebook(senderId, messagesStore[payload]);
};

var sendShareLocationMessage = function (senderId) {
  sendTextMessage(senderId, 'Please share with us your location.');
};

var sendSharePhoneNumber = function (senderId) {
  sendTextMessage(senderId, 'Please share your phone number so the 911 will call you.');
};

var sendConnectingYouWith911Message = function (senderId) {
  sendTextMessage(senderId, `We're now connecting you with 911, an operator will contact you asap.`);
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