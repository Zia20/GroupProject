const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

const parkRouter = require("./routes/parkRouter");
const uploadRouter = require("./routes/uploadRouter");
const weatherRouter = require("./routes/weatherRouter");

app.use("/static", express.static(path.join(__dirname, 'public')));

    //use /mellow to create the routes
app.use('/', parkRouter);
app.use('/upload', uploadRouter);
app.use('/weather', weatherRouter);


app.listen(PORT, function(){

    console.log(`Server is running on port:${PORT}`)
});
