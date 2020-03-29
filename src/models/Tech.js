const { Model, DataTypes } = require('sequelize')

const connection = require('../database')

class Tech extends Model {
  
  // static init(connection){
  //   super.init({
  //     name: DataTypes.STRING
  //   }, {
  //     sequelize: connection,
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
  sequelize: connection,
  tableName: 'techs'
})

module.exports = Tech