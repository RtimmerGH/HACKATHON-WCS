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
const agencyControllers = require("./controllers/agencyControllers");
const brandControllers = require("./controllers/brandControllers");
const modelControllers = require("./controllers/modelControllers");
const categoryControllers = require("./controllers/categoryControllers");
const typeControllers = require("./controllers/typeControllers");

// public routes

router.post("/users", hashPassword, userControllers.add);
router.post(
  "/login",
  userControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);
router.get("/agencies", agencyControllers.browse);
router.get("/agencies/:id", agencyControllers.read);
router.get("/brands", brandControllers.browse);
router.get("/brands/:id", brandControllers.read);
router.get("/models", modelControllers.browse);
router.get("/models/:id", modelControllers.read);
router.get("/categories", categoryControllers.browse);
router.get("/categories/:id", categoryControllers.read);
router.get("/types", typeControllers.browse);
router.get("/types/:id", typeControllers.read);

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
router.post("/agencies", agencyControllers.add);
router.put("/agencies/:id", agencyControllers.edit);
router.delete("/agencies/:id", agencyControllers.destroy);

router.post("/brands", brandControllers.add);
router.put("/brands/:id", brandControllers.edit);
router.delete("/brands/:id", brandControllers.destroy);

router.post("/models", modelControllers.add);
router.put("/models/:id", modelControllers.edit);
router.delete("/models/:id", modelControllers.destroy);

router.post("/categories", categoryControllers.add);
router.put("/categories/:id", categoryControllers.edit);
router.delete("/categories/:id", categoryControllers.destroy);

router.post("/types", typeControllers.add);
router.put("/types/:id", typeControllers.edit);
router.delete("/types/:id", typeControllers.destroy);

module.exports = router;
