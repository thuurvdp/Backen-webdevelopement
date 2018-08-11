const api = require("./api");
const authentication = require("./authentication/authentication.routes");

module.exports = (app, passport, io) => {
	app.use("/api", api(passport, io));
	app.use("/auth", authentication);
	app.use("*", (req, res) => res.status(400).send("Invalid endpoint"));
};
