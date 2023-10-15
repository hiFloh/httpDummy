var express = require('express');
var app = express();

app.use( function (req, res) {
  console.log(req.headers);
  console.log(req.cookies);
  console.log(req.body);
  res.send('OK');
});

var port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!');
});
