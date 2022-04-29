const Dog = require("./dogs");

const createDog = async(dog) => {  //function to add/create dog parks to the database
    const newDog = await Dog.create(dog);
    return newDog;
}

const getAllDogs = async() => { //function to find all dogs in the database.
    const dogs = await Dog.find();
    return dogs;
}
const DeleteDogById = async() => { //function to find all dogs in the database.
    const dogs = await Dog.deleteOne();
    return dogs;
}
const updateDog = async() => { //function to find all dogs in the database.
    const dogs = await Dog.updateOne();
    return dogs;
}
const getDogById = async (id) => {
    const dogsId = await Dog.findById(id)
    return dogsId;
}
module.exports = { createDog, getAllDogs, getDogById, updateDog, DeleteDogById };