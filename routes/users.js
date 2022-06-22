var express = require('express');
var router = express.Router();
var passport = require("passport");

const userController = require("../controllers/user.controller")
// Api path to register the user 
router.post('/signup',userController.signUp);

// Api path to login the user 
router.post('/signIn',userController.signIn);

// Google auth apis
router.get(
    "/auth/google", 
     passport.authenticate("google", { scope: ["email", "profile"] })
);

router.get("/google/callback",passport.authenticate('google',{
    successRedirect:'/protected',
    failureRedirect:'/auth/failure'
  }))

router.get('/auth/failure',userController.onFailure)
  
router.get('/protected',userController.onPassing)

module.exports = router;
