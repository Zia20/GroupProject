require("dotenv").config();
const mongoose = require("mongoose");
// const connectionStringUrl=process.env.MONGO_URL || 

mongoose.connect('mongodb://localhost:27017/FEEDBACK');
// console.log("CheckURL", connectionStringUrl);

//Run CheckURL ensure connection
//---------------**Variable*********---//
// mongoose.connect(connectionStringUrl);    //

// mongoose.connect("mongodb://127.0.0.1:27017/usersDb"); //Keep for local testing 

module.exports = mongoose;
