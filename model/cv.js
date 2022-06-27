// Requiring The Mongoose
var mongoose = require('mongoose');
// Extracting The Schema
var Schema = mongoose.Schema;
// Making The Schema
var cvSchema = new Schema(
	{
		userId: {
		type:String,
		required:true
		},
		name: {
			type: String,
			required: true
		},
		email: {
			type: String,
			required: true
		},
		city: {
			type: String,
		},
		phoneNumber: {
			type: Number,
			required: true
		},
		highestEducationQal: {
			type: String,
			required: true
		},
		collegeName: {
			type: String,
			required: true
		},
		percentage: {
			type: String,
		},
		orgName :  {
			type: String,
			required: true
		},
		location:  {
			type: String,
			required: true
		},
		designation :  {
			type: String,
			required: true
		},
		ctc :  {
			type: Number,
			required: true
		},
		skills :  {
			type: String,
		},
		projectLinks :  {
			type: Array,
		},
		socialProfiles :  {
			type: Array,
		},
		
	},
	{ timestamps: true }
);
// Making The Model Of Schema
var Cv = mongoose.model('Cv', cvSchema);
// Exporting The Model
module.exports = Cv;