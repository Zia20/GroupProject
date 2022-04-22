const express = require("express");
const loginRouter = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/users");

loginRouter.route("/")
.all((req, res, next) => {
    res.sendStatus = 200;
    res.setHeader("content-Type", "json/plain");
    next();
})
.get((req, res) => {
    res.status = 200;
})
.post( async(req, res) => {

    console.log("reached");
    const  users = await User.findOne({email: req.body.email});

    if(!users){
       
        return res.status(404).send({
            message: "User not found"
        });
    } else if(!await bcrypt.compare(req.body.password, users.password)){
        return res.status(400).send({
            message: "Incorrect credentials"
        });
    }
    console.log("Found User")
    res.send("Dashboard");
    // else if(users.password === password && users.email === email ){
    //     res.render("dashboard");
    // }
});
module.exports = loginRouter;