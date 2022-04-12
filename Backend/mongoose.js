const mongoose = require("mongoose");
require("dotenv").config();
const connectionStringUrl=process.env.MONGO_URL
console.log("CheckURL", connectionStringUrl); //Run CheckURL ensure connection
//---------------**Variable*********---//
mongoose.connect(connectionStringUrl); //

// mongoose.connect("mongodb://127.0.0.1:27017/usersDb");


module.exports = mongoose;
