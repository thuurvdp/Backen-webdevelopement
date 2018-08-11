const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	id: { type: mongoose.Schema.ObjectId, auto: true },
	username: { type: String, required: true },
	password: { type: String, required: true },
});

module.exports = mongoose.model("user", userSchema);
