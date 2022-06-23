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
      
module.exports.updateCv = async (req, res) => {
        console.log(req.body,req.params.userId,"in the con")
        try {
         const userCv = await Cv.findOneAndUpdate({userId:req.params.userId},req.body,{new:true})
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
         const userCv = await Cv.findOneAndDelete({userId:req.params.userId})
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