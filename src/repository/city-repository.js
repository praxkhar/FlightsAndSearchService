const { City } = require ('../models/index');

class CityRepository {

    async createCity({ name }) {
        try {
            const city = await city.create({
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

    async updateCity(cityId, data) {
        try {
            const city = await city.update (data, {
                where: {
                    id: cityId
                }
            });
            return city;           
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};  
        }
    }

    async getCity(cityId) {
        try {
            const city = await city.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
}


module.exports = CityRepository;
