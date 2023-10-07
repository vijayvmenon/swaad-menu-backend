module.exports = (app) => {
  const getMenuItems = require('../services/getMenuItems')
  const getMenuItemById = require('../services/getMenuItemById')
  const updateMenuItemById = require('../services/updateMenuItemById')
  const createMenuItem = require('../services/createMenuItem')
  const deleteMenuItemById = require('../services/deleteMenuItemById')
  var router = require('express').Router()

  // Retrieve all Menu Items
  router.get('/', getMenuItems)

  // Retrieve a single Menu Item with id
  router.get('/:id', getMenuItemById)

  // Update a menu Item with id
  router.put('/:id', updateMenuItemById)

  // Create a new Menu Item
  router.post('/', createMenuItem)

  // Delete a Menu item with id
  router.delete('/:id', deleteMenuItemById)

  app.use('/api/swaad-menu/', router)
}
