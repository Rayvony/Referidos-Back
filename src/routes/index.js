const { router } = require("express");
const referralsRouter = require("./referralsRouter");
const typesRouter = require("./typesRouter");
const priceRouter = require("./priceRouter");

router.use(referralsRouter);
router.use(typesRouter);
router.use(priceRouter);

module.exports = router;
