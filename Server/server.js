var http = require('http');
var bodyParser = require('body-parser');
var express = require('express');

var app = express();

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

http.createServer(function (req, res) {
    res.writeHead(200, { 'Transfer-Encoding': 'chunked', 'Content-Type': 'text/event-stream' });
 
    setInterval(function() { 
        var packet = 'event: hello_event\ndata: {"message":"' + new Date().getTime() + '"}\n\n'; 
        res.write(packet); 
    }, 1000);
}).listen(8000);
