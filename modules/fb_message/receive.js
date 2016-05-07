var send = require('./send.js');

/**
 * Handle new incoming message from facebook
 * @param sender
 * @param postback
 * @param text
 */
var handleFbMessageEvent = function(event) {
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
  send.sendTextMessage(senderId, 'Your text: ' + text);
};

var handleFbPostback = function (senderId, postback) {

};

var handleFbAttachment = function (senderId, attachment) {
  if (!attachment) {
    console.error('handleFbAttachment must get attachment');
    return;
  }
  var type = attachment.type;
  var url = attachment.payload && attachment.payload.url;
  if (type == 'image') {
    // Handle incoming image
  } else if  (type == 'video') {
    // Handle incoming video
  } else if (type == 'audio') {
    // Handle incoming audio
  } else if (type == 'location') {
    // Handle incoming location
  }
};

module.exports = {
  handleFbMessageEvent
};
