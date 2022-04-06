const mongoose = require("../mongoose");

const Schema = mongoose.Schema;

const parkSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    text: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Park = mongoose.model("Park", parkSchema);

module.exports = Park;