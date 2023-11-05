const { User, Type, Price } = require("../db");

const getAllUsers = async () => {
  try {
    const allUsersFromDB = await User.findAll({
      include: [
        {
          model: Type,
          attributes: ["id", "name"],
        },
      ],
    });

    if (!allUsersFromDB || allUsersFromDB.length === 0) return null;

    return allUsersFromDB;
  } catch (error) {
    console.error("Error while getting all users:", error);
    throw new Error("Error while fetching all users from the database");
  }
};

const getUserByID = async (id) => {
  try {
    const userFromDB = await User.findOne({
      where: {
        id: id,
      },
      include: [
        {
          model: Type,
          attributes: ["id", "name"],
        },
      ],
    });
    return userFromDB;
  } catch (error) {
    console.error("Error while getting user by ID:", error);
    throw new Error("Error while fetching user from the database");
  }
};

const getAllTypesFromDB = async () => {
  try {
    const allTypesFromDb = await Type.findAll();
    return allTypesFromDb;
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching Type data");
  }
};

const getPriceFromDb = async () => {
  try {
    const priceFromDb = await Price.findOne({
      where: { id: 1 },
    });
    return priceFromDb;
  } catch (error) {
    console.error("Error while price:", error);
    throw new Error("Error fetching Price data");
  }
};

module.exports = { getAllUsers, getUserByID, getAllTypesFromDB, getPriceFromDb };
