const express = require ('express')
const CityController = require ('../../controllers/city-controller')

const router = express.Router()

router.post('/city',CityController.create); //**/ Whenever we get a post req on city , we are going to map it with CityController (.create)**

module.exports = router