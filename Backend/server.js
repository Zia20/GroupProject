const express = require('express');
const app = express();
const path = require('path');
var bodyParser = require('body-parser');

const PORT = process.env.PORT || 3020;

//Imported routes
const parkRouter = require("./routes/parkRouter");
const uploadRouter = require("./routes/uploadRouter");
const weatherRouter = require("./routes/weatherRouter");
const loginRouter = require("./routes/loginRouter");
const signupRouter = require("./routes/signupRouter");
const complainRouter = require("./routes/complainRouter");

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());

//Website routing
app.use('/', parkRouter);
app.use('/upload', uploadRouter);
app.use('/weather', weatherRouter);
app.use('/login', loginRouter);
app.use('/signup', signupRouter);
app.use('/complain', complainRouter);
app.use(express.static(path.join(__dirname,'./public')));

app.listen(PORT, function(){

    console.log(`Server is running on port:${PORT}`)
});
