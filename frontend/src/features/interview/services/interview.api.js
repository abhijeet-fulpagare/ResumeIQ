import axios from "axios";

const api = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}/api/interview`,
    withCredentials: true,
});

export const createInterviewReport = async ({ jobDescription, selfDescription, resume }) => {
    const formData = new FormData();
    formData.append("jobDescription", jobDescription);
    formData.append("selfDescription", selfDescription);

    if (resume) {
        formData.append("resume", resume);
    }

    const response = await api.post("/", formData);
    return response.data;
};

export const getInterviewReportById = async (interviewId) => {
    const response = await api.get(`/report/${interviewId}`);
    return response.data;
};

export const getInterviewReports = async () => {
    const response = await api.get("/reports");
    return response.data;
};