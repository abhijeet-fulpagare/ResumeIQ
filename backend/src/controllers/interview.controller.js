import pdfParse from "pdf-parse";
import generateInterviewReport from "../services/ai.service.js";
import interviewReportModel from "../models/interviewReport.model.js";

const generateInterviewReportController = async (req, res) => {
    try {
        const file = req.file;

        if (!file) {
            return res.status(400).json({
                message: "Resume PDF is required.",
            });
        }

        const resumeContent = await pdfParse(file.buffer);

        const { selfDescription, jobDescription } = req.body;

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

export { generateInterviewReportController };