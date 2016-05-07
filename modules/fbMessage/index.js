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

var handleFbText = function (sender, text) {

};

var handleFbPostback = function (sender, postback) {

};

export {
  handleFbMessage
};