const { City } = require("../models/index");

class CityRepository {
  async createCity({ name }) {
    // {name: New Delhi}
    try {
      const city = await City.create({
        name: name,
      });
      return city;
    } catch (error) {
      console.log("Something went wrong in repository layer");
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      await city.destroy({
        where: {
          id: cityId,
        },
      });
      return true;
    } catch (error) {
      console.log("Something went wrong in repository layer");
      throw { error };
    }
  }

  async updateCity() {}

  async getCity() {}
}

module.exports = CityRepository;
