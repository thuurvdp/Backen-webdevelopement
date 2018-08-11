const session = require("express-session");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const config = require("../../config/server.config");

module.exports = (app) => {
	app.use(cookieParser());

	app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
	app.use(bodyParser.json({ limit: "50mb", keepExtensions: true }));

	// Load express session settings

	app.use(helmet.xssFilter());
	app.use(helmet.noSniff());
	app.use(helmet.ieNoOpen());
	app.use(helmet.hidePoweredBy());
};
