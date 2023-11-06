const { getPriceFromDb } = require("../controllers/getInDB");

const getPrice = async (req, res) => {
  try {
    const referralsDB = await getPriceFromDb();
    res.status(200).json(referralsDB);
  } catch (error) {
    console.error("Error while getting price:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getPrice,
};
