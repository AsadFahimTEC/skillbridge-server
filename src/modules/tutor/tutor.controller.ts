import { Request, Response } from "express";
import { tutorService } from "./tutor.service";

// public routes

const listTutors = async (req: Request, res: Response) => {
    const tutors = await tutorService.getTutors(req.query);
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

// private route

const createTutorProfile = async(req: Request, res: Response) => {
    const profile = await tutorService.createProfile(req.user.id, req.body);

    res.status(201).json({
        success: true,
        message: "Tutor profile created",
        data: profile,
    })
}

const updateTutorProfile = async(req: Request, res: Response) => {
    const profile = await tutorService.updateProfile(req.user.id, req.body);

    res.status(200).json({
        success: true,
        message: "Tutor profile created",
        data: profile,
    })
}

const setAvailability = async(req: Request, res: Response) => {
    const availability= await tutorService.setAvailability (req.user.id, req.body);

    res.status(200).json({
        success: true,
        message: "Availability updated",
        data: availability,
    })
}

const tutorDashboard= async(req: Request, res: Response) => {
    const dashboard= await tutorService.getTutorDashboard(req.user.id);

    res.status(200).json({
        success: true,
        data: dashboard,
    })
}


export const tutorController = {
    listTutors,
    tutorDetails,
    createTutorProfile,
    updateTutorProfile,
    setAvailability,
    tutorDashboard,

}