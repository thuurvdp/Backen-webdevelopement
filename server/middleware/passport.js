const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt; // eslint-disable-line

const userController = require("../controller/user.controller");
const config = require("../../config/server.config");

module.exports = (app, passport) => {
	const options = {
		jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme("jwt"),
		secretOrKey: config.jsonToken.secret,
	};

	passport.use(new JwtStrategy(options, (payload, done) => {
		userController.getById(payload.id)
			.then((user) => {
				if (!user) {
					return done(null, false);
				}

				return done(null, user);
			})
			.catch(error => done(error, false));
	}));


	app.use(passport.initialize());
	app.use(passport.session());

	passport.serializeUser((user, done) => done(null, user.id));
	passport.deserializeUser((id, done) => userController.getById(id)
		.then((err, user) => done(err, user)));
};
