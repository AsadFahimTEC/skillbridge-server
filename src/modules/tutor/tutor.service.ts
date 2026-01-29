import { prisma } from "../../lib/prisma"

// public routes
const getTutors = (filters: any) => {
    const where: any = {};

    if (filters?.price) {
        where.pricePerHr = {
            lte: Number(filters.price),
        };
    }

    if (filters?.rating) {
        where.rating = {
            gte: Number(filters.rating),
        };
    }

    if (filters?.category) {
        where.categories = {
            some: {
                name: filters.category,
            },
        };
    }

    return prisma.tutorProfile.findMany({
        where,
        include: {
            user: true,
            categories: true,
        },
    });
};


const getTutorById = (id: string) => {
    return prisma.tutorProfile.findUnique({
        where: { id },
        include: {
            user: true,
            categories: true,
            availability: true,
            reviews: true,
        },
    });
};

// private route

const createProfile = (userId: string, data: any) => {
    return prisma.tutorProfile.create({
        data: {
            userId,
            bio: data.bio,
            pricePerHr: data.pricePerHr,
            categories: {
                connect: data.categoryIds.map((id: string) =>
                    ({ id }),)
            },
        },
    });
};

const updateProfile = (userId: string, data: any) => {
    return prisma.tutorProfile.update({
        where: { userId },
        data: {
            bio: data.bio,
            pricePerHr: data.pricePerHr,
            categories: {
                set: data.categoryIds.map((id: string) =>
                    ({ id })),
            },

        },
    });
};

const setAvailability = async (userId: string, slots: any[]) => {
    const tutor = await prisma.tutorProfile.findUnique({
        where: {
            userId
        },
    });

    await prisma.availability.deleteMany({
        where: { tutorId: tutor!.id },
    });

    return prisma.availability.createMany({
        data: slots.map((slot) => ({
            tutorId: tutor!.id,
            day: slot.day,
            startTime: slot.startTime,
            endTime: slot.endTime,
        })),
    });
};

const getTutorDashboard = async (userId: string) => {
    const tutor = await prisma.tutorProfile.findUnique({
        where: { userId },
    });

    const bookings = await prisma.booking.findMany({
        where: { tutorId: tutor!.id },
        include: { student: true },
    });

    return {
        totalSessions: bookings.length,
        completedSessions: bookings.filter(
            (b) => b.status === "COMPLETED"
        ).length,
        upcomingSessions: bookings.filter(
            (b) => b.status === "UPCOMING"
        ),
    };
};

export const tutorService = {
    getTutors,
    getTutorById,
    createProfile,
    updateProfile,
    setAvailability,
    getTutorDashboard,

}