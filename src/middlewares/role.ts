import { NextFunction, Request, Response } from "express"

export const requireRole = (role: "ADMIN" | "TUTOR" | "STUDENT") => {
    return(req: Request, res: Response, next: NextFunction) => {
        if(req.user.role !== role){
            return res.status(401).json({
                success: false,
                message: "Forbidden: Access denied."
            });
        }
        next();
    };
};