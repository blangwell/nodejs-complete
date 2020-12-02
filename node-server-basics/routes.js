const fs = require('fs');

// RAW NODE SERVER LOGIC SANS EXPRESS

// function reqListener(req, res) {do something}
// call reqListener on every request
// do not explicitly invoke here
// http.createServer(reqListener);

// alternatively, with an anonymous callback
// called every time our server receives a request:

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message" /><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end(); 
  }
  
  if (url === '/message' && method === 'POST') {
    const body = [];
  
    // listen for events, fires when chunk ready to read    
    req.on('data', chunk => {
      console.log(chunk); // logs key value pair message=some message
      body.push(chunk);
    }); 
  
    return req.on('end', () => {
      // convert buffered chunks to string
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1]; 
      fs.writeFile('message.txt', message, err => {
        res.statusCode = 302; // 302 => redirect
        res.setHeader('Location', '/');
        return res.end();
      });  
    });
  }
  
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My first Page</title></head>');
  res.write('<body><h1>Heres a dang ol server</h1></body>');
  res.write('</html>');
  res.end(); 
};

// different ways of exporting
// module.exports = requestHandler;
// module.exports = {
//   handler: requestHandler, 
//   someText: 'some hard coded text'
// };
module.exports.handler = requestHandler;
module.exports.someText = 'some hard coded text';

// or: 
// exports.handler = requestHandler;
// exports.someText = 'some hard coded text';