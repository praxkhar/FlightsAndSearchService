const { City } = require ('../models/index');

// The one way of writting a class
// without constructor

class CityRepository {

    async createCity({ name }) {
        try {
            const city = await City.create({
                name
            })
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};

        }
    }
    
    async deleteCity(cityId) {
        try {
            await City.destroy({
                where: {
                    id:City.Id
                }
            })
            return true;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};

        }
    }

    async updateCity(cityId, data) {   // {name: "prayagraj"}
        try {
            //The below approach also work but will not return updated object,
            //if we're using pg then returning:true can be used else not .

            // const city = await City.update (data, {
            //     where: {
            //         id: cityId
            //     }
            // });

            //This is for getting updated data in mySQL 
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
            return city;           
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};  
        }
    }

    async getCity(cityId) {
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async getAllCities() {
        try {
            const cities = await City.findAll();
            return cities;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
}


module.exports = CityRepository;
