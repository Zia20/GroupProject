const express = require("express");
const router = express.Router();
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { createUser, getUserByUsername, getUserById, verifyPassword, } = require("../models/user");

passport.use(
  new LocalStrategy(async function (username, password, done) {
try {
      const user = await getUserByUsername(username);
      if (!user) {
        return done(null, false);
      }
      const passwordsMatch = await verifyPassword(password, user.password);
      if (!passwordsMatch) {
        return done(null, false);
      }

      return done(null, user);
    } catch (error) {
      return done(error, null);
    }
  })
);

passport.serializeUser(function (user, done) {
  console.log("passport wants to store this user in a cookie", user);
  done(null, user.id);
});

passport.deserializeUser(async function (id, done) {
  console.log("passport is trying to recover the user from the cookie", id);
  try {
    const user = await getUserById(id);
    if (!user) {
      done(new Error("User not found or deleted"));
      return;
    }
    done(null, user);
  } catch (error) {
    done(error);
  }
});

//Create and Admin
router.post("/admin",  async (req, res) => {
  const isAdmin = req.body;
  try {
    await createUser(isAdmin);
    res.status(201)
    res.json({
      username: isAdmin.username
    })
  } catch (error) {
    res.sendStatus(400)
    console.log(error)
  }
});

//Admin login
router.post("/login/admin", passport.authenticate("local"), (req, res) => {
  res.send("success");
});

//User Login
router.post("/login", passport.authenticate("local"), (req, res) => {
  res.send("success");
});

//Create Any User
router.post("/signup",  async (req, res) => {
  const newUser = req.body;
  try {
    await createUser(newUser);
    res.status(201)
    res.json({
      username: newUser.username
    })
  } catch (error) {
    res.sendStatus(400)
    console.log(error)
  }
});

router.get("/logout", (req, res) => {
  req.logout();
  res.send("successfully logged out");
});

router.get('/loggedInUser', function (req, res) {
  req.login();
  res.send(req.user)
})

module.exports = router;