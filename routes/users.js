var express = require('express');
var router = express.Router();
var passport = require("passport");
var auth = require("../utils/auth.helper");

const userController = require("../controllers/user.controller")
const cvController = require("../controllers/cv.controller");

// Api path to register the user 
router.post('/signup' ,userController.signUp);

// Api path to login the user 
router.post('/signin',userController.signIn);

// Google auth apis
router.get("/auth/google", passport.authenticate("google", { scope: ["email", "profile"] }));

router.get("/google/callback",passport.authenticate('google',{ successRedirect:'/protected',failureRedirect:'/auth/failure'}))

router.get('/auth/failure',userController.onFailure)
  
router.get('/protected',userController.onPassing)

// Api path to create the cv  
router.post('/createCv/:userId', auth.verifyToken,cvController.createCV)

// Api path to get users the cv  
router.get('/listCv/:userId', auth.verifyToken,cvController.listUserCv)

// Api path to update users the cv  
router.patch('/updateCv/:cvId', auth.verifyToken,cvController.updateCv)

// Api path to delete users the cv  
router.delete('/deleteCv/:cvId',auth.verifyToken,cvController.deleteCv)

// Api path to get  the cv by id
router.get('/getCvById/:cvId', auth.verifyToken,cvController.getCvById)

// Api path to verify the user jwt token
router.get('/verify', auth.verifyTokenForProtectedRoutes)

module.exports = router;
