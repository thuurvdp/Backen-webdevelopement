const database = require("./database");

module.exports = (app) => {
	app.on("event:database_connected", database);
};
