const express=require('express');

const { AirplaneController } = require('../../controllers');
const router= express.Router();

console.log("Inside Airplane routes");
// /api/v1/airplane POST
router.post('/',AirplaneController.createAirplane);

router.get('/',AirplaneController.getAirPlanes);

router.get('/:id',AirplaneController.getAirplane); 

router.delete('/:id',AirplaneController.destroyAirplane); 

module.exports=router;