const password = require("passport");
const localStrategy = require("passport-local").Strategy;

    //Handing password authentications. Yes
const UserModel = require("../models/users");
password.use(
    "signup",
    new localStrategy({
        usernameField: "email",
        passwordField: "password"
    },
    async (email, password, done) => {
        try {
            const user = await UserModel.create({
                email, password
            });
            return done(null, user);
        } catch (error) {
            done(error)
        }
    })
)

password.use(
    "login",
    new localStrategy({
        usernameField: "email",
        passwordField: "password"
    },
    async (email, password, done) => {
        try {
            const user = await UserModel.findOne({ email });
            if(!user){
                return done(null, false, { message: "User not found"});
            } 
            const validate = await user.isValidPassword(password);
            if(!validate){
                return done(null, false, { message: "Wrong Password"});
            } return done(null, user, { message: "Logged in Successfully"});
        } catch (error) {
            return done(error);
        }
    })
);