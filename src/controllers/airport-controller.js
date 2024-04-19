const {AirportService} = require('../services/index');

const airportService = new AirportService();

const create = async (req, res) => {
    try {
        const result = await airportService.create(req.body);
        return res.status(201).json({
            error: {},
            message: "Succesfully created Airport",
            data: Response,
            success: true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            err: error,
            message: "Cannot create new project"
        })
    }    
}

module.exports = {
    create
}
