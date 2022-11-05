require('dotenv').config()

const app = require('./app')
const port = process.env.PORT || 5000

require('./config/mongodb')

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})
