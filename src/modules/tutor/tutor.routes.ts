import  auth, { UserRole } from '../../middlewares/auth';
import express, { Router } from "express";
import { tutorController } from "./tutor.controller";


const router = express.Router();

// get the public routes
router.get("/", tutorController.listTutors);

router.get("/:id", tutorController.tutorDetails);


// get the private routes
router.get("/", auth(UserRole.User), tutorController.getTutorDashboard)

router.get("/availability", auth(UserRole.User), tutorController.getAvailability);

router.post("/profile", auth(UserRole.User), tutorController.createTutorProfile)

router.put("/profile", auth(UserRole.User), tutorController.updateTutorProfile)

router.put("/availability", auth(UserRole.User), tutorController.setAvailability)



export const tutorRouter: Router = router;
