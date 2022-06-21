var mongoose = require("mongoose");
var password = process.env.PASSSWORD
mongoose.connect(`mongodb+srv://AmanKumar:${password}@cluster0.nz3fn.mongodb.net/?retryWrites=true&w=majority`,{useNewUrlParser:true},(err) => {
        err ? console.log(err):console.log("database mongodb connected sucessfully")
      });
