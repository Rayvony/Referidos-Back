const { router } = require("express");
const router = Router();
const referralsRouter = require("./referralsRouter");
const typesRouter = require("./typesRouter");

router.use(referralsRouter);
router.use(typesRouter);

module.exports = router;
