var express = require('express');
var expressHandlebars  = require('express-handlebars');
var http = require('http');

var PORT = 8000;

var LINES = [
    "Hey, now, you're an All Star, get your game on, go plays",
    "Hey, now, you're a Rock Star, get the show on, get paids",
    "And all that glitters is golds",
    "Only shooting stars break the molds",
];

var lineIndex = 0;

var app = express();
app.engine('html', expressHandlebars());
app.set('view engine', 'html');
app.set('views', __dirname);
app.get('/', function(req, res) {
    var message = LINES[lineIndex];
    if(req){
        
    }
    lineIndex += 1;
    if (lineIndex > LINES.length) {
        lineIndex = 0;
    }

    res.render('index', {message: message});
});

http.Server(app).listen(PORT, function() {
    console.log("HTTP server listening on port %s", PORT);
});