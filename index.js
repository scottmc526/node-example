var http = require('http');
var routes = require('./routes');

function handleRequest(req, res) {
  if (req.url === '/special-message') {
    res.end("you're special?!");
  } else if (req.url === '/non-special-message'){
    res.end("you're boring");
  } else {
    res.end('not right')
  }
}

server = http.createServer(handleRequest);

server.listen(8080, 'localhost', function(){
  console.log('listening on port 8080');
})
