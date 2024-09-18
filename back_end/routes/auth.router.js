const authController = require("../controllers/auth.controller");
const express = require("express");
const router = express.Router();
const { verifySignUp } = require("../middlewares");

router.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

// signup
router.post(
  "/signup",
  [verifySignUp.checkDuplicatedUser, verifySignUp.checkExistingRoles],
  authController.signup
);
// signin
router.post("/signin", authController.signin);

module.exports = router;
