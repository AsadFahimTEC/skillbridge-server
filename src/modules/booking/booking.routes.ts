import express, { Router } from "express";
import  auth, { UserRole } from '../../middlewares/auth';
import { bookingController } from "./booking.controller";

const router = express.Router();

// get the private routes

router.get("/", auth(UserRole.User), bookingController.getMyBookings);

router.get("/:id", auth(UserRole.User), bookingController.getBookingDetails);

router.get("/", auth(UserRole.User), bookingController.getAllTutors);

router.post("/", auth(UserRole.User), bookingController.createBooking);

router.put("/profiles", auth(UserRole.User), bookingController.updateTutorProfile);

router.patch("/:id", auth(UserRole.User), bookingController.cancelBooking);


export const bookingRouter: Router = router;