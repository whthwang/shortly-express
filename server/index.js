const app = require('./app.js');
const db = require('./db');
const port = 4568;

app.listen(port, () => {
  console.log(`Shortly is listening on ${port}`);
  console.log('hey')
});

// require('express')().listen(3000, () => console.log('hello'));
// app2.listen()
