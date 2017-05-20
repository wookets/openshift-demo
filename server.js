
const pkg = require('./package.json');
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Meow Yarn!')
})

app.get('/healthz', function (req, res) {
  res.send({version: pkg.version})
})

const PORT = process.env.NODE_ENV === 'production' ? 8080 : 3000;
app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`)
})
