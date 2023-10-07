const client = require('../../config/mongodb')
const { ObjectId } = require('mongodb')

const updateMenuItemById = async (req, res) => {
  try {
    const database = client.db('swaad')
    const collection = database.collection('menu')

    let data = req.body
    var id = new ObjectId(req.params.id)
    let query = { _id: id }
    let newValues = { $set: data }
    let update = await collection.findOneAndUpdate(query, newValues, {
      returnDocument: 'after'
    })

    if (!update) {
      res.json({ data: null, status: 'not found' })
    } else {
      res.json({ data: update, status: 'success' })
    }
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

module.exports = updateMenuItemById
