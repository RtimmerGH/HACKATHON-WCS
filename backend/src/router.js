const express = require("express");
// const fs = require("fs");
// const uuid = require("uuid");
// const multer = require("multer");
const {
  hashPassword,
  verifyPassword,
  verifyToken,
  verifyAdmin,
  replaceReqParamIdByPayloadSub,
  verifyPasswordBeforeChangingIt,
} = require("./middleware/auth");

// const upload = multer({
//   dest: "upload/image",
// });
const router = express.Router();
const userControllers = require("./controllers/userControllers");
const agencyControllers = require("./controllers/AgencyControllers");

// public routes

router.post("/users", hashPassword, userControllers.add);
router.post(
  "/login",
  userControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);
router.get("/agencies", agencyControllers.browse);
router.get("/agencies/:id", agencyControllers.read);

// Not public routes
router.use(verifyToken, verifyAdmin); // authentication wall : verifyToken is activated for each route after this line
router.get("/reconnect", replaceReqParamIdByPayloadSub, userControllers.read);
router.get("/users", userControllers.browse);
router.get("/users/:id", userControllers.read);
router.put("/users/:id", userControllers.edit);
router.delete("/users/:id", userControllers.destroy);
router.post(
  "/changepassword",
  userControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPasswordBeforeChangingIt,
  hashPassword,
  userControllers.changePassword
);
router.delete("/agencies/:id", agencyControllers.destroy);

module.exports = router;
