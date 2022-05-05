const mongoose = require("../mongoose");
// const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const { Schema, model } = mongoose

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    // isAdmin:{
    //     type: Boolean,
    //     default: false
    // },
}, {
    timestamps: true
});

const User = model("User", userSchema);

const createUser = async (user) => {
  
    const hashedPassword = bcrypt.hashSync(user.password);
  
    const newUser = await User.create({
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,      
      password: hashedPassword,
    });
  
    return newUser;
  };
 // Does not return user with password
const getUserById = async (id) => {
const user = await User.findById(id).select('-password'); //remove password from find by id
// console.log(`User is ${user}`);
return user;
};

const getUserByUsername = async (username) => {
const user = await User.findOne({ username: username });
return user;
};

const updateUser = async (id, updateData) => {
const updatedUser = await User.findByIdAndUpdate(id, updateData, {
    new: true,
});
return updatedUser;
};

const verifyPassword = async (password, hashedPassword) => {
const passwordsMatch = await bcrypt.compare(password, hashedPassword);
return passwordsMatch;
};

module.exports = { createUser, getUserByUsername,  getUserById, updateUser, verifyPassword, };
