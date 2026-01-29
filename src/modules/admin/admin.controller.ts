import { Request, Response } from "express";
import { adminService } from "./admin.service";

const getUsers = async (req: Request, res: Response) => {
    const users = await adminService.getAllUsers();

    res.status(200).json({
        success: true,
        message: "All User retrieved successfully",
        data: users,
    });
};

const updateUserStatus = async (req: Request, res: Response) => {
    const user = await adminService.updateUserStatus(
        req.params.id as string,
        req.body.isBanned
    );

    res.status(200).json({
        success: true,
        message: "User status updated",
        data: user,
    });
};

export const adminController = {
    getUsers,
    updateUserStatus,
}