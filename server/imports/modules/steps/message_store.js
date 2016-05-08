import {_} from 'meteor/underscore';
import {Button, Bubble} from '../fb_message/bubble.js';

export const initialMessageConst = 'INITIAL';

export var messagesStore = {};

export var parseData = function (data, fatherKey) {
  if (!data || !fatherKey) {
    return;
  }
  var msgData;
  if (data.type == 'button') {
    var buttons = makeButtonsFromData(data.buttons);
    var text = data.text;
    msgData = generateButtonsMessageData(text, buttons);
  } else if (data.type == 'bubbles') {
    var bubbles = makeBubblesFromData(data.bubbles);
    msgData = generateBubblesMessageData(bubbles);
  } else if (data.type == 'textAndButton') {
    var buttons = makeButtonsFromData(data.button.buttons);
    var buttonText = data.button.text;
    msgData = generateButtonsMessageData(buttonText, buttons);
    msgData.externalData = {type: 'text', text: data.text}
  }
  messagesStore[fatherKey] = msgData;
};

var makeButtonsFromData = function (dataButtons) {
  return _.map(dataButtons, dataButton => {
    // Handle children
    parseData(dataButton.innerStep, dataButton.payloadKey);
    // Return button
    return new Button("postback", dataButton.title.toUpperCase(), dataButton.payloadKey);
  });
};

var makeBubblesFromData = function (dataBubbles) {
  return _.map(dataBubbles, dataBubble => {
    // Handle children
    parseData(dataBubble.innerStep, dataBubble.payloadKey);
    // Return button
    // If bubble has buttons
    var buttons;
    if (dataBubble.buttons) {
      buttons = makeButtonsFromData(dataBubble.buttons);
    }
    return new Bubble(dataBubble.title, dataBubble.subtitle, dataBubble.image, buttons);
  });
};

var generateButtonsMessageData = function (text, buttons) {
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

var generateBubblesMessageData = function (bubbles) {
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





