'use strict';

import * as twilio from 'twilio';
import cases from '../cases_global';

export default class CallClient {
    constructor(twilioSid, twilioToken, twilioVerifiedPhoneNumber, twilioXmlUrl, dispatchCenterPhoneNumber) {
        this.client = twilio(twilioSid, twilioToken);
        this.twilioVerifiedPhoneNumber = twilioVerifiedPhoneNumber;
        this.twilioXmlUrl = twilioXmlUrl;
        this.dispatchCenterPhoneNumber = dispatchCenterPhoneNumber;

        this.makeCall = this.makeCall.bind(this);
    }

    makeCall(caseId) {
        const url = `${this.twilioXmlUrl}?caseId=${caseId}`;
        this.client.makeCall({
            to: this.dispatchCenterPhoneNumber,
            from: this.twilioVerifiedPhoneNumber,
            url: url
        }, function(err, responseData) {
            console.log(`Call created from ${responseData.from} to ${responseData.to} with url ${url}`);
        });
    }
}