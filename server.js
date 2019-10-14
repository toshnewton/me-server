const http = require('http');


const port = 3002;

const server = http.createServer((req, res) = > {
    res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.write('Hello...\n');
  res.write('Hello...\n');
  res.end('Hello World! This is text - we can respond with HTML, JSON, and more :)\n');
});
                                 
server.listen(port,hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
  console.log(`Server running at http://localhost:${port}/`)
});