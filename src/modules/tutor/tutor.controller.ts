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
     try {
    const userId = req.user?.id;

    const profile = await tutorService.createProfile(userId as string, req.body);

    res.status(201).json({
      success: true,
      message: "Tutor profile created successfully",
      data: profile,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || "Failed to create tutor profile",
    });
  }
}

const updateTutorProfile = async(req: Request, res: Response) => {
    const userId = req.user?.id;
    const profile = await tutorService.updateProfile(userId as string, req.body);

    res.status(200).json({
        success: true,
        message: "Tutor profile updated",
        data: profile,
    })
}

const setAvailability = async(req: Request, res: Response) => {
    const userId = req.user?.id;
    const availability= await tutorService.setAvailability (userId as string, req.body);

    res.status(200).json({
        success: true,
        message: "Availability updated",
        data: availability,
    })
}

const getTutorDashboard = async (req: Request, res: Response) => {
  const userId = req.user?.id;

  if (!userId) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
  }

  const dashboard = await tutorService.getTutorDashboard(userId);

  res.status(200).json({
    success: true,
    data: dashboard,
  });
};



export const tutorController = {
    listTutors,
    tutorDetails,
    createTutorProfile,
    updateTutorProfile,
    setAvailability,
    getTutorDashboard,
}