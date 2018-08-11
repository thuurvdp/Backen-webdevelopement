const general = require("./general");

const env = require(`./env/${process.env.NODE_ENV.toLowerCase()}.js`); // eslint-disable-line

module.exports = {
	...general,
	...env,
};
