require('dotenv').config()
const
  express = require('express'),
  app = express(),
  logger = require('morgan'),
  ejsLayouts = require('express-ejs-layouts')
  PORT = 3000

app.set('view engine', 'ejs')

app.use(ejsLayouts)
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(PORT, (err) => {
  console.log(err || `Server running on ${PORT}`)
})