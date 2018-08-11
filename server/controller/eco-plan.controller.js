const ecoPlanSchema = require("../model/eco-plan");

module.exports = {
	getAll: () => ecoPlanSchema.find().sort({ name: "asc" }),
	getById: id => ecoPlanSchema.findOne({ id }).populate({ path: "comment.user", model: "user" }),
	searchFor: name => ecoPlanSchema.findOne({ NAAM: name }),
	setComment: (id, user, message) => ecoPlanSchema.update(
		{ id },
		{
			$push: {
				comment: {
					user,
					message,
				},
			},
		}
	),
	insertBatch: batch => ecoPlanSchema.insertMany(batch),
	clearDatabase: () => ecoPlanSchema.deleteMany({}),
	getCount: () => ecoPlanSchema.find().countDocuments(),
};
