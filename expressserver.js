const express = require('express')
const  fs  = require('fs')
const { env } = require('process')
const app = express()
const port = 3000 

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/index', (req, res) => {
    x = fs.readFileSync('index.html')
    res.send( x.toString())
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})