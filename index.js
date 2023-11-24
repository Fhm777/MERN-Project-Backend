const mongoose = require("mongoose");
const express = require("express");
const app = express();
const createRoute = require("./controller/createRoute");
const deleteRoute = require("./controller/deleteRoute");
const getRoute = require("./controller/getRoute");
const updateRoute = require("./controller/updateRoute");
const cors = require("cors");
const bodyParser = require("body-parser");

mongoose.set("strictQuery", true);
mongoose.connect("mongodb+srv://fah:123@cluster0.zv2siuj.mongodb.net/BikeStore");
var db = mongoose.connection;
db.on("open", () => console.log("Connected to DB"));
db.on("error", () => console.log("Error occured"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use("/createRoute", createRoute);
app.use("/deleteRoute", deleteRoute);
app.use("/getRoute", getRoute);
app.use("/updateRoute", updateRoute);

app.listen(4000, () => {
    console.log("Server connected at 4000");
})