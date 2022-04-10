const express = require("express");
const signupRouter = express.Router();
const md5 = require("md5");
const User = require("../models/users");
const path = require('path');

signupRouter.route("/")
.all((req, res, next) => {
    res.sendStatus = 200;
    res.setHeader("content-Type", "text/html");
    next();
})
.get((req, res) => {
    res.status = 200;
    res.sendFile(path.join(__dirname, "../public/index.html"));
})
    //Users signup to report a case to avoid spamming fake reports
.post((req, res) => {
    res.statusCode = 200;
    const newUser = new User({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        password: (md5(req.body.password))
    });

    newUser.save(function(error){

        if(error){
            console.log(error)
        } else {  //This direct user to the dashboard to report information
            res.send("Success!");  //Send a real page here.
        }
    });
});

module.exports = signupRouter;