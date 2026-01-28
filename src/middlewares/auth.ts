import { success } from 'better-auth';
import { auth } from './../lib/auth';
import { NextFunction, Request, Response } from "express";

export const requireAuth = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await auth.api.getUser(req);

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized. Please login first."
            });
        }

        (req as any).user = user;
        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Authentication failed."
        });
    }
};