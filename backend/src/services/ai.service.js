import { GoogleGenAI } from "@google/genai";
import config from "../config/config.js";

const ai = new GoogleGenAI({
    apiKey: config.GEMINI_API_KEY,
});

const interviewReportJsonSchema = {
    type: "object",
    properties: {
        matchScore: {
            type: "number",
            description: "A score between 0 and 100 indicating how well the candidate matches the job description."
        },
        technicalQuestions: {
            type: "array",
            items: {
                type: "object",
                properties: {
                    question: {
                        type: "string",
                        description: "Technical interview question"
                    },
                    intention: {
                        type: "string",
                        description: "Why the interviewer asks this question"
                    },
                    answer: {
                        type: "string",
                        description: "Ideal answer or important points to cover"
                    }
                },
                required: ["question", "intention", "answer"]
            }
        },
        behavioralQuestions: {
            type: "array",
            items: {
                type: "object",
                properties: {
                    question: {
                        type: "string",
                        description: "Behavioral interview question"
                    },
                    intention: {
                        type: "string",
                        description: "Purpose behind asking this question"
                    },
                    answer: {
                        type: "string",
                        description: "Ideal STAR-based answer"
                    }
                },
                required: ["question", "intention", "answer"]
            }
        },
        skillGaps: {
            type: "array",
            items: {
                type: "object",
                properties: {
                    skill: {
                        type: "string",
                        description: "Missing skill"
                    },
                    severity: {
                        type: "string",
                        enum: ["low", "medium", "high"],
                        description: "Importance of this skill gap"
                    }
                },
                required: ["skill", "severity"]
            }
        },
        preparationPlan: {
            type: "array",
            items: {
                type: "object",
                properties: {
                    day: {
                        type: "integer",
                        description: "Preparation day number"
                    },
                    focus: {
                        type: "string",
                        description: "Main focus for the day"
                    },
                    tasks: {
                        type: "array",
                        items: {
                            type: "string"
                        },
                        description: "Tasks to complete"
                    }
                },
                required: ["day", "focus", "tasks"]
            }
        },
        title: {
            type: "string",
            description: "Job title extracted from the job description"
        }
    },
    required: [
        "matchScore",
        "technicalQuestions",
        "behavioralQuestions",
        "skillGaps",
        "preparationPlan",
        "title"
    ]
};

async function generateInterviewReport({
    resume,
    selfDescription,
    jobDescription,
}) {
    try {
        const prompt = `
You are a Senior Technical Interviewer.

Analyze the candidate's resume against the job description.

Resume:
${resume}

Self Description:
${selfDescription}

Job Description:
${jobDescription}

Instructions:
1. Give a match score (0-100).
2. Generate 10 technical interview questions.
3. For each technical question include:
   - question
   - intention
   - answer
4. Generate 5 behavioral interview questions.
5. For each behavioral question include:
   - question
   - intention
   - answer
6. List missing skills with severity (low, medium, high).
7. Create a 7-day preparation plan.
8. Extract the job title.

IMPORTANT:
Return ONLY valid JSON.
Do NOT return markdown.
Do NOT return any explanation.
Do NOT include extra fields.
The JSON MUST exactly match the provided schema.
`;

        const response = await ai.models.generateContent({
            model: "gemini-3-flash-preview",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: interviewReportJsonSchema,
            },
        });

        const report = JSON.parse(response.text);

        console.log(report);

        return report;
    } catch (error) {
        console.error("Error generating interview report:", error);
        throw error;
    }
}

export default generateInterviewReport;