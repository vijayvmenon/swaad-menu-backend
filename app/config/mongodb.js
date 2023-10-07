// Loads a reusable Mongo client for the application.
const MongoClient = require('mongodb').MongoClient
const dbConfig = require('./db.config.js')

// TODO: Check that your config file is exporting out an object with properties used in the next line.
const client = new MongoClient(dbConfig.url)

client
  .connect()
  .then(() => {
    console.info('MongoDB Client connected and running')
  })
  .catch((err) => {
    console.error('Error starting MongoDB Client', err.message)

    // Exit process with failure
    process.exit(1)
  })

process.on('SIGINT', () => {
  client.close().then(() => {
    console.info('MongoDB Client disconnected')
    process.exit(0)
  })
})

module.exports = client
