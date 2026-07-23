import pdfParse from "pdf-parse";
import generateInterviewReport from "../services/ai.service.js";
import interviewReportModel from "../models/interviewReport.model.js";

const generateInterviewReportController = async (req, res) => {
    try {
        const file = req.file;

        const { selfDescription, jobDescription } = req.body;

        if (!file && !selfDescription?.trim()) {
            return res.status(400).json({
                message: "Upload a resume or provide a self-description.",
            });
        }

        if (!jobDescription?.trim()) {
            return res.status(400).json({
                message: "Job description is required.",
            });
        }

        const resumeContent = file
            ? await pdfParse(file.buffer)
            : { text: "No resume uploaded. Use the candidate self-description." };

        const interviewReportByAi = await generateInterviewReport({
            resume: resumeContent.text,
            selfDescription,
            jobDescription,
        });

        const interviewReport = await interviewReportModel.create({
            user: req.user.id,
            resume: resumeContent.text,
            selfDescription,
            jobDescription,
            ...interviewReportByAi,
        });

        return res.status(201).json({
            message: "Interview report generated successfully.",
            interviewReport,
        });
    } catch (err) {
        console.error(err);

        return res.status(500).json({
            message: "Failed to generate interview report.",
        });
    }
};

const getInterviewReportById = async (req, res) => {
    try {
        const { interviewId } = req.params;

        const report = await interviewReportModel.findOne({ _id: interviewId, user: req.user.id });

        if (!report) {
            return res.status(404).json({
                message: "Interview report not found",
            });
        }

        return res.status(200).json({
            message: "Interview report fetched successfully",
            report,
        });

    } catch (err) {
        console.error(err);

        return res.status(500).json({
            message: "Failed to get interview report by id",
        });
    }
};

async function getAllInterviewReportsController(req, res) {

    try {
        const interviewReports = await interviewReportModel.find({ user: req.user.id }).sort({ createdAt: -1 }).select("-resume -selfDescription -jobDescription -__v -technicalQuestions -behavioralQuestions -skillGaps -preparationPlan")

        res.status(200).json({
            message: "Interview reports fetched successfully.",
            interviewReports
        })
    }
    catch (err) {
        console.error(err);

        return res.status(500).json({
            message: "Failed to get interview report by id",
        });
    }
    
}

export { generateInterviewReportController, getInterviewReportById, getAllInterviewReportsController };