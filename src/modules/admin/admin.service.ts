import { prisma } from "../../lib/prisma"

const getAllUsers = async () => {
    return await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            isBanned: true,
        },
    });
};

const updateUserStatus = async (id: string, isBanned: boolean) => {
    return await prisma.user.update({
        where: { id },
        data: { isBanned }
    });
};

export const adminService = {
    getAllUsers,
    updateUserStatus,
}