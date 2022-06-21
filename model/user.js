// Requiring The Mongoose
var mongoose = require('mongoose');
// Extracting The Schema
var Schema = mongoose.Schema;

// Password hashing 
const bcrypt = require('bcrypt');

// Making The Schema
var userSchema = new Schema(
	{
		name: {
			type: String,
			required: true
		},
		email: {
			type: String,
			required: true,
			unique: true
		},
		phone: {
			type: String,
		},
        password: {
			type: String,
			required: true
		},
	},
	{ timestamps: true }
);

// pre save hook for hashing the user password
userSchema.pre('save', function(next) {
	if (this.password) {
	  this.password = bcrypt.hashSync(this.password, 10);
	  next();
	}
  });
  
userSchema.methods.confirmPassword = function(password) {
	return bcrypt.compareSync(password, this.password);
  };

// Making The Model Of Schema
var User = mongoose.model('User', userSchema);
// Exporting The Model
module.exports = User;