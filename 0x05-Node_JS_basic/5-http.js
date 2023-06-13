const http = require('http');
const countStudents = require('./3-read_file_async');

const databaseFile = process.argv[2];

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') {
    countStudents(databaseFile)
      .then(() => {
        res.end('This is the list of our students\n');
      })
      .catch((error) => {
        res.end(error.message);
      });
  } else {
    res.statusCode = 404;
    res.end('Not found\n');
  }
});

app.listen(1245, () => {
  console.log('Server listening on port 1245');
});

module.exports = app;

