const mongoose = require("../mongoose");
const Schema = mongoose.Schema;

const complainSchema = new Schema({
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
    date: {
        type: Date,
        required: true
    },
    choose: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

const Complain = mongoose.model("Complain", complainSchema);

module.exports = Complain;