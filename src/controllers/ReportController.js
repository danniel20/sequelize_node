const User = require('../models/User')

const { Op } = require('sequelize')

module.exports = {
  async show(req, res){
    //encontrar todos os usuarios que tem email que termina em teste.com
    //destes usuario buscar todos que moram na rua Y
    //destes usuarios buscar os que tem tecnologias que comecem com React
    
    const users = await User.findAll({
      attributes: ['name', 'email'],
      where: {
        email: {
          [Op.iLike]: '%teste.com'
        }
      },
      include: [
        {association: 'addresses', where: { street: 'rua Y'} }, //enderecos
        {
          association: 'techs',
          required: false, //LEFT JOIN
          where: {
            name: {
              [Op.iLike]: 'React%'
            }
          }
        } 
      ]
    })

    res.json(users)
  }
}