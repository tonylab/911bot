const twilio = require('twilio');

class CallClient {
    constructor(twilioSid, twilioToken, twilioVerifiedPhoneNumber, twilioXmlUrl, dispatchCenterPhoneNumber) {
        this.client = twilio(twilioSid, twilioToken);
        this.twilioVerifiedPhoneNumber = twilioVerifiedPhoneNumber;
        this.twilioXmlUrl = twilioXmlUrl;
        this.dispatchCenterPhoneNumber = dispatchCenterPhoneNumber;

        this.makeCall = this.makeCall.bind(this);
    }

    makeCall(caseId) {
        this.client.makeCall({
            to: this.dispatchCenterPhoneNumber,
            from: this.twilioVerifiedPhoneNumber,
            url: this.twilioXmlUrl

        }, function(err, responseData) {
            console.log(responseData.from);
        });
    }
}

module.exports = CallClient