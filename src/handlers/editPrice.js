const { editPriceFromDB } = require("../controllers/putInDB");

const editPrice = async (req, res) => {
  const { price } = req.body;
  try {
    const newPrice = await editPriceFromDB(price);
    res.status(200).json(newPrice);
  } catch (error) {
    console.error("Error while editing price:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  editPrice,
};
