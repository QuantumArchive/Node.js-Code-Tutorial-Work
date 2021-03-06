'use strict';

var http = require('http');
var url = require('url');
var formidable = require('formidable');

function start(route, handle) {
  function onRequest(request, response) {
    var postData = '';
    var pathname = url.parse(request.url).pathname;
    console.log('Request for ' + pathname + ' received.');
    route(handle, pathname, response, request);
  };

  http.createServer(onRequest).listen(3001);
  console.log('Server has started');
};

exports.start = start;
