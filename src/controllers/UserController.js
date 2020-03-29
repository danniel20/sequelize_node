const User = require('../models/User')

const { Op } = require('sequelize')

module.exports = {
  async index(req, res){
    const users = await User.findAll()
    res.json(users)
  },
  
  async store(req, res) {
    const { name, email } = req.body

    const user = await User.create({name, email})

    res.status(201).json(user)
  },

  async update(req, res){
    const { user_id } = req.params
    const { email } = req.body

    const user = User.findByPk(user_id)

    if(!user){
      res.status(400).json({error: 'User not found.'})
    }

    const [userUpdated] = await User.update({ email }, 
                      { where: {
                          id: { [Op.eq]: user_id }
                        }
                     })

    if(userUpdated == 1){
      res.sendStatus(200)
    }
    
  }

}