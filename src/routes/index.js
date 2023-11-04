const { getAllReferrals } = require("../handlers/getAllReferrals");
const { getReferralByID } = require("../handlers/getReferralByID");
const { getAllTypes } = require("../handlers/getAllTypes");
const { postReferral } = require("../handlers/postReferral");
const { postType } = require("../handlers/postType");
const router = require("express").Router();

router.get("/referidos/", getAllReferrals);

router.get("/referido/:id", getReferralByID);

router.get("/tipos", getAllTypes);

router.post("/referido", postReferral);

router.post("/type", postType);

module.exports = router;
