var express = require('express');
var app = express();
var path    = require("path");
var Backbone = require("backbone");

// Define the port to run on
app.set('port', 3000);
app.use(express.static(path.join(__dirname, 'public')));
var htmlDir = './public/';

// he homepage is a static page, make the server return a html document
app.get('/', function (req, res) {
  res.sendfile(htmlDir + 'homepage.html');
});

app.get('/contact', function (req, res) {
  res.sendFile('homepage.html');
});

app.listen(3000, function () {
  console.log('runing in on port 3000!');
});