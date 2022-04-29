const mongoose = require("../mongoose");

const Schema = mongoose.Schema;

const dogSchema = new Schema({
    category:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true,
    },
    steward: {
        type: String,
        required: true
    },
    opened_dt: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Dog = mongoose.model("Dog", dogSchema); //Creating a dog park model

module.exports = Dog;