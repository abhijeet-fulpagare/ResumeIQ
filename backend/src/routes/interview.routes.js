import express from "express"
import { authUser } from "../middleware/auth.middleware.js"; 
import { generateInterviewReportController, getInterviewReportById, getAllInterviewReportsController } from "../controllers/interview.controller.js"
import upload from "../middleware/file.middleware.js";




const router = express.Router();

router.post('/', authUser, upload.single("resume"), generateInterviewReportController)
router.get('/report/:interviewId', authUser, getInterviewReportById)
router.get('/reports', authUser, getAllInterviewReportsController)

export default router