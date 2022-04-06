const express = require("express");
const parkRouter = express.Router();

parkRouter.route("/")
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
})
.get((req, res) => {
    res.send("Sending the image to parks Calgary");
})
.post((req, res) => {
    res.send(`Adding the parks: ${req.body.name}`)
})
.put((req, res) => {
    res.statusCode = 403;
    res.end(`Putting your command`);
})
.delete((req, res) => {
    res.end(`Deleting your addition`)
})

module.exports = parkRouter;