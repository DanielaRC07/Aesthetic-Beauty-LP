const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const routes = require("./routes");

app.set("port", 3001);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", routes);
app.use("/public", express.static("public"));
app.use(cors());

app.listen(app.get("port"), () => {
  console.log("WebSite Escuchando por el puerto", app.get("port"));
  console.log(__dirname);
});
