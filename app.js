const express = require('express')
const cors = require('cors')
const app = express()

var corsOptions = {
  origin: 'http://localhost:8081'
}
// console.log(dbConfig)
app.use(cors(corsOptions))

//middleware - parse requests of content-type - application/json
app.use(express.json())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// simple route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to swaad-menu-backend application.' })
})

// set port, listen for requests
const PORT = process.env.PORT || 8081

require('./app/routes/swaadMenu.routes')(app)
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
