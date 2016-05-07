const xml = require('xml');

const callStep1 = function (req, res) {
  const caseId = req.query.caseId;
  if(!caseId) {
    var error = new Error('Case id is missing');
    error.httpCode = 400;
    throw  error;
  }
  const xml = `<?xml version="1.0" encoding="UTF-8" ?><Response><Say>Hello World</Say></Response>`;

  res.set('Content-Type', 'text/xml')
  res.send(xml);
}

const callStep2 = function () {

}

module.exports = {
  callStep1,
  callStep2
}