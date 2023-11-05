const { Router } = require("express");
const router = Router();
const { getAllReferrals } = require("../handlers/getAllReferrals");
const { getReferralByID } = require("../handlers/getReferralByID");
const { postReferral } = require("../handlers/postReferral");

router.get("/referidos/", getAllReferrals);
router.get("/referido/:id", getReferralByID);

router.post("/referido", postReferral);

module.exports = router;
