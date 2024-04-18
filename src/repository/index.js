const AirplaneRepository = require("./airplane-repository");
const FlightRepository = require("./flight-repository");

module.exports = {
  CityRepository: require("./city-repository"),
  FlightRepository: FlightRepository,
  AirplaneRepository: AirplaneRepository
};
