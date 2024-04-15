var http = require('http');
var fs = require('fs');
var express = require('express');
var app = express();
var path = require('path');
var server = http.createServer(app);
var port = 8000;

server.listen(port, () => {
    console.log("Server is listening at port %d", port);
  });
  
  app.use(express.static(path.join(__dirname, "public")));
  
