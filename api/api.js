var Endpoints = require('./endpoints');


module.exports = function (app) {

  app.route('/fb/webhook/')
    .get(Endpoints.fbWebhookEndpoint.challengeToken)
    .post(Endpoints.fbWebhookEndpoint.handleIncomingMessage);

  app.get('/twilio/call/step1', Endpoints.twilioXmlEndpoint.callStep1);
  app.get('/twilio/call/step2', Endpoints.twilioXmlEndpoint.callStep2);

  app.use(function(err, req, res, next) {
    console.error(`Error: ${err.message}`);
    res.status(err.httpCode || 500).send(`Error: ${err.message}`);
  });
};