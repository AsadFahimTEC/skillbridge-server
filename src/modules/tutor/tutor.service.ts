import { prisma } from "../../lib/prisma"

const getTutors = () => {
    return prisma.tutorProfile.findMany({
        include: { user: true },
    });
};

const getTutorById = (id: string) => {
    return prisma.tutorProfile.findUnique({
        where: { id },
        include: { user: true },
    });
};

export const tutorService = {
    getTutors,
    getTutorById
}