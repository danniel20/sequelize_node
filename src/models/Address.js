const { Model, DataTypes } = require('sequelize')

const sequelize = require('../database')

const User = require('./User')

class Address extends Model {
  
  // static init(sequelize){
  //   super.init({
  //     zipcode: DataTypes.STRING,
  //     street: DataTypes.STRING,
  //     number: DataTypes.INTEGER
  //   }, {
  //     sequelize: sequelize
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
  sequelize: sequelize
})

module.exports = Address