var Cv =  require("../model/cv");
var messages =  require("../constants/messages");

module.exports.createCV = async (req, res) => {
      try {
       const userCv = await Cv.create(req.body)
      if(userCv) {
        return await res.json({ statusCode: 200, message: messages.CV_CREATED_SUCCESSFULLY })
      } else {
        return await res.json({ statusCode: 401, message: messages.ERROR_OCCURED })
      }
      } catch (error) {
        return await res.send({
          statusCode: 500,
          message: messages.ERROR_OCCURED,
        });
      }
    }
    
module.exports.listUserCv = async (req, res) => {
        try {
         const userCv = await Cv.find({userId:req.params.userId})
        if(userCv) {
          return await res.json({ statusCode: 200, message: messages.CV_LISTED_SUCCESSFULLY,cv:userCv })
        } else {
          return await res.json({ statusCode: 200, message: messages.NO_DATA_FOUND })
        }
        } catch (error) {
          return await res.send({
            statusCode: 500,
            message: messages.ERROR_OCCURED,
        });
      }
    }
      
    module.exports.getCvById = async (req, res) => {
      try {
       const userCv = await Cv.findById(req.params.cvId)
      if(userCv) {
        return await res.json({ statusCode: 200, message: messages.CV_LISTED_SUCCESSFULLY,cv:userCv })
      } else {
        return await res.json({ statusCode: 200, message: messages.NO_DATA_FOUND })
      }
      } catch (error) {
        return await res.send({
          statusCode: 500,
          message: messages.ERROR_OCCURED,
      });
    }
  }
    
module.exports.updateCv = async (req, res) => {
        try {
         const userCv = await Cv.findByIdAndUpdate(req.params.cvId,req.body,{new:true})
        if(userCv) {
          return await res.json({ statusCode: 200, message: messages.CV_UPDATED_SUCCESSFULLY,cv:userCv })
        } else {
          return await res.json({ statusCode: 200, message: messages.NO_DATA_FOUND })
        }
        } catch (error) {
          return await res.send({
            statusCode: 500,
            message: messages.ERROR_OCCURED,
          });
         }
 }

module.exports.deleteCv = async (req, res) => {
        try {
         const userCv = await Cv.findByIdAn({userId:req.params.cvId})
        if(userCv) {
          return await res.json({ statusCode: 200, message: messages.CV_DELETED_SUCCESSFULLY })
        } else {
          return await res.json({ statusCode: 200, message: messages.NO_DATA_FOUND })
        }
        } catch (error) {
          return await res.send({
            statusCode: 500,
            message: messages.ERROR_OCCURED,
          });
        }
      }