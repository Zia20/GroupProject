const express = require("express");
const dogRouter = express.Router();
const { createDog, getAllDogs, getDogById, updateDog, DeleteDogById} = require("../models/dogFunctions");

dogRouter.route("/")
.all((req, res, next) => {
    res.sendStatus = 200;
    res.setHeader("content-Type", "json/plain");
    next();
})
.get(async (req, res) => {
    try {
<<<<<<< HEAD
        const dog = await getAllDogs();
=======
        const dog = await getAllDogs(req.query.description);
<<<<<<< HEAD
=======
        console.log(dog)
>>>>>>> b13aba049d51e46d0aef1ac303cd776c95dcee6b
>>>>>>> 4c1a0d07ca8e379c03fd8c4c0c7839e74827df30
        res.send(dog)
    } catch (error) {
        console.log(error.message);
    }
})

.post(async (req, res) => {
    const newDog = req.body;
    try {
        const addedDog = await createDog(newDog);
        res.send(addedDog)
    } catch (error) {
        res.status(500).send(error);
        console.log(error.message);
    }
})

.put(async (req, res) => {
    const newDogUpdate = req.body;
    try {
        const updatedDog = await updateDog(newDogUpdate);
        res.send(updatedDog)
    } catch (error) {
        console.log(error.message);
    }
})
.delete(async (req, res) => {
    const DeleteDogById = req.body;
    try {
        const deletedDog = await getDogById(DeleteDogById);
        res.send(deletedDog)
    } catch (error) {
        console.log(error.message);
    }
})

dogRouter.route("/:id")
.get(async (req, res) => {
    const id = req.params.id;
    try {
        const dogsId = await getDogById(id);
        return res.send(dogsId)
    } catch (error) {
        return res.status(500).send(error.message)
    }
})

module.exports = dogRouter;