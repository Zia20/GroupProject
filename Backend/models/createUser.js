const { createUser } = require("./user");

const createNewUser = async () => {
  const newUser = {
    username: "Luperman",
    password: "password1",
    firstName: "emma",
    lastName: "emmt",
    email: "pjjma@yahoo.com",
  };
//   const newAgent = {
//     username: "agent1",
//     password: "password1",
//     isAgent: true,
//   };

  const createdUser = await createUser(newUser);
//   const createdAgent = await createUser(newAgent);
  console.log(
    `We created a new user: ${newUser.username} with an _id of ${createdUser._id}`,
    // `We created a new user: ${createdAgent.username} with an _id of ${createdAgent._id}`
  );
};

createNewUser();