const express=require('express');

const { AirplaneController } = require('../../controllers');
const { AirplaneMiddlewares } = require('../../middlewares');

const router= express.Router();

console.log("Inside Airplane routes");
// /api/v1/airplane POST
router.post('/', 
        AirplaneMiddlewares.validateCreateRequest,
        AirplaneController.createAirplane);
router.get('/',AirplaneController.getAirPlanes);

router.get('/:id',AirplaneController.getAirplane); 

router.delete('/:id',AirplaneController.destroyAirplane); 

router.patch('/:id', AirplaneController.updateAirplane);

module.exports=router;