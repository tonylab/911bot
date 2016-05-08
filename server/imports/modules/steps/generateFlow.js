import staticData from './data.js';

const initialMessage = 'INITIAL';
var messagesStore = {};

var parseData = function(data, fatherKey) {
  if (!fatherKey) {
    fatherKey = initialMessage;
  }
  var msgData;
  if (data.type == 'button') {
    var buttons = makeButtonsFromData(data.buttons);
    var text = data.text;
    msgData = generateButtonsMessageData(text, buttons);
  } else if (data.type == 'bubbles') {
    var bubbles = makeBubblesFromData(data.bubbles);
    msgData = makeBubblesFromData(bubbles);
  }
  messagesStore[fatherKey] = msgData;
};

var makeButtonsFromData = function (dataButtons) {
};

var makeBubblesFromData = function (dataButtons) {

};

var generateButtonsMessageData = function(text, buttons) {
  return {
    attachment: {
      type: "template",
      payload: {
        template_type: "button",
        text,
        buttons
      }
    }
  };
};

var generateBubblesMessageData = function(bubbles) {
  return {
    attachment: {
      type: "template",
      payload: {
        template_type: "generic",
        elements: bubbles
      }
    }
  };
};

// On init
parseData(staticData);

export var messagesStore;

