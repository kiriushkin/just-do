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

app.use(cors());

app.use("/api-docs", apiDocs);
app.use("/api", routes);

let server;

if (process.env.NODE_ENV === "development") {
  server = app.listen(process.env.PORT, process.env.HOST, () => {
    console.log(
      `Server listens http://${process.env.HOST}:${process.env.PORT}`
    );
  });
} else {
  server = app.listen("8080", "localhost");
}

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
}).of("/api/websockets");

io.on("connection", onConnection);

startCron(io);
