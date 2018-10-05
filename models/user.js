const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	userName: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	contact: {
		phone: {
			type: Number,
			required: false
		},
		email: {
			type: String,
			required: true
		}
	},
	cleaningList: [{
		type: Schema.Types.ObjectId,
		ref: "cleaningList"
	}],
	mealList: [{
		type: Schema.Types.ObjectId,
		ref: "cleaningList"
	}],
	groceriesList: [{
		type: Schema.Types.ObjectId,
		ref: "cleaningList"
	}],
	calandar: [{
		type: Schema.Types.ObjectId,
		ref: "cleaningList"
	}]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;