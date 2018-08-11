const routes = require("express").Router();
const ecoPlanController = require("../../controller/eco-plan.controller");

module.exports = (passport, io) => {
	routes.get("/",
		(req, res) => ecoPlanController.getAll().then(data => res.json({ data })));
	routes.get("/:id",
		(req, res) => ecoPlanController.getById(req.params.id).then(data => res.json({ data })));
	routes.get("/search/:search",
		(req, res) => ecoPlanController.searchFor(req.params.search).then(data => res.json({ data })));
	routes.post("/:id/comment",
		passport.authenticate("jwt", { session: true }),
		(req, res) => ecoPlanController.setComment(req.params.id, req.user._id, req.body.message) //eslint-disable-line
			.then((data) => {
				ecoPlanController.getById(req.params.id).then(result => io.emit("broadcast", { data: result }));
				res.json({ data });
			}));
	routes.delete("/",
		(req, res) => ecoPlanController.clearDatabase().then(data => res.json({ data })));

	return routes;
};
