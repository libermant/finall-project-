const express = require("express");
const mongoose = require("mongoose");
const cors=require("cors")
const appsRouter = require("./routers/apps");
require("dotenv").config();
mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster2.ueq3zts.mongodb.net/?retryWrites=true&w=majority`
);

const app = express();
app.use(express.json());
app.use(cors())
app.use(appsRouter);


const port = process.env.PORT;

console.log(mongoose.connection.readyState);

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
