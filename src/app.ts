import { PostRouter } from './modules/post/post.routes';
import express, { type Application } from "express";
import cors from "cors";

import { toNodeHandler } from "better-auth/node";

import {auth} from "../src/lib/auth";

const app: Application = express();

app.use(cors({
    origin: process.env.APP_URL || "http://localhost:3000",
    credentials: true
}))

app.all("/api/auth/*splat", toNodeHandler(auth))

app.use(express.json());

app.use("/posts", PostRouter);

app.get("/", (req, res) => {
    res.send("SkillBridge is Running!")
})

export default app;
