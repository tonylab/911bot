'use strict';

import twilio from 'twilio';

export default class CallClient {
    constructor(twilioSid, twilioToken, twilioVerifiedPhoneNumber, twilioXmlUrl, dispatchCenterPhoneNumber) {
        console.log('twilioSid',twilioSid,'twilioToken',twilioToken);
        this.client = twilio(twilioSid, twilioToken);
        this.twilioVerifiedPhoneNumber = twilioVerifiedPhoneNumber;
        this.twilioXmlUrl = twilioXmlUrl;
        this.dispatchCenterPhoneNumber = dispatchCenterPhoneNumber;

        this.makeCall = this.makeCall.bind(this);
    }

    makeCall(caseId) {
        const url = `${this.twilioXmlUrl}?caseId=${caseId}`;
        console.log(`## Making call to ${this.dispatchCenterPhoneNumber}`);
        this.client.makeCall({
            to: this.dispatchCenterPhoneNumber,
            from: this.twilioVerifiedPhoneNumber,
            url: url
        }, function(err, responseData) {
            if(err) {
                console.error('Error making call',err);
            } else {
                console.log(`Call created from ${responseData.from} to ${responseData.to} with url ${url}`);
            }
        });
    }
}