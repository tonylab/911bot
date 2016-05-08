'use strict';

import xml from 'xml';
import casesStubs from '../modules/cases_stub'
import settings from '../modules/settings'
import Call911Client from '../modules/call_client/call_client'
import {Cases} from '../../../lib/collections/cases_collection'

export function callStep1(req, res) {
  const caseId = req.query.caseId;
  if (!caseId) {
    var error = new Meteor.Error('Case id is missing');
    error.statusCode = 400;
    throw  error;
  }

  let foundCase = getCaseById(caseId);
  if (!foundCase) {
    var error = new Meteor.Error('Case not found');
    error.statusCode = 400;
    throw  error;
  }

  const actionUrl = `${settings.BASE_URI}/twilio/call/step2?caseId=${caseId}`
  const formattedPhoneNumber = convertToPronouncableNumber(foundCase.phoneNumber);
  const name = (foundCase.profile.first_name || "") + (foundCase.profile.last_name || "");
  const nameFromStr = ` from ${name}`
  const xmlResponse = {
    Response: [
      {
        Say: `This is an emergency call ${nameFromStr}`
      },
      {
        Pause: {_attr: {length: 1}}
      },
      {
        Say: foundCase.message
      },
      {
        Pause: {_attr: {length: 1}}
      },
      {
        Gather: [
          {
            _attr: {
              action: actionUrl,
              method: `POST`,
              timeout: 10,
              numDigits: 1,
              finishOnKey: ''
            }
          },
          {
            Say: `Dial 1 in order to connect with the user`
          }
        ]
      },
      {
        Say: [
          {_attr: {loop: 2}},
          `Please call ${formattedPhoneNumber}`
        ]
      },
      {
        Pause: {_attr: {length: 5}}
      },
      {
        Say: `Thank you and goodbye!`
      }
    ]
  };

  JsonRoutes.sendPlainResult(res, {headers: {'Content-Type': 'text/xml'}, data: xml(xmlResponse)});
}

export function callStep2(req, res) {
  const caseId = req.query.caseId;
  if (!caseId) {
    var error = new Meteor.Error('Case id is missing');
    error.statusCode = 400;
    throw  error;
  }

  let foundCase = getCaseById(caseId);
  if (!foundCase) {
    var error = new Meteor.Error('Case not found');
    error.statusCode = 400;
    throw  error;
  }

  const formattedPhoneNumber = convertToPronouncableNumber(foundCase.phoneNumber);
  const name = (foundCase.profile.first_name || "") + (foundCase.profile.last_name || "");
  const xmlResponse = {
    Response: [
      {
        Say: `Connecting you with ${name}, phone number is ${formattedPhoneNumber}`
      },
      {
        Dial: [
          {
            _attr: {timeout: 20, record: true}
          },
          caseObj.phoneNumber
        ]
      }
    ]
  };

  JsonRoutes.sendPlainResult(res, {headers: {'Content-Type': 'text/xml'}, data: xml(xmlResponse)});
}

export function testEndpoint(req, res) {
  let xmlUrl = `${settings.BASE_URI}/twilio/call/step1`
  var client = new Call911Client('ACfb01ca8a5e0434e4e2bc38e9cd035b42', 'fb5566a6caae9ef9f4b75d1ef6cf5999', '+13342460557', xmlUrl, '+972525444544');
  client.makeCall('test');
  JsonRoutes.sendPlainResult(res, {
    headers: {'Content-Type': 'text'},
    data: `Made call to case id: test with xml url = ${xmlUrl}`
  });
}

function getCaseById(caseId) {
  if (caseId == "test") {
    return casesStubs[caseId];
  } else {
    return Cases.findOne(caseId);
  }
}

function convertToPronouncableNumber(number) {
  return number.split('').join(' ');
}