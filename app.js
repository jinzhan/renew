var express = require('express');
var app = express();
app.use('/', express.static(__dirname + '/output'));
var port = 3001;
console.log(`listen port:${port}`)
app.listen(port);
