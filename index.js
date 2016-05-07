var express = require('express');
var app = express();

var fbHook = require('./modules/web_hooks/fb_hook.js');

app.set('port', (process.env.PORT || 3000));
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.route('/fb/webhook/')
  .get(fbHook.challengeToken)
  .post(fbHook.handleIncomingMessage);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});