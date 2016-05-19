var express = require('express');

// Create our app
var app = express();

app.use(express.static('public'));

app.listen(3000, function() {
  console.log('Express server is up on port 3000');
});

//  Terminal: Mikes-iMac:helloreact coolnetmike$  node server.js
//  Express server is up on port 3000
