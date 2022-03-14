var express = require('express');
var router = express.Router();
const userController = require('../controller/userController');


router.post('/', userController.createUser)

module.exports = router;
