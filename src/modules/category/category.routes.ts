import express, { Router } from "express";
import {prisma} from "../../lib/prisma";

const router = express.Router();

router.get("/", async(req, res) => {
    const categories = await prisma.category.findMany();
    res.json({
        success: true,
        data: categories
    });
});

export const categoryRouter: Router = router;