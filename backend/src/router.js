/* eslint-disable import/no-unresolved */
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
  checkIdUserInReservationBeforeDelete,
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
const vehicleControllers = require("./controllers/vehicleControllers");
const adminControllers = require("./controllers/adminControllers");
const reservationControllers = require("./controllers/reservationControllers");

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
router.get("/vehicles", vehicleControllers.browse);
router.get("/vehicles/:id", vehicleControllers.read);

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

router.post("/vehicles", vehicleControllers.add);
router.put("/vehicles/:id", vehicleControllers.edit);
router.delete("/vehicles/:id", vehicleControllers.destroy);

router.get("/admins", adminControllers.browse);
router.get("/admins/:id", adminControllers.read);
router.post("/admins", adminControllers.add);
router.put("/admins/:id", adminControllers.edit);
router.delete("/admins/:id", adminControllers.destroy);

router.get("/reservations/:id", reservationControllers.read);
router.post("/reservations", reservationControllers.add);
router.delete(
  "/reservations/:id",
  checkIdUserInReservationBeforeDelete,
  reservationControllers.destroy
);

module.exports = router;
