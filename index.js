
const express = require("express");
const cors = require("cors");
require('dotenv').config({path:"./.env"})
const mongoose = require("mongoose");
const app = express();
const studentRoutes = require("./routes/students.routes");



mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("Connected to mongoDB");

}).catch((err)=>{

    console.log("not connectd"+err);
})

app.use(express.urlencoded({extended:false}))
// Enable CORS for all origins
app.use(cors());
app.use(express.json())

app.use("/api/students",studentRoutes);

app.listen(process.env.PORT,()=>{
    console.log("Server runing on port no 80000");
})