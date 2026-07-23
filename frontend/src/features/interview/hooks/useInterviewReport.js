import { useState } from "react";

const useInterviewReport = () => {
    const [activeSection, setActiveSection] = useState("technical");
    const [expandedQuestion, setExpandedQuestion] = useState(null);

    const selectSection = (section) => {
        setActiveSection(section);
        setExpandedQuestion(null);
    };

    const toggleQuestion = (questionIndex) => {
        setExpandedQuestion((currentIndex) => (
            currentIndex === questionIndex ? null : questionIndex
        ));
    };

    return {
        activeSection,
        expandedQuestion,
        selectSection,
        toggleQuestion,
    };
};

export default useInterviewReport;