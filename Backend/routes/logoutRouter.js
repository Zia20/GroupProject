require('dotenv').config();
const express = require("express");
const logoutRouter = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const User = require("../models/user");


logoutRouter.route("/")
.all((req, res, next) => {
    res.sendStatus = 200;
    res.setHeader("content-Type", "json/plain");
    next();
})
.get( async(req, res) => {

    const token = jwt.sign({ user: user._id, }, process.env.JWT_TOKEN);
    res.cookie("token", "", {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
    })
})

module.exports = logoutRouter;

