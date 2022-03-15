const express = require('express');
const routes = express.Router();

const VehiclesController = require('./controllers/VehiclesController');

routes.get('/vehicles/listen', VehiclesController.show);
routes.post('/vehicles/create', VehiclesController.store);
routes.put('/vehicles/:vehicles_id/update',VehiclesController.update);
routes.delete('/vehicles/:vehicles_id/delete',VehiclesController.delete);

module.exports = routes;