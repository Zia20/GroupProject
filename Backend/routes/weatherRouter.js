const express = require("express");
const weatherRouter = express.Router();
require('dotenv').config();
const fetch = require('cross-fetch');

const AKEY = process.env.API_KEY;
const weatherUrl = `https://www.meteosource.com/api/v1/free/find_places_prefix?text=Calgary%2C%20Alberta&language=en&key=${AKEY}`;

async function getWeather(){
    try {
        let response = await fetch(weatherUrl);
        let data = response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}
// getWeather()
// .then((data) => {

//     return (data);
// });

weatherRouter.route("/")
.all((req, res, next) => {
    res.sendStatus = 200;
    res.setHeader("content-Type", "json/plain");
    next();
})
.get((req, res) => {
    res.status = 403;
    res.end(`This request is not supported!`);
})
.post((req, res) => {
    res.statusCode = 400;
    res.setHeader("Content-Type", "application/json");
    res.json(req.weather);
});



module.exports = weatherRouter;

