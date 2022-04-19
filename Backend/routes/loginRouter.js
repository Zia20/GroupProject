const express = require("express");
//Authentication
const md5 = require("md5");
const loginRouter = express.Router();

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
.post((req, res) => {
    res.statusCode = 200;
    const  email = req.body.email;
    const password = (md5(req.body.password));

    User.findOne({email: email}, function(error, foundUser){
        if(error){
            console.log(error)
        } else if(foundUser){
            if(foundUser.password === password ){
                res.render("dashboard");
            }
        }
    })
});

module.exports = loginRouter;