const { ObjectId } = require('mongodb')

const client = require('../../config/mongodb')

const getMenuItemById = async (req, res) => {
  try {
    const database = client.db('swaad')
    const collection = database.collection('menu')
    var id = new ObjectId(req.params.id)
    let menuItem = await collection.findOne({ _id: id })
    if (!menuItem) {
      res.json({ data: null, status: 'not found' })
    } else {
      res.json({ data: menuItem, status: 'success' })
    }
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

module.exports = getMenuItemById
