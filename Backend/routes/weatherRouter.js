require('dotenv').config();
const express = require("express");
const weatherRouter = express.Router();
const fetch = require('node-fetch');

// const AKEY = process.env.API_KEY;
// const location = Calgary;
//  const weatherUrl= `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${AKEY}&units=metric`;

weatherRouter.route("/")
.all((req, res, next) => {
    res.sendStatus = 200;
    res.setHeader("content-Type", "json/plain");
    next();
})
.get( async(req, res) => {
    try {
        const response = await fetch(weatherUrl);
        let data = response.json();
        res.json(data)
    } catch (error) {
        console.log(error.message)
    }
})
.post((req, res) => {
    let data = req.body
    let city = data.city
    res.statusCode = 400;
    res.setHeader("Content-Type", "application/json");
    res.json(req.weather);
});

module.exports = weatherRouter;

