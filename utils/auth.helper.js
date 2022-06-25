var messages =  require("../constants/messages");
var jwt = require('jsonwebtoken');

const  generateToken =  (payload) => {
  return jwt.sign(payload, process.env.JWTTOKENSECRET);
}

const  verifyToken =   (req, res, next) =>  {
  var token = req.headers.authorization || '';
  if (token) {
   jwt.verify(token,process.env.JWTTOKENSECRET, (err, decoded) => {
      if (err)   res.json({statusCode: 401, message: messages.TOKEN_NOT_MATCHED });
      next();
    });
  } else {
      res.json({statusCode: 401, message: messages.TOKEN_NOT_FOUND });
  }
}

const  verifyTokenForProtectedRoutes =   (req, res, next) =>  {
  var token = req.headers.authorization || '';
  if (token) {
     jwt.verify(token,process.env.JWTTOKENSECRET, (err, decoded) => {
    if (err)   res.json({statusCode: 401, message: messages.TOKEN_NOT_MATCHED });
     res.json({statusCode: 200, message: messages.TOKEN_MATCHED_SUCCESSFULLY,isVerify: true });
     
    next();
    });
  } else {
    return  res.json({statusCode: 200, message: messages.TOKEN_NOT_MATCHED });
  }
}

module.exports = { generateToken, verifyToken,verifyTokenForProtectedRoutes };