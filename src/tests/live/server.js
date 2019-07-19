var jiffServer = require('../../lib/jiff-server');
var jiffServerBigNumber = require('../../lib/ext/jiff-server-bignumber');

var express = require('express');
var app = express();
var http = require('http').Server(app);

app.use('/', express.static(__dirname));
app.use('/lib', express.static(__dirname + '/../../lib'));

var serverOptions = { logs:true, sodium: false };

var instance = jiffServer.make_jiff(http, serverOptions);
// instance.apply_extension(jiffServerBigNumber, serverOptions);

http.listen(3000, function () {
  console.log('listening on *: 3000');
});