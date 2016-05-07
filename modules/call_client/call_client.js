'use strict';

const twilio = require('twilio');
const cases = require('../cases_global');

class CallClient {
    constructor(twilioSid, twilioToken, twilioVerifiedPhoneNumber, twilioXmlUrl, dispatchCenterPhoneNumber) {
        this.client = twilio(twilioSid, twilioToken);
        this.twilioVerifiedPhoneNumber = twilioVerifiedPhoneNumber;
        this.twilioXmlUrl = twilioXmlUrl;
        this.dispatchCenterPhoneNumber = dispatchCenterPhoneNumber;

        this.makeCall = this.makeCall.bind(this);
    }

    makeCall(caseId) {
        const caseObj = cases[caseId];

        this.client.makeCall({
            to: this.dispatchCenterPhoneNumber,
            from: this.twilioVerifiedPhoneNumber,
            url: `${this.twilioXmlUrl}?caseId=${caseId}`

        }, function(err, responseData) {
            console.log(`Call created from ${responseData.from} to ${responseData.to}`);
        });
    }
}

module.exports = CallClient;