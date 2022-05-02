const express = require("express");
const loginRouter = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const User = require("../models/user");

loginRouter.route("/")
.all((req, res, next) => {
    res.sendStatus = 200;
    res.setHeader("content-Type", "json/plain");
    next();
})
.post( async(req, res) => {

try {

const { email, password } = req.body;

if(!email || !password ){
    console.log("Provide valid inputs");
    return res.status(400)
}
const user = await User.findOne({email});
const token = jwt.sign({ user: user._id }, process.env.JWT_TOKEN);

if(user && (await bcrypt.compare(password, user.password)) ){
    console.log("Found User")
        res.json({
            _id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: email,
        token: token
    });
} else{
    console.log("User not found")
    return res.status(400).send({
        message: "Incorrect credentials"
    });
}

} catch (error) {
    console.log(error.message)
    res.status(500).send();
}
});

module.exports = loginRouter;