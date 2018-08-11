module.exports = (app, io) => {

	io.on("connection", (socket) => {
		console.log(socket);
		socket.emit(`connected to socket id ${socket.id}`);

		socket.on("test", () => console.log("test"));
	});
};
