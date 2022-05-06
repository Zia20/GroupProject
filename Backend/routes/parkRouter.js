const router = require("express").Router();
const parksRatings = require("../models/parksRatings");

//create a parksRatings pin

router.post("/parksRating", async (req, res)=>{
    const newRatings = new parksRatings(req.body);
    try{
        const savedRatings = await newRatings.save();
        res.status(200).json(savedRatings)
    }catch(error){
        res.status(500).json()
    }
})
