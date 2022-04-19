const express = require("express");
const complainRouter = express.Router();
const Complain = require("../models/complains");

complainRouter.route("/")
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    next();
})
.get((req, res) => {
    res.send("Please send your complains to the City of Calgary");
})
.post( async (req, res) => {
    
    const newComplain = req.body;

    try {
       await Complain.create(newComplain)
        res.send("Success!")
    } catch (error) {
        console.log(error.message)
    }
})
.put((req, res) => {
    res.statusCode = 403;
    res.end(`Putting your command`);
})
.delete((req, res) => {
    res.end(`Deleting your addition`)
})

module.exports = complainRouter;