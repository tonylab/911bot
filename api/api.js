var Endpoints = require('./endpoints');


module.exports = function (app) {

  app.route('/fb/webhook/')
    .get(Endpoints.fbWebhookEndpoint.challengeToken)
    .post(Endpoints.fbWebhookEndpoint.handleIncomingMessage);

  app.get('/twilio/call/step1', Endpoints.twilioXmlEndpoint.callStep1);
  app.get('/twilio/call/step2', Endpoints.twilioXmlEndpoint.callStep2);

};