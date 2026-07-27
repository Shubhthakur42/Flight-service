const express=require('express');

const router=express.Router();

const { AirplaneController } = require('../../controllers');

router.get('/',AirplaneController.getAirPlanes);

module.exports = router;