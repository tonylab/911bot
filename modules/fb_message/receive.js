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
  
};

module.exports = {
  handleFbMessageEvent
};
