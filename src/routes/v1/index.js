const express = require ('express')

const { FlightMiddlewares } = require('../../middlewares/index');

const CityController = require ('../../controllers/city-controller')
const FlightController = require('../../controllers/flight-controller')
const AirportController = require('../../controllers/airport-controller')

const router = express.Router()

router.post('/city',CityController.create); //** Whenever we get a post req on city , we are going to map it with CityController (.create)
router.delete('/city/:id',CityController.destroy);//** We are dealing things as Id in city-controllers hence we use (/:id)
router.get('/city/:id',CityController.get);
router.get('/city',CityController.getAll);
router.patch('/city/:id',CityController.update);

router.post(
    '/flights',
    FlightMiddlewares.validateCreateFlight, // added middlewares 
    FlightController.create
);
router.get('/flights',FlightController.getAll);

router.post('/airports', AirportController.create)


module.exports = router;