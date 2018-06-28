require('dotenv').config()
const
  express = require('express'),
  app = express(),
  logger = require('morgan'),
  ejsLayouts = require('express-ejs-layouts'),
  axios = require('axios'),
  PORT = 3000,
  ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3')

const  { WATSON_URL, WATSON_USERNAME, WATSON_PASSWORD} = process.env
const toneAnalyzer = new ToneAnalyzerV3({
  username: WATSON_USERNAME,
  password: WATSON_PASSWORD,
  version: '2016-05-19',
  url: WATSON_URL
})

app.set('view engine', 'ejs')

app.use(ejsLayouts)
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/analyze', (req, res) => {
  toneAnalyzer.tone({
    tone_input: req.query.text,
    content_type: 'text/plain'
  }, (err, tone) => {
    if(err) return console.log(err)
    res.json(tone)
  })
})

app.listen(PORT, (err) => {
  console.log(err || `Server running on ${PORT}`)
})