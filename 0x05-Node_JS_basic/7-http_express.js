const express = require('express');
const countStudents = require('./3-read_file_async');

const databaseFile = process.argv[2];

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(databaseFile)
    .then(() => {
      res.send(`This is the list of our students\n`);
    })
    .catch((error) => {
      res.send(error.message);
    });
});

app.listen(1245, () => {
  console.log('Server listening on port 1245');
});

module.exports = app;

