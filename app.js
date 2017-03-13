var express = require('express');
var app = express();
app.use('/', express.static(__dirname + '/output'));
app.listen(3000);
