const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

const parkRouter = require("./routes/parkRouter");
const uploadRouter = require("./routes/uploadRouter");

app.use("/static", express.static(path.join(__dirname, 'public')));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

    //use /mellow to create the routes
app.use('/', parkRouter);
app.use('/upload', uploadRouter);


app.listen(PORT, function(){

    console.log(`Server is running on port:${PORT}`)
});
