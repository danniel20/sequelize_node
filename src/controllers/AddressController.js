const Address = require('../models/Address')
const User = require('../models/User')

module.exports = {
  async index(req, res){
    const { user_id } = req.params

    const user = await User.findByPk(user_id, {
      include: { association: 'addresses'}
    })

    if(!user){
      res.status(400).json({error: 'User not found.'})
    }

    res.json(user.addresses)

    //const userAdresses = await Address.findAll({where: {user_id: user_id}})
    //res.json(userAdresses)
  },
  
  async store(req, res) {
    const  { user_id } = req.params
    const { zipcode, street, number } = req.body

    const user = await User.findByPk(user_id)

    if(!user){
      res.status(400).json({error: 'User not found.'})
    }

    const address = await Address.create({zipcode, street, number, user_id})

    res.status(201).json(address)
  },

  async delete(req, res){
    const { id } = req.params

    if(await Address.destroy({ where: { id } }) ){
      res.sendStatus(204)
    }
    else{
      res.json({error: 'Adress not found'})
    }
  }
  
}