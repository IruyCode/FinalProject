const express = require('express')
const router = express.Router();

const {getAllUsers,createUser} = require('../controller/userController');

// Definar a rota para realizar a funcao q recebemos no UserController 
router.get('/', getAllUsers)

// Ao Click em Submit ele vem para c
router.post('/success', createUser) 

module.exports = router;