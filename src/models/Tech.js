const { Model, DataTypes } = require('sequelize')

const sequelize = require('../database')

class Tech extends Model {
  
  // static init(sequelize){
  //   super.init({
  //     name: DataTypes.STRING
  //   }, {
  //     sequelize: sequelize,
  //     tableName: 'techs'
  //   })
  // }

  // static associate(models){
  //   this.belongsToMany(models.User, {foreignKey: 'tech_id', through: 'user_techs', as: 'users'})
  // }
}

Tech.init({
  name: DataTypes.STRING
}, {
  sequelize: sequelize,
  tableName: 'techs'
})

module.exports = Tech