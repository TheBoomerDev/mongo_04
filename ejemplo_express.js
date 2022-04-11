const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/', function (req, res) {
    const {query, params, body} = req
    res.send('POST request to the homepage')
  })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
