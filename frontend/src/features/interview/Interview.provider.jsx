import { useCallback, useState } from "react";
import { useNavigate } from "react-router";
import { InterviewContext } from "./Interview.context";
import { createInterviewReport, getInterviewReportById, getInterviewReports } from "./services/interview.api";
import { initialInterviewPlan, validateInterviewPlan } from "./services/interview.form";

const InterviewProvider = ({ children }) => {
    const navigate = useNavigate();
    const [form, setForm] = useState(initialInterviewPlan);
    const [formMessage, setFormMessage] = useState("");
    const [formLoading, setFormLoading] = useState(false);
    const [report, setReport] = useState(null);
    const [reportLoading, setReportLoading] = useState(false);
    const [reportError, setReportError] = useState("");
    const [previousReports, setPreviousReports] = useState([]);
    const [previousReportsLoading, setPreviousReportsLoading] = useState(false);
    const [previousReportsError, setPreviousReportsError] = useState("");
    const [activeSection, setActiveSection] = useState("technical");
    const [expandedQuestion, setExpandedQuestion] = useState(null);

    const updateField = (field, value) => {
        setForm((currentForm) => ({ ...currentForm, [field]: value }));
        setFormMessage("");
    };

    const handleResume = (event) => {
        const [file] = event.target.files;
        if (file) updateField("resume", file);
    };

    const submitInterviewPlan = async (event) => {
        event.preventDefault();
        const validationMessage = validateInterviewPlan(form);

        if (validationMessage) {
            setFormMessage(validationMessage);
            return;
        }

        try {
            setFormLoading(true);
            const response = await createInterviewReport(form);
            navigate(`/interview/${response.interviewReport._id}`);
        } catch (error) {
            setFormMessage(error.response?.data?.message || "Failed to generate your interview strategy.");
        } finally {
            setFormLoading(false);
        }
    };

    const loadReport = useCallback(async (interviewId) => {
        try {
            setReport(null);
            setReportError("");
            setReportLoading(true);
            const response = await getInterviewReportById(interviewId);
            setReport(response.report);
        } catch (error) {
            setReportError(error.response?.data?.message || "Failed to load interview report.");
        } finally {
            setReportLoading(false);
        }
    }, []);

    const loadPreviousReports = useCallback(async () => {
        try {
            setPreviousReportsLoading(true);
            setPreviousReportsError("");
            const response = await getInterviewReports();
            setPreviousReports(response.interviewReports || []);
        } catch (error) {
            setPreviousReportsError(error.response?.data?.message || "Failed to load previous reports.");
        } finally {
            setPreviousReportsLoading(false);
        }
    }, []);

    const selectSection = (section) => {
        setActiveSection(section);
        setExpandedQuestion(null);
    };

    const toggleQuestion = (questionIndex) => {
        setExpandedQuestion((currentIndex) => (
            currentIndex === questionIndex ? null : questionIndex
        ));
    };

    return (
        <InterviewContext.Provider value={{
            form,
            formMessage,
            formLoading,
            updateField,
            handleResume,
            submitInterviewPlan,
            report,
            reportLoading,
            reportError,
            loadReport,
            previousReports,
            previousReportsLoading,
            previousReportsError,
            loadPreviousReports,
            activeSection,
            expandedQuestion,
            selectSection,
            toggleQuestion,
        }}>
            {children}
        </InterviewContext.Provider>
    );
};

export default InterviewProvider;