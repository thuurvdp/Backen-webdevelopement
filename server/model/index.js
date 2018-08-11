const mongoose = require("mongoose");
const settings = require("../../config/general");


module.exports = (app) => {
	mongoose.connect(settings.db.getConnectionString(), { useNewUrlParser: true })
		.then(() => {
			app.emit("event:database_connected");
			console.log(`connect to database on port ${process.env.MONGODB_PORT}`);
		})
		.catch((error) => {
			console.error("database connection failed");
			console.error(`error: ${error}`);
		});
};
