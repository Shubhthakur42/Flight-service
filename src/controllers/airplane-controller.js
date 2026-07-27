const { AirplaneServices } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');
const { StatusCodes } = require('http-status-codes');

/**
 * POST: /airplanes
 * req-body { modelNumber: 'airbus320', capacity: 200 }
 */
async function createAirplane(req, res) {
  try {
    const airplane = await AirplaneServices.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity
    });

    // Spread operator creates a fresh copy to prevent shared state mutation
    SuccessResponse.data=airplane;
    return res
      .status(StatusCodes.CREATED)
      .json(SuccessResponse);
  } catch (error) {
    return res
      .status(error.statusCode)
      .json(ErrorResponse);
  }
}

async function getAirPlanes(req, res) {
  try {
    const airplanes = await AirplaneServices.getAirplanes();
    SuccessResponse.data = airplanes;
    return res
      .status(StatusCodes.OK)
      .json(SuccessResponse);
  } catch (error) {
    return res
      .status(error.statusCode)
      .json(ErrorResponse);
  }
}

/**
 * DELETE : /airplane/:id
 * req-body {}
 * 
 */

async function destroyAirplane(req, res) {
  try {
    const airplanes = await AirplaneServices.destroyAirplane(req.params.id);
    SuccessResponse.data = airplanes;
    return res
      .status(StatusCodes.OK)
      .json(SuccessResponse);
  } catch (error) {
    return res
      .status(error.statusCode)
      .json(ErrorResponse);
  }
}

/*
* POST : /airplane/:id
* req.body {}
*/

async function getAirplane(req, res) {
  try {
    console.log("I am inside getAirplane by id");
    const airplanes = await AirplaneServices.getAirplane(req.params.id);
    SuccessResponse.data = airplanes;
    return res
      .status(StatusCodes.OK)
      .json(SuccessResponse);
  } catch (error) {
    return res
      .status(error.statusCode)
      .json(ErrorResponse);
  }
}

module.exports = {
  createAirplane,
  getAirPlanes,
  getAirplane,
  destroyAirplane
};