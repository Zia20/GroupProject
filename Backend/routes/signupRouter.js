const express = require("express");
const signupRouter = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/user");
const { createUser, getUserByUsername, getUserById, verifyPassword, } = require("../models/user");

signupRouter.route("/")
.all((req, res, next) => {
  res.sendStatus = 200;
  res.setHeader("content-Type", "application/json");
  next();
})
.post(async (req, res) => {

  const { firstName, lastName, email, password, username } = req.body;
  if(!firstName || !email || !password || !lastName ||!username){
    res.status(400);
    console.log("Please add required fields")
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await createUser({
    firstName,
    lastName,
    email,
    username,
    password: hashedPassword,
  });

  console.log(user);

});
module.exports = signupRouter;
