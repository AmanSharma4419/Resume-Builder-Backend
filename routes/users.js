var express = require('express');
var router = express.Router();
var passport = require("passport");
var auth = require("../utils/auth.helper");

const userController = require("../controllers/user.controller")
const cvController = require("../controllers/cv.controller");
const Cv = require('../model/cv');

// Api path to register the user 
router.post('/signup', auth.verifyToken ,userController.signUp);

// Api path to login the user 
router.post('/signin',userController.signIn);

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

router.post('/createCv', auth.verifyToken,cvController.createCV)

router.get('/listCv/:userId', auth.verifyToken,cvController.listUserCv)

router.post('/updateCv/:userId', auth.verifyToken,cvController.updateCv)

router.delete('/deleteCv/:userId',auth.verifyToken,cvController.deleteCv)


module.exports = router;
