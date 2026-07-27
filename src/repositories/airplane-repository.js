const CrudRepository = require('./crud-repository');
const { Airplane } = require('../models'); // Changed 'AirPlane' to 'Airplane'

class AirplaneRepository extends CrudRepository {
  constructor() {
    super(Airplane);
  }
}

module.exports = AirplaneRepository;