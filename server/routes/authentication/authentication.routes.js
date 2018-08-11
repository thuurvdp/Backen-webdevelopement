const routes = require("express").Router();
const jwt = require("jsonwebtoken");

const config = require("../../../config/server.config");
const userController = require("../../controller/user.controller");

routes.post("/login", (req, res) => {
	if (!req.body.username || !req.body.password) {
		return res.status(400);
	}

	userController.findUser(req.body.username, req.body.password)
		.then((user) => {
			if (!user) {
				res.json({ success: false });
			}

			user.password = undefined;

			const token = jwt.sign(JSON.stringify(user), config.jsonToken.secret);

			res.json({
				success: true,
				token: `JWT ${token}`,
				user,
			});
		});
});
routes.get("/logout", (req, res) => req.logout());

module.exports = routes;
