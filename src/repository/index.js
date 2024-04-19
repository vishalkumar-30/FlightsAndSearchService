const AirplaneRepository = require("./airplane-repository");
const CrudRepository = require("./crud-repository");
const FlightRepository = require("./flight-repository");

module.exports = {
  CityRepository: require("./city-repository"),
  FlightRepository: FlightRepository,
  AirplaneRepository: AirplaneRepository,
  CrudRepository: require('./crud-repository'),
  AirportRepository: require('./airport-repository')
};
