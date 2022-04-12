const express = require("express");
const weatherRouter = express.Router();
require('dotenv').config();
const fetch = require('node-fetch');

const AKEY = process.env.API_KEY;
//  = `https://www.meteosource.com/api/v1/free/find_places_prefix?text=Calgary%2C%20Alberta&language=en&key=`;
 const weatherUrl= `https://www.meteosource.com/api/v1/free/point?place_id=Calgary&sections=all&timezone=UTC&language=en&units=metric&key=${AKEY}`;


weatherRouter.route("/")
.all((req, res, next) => {
    res.sendStatus = 200;
    res.setHeader("content-Type", "json/plain");
    next();
})
.get( async(req, res) => {
    try {
        let response = await fetch(weatherUrl);
        let data = response.json();
        console.log(data)
        res.json(data)
    } catch (error) {
        res.send(error.message);
        console.log(error);
    }
})
.post((req, res) => {
    let data = req.body
    let city = data.city
    res.statusCode = 400;
    res.setHeader("Content-Type", "application/json");
    res.json(req.weather);
});

// fetch('people.json')
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         appendData(data);
//     })
//     .catch(function (err) {
//         console.log('error: ' + err);
//     });
// function appendData(data) {
//     var mainContainer = document.getElementById("myData");
//     for (var i = 0; i < data.length; i++) {
//         var div = document.createElement("div");
//         div.innerHTML = 'Name: ' + data[i].firstName + ' ' + data[i].lastName;
//         mainContainer.appendChild(div);
//     }
// }



module.exports = weatherRouter;

