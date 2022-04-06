const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const parkRouter = require("./routes/parkRouter");


    //use /mellow to create the routes
app.use('/', parkRouter);

app.listen(PORT, function(){

    console.log(`Server is running on port:${PORT}`)
});
