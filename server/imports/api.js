import * as twilioXmlEndpoint from './endpoints/twilio_xml_endpoint'
import * as fbWebhookEndpoint from './endpoints/fb_webhook_endpoint'

export function api() {
    JsonRoutes.add("get", "/fb/webhook/", fbWebhookEndpoint.challengeToken);
    JsonRoutes.add("post", "/fb/webhook/", fbWebhookEndpoint.handleIncomingMessage);

    JsonRoutes.add("get", "/twilio/call/step1", twilioXmlEndpoint.callStep1);
    JsonRoutes.add("post", "/twilio/call/step1", twilioXmlEndpoint.callStep1);

    JsonRoutes.add("get", "/twilio/call/step2", twilioXmlEndpoint.callStep1);
    JsonRoutes.add("post", "/twilio/call/step2", twilioXmlEndpoint.callStep1);

    JsonRoutes.add("get", "/twilio/test", twilioXmlEndpoint.testEndpoint);
}