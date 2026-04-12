import express, { Router } from "express";
import  auth, { UserRole } from '../../middlewares/auth';
import { adminController } from "./admin.controller";

const router = express.Router();

router.get("/users", auth(UserRole.Admin), adminController.getUsers);

router.get("/bookings", auth(UserRole.Admin), adminController.getAllBookings);

router.patch("/users/:id", auth(UserRole.Admin), adminController.updateUserStatus);


export const adminRouter: Router = router;