const axios = require("axios");
const ecoPlanController = require("../controller/eco-plan.controller");
const config = require("../../config/server.config");

module.exports = (req, res, next) => {
	ecoPlanController.getCount()
		.then((count) => {
			if (count) {
				return;
			}

			axios.get(config.task.database.ecoPlanUrl)
				.then(response => ecoPlanController.insertBatch(response.data))
				.catch(err => next(err));
		});
};
