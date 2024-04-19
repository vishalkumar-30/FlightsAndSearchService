const CrudRepository = require('./crud-repository');
const {Airplane} = require('../models/index'); 

class AirportRepository extends CrudRepository {
    constructor() {
        super(Airplane);
    }
}

module.exports = AirportRepository;