import express from "express";
import { changeAvailability } from "../controllers/doctorController.js";
import {
  addDoctor,
  allDoctors,
  loginAdmin,
  appointmentAdmin,
  appointmentCancel,
  adminDashboard,
} from "../controllers/adminCotroller.js";

import upload from "../middlewares/multer.js";
import authAdmin from "../middlewares/authAdmin.js";

const adminRouter = express.Router();

adminRouter.post("/add-doctor", authAdmin, upload.single("image"), addDoctor);
adminRouter.post("/login", loginAdmin);
adminRouter.post("/all-doctors", authAdmin, allDoctors);
adminRouter.post("/change-availabilty", authAdmin, changeAvailability);
adminRouter.get("/appointments", authAdmin, appointmentAdmin);
adminRouter.post("/cancel-appointment", authAdmin, appointmentCancel);
adminRouter.get("/dashboard", authAdmin, adminDashboard);

export default adminRouter;
