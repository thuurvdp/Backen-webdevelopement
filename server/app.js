const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const passport = require("passport");

app.use(require("cors")());

require("./middleware/global")(app);
require("./middleware/passport")(app, passport);

require("./model")(app);

// require("./socket")(app, io);
require("./routes/")(app, passport, io);

require("./tasks")(app);

app.use(require("./middleware/errorHandler"));

io.on("connection", (socket) => {
	socket.emit("connected");
});

// app.listen(process.env.PORT, () => console.log(`listening on port ${process.env.PORT}`));

server.listen(process.env.PORT, () => console.log(`server listening on port ${process.env.PORT}`));
