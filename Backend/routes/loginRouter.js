const express = require("express");
//Authentication
const md5 = require("md5");
const loginRouter = express.Router();
const User = require("../models/users");

loginRouter.route("/")
.all((req, res, next) => {
    res.sendStatus = 200;
    res.setHeader("content-Type", "json/plain");
    next();
})
.get((req, res) => {
    res.status = 200;
    res.sendFile(path.join(__dirname, "../public/index.html"));
})
.post( async(req, res) => {
    console.log(`Reached`);
    res.statusCode = 200;
    const  users = await req.body;
    const password = (md5(users.password));

    User.findOne({email: email}, function(error, users){
        if(!User){
            const err = new Error(`User email does not exist`)
            err.status = 401;
            return next(err);
        } else if(users.password !==password){
            const err = new Error(`Your password is incorrect`);
            err.status = 401;
            return next(err)
        }
        else if(users.password === password && users.email === email ){
            res.render("dashboard");
        }
    })
});
module.exports = loginRouter;