import { PostController } from './post.controller';
import express, { Router } from "express";

const router = express.Router();

router.post("/", PostController.createPost);

export const PostRouter: Router = router;