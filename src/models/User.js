const { Model, DataTypes } = require('sequelize')

const sequelize = require('../database')

const Address = require('./Address')
const Tech = require('./Tech')

class User extends Model {
  
//   static init(sequelize){
//     super.init({
    //   name: DataTypes.STRING,
    //   email: DataTypes.STRING
    // }, {
    //   sequelize: sequelize
    // })
//   }

//   static associate(models){
//     this.hasMany(models.Address, {foreignKey: 'user_id', as: 'addresses'})
//     this.belongsToMany(models.Tech, {foreignKey: 'user_id', through: 'user_techs', as: 'techs'})
//   }
}

User.init({
  name: DataTypes.STRING,
  email: DataTypes.STRING
}, {
  sequelize: sequelize
})

User.hasMany(Address, {foreignKey: 'user_id', as: 'addresses'})
User.belongsToMany(Tech, {foreignKey: 'user_id', through: 'user_techs', as: 'techs'})

module.exports = User