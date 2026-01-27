import { PostService } from './post.service';
import { Request, Response } from "express";

const createPost = async(req: Request, res: Response) => {
    try {
        const result = await PostService.createPost(req.body);
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json({
            error: "Post creation fail",
            details: error
        })
    }
}

export const PostController = {
    createPost
}