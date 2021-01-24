const express = require('express')
const app = express()
const port = 3000

const messages = require('./messages.json')

app.get('/message', (request, response) => {
  response.json(messages)
})

app.get('*', (request, response) => {
  response.status(404).send(`Route ${request.path} not found`)
})

app.listen(port, () => {
  console.log(`Server started on 'http://localhost:${port}`)
})