const initialDogData = require("./dogs.json");
const { createDog, getAllDogs, getDogById, updateDog} = require("./dogFunctions");

const loadInitialData = async () => {

    for(let i = 0; i < initialDogData.length; i++ ){
        const dog = initialDogData[i];

        try {
            const newDog = await createDog(dog);
            console.log(newDog);
        } catch (error) {
            console.log(error.message)
        }
    }
    console.log("finished loading data")
}

loadInitialData();