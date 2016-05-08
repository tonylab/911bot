'use strict';

import xml from 'xml';
import cases from '../modules/cases_global'
import settings from '../modules/settings'
import Call911Client from '../modules/call_client/call_client'

export function callStep1(req, res) {
  const caseId = req.query.caseId;
  if (!caseId) {
    var error = new Meteor.Error('Case id is missing');
    error.statusCode = 400;
    throw  error;
  } else if (!cases[caseId]) {
      var error = new Meteor.Error('Case not found');
      error.statusCode = 400;
      throw  error;
  }

  const caseObj = cases[caseId];
  const actionUrl = `twilio/call/step2`
  const xmlResponse = {
      Response : [
          {
              Say: `This is an emergency call from ${caseObj.name}`
          },
          {
              Pause: {_attr: {length: 2}}
          },
          {
              Say: caseObj.message
          },
          {
              Pause: {_attr: {length: 2}}
          },
          {
              Gather: [
                  {
                      _attr: {
                          action: actionUrl,
                          method: `POST`,
                          timeout: 10,
                          numDigits : 1,
                          finishOnKey: ''
                      }
                  },
                  {
                      say: `Dial 1 in order to connect with the user`
                  }
              ]
          },
          {
              Say: `Please call ${caseObj.phoneNumber}`
          },
          {
              Pause: {_attr: {length: 5}}
          },
          {
              Say: `Please call ${caseObj.phoneNumber}`
          },
          {
              Say: `Thank you and goodbye!`
          }
      ]
  };

  JsonRoutes.sendPlainResult(res, {headers: {'Content-Type': 'text/xml'}, data: xml(xmlResponse)});
}

export function callStep2 () {

}

export function testEndpoint (req, res) {
    let xmlUrl = `${settings.BASE_URI}/twilio/call/step1`
    var client = new Call911Client('ACfb01ca8a5e0434e4e2bc38e9cd035b42', 'fb5566a6caae9ef9f4b75d1ef6cf5999', '+13342460557', xmlUrl, '+972525444544');
    client.makeCall('test');
    JsonRoutes.sendPlainResult(res, {headers: {'Content-Type': 'text'}, data: `Made call to case id: test with xml url = ${xmlUrl}`});
}