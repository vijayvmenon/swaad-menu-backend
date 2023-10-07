const client = require('../../config/mongodb')

const getMenuItems = async (req, res) => {
  try {
    const database = client.db('swaad')
    const collection = database.collection('menu')
    console.log('collection', collection)
    let mylist = await collection.find({}).toArray()

    res.json({ data: mylist, status: 'success' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

module.exports = getMenuItems
