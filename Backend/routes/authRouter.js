var express = require("express");
var router = express.Router();
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

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.send("success");
});
router.post("/signup", passport.authenticate("local"), (req, res) => {
  res.send("success");
});

router.get("/logout", (req, res) => {
  req.logout();
  res.send("successfully logged out");
});

module.exports = router;