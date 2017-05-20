
const PORT = process.env.NODE_ENV === 'production' ? 8080 : 3000;
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Meow Yarnball!')
})

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`)
})
