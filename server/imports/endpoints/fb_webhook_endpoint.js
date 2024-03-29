'use strict';

import FbMessage from '../modules/fb_message'
import settings from '../modules/settings'

export function challengeToken (req, res) {
  console.log('All req query', req.query);
  if (req.query['hub.verify_token'] === settings.FB_CHALLENGE_TOKEN) {
    JsonRoutes.sendPlainResult(res, {headers: {'Content-Type': 'text'}, data: req.query['hub.challenge']});
  } else {
    let error = new Meteor.Error('Error, wrong validation token');
    error.statusCode = 500;
    throw error
  }
};

export function handleIncomingMessage (req, res) {
  JsonRoutes.sendResult(res, {});
  
  var messagingEvents = req.body.entry[0].messaging;
  console.log('Got message: ', JSON.stringify(req.body));
  messagingEvents.forEach(event => {
    if(event.delivery){
      return;
    }
    FbMessage.receive.handleFbMessageEvent(event);
  });
};

export function getProfileInfo(userId){
  let url = `https://graph.facebook.com/v2.6/${userId}?fields=first_name,last_name,profile_pic&access_token=${settings.FB_PAGE_TOKEN}`;
  return HTTP.get(url);
};