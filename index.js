
const express = require('express');
var bodyParser = require('body-parser');
const app = express();

var initApi = require('./api/api.js');

app.set('port', (process.env.PORT || 3000));
app.use(express.static(__dirname + '/public'));

// Parse body
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

// Init app routes
initApi(app);


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});