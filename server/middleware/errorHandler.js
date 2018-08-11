const errorHelper = require("../helpers/errorHandler");

const errorHandler = (err, req, res, next) => {
	let error = err;

	if (!err) {
		next();
	}

	// Check if the error is of type string
	// If so, "convert" it to an error
	if (typeof error === "string") {
		error = new Error(error);
	}

	// Do not send multiple responses
	if (res.headersSent) {
		return;
	}

	const { statusCode, msg, stack } = errorHelper(error);

	// Return response
	res.status(statusCode).json({
		err: msg,
		stack,
	});
};

module.exports = errorHandler;
