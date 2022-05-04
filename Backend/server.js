require("dotenv").config();
const express = require("express");
const app = express();
const session = require("express-session");
const passport = require("passport");
<<<<<<< HEAD
const cors = require('cors')
const path = require('path');
const cookieParser = require('cookie-parser')
var bodyParser = require('body-parser');
=======
// const cors = require('cors')
// const path = require('path');
const cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
>>>>>>> b13aba049d51e46d0aef1ac303cd776c95dcee6b

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
<<<<<<< HEAD
app.use(session({secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: false}));
=======
// app.use(logger("dev"));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
>>>>>>> b13aba049d51e46d0aef1ac303cd776c95dcee6b
app.use(passport.initialize());
app.use(passport.session());

//Website routing
<<<<<<< HEAD
app.use('/upload', uploadRouter);
app.use('/auth', authRouter);
app.use('/complain', complainRouter);
app.use('/dog', dogRouter);
app.use('/signup', signupRouter); //Not in use
=======
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
>>>>>>> b13aba049d51e46d0aef1ac303cd776c95dcee6b

app.listen(PORT, function () {
  console.log(`Server is running on port: ${PORT}`);
});
