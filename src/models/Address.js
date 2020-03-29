const { Model, DataTypes } = require('sequelize')

const connection = require('../database')

const User = require('./User')

class Address extends Model {
  
  // static init(connection){
  //   super.init({
  //     zipcode: DataTypes.STRING,
  //     street: DataTypes.STRING,
  //     number: DataTypes.INTEGER
  //   }, {
  //     sequelize: connection
  //   })
  // }

  // static associate(models){
  //   this.belongsTo(models.User, {foreignKey: 'user_id', as: 'user'})
  // }
}

Address.init({
  zipcode: DataTypes.STRING,
  street: DataTypes.STRING,
  number: DataTypes.INTEGER
}, {
  sequelize: connection
})

module.exports = Address