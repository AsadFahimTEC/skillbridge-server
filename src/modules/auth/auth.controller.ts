import { Request, Response } from "express";
import { auth } from "../../lib/auth";

export const register = async(req: Request, res: Response) => {
    try {
        const user = await auth.api.register(req.body);
        return res.status(201).json({
                success: true,
                message: "User registered successfully.",
                data: user,
            });
    } catch (error: any) {
        return res.status(400).json({
                success: false,
                message: error?.message || "Registration failed",
            });
    }
};

export const login = async(req: Request, res: Response) => {
    try {
        const session = await auth.api.login(req.body);
        return res.status(201).json({
                success: true,
                message: "Login successful.",
                data: session,
            });
    } catch (error: any) {
        return res.status(400).json({
                success: false,
                message: error?.message || "Invalid email or password",
            });
    }
};

export const getMe = async(req: Request, res: Response) => {
    try {
        const user = await auth.api.getUser(req.body);

        if(!user){
            return res.status(401).json({
                success: false,
                message: "User not authenticated",
            })
        }
        return res.status(201).json({
                success: true,
                message: "User fetched successfully.",
                data: user,
            });
    } catch (error: any) {
        return res.status(400).json({
                success: false,
                message: error?.message || "Failed to fetch user",
            });
    }
};