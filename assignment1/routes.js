const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Home</title></head>');
    res.write('<body>');
    res.write('<form action="/create-user" method="POST"><input type="text" name="user" /><button type="submit">Submit</button></form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/users') {
    res.write('<html>');
    res.write('<head><title>Users</title></head>');
    res.write('<body><ul><li>b.langwell@outlook.com</li><li>happyman@fuckyourself.net</li></ul></body>');
    res.write('</html>');
    return res.end(); 
  }
  if (url === '/create-user' && method === 'POST') {
    const body = [];

    req.on('data', chunk => {
      body.push(chunk)
      console.log(body);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      console.log(message);
      // res.write('<html>');
      // res.write('<head><title>Create User</title></head>');
      // res.write(`<body>Created user: ${message}</body>`);
      // res.write('</html>');
      // res.end();
    });
    res.statusCode = 302;
    res.setHeader('Location', '/');
  }
}

module.exports.handler = requestHandler;