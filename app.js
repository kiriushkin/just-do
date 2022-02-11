require("dotenv").config({ path: "./config/.env" });
const cors = require("cors");
//const path = require("path");
const express = require("express");
const app = express();
const { onConnection, startCron } = require("./websockets");
const routes = require("./routes/index");
const apiDocs = require("./swagger/index");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "https://justdoapp.herokuapp.com",
  })
);

app.use("/api-docs", apiDocs);
app.use("/api", routes);

// app.use(express.static(path.join(__dirname, "client", "build")));

// app.get("/*", function (req, res) {
//   res.sendFile(path.join(__dirname, "client", "build", "index.html"));
// });

const server = app.listen(process.env.PORT, process.env.HOST, () => {
  console.log(`Server listens http://${process.env.HOST}:${process.env.PORT}`);
});

const io = require("socket.io")(server, {
  cors: {
    origin: "wss://justdoapp.herokuapp.com",
  },
}).of("/api/websockets");

io.on("connection", onConnection);

startCron(io);
