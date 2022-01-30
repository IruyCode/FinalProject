const req = require('express/lib/request');
const Users = require('../models/Users');

const getAllUsers = async (req, res) => {
    try{
        const users = await Users.find({});
        res.status(200).json(users);
    } catch (error) {
        console.error(error)
        res.status(500).json({message: "Error getAllUser"})
    }
}
    // Recebe Dados do res
const createUser = async(req,res) => {
     const user = new Users ({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        acceptsTerms : req.body.acceptsTerms,
        })
        // esta dando erro pq n é assincrino 
    user.save((err)=>{
        if(err){
            console.log(err)
        }else {
            res.status(200).json(user);
        }
    })
}
module.exports = {
    getAllUsers,
    createUser
};