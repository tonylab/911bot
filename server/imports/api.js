import endpoints from './endpoints'

export function api() {
    JsonRoutes.add("get", "/fb/webhook/", endpoints.fbWebhookEndpoint.challengeToken);
    JsonRoutes.add("post", "/fb/webhook/", endpoints.fbWebhookEndpoint.handleIncomingMessage);

    JsonRoutes.add("get", "/twilio/call/step1", endpoints.twilioXmlEndpoint.callStep1);
    JsonRoutes.add("post", "/twilio/call/step1", endpoints.twilioXmlEndpoint.callStep1);

    JsonRoutes.add("get", "/twilio/call/step2", endpoints.twilioXmlEndpoint.callStep1);
    JsonRoutes.add("post", "/twilio/call/step2", endpoints.twilioXmlEndpoint.callStep1);

    JsonRoutes.add("get", "/twilio/test", endpoints.twilioXmlEndpoint.testEndpoint);
}