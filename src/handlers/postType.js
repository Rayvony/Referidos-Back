const { postTypeInDB } = require("../controllers/getInDB");

const postType = async (req, res) => {
  let { name } = req.body;

  const fieldsToCheck = { name };

  const validationErrors = validateFields(fieldsToCheck);

  if (validationErrors.length > 0) {
    return res.status(400).json({ message: validationErrors });
  }

  try {
    const type = { name };

    const newType = await postTypeInDB(type);
    return res.status(201).json(newType);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  postType,
};
