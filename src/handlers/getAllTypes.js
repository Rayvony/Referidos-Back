const { getAllTypesFromDB } = require("../controllers/getInDB");

const getAllTypes = async (req, res) => {
  try {
    const typesDB = await getAllTypesFromDB();
    res.status(200).json(typesDB);
  } catch (error) {
    console.error("Error while getting all referrals:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getAllTypes,
};
