const http = require('http');
const today = require('./today');

const requestListener = function (req, res) {
  res.writeHead(200);

  let greetings = "Hello, World"

  if (today.getDate().getHours() > 2 && today.getDate().getHours() < 12) {
    greetings ="Good morning stranger";
  } else if (today.getDate().getHours() >= 12 && today.getDate().getHours() < 18) {
    greetings ="Good afternoon stranger";
  } else if (today.getDate().getHours() >= 19 && today.getDate().getHours() < 2) {
    greetings ="Good evening stranger";
  }

  res.end(`${greetings}, today is ${today.getDate()}`);
}

const port = 8080;
const server = http.createServer(requestListener);
console.log('server listening on port: ' + port);
server.listen(port);
