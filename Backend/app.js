const product = require("./routes/productRoute");
const user = require("./routes/userRoutes");
const order = require("./routes/orderRoute");
const bodyParser = require("body-parser")
const payment = require("./routes/paymentRoute");
const express = require('express');
const app = express();

const cookieParser = require("cookie-parser")

app.use(express.json());
app.use(cookieParser());


app.use(bodyParser.urlencoded({extended:true}));

const errorMiddleware = require("../Backend/middleware/error")
//Routes import

require("dotenv").config({ path: "./.env" });
console.log("Loaded Environment Variables:", process.env);
app.use("/api/v1",product); //  /api/v1 always gets add you can give any name
//Middleware of error
app.use("/api/v1",user);
app.use("/api/v1", order);
app.use("/api/v1", payment);


app.use(errorMiddleware);


module.exports = app;


