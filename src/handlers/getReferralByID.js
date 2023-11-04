const { getUserByID } = require("../controllers/getInDB");

const getReferralByID = async (req, res) => {
  try {
    const { id } = req.params;
    const referralDB = await getUserByID(id);
    res.status(200).json(referralDB);
  } catch (error) {
    console.error("Error while getting all referrals:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getReferralByID,
};
