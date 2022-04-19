const express = require("express");
const signupRouter = express.Router();
const md5 = require("md5");
const User = require("../models/users");
const path = require("path");

signupRouter
  .route("/")
  .all((req, res, next) => {
    res.sendStatus = 200;
    res.setHeader("content-Type", "application/json");
    next();
  })
  .get((req, res) => {
    res.status = 200;
  })
  //Users signup to report a case to avoid spamming fake reports
  .post(async (req, res) => {
    res.statusCode = 200;
    const newUser = req.body;
    newUser.password = md5(newUser.password);
    await User.create(newUser);
    res.send("Success!");
  });

module.exports = signupRouter;
