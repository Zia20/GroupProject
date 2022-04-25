const Dog = require("./dogs");

const createDog = async(dog) => {  //function to add/create dog parks to the database
    const newDog = await Dog.create(dog);
    return newDog;
}

const getAllDogs = async() => { //function to find all dogs in the database.
    const dogs = await Dog.find();
    return dogs;
}
const getDogById = async() => { //function to find all dogs in the database.
    const dogs = await Dog.deleteOne();
    return dogs;
}
const updateDog = async() => { //function to find all dogs in the database.
    const dogs = await Dog.updateOne();
    return dogs;
}

module.exports = { createDog, getAllDogs, getDogById, updateDog };