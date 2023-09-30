const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/interview";
try{
    mongoose.connect(url);
    console.log("Db connected!");
}catch(errror){
    console.log("Not connected to database");
}