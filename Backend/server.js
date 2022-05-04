require("dotenv").config();
const express = require("express");
const app = express();
const session = require("express-session");
const passport = require("passport");
// const cors = require('cors')
// const path = require('path');
const cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");

const PORT = process.env.PORT || 3020;

//Imported routes
const uploadRouter = require("./routes/uploadRouter");
const authRouter = require("./routes/authRouter"); 
const complainRouter = require("./routes/complainRouter");
const dogRouter = require("./routes/dogRouter");
const signupRouter = require("./routes/signupRouter"); //Not is use

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
// app.use(logger("dev"));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

//Website routing
app.use("/upload", uploadRouter);
app.use("/auth", authRouter);
app.use("/complain", complainRouter);
app.use("/dog", dogRouter);
app.use("/dog/:_id", dogRouter);
app.use("/signup", signupRouter);

// app.use('/logout', logoutRouter);
// app.use('/login', loginRouter);
// const logoutRouter = require("./routes/logoutRouter");
// const loginRouter = require("./routes/loginRouter");

// app.use(express.static(path.join(__dirname,'./public')));

app.listen(PORT, function () {
  console.log(`Server is running on port: ${PORT}`);
});
