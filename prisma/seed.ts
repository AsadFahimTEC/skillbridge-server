import { prisma } from "../src/lib/prisma";

async function main() {
    await prisma.user.create({
        data: {
            name: "Admin",
            email: "admin@skillbrige.com",
            password: "admin123",
            role: "ADMIN",
        },
    });
}

main();