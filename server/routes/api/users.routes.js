const routes = require("express").Router();
const userController = require("../../controller/user.controller");

routes.get("/",
	(req, res) => userController.getAll().then(result => res.json({ data: result })));
routes.get("/:id",
	(req, res) => userController.getById(req.params.id).then(result => res.json({ data: result })));
routes.post("/",
	(req, res) => userController.insertBatch(req.body.users)
		.then(result => res.json({ data: result })));
routes.delete("/",
	(req, res) => userController.clearDatabase().then(result => res.json({ data: result })));

module.exports = routes;
