// Controller for listing all the avaliabe category for knowledgebase
var User = require('../model/user');
var messages =  require("../constants/messages");
var auth = require("../utils/auth.helper");



module.exports.signUp = async (req, res) => {
const { email } = req.body;
  try {
    const existingUser =  await User.findOne({email:email})
    if(existingUser){
        return res.json({ statusCode: 401, message: messages.USER_ALREADY_EXISTS })
    } 
    const user = await User.create(req.body)
    if (user) {
        return res.json({ statusCode: 200, message: messages.USER_CREATED_SUCCESSFULLY })
    }
    else {
      return res.json({ statusCode: 400, message: messages.ERROR_OCCURED })
    }
  } catch (error) {
    return res.send({
      statusCode: 500,
      message: messages.ERROR_OCCURED,
    });
  }
}

module.exports.signIn = async (req, res) => {
    const { password, email } = req.body;
    try {
      const existingUser =  await User.findOne({email:email})
      if (!existingUser)
        return res.json({ statusCode: 401,message: messages.USER_NOT_FOUND });
      if (!existingUser.confirmPassword(password)) {
        return res.json({statusCode: 401, message: messages.INCORRECT_PASSWORD });
      }
      const token = auth.generateToken(email);
      return res.json({statusCode: 200, message: messages.LOGGED_IN_SUCESSFULLY,token:token });
    } catch (error) {
      return res.send({
        statusCode: 500,
        message: messages.ERROR_OCCURED,
      });
    }
  }

module.exports.onFailure = (req,res) => {
    res.send("Something went wrong")
}

module.exports.onPassing = (req,res) => {
  res.send("hello world")
}
