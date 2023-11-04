const { postUserInDB } = require("../controllers/getInDB");

const postReferral = async (req, res) => {
  let { username, email, password, type } = req.body;

  const fieldsToCheck = { username, email, password, type };

  const validationErrors = validateFields(fieldsToCheck);

  if (validationErrors.length > 0) {
    return res.status(400).json({ message: validationErrors.join(". ") });
  }

  try {
    const user = { username, email, password, type };

    const newUser = await postUserInDB(user);
    return res.status(201).json(newUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  postReferral,
};
