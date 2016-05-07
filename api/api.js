'use strict';

var Endpoints = require('./endpoints');

module.exports = function (app) {

  app.route('/fb/webhook/')
    .get(Endpoints.fbWebhookEndpoint.challengeToken)
    .post(Endpoints.fbWebhookEndpoint.handleIncomingMessage);

  app.route('/twilio/call/step1')
      .get(Endpoints.twilioXmlEndpoint.callStep1)
      .post(Endpoints.twilioXmlEndpoint.callStep1);
  app.route('/twilio/call/step2')
      .get(Endpoints.twilioXmlEndpoint.callStep2)
      .post(Endpoints.twilioXmlEndpoint.callStep2);
  app.get('/twilio/test', Endpoints.twilioXmlEndpoint.test);

  app.use(function(err, req, res, next) {
    console.error(`Error: ${err.message}`);
    res.status(err.httpCode || 500).send(`Error: ${err.message}`);
  });
};