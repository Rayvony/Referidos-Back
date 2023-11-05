const { postPriceInDB } = require("../controllers/postInDB");

const postPrice = async (req, res) => {
  let { price } = req.body;

  if (!/^\d+(\.\d+)?$/.test(price)) {
    return res.status(400).json({ message: "Price is not a valid decimal number" });
  }

  try {
    const newPrice = await postPriceInDB(price);
    return res.status(201).json(newPrice);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  postPrice,
};
