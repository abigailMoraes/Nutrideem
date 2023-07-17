var express = require("express");
const cors = require("cors");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var itemsRouter = require("./routes/items");
var nutritionRouter = require("./routes/nutrition");
const db = require("./databases/database");
var app = express();

const corsOptions = {
  origin: "https://nutrideem-client.onrender.com", // frontend URI (ReactJS)
};

app.use(cors(corsOptions));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/items", itemsRouter);
app.use("/nutrition", nutritionRouter);

module.exports = app;
