const {FlightRepository, AirplaneRepository} = require('../repository/index');
const {compareTime} = require('../utils/helper');

class flightService{

    constructor(){
        this.airplaneRepository = new AirplaneRepository(); 
        this.flightRepository = new FlightRepository();
    }

    async createFlight(data) {
        try {
            if(!compareTime(data.arrivalTime, data.departureTime)){
                throw { error: 'Arrival time cannot be less then Departure Time'};
            }
            // const airplaneRepository = new AirplaneRepository();
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId); // getting capacity of aircraft
            const flight = await this.flightRepository.createFlight({...data, totalSeats: airplane.capacity});
            return flight;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw{error};
        }
    }
    async getAllFlightsData(){
        try {
            const flights = await this.flightRepository.getAllFlight(data);
            return flights;
        } catch (error) {
            
        }
    }
}

module.exports = flightService;


/**
 * flightNumber,
 * airplaneId,
 * departureAirportId,
 * arrivalAirportId,
 * arrivalTime,
 * departureTime,
 * price
 * totalseats -> airplane
 */