import { useState } from "react";
import { initialInterviewPlan, validateInterviewPlan } from "../services/interview.form";

const useInterviewPlan = () => {
    const [form, setForm] = useState(initialInterviewPlan);
    const [message, setMessage] = useState("");

    const updateField = (field, value) => {
        setForm((currentForm) => ({ ...currentForm, [field]: value }));
        setMessage("");
    };

    const handleResume = (event) => {
        const [file] = event.target.files;
        if (file) {
            updateField("resume", file);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationMessage = validateInterviewPlan(form);

        if (validationMessage) {
            setMessage(validationMessage);
            return;
        }

        setMessage("Your interview strategy is ready to generate.");
    };

    return {
        form,
        message,
        updateField,
        handleResume,
        handleSubmit,
    };
};

export default useInterviewPlan;