const { router } = require("express");
const router = Router();
const { getAllTypes } = require("../handlers/getAllTypes");
const { postType } = require("../handlers/postType");

router.get("/tipos", getAllTypes);

router.post("/tipo", postType);

module.exports = router;
