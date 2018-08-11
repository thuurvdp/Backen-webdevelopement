module.exports = {
	db: {
		getConnectionString: () => `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@database:${process.env.MONGODB_PORT}/${process.env.MONGODB_DATABAS}?authSource=admin`,
	},
};
