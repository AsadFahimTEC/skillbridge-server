import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "../../src/lib/prisma";
// import { Role } from "../../generated/prisma/enums";

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),

    trustedOrigins: [process.env.APP_URL!],

    user: {
        additionalFields: {
            role: {
                type: "string",
                defaultValue: "STUDENT",
                required: false
            },

            isBanned: {
                type: "boolean",
                defaultValue: false,
                required: false,
            },

            image: {
                type: "string",
                required: false,
            },

            emailVerified: {
                type: "boolean",
                defaultValue: false,
                required: false,
            },
        },
    },

    emailAndPassword: {
        enabled: true,
        autoSignIn: false,
        requireEmailVerification: true,
    },
    emailVerification: {
        sendVerificationEmail: async ({ user, url, token }, request) => {
            console.log("******** Verification email send!");
        },
    },
});