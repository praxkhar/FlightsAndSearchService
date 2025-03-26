const { CityService } = require('../services/index')

//  When we will create 'API' which can help us to create a city then ~
//  The method type- POST method 
//  The data using which we are filling all the attributes of its city , that data will come from - req.body
//  We will use the req.body to create & get the city and once we get the city ,then we will configure our response and send response

const cityService = new CityService();

const create = async (req,res)=> {
    try {
        const city = await cityService.createCity(req.body);//name will be set accoding to city-service naming.
        return res.status(201).json({ // we need to return city in the JSON response , currently we're hard coating the status code ,later we can handle it also.
            data: city,
            success: true,
            message: "successfully created a city",//To show on FrontEnd side
            err:{} 
        })
    } catch (error) {
        console.log("error"); // we will not throw that error otherwise we will never be able to stop the error maping
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create a city",
            err: error
        })
    }
}
//DELETE -> /city/:id
const destroy = async (req,res)=> {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "successfully deleted a city",
            err:{} 
        })
    } catch (error) {
        console.log("error"); 
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to delete a city",
            err: error
        })
    }
}
//GET -> /city/:id
const get = async (req,res)=> {
    try {
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "successfully get a city",
            err:{} 
        })
    } catch (error) {
        console.log("error");
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to get a city",
            err: error
        })
    }
}
//PATCH -> /city/:id -> req.body (bcz we have data in city-service)
const update = async (req,res)=> {
    try {
        const response = await cityService.updateCity(req.params.id, req.body); //req.body is a {object} and you pass that {} in the updateCity ie (data) and then use this in city-repository ie (data)
        return res.status(200).json({
            data: response,
            success: true,
            message: "successfully updated a city",
            err:{} 
        })
    } catch (error) {
        console.log("error");
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to update a city",
            err: error
        })
    }
}

// To fetch all of the cities
const getAll = async (req,res)=> {
    try {
        const cities = await cityService.getAllCities(req.query);
        return res.status(200).json({
            data: cities,
            success: true,
            message: "successfully fetched a city",
            err:{} 
        })
    } catch (error) {
        console.log("error");
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to fetch the cities",
            err: error
        })
    }
}

module.exports = {
    create,
    destroy,
    get,
    update,
    getAll
}