require("dotenv").config({ path: "./config/.env" });
const cors = require("cors");
const { path } = require("express/lib/application");
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

const server = app.listen(process.env.PORT, process.env.HOST, () => {
  console.log(`Server listens http://${process.env.HOST}:${process.env.PORT}`);
});

app.use(favicon(__dirname + "/build/favicon.ico"));

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "build")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const io = require("socket.io")(server, {
  cors: {
    origin: "wss://justdoapp.herokuapp.com",
  },
}).of("/api/websockets");

io.on("connection", onConnection);

startCron(io);
