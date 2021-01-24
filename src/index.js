const express = require('express')
const app = express()
const port = 3000

const messages = require('./messages.json')

app.get('/message', (request, response) => {
  response.json(messages)
})

app.listen(port, () => {
  console.log(`Server started on 'http://localhost:${port}`)
})