var send = require('./send.js');

/**
 * Handle new incoming message from facebook
 * @param sender
 * @param postback
 * @param text
 */
var handleFbMessage = function(sender, postback, text) {
  console.log('handleFbMessage: ', arguments);
  if (text) {
    handleFbText(sender, text);
  } else if (postback) {
    handleFbPostback(sender, postback);
  }
};

var handleFbText = function (senderId, text) {
  send.sendTextMessage(senderId, 'Your text: ' + text);
};

var handleFbPostback = function (senderId, postback) {

};

module.exports = {
  handleFbMessage
};
