// services use repository to interact with the database

const { StatusCodes } = require('http-status-codes');

const AppError = require('../utils/errors/app-error');

const { AirplaneRepository} = require('../repositories');

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data){
  try{
    console.log("Inside Airplane Service");
    const airplane = await airplaneRepository.create(data);
    return airplane;
  }catch(error){
    if(error.name == 'SequelizeValidationError'){
      let explanation = [];
      error.errors.forEach((err)=>{
        explanation.push(err.message);
      });
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError('Cannot create a new Airplane object',StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function updateAirplane(id,data){
    try {
      const airplane = await airplaneRepository.update(id,data);
      return airplane;
    }
    catch(error) {
      if(error.name == 'SequelizeValidationError') {
        let explanation=[];
        error.errors.forEach((err)=>{
          explanation.push(err.message);
        });
        throw new AppError(explanation, StatusCodes.BAD_REQUEST);
      }
      if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError(
        'The airplane you are trying to update is not present',
        StatusCodes.NOT_FOUND
      );
    }
    }
}

async function getAirplanes(){
  try{
    const airplanes = await airplaneRepository.getall();
    return airplanes;
  }catch(error){
    console.log("Database/Repository Error:", error);
    throw new AppError('Cannot fetch data of all the airplanes',StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function getAirplane(id){
  try {
    const airplane = await airplaneRepository.get(id);
    return airplane;
  }catch(error){
    if(error.statusCode == StatusCodes.NOT_FOUND){
      throw new AppError('Id which you are searching are not present',StatusCodes.NOT_FOUND);
    }
    throw new AppError('Cannot fetch data of the airplane',StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function destroyAirplane(id) {
  try{
    const res=await airplaneRepository.destroy(id);
    return res;
  }catch(error) {
    if(error.statusCode==StatusCodes.NOT_FOUND) {
      throw new AppError('The airplane you requested for delete is not present',error.statusCode);
    }
    throw new AppError('Cannot ftech data of all the airplane',StatusCodes.INTERNAL_SERVER_ERROR);
  }

}
module.exports ={
  createAirplane,
  getAirplanes,
  getAirplane,
  destroyAirplane,
  updateAirplane
}