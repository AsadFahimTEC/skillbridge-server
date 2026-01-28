import { Request, Response } from "express";
import { tutorService } from "./tutor.service";

const listTutors = async (req: Request, res: Response) => {
    const tutors = await tutorService.getTutors();
    res.status(200).json({
        success: true,
        data: tutors,
    });
};

const tutorDetails = async (req: Request, res: Response) => {
    const tutor = await tutorService.getTutorById(req.params.id as any);
    res.status(200).json({
        success: true,
        data: tutor,
    });
}

export const tutorController = {
    listTutors,
    tutorDetails
}