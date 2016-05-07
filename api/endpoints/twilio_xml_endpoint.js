const xml = require('xml');
const cases = require('../../modules/cases_global')
const settings = require('../../modules/settings')
const Call911Client = require('../../modules/call_client/call_client')

const callStep1 = function (req, res) {
  const caseId = req.query.caseId;
  if (!caseId) {
    var error = new Error('Case id is missing');
    error.httpCode = 400;
    throw  error;
  } else if (!cases[caseId]) {
      var error = new Error('Case not found');
      error.httpCode = 400;
      throw  error;
  }

  const caseObj = cases[caseId];
  const actionUrl = `twilio/call/step2`
  const xmlResponse = {
      response : [
          {
              say: `This is an emergency call from ${caseObj.name}`
          },
          {
              pause: {_attr: {length: 2}}
          },
          {
              say: caseObj.message
          },
          {
              pause: {_attr: {length: 2}}
          },
          {
              gather: [
                  {
                      _attr: {
                          action: actionUrl,
                          method: `GET`,
                          timeout: 10,
                          numDigits : 1,
                          finishOnKey: 'any digit'
                      }
                  },
                  {
                      say: `Dial 1 in order to connect with the user`
                  }
              ]
          },
          {
              say: `Please call ${caseObj.phoneNumber}`
          },
          {
              pause: {_attr: {length: 5}}
          },
          {
              say: `Please call ${caseObj.phoneNumber}`
          },
          {
              say: `Thank you and goodbye!`
          }
      ]
  };

  res.set('Content-Type', 'text/xml')
  res.send(xml(xmlResponse));
}

const callStep2 = function () {

}

const test = function (req, res) {
    var client = new Call911Client('ACfb01ca8a5e0434e4e2bc38e9cd035b42', 'fb5566a6caae9ef9f4b75d1ef6cf5999', '+13342460557', `${settings.BASE_URI}/twilio/call/step1`, '+972525444544');
    client.makeCall('test');
    res.send('Made call to case id: test');
}

module.exports = {
  callStep1,
  callStep2,
  test
}