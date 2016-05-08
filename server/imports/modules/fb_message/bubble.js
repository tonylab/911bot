"use strict";

export class Bubble {
    constructor(title, subtitle, image, buttons) {
      this.title = title;
      this.subtitle = subtitle;
      this.image_url = image;
      this.buttons = buttons || [];
    }

    addButton(button) {
      this.buttons.push(button);
    }
};

export class BubbleButton {
  constructor(type, title, payload) {
    this.type = type;
    this.title = title;
    this.payload = payload;
  }
};