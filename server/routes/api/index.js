const routes = require("express").Router();
const ecoPlanRoutes = require("./eco-plan.routes");
const usersRoutes = require("./users.routes");

module.exports = (passport, io) => {
	routes.use("/eco-plan", ecoPlanRoutes(passport, io));
	routes.use("/user", usersRoutes);

	return routes;
};
