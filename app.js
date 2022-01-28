require("dotenv").config({ path: "./config/.env" });
const cors = require("cors");
const express = require("express");
const app = express();
const routes = require("./routes/index");
const apiDocs = require("./swagger/index");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/", apiDocs);
app.use("/api", routes);

app.listen(process.env.PORT, process.env.HOST, () => {
  console.log(`Server listens http://${process.env.HOST}:${process.env.PORT}`);
});
