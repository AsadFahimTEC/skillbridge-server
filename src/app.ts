import express, { type Application } from "express";

import { toNodeHandler } from "better-auth/node";

import {auth} from "../src/lib/auth";

const app: Application = express();

app.all("/api/auth/splat", toNodeHandler(auth))

app.get("/", (req, res) => {
    res.send("SkillBridge is Running!")
})

export default app;
