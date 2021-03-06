const express = require( 'express')

const UserController = require('./controllers/UserController')
const AddressController = require('./controllers/AddressController')
const TechController = require('./controllers/TechController')
const ReportController = require('./controllers/ReportController')

const routes = express.Router()

routes.get('/', (req, res) => {
  res.json({hello: "world"})
})

routes.get('/users', UserController.index)
routes.post('/users', UserController.store)
routes.put('/users/:user_id', UserController.update)

routes.get('/users/:user_id/addresses', AddressController.index)
routes.post('/users/:user_id/addresses', AddressController.store)

routes.delete('/address/:id', AddressController.delete)

routes.get('/users/:user_id/techs', TechController.index)
routes.post('/users/:user_id/techs', TechController.store)
routes.delete('/users/:user_id/techs', TechController.delete)

routes.get('/report', ReportController.show)

module.exports = routes