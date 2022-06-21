var express = require('express');
var router = express.Router();
const userController = require("../controllers/user.controller")
// Api path to register the user 
router.post('/signup',userController.signUp);
router.post('/signIn',userController.signIn);

module.exports = router;
