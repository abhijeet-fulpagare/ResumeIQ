export const initialInterviewPlan = {
    jobDescription: "",
    selfDescription: "",
    resume: null,
};

export const validateInterviewPlan = ({ jobDescription, selfDescription, resume }) => {
    if (!jobDescription.trim()) {
        return "Add the target job description to continue.";
    }

    if (!resume && !selfDescription.trim()) {
        return "Upload a resume or add a self-description to continue.";
    }

    return "";
};