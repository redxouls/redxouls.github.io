var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Hello World');
});

var server = app.listen(8081, function(){
    var host = server.address().address;
    var port = server.address().port;
    
    console.log("Listening at http://127.0.0.1:%s", port);
});