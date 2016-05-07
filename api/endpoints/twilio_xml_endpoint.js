const xml = require('xml');
const cases = require('../../modules/cases_global')

const callStep1 = function (req, res) {
  const caseId = req.query.caseId;
  if(!caseId) {
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

module.exports = {
  callStep1,
  callStep2
}