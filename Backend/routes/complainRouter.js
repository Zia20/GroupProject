const express = require("express");
const complainRouter = express.Router();
const Complain = require("../models/complains");

const mustBeLoggedIn = (req, res, next) => {
    if(req.user){
        return next();
    }
    res.status(401)
} 

complainRouter.route("/")
.all((req, res, next) => {
    // console.log(error.message);
    res.setHeader("Content-Type", "application/json");
    next();
})
.get((req, res) => {
    res.send("Please send your complains to the City of Calgary");
})
.post(mustBeLoggedIn, async (req, res) => {
    const newComplain = req.body;
    try {
       await Complain.create(newComplain)
        res.send("Success!")
    } catch (error) {
        console.log(error.message)
    }
})
.put((req, res) => {
    console.log(error.message);
    res.end(`Putting your command`);
})
.delete((req, res) => {
    res.end(`Deleting your addition`)
})

module.exports = complainRouter;