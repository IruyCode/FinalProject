const express = require('express')
const router = express.Router();

const {getAllUsers} = require('../controller/userController');

// Definar a rota para realizar a funcao q recebemos no UserController 
router.get('/', getAllUsers)


module.exports = router;