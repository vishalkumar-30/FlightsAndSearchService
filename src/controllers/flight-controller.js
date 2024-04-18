const {FlightService} = require('../services/index');
// const { getAll } = require('./city-controller');

const flightService = new FlightService();

const create = async(req, res) => {
    try {
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
            data: flight,
            sucess: true,
            err: {},
            message: "Successfully created a flight"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            message: 'Not able to create flight',
            err: error
        });
    }
}

const getAll = async (req, res) => {
    try {
        const response = await flightService.flightRepository.getAllFlight(req.query);
        return res.status(201).json({
            data: response,
            sucess: true,
            err: {},
            message: "Successfully fetched the flights"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data:{},
            success: false,
            message: 'Not able to fetch the flight',
            err: error
        });
        
    }
}

module.exports = {
    create, getAll
}