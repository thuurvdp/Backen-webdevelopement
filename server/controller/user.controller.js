const userSchema = require("../model/user");

module.exports = {
	getAll: () => userSchema.find().sort({ name: "asc" }),
	getById: id => userSchema.findOne({ id }),
	findUser: (username, password) => userSchema.findOne({ username, password }),
	insertBatch: batch => userSchema.insertMany(batch),
	clearDatabase: () => userSchema.deleteMany({}),
};
