import { User } from "../../../generated/prisma/client";
import {prisma} from "../../../src/lib/prisma";

const createPost = async(data: Omit<User, "id" | "createAt" | "updateAt">) => {
    const result = await prisma.user.create({
        data
    })
    return result;
}

export const PostService = {
    createPost
}