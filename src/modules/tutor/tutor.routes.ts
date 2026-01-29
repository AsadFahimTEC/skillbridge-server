import express, { Router } from "express";
import { tutorController } from "./tutor.controller";


const router = express.Router();

router.get("/", tutorController.listTutors);

router.get("/:id", tutorController.tutorDetails);

export const tutorRouter: Router = router;
