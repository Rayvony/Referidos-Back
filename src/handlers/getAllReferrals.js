const { getAllUsers } = require("../controllers/getInDB");

const getAllReferrals = async (req, res) => {
  try {
    const referralsDB = await getAllUsers();
    res.status(200).json(referralsDB);
  } catch (error) {
    console.error("Error while getting all referrals:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getAllReferrals,
};
