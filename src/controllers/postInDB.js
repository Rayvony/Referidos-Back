const { User, Type } = require("../db");

const postUserInDB = async (user) => {
  try {
    const { username, email, password, type } = user;

    const newUser = await User.create({
      username: username,
      email: email,
      password: password,
      TypeId: type,
    });

    return newUser;
  } catch (error) {
    throw new Error("Error while creating a new user in the database");
  }
};

const postTypeInDB = async (typeName) => {
  try {
    const newType = await Type.create({
      name: typeName,
    });

    return newType;
  } catch (error) {
    throw new Error("Error while creating a new type in the database");
  }
};

module.exports = { postUserInDB, postTypeInDB };
