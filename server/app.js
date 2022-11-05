const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors({
  origin: (origin, callback) => {
    callback(null, true)
  },
  methods: ['GET', 'POST'],
}))
app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: 'Hello World!'
  })
})

app.use('/api/companies', require('./routes/company.routes'))
app.use('/api/ads', require('./routes/ad.routes'))

module.exports = app
