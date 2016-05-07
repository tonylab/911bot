'use strict';

const Call911Client = require('./call_client')
let client = new Call911Client('ACfb01ca8a5e0434e4e2bc38e9cd035b42', 'fb5566a6caae9ef9f4b75d1ef6cf5999', '+13342460557', 'https://demo.twilio.com/welcome/voice', '+972525444544');
client.makeCall('');
