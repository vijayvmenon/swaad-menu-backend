const client = require('../../config/mongodb')

const createMenuItem = async (req, res) => {
  try {
    const database = client.db('swaad')
    const collection = database.collection('menu')

    let data = { ...req.body }
    await collection.insertOne(data)

    res.json({ data: data, status: 'success' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

module.exports = createMenuItem
