const { StatusCodes } = require('http-status-codes');
const { Logger } = require('../config');
const AppError = require('../utils/errors/app-error');

class CrudRepository{
  constructor(model) {
    this.model=model;
  }

  async create(data){
      console.log("Inside Repository");
      const res=await this.model.create(data);
      return res;
  }

  async destroy(data){
      const res=await this.model.destroy({
        where:{
          id: data
        }
      });
      // this destroy command in sequelize always get successful woth 0 and 1 value , 1 means that id exist and successfully deleted and 0 means id does not exist
      if(!res) {
        throw new AppError('Given Id does not exist',StatusCodes.NOT_FOUND);
      }
      return res;
  }

  async get(data){
      const res=await this.model.findByPk(data);
      if(!res){
        throw new AppError('Not able to find the resource',StatusCodes.NOT_FOUND);
      }
      return res;
  }

  async getall(){
      const res=await this.model.findAll();
      return res;
  }
  async update(id,data){
      const res=await this.model.update(data,{
        where:{
          id:id
        }
      });
      return res;
  }
}
module.exports= CrudRepository;