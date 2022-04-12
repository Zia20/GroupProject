const express = require('express');
const app = express();
const path = require('path');
var bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

//Imported routes
const parkRouter = require("./routes/parkRouter");
const uploadRouter = require("./routes/uploadRouter");
const weatherRouter = require("./routes/weatherRouter");
const loginRouter = require("./routes/loginRouter");
const signupRouter = require("./routes/signupRouter");

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'./public')));
// app.use('/static', express.static('public'))
app.use("/static", express.static(path.join(__dirname, 'public')));

//Website routing
app.use('/', parkRouter);
app.use('/upload', uploadRouter);
app.use('/weather', weatherRouter);
app.use('/login', loginRouter);
app.use('/signup', signupRouter);


app.listen(PORT, function(){

    console.log(`Server is running on port:${PORT}`)
});
