const express = require("express");
const signupRouter = express.Router();
const md5 = require("md5");
const User = require("../models/users");

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
    newUser.findOne({email: newUser.email})
    newUser.password = md5(newUser.password);
    if(newUser){
      const err = new Error(`User already exit, please sign in`)
      err.status = 403;
      return next(err);
    } else {
      await User.create(newUser);
      res.send("Success!");
    }
  });

module.exports = signupRouter;
