const { ObjectId } = require('mongodb')
const client = require('../../config/mongodb')

const deleteMenuItemById = async (req, res) => {
  try {
    const database = client.db('swaad')
    const collection = database.collection('menu')
    var id = new ObjectId(req.params.id)
    let remove = await collection.deleteOne({ _id: id })

    if (!remove) {
      res.json({ data: null, status: 'not found' })
    } else {
      res.json({ status: 'deleted' })
    }
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

module.exports = deleteMenuItemById
