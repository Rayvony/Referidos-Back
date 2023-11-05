const { User, Type, Price } = require("../db");

const editPriceFromDB = async (newPrice) => {
  try {
    const priceFromDB = await User.findOne({
      where: { id: 1 },
    });
    if (priceFromDB) {
      priceFromDB = newPrice;
      await priceFromDB.save();
      return priceFromDB;
    }
  } catch (error) {
    console.error("Error while updating price:", error);
    throw new Error("Error while updating price in the database");
  }
};

module.exports = { editPriceFromDB };
