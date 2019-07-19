var express = require('express');
var app = express();
var http = require('http').Server(app);
var exec = require('child_process').exec, child;

//Serve static files
//Configure App
app.use('/', express.static('./'));
app.use('/lib', express.static('../../lib'));
app.use('/lib/ext', express.static('../../lib/ext'));

var increment = 1;

app.use('/chain', function (req, res, next) {
  console.log('Request Type:', req.query)

  var hidden_val = (req.query.vote + 1 ) * Math.floor(Math.random() * 999999)
  hidden_val = hidden_val.toString(16);

  var command = "/Users/zane/code/tezos/alphanet.sh client transfer 0 from alice to zka --arg '(Pair " + increment + " \"" + hidden_val + "\" )' --burn-cap 0.6"

  console.log(command)

  exec(command, (err, stdout, stderr) => {
      if (err) {
        console.log(err);
        console.log(stderr);
      } else {
        console.log(stdout);
        increment++;
      }
    });

})

require('../../lib/jiff-server').make_jiff(http, { logs:true });

// Serve static files.
http.listen(8080, function () {
  console.log('listening on *:8080');
});

console.log('Direct your browser to *:8080/client.html.');
console.log('To run a node.js based party: node demos/tezos-voting/party <input>');
console.log();
