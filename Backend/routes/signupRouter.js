const express = require("express");
const signupRouter = express.Router();
const bcrypt = require("bcrypt");
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

    const newUser = await req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newUser.password, salt)
    // newUser.findOne({email: newUser.email})
    newUser.password = hashedPassword;
    await User.create(newUser);
    res.send("Success!");

    // Hiding password from the file Storage
    // const result = await User.create(newUser)
    // const { password, ...data} = await result.toJSON()
    // res.send(data)
    // if(newUser){
    //   const err = new Error(`User already exit, please sign in`)
    //   err.status = 403;
    // } else {
    // }
  });

module.exports = signupRouter;
