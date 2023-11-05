const { Router } = require("express");
const router = Router();
const { getPrice } = require("../handlers/getPrice");
const { editPrice } = require("../handlers/editPrice");
const { postPrice } = require("../handlers/postPrice");

router.get("/price", getPrice);

router.put("/price", editPrice);

router.post("/price", postPrice);

module.exports = router;
