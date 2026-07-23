import useInterviewPlan from "../hooks/useInterviewPlan";

const BriefcaseIcon = () => (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
        <path d="M9 5V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1h3a3 3 0 0 1 3 3v2.2a19.7 19.7 0 0 1-8 1.7 19.7 19.7 0 0 1-8-1.7V8a3 3 0 0 1 3-3Zm2-1v1h2V4h-2ZM3 12.4a21.8 21.8 0 0 0 7 1.5V15h4v-1.1a21.8 21.8 0 0 0 7-1.5V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-5.6Z" />
    </svg>
);

const UserIcon = () => (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
        <path d="M12 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0 2c-4.1 0-7.5 2.2-7.5 5v1h15v-1c0-2.8-3.4-5-7.5-5Z" />
    </svg>
);

const UploadIcon = () => (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7 fill-current">
        <path d="M7.5 19a5.5 5.5 0 0 1-.7-10.96A6.5 6.5 0 0 1 19.4 10a4.5 4.5 0 0 1-.9 8.91H14v-4h2.2L12 10.7 7.8 14.9H10v4H7.5Z" />
    </svg>
);

const SparkleIcon = () => (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
        <path d="m12 2 1.5 6.5L20 10l-6.5 1.5L12 18l-1.5-6.5L4 10l6.5-1.5L12 2Zm7 13 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7L19 15Z" />
    </svg>
);

const InterviewPlanForm = () => {
    const { form, message, updateField, handleResume, handleSubmit } = useInterviewPlan();

    return (
        <form onSubmit={handleSubmit} className="overflow-hidden rounded-[14px] border border-[#2a313a] bg-[#14181d]/95 shadow-[0_22px_70px_rgba(0,0,0,.28)]">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <section className="border-b border-[#2a313a] p-5 sm:p-9 md:border-b-0 md:border-r">
                    <div className="flex items-center gap-2.5 border-b border-[#2a313a] pb-5">
                        <span className="text-[#f00059]"><BriefcaseIcon /></span>
                        <h2 className="text-[.98rem] font-bold">Target Job Description</h2>
                        <span className="ml-auto rounded-[9px] bg-[#f00059]/10 px-2.5 py-1.5 text-[.7rem] font-bold text-[#f00059]">Required</span>
                    </div>
                    <div className="relative mt-5">
                        <textarea
                            className="box-border min-h-[280px] w-full resize-none rounded-[9px] border border-transparent bg-[#1d222a] px-[18px] pb-[42px] pt-[18px] font-sans leading-6 text-[#e9ebee] outline-none transition placeholder:text-[#6f757e] focus:border-[#f00059]/65 focus:shadow-[0_0_0_3px_rgba(240,0,89,.1)] sm:min-h-[430px]"
                            value={form.jobDescription}
                            onChange={(event) => updateField("jobDescription", event.target.value)}
                            maxLength={5000}
                            placeholder="Paste the full job description here...\ne.g. ‘Senior Frontend Engineer at Google requires proficiency in React, TypeScript, and large-scale system design...’"
                            aria-label="Target job description"
                        />
                        <span className="absolute bottom-3 right-3 rounded bg-[#11151b] px-1.5 py-0.5 text-[.7rem] text-[#aeb3bb]">{form.jobDescription.length} / 5000 chars</span>
                    </div>
                </section>

                <section className="p-5 sm:p-9">
                    <div className="mb-6 flex items-center gap-2.5 border-b border-[#2a313a] pb-5">
                        <span className="text-[#f00059]"><UserIcon /></span>
                        <h2 className="text-[.98rem] font-bold">Your Profile</h2>
                    </div>

                    <div className="flex flex-col">
                        <label className="mb-2.5 text-[.78rem] font-bold text-[#e2e4e8]" htmlFor="resume-upload">
                            Upload Resume <span>(Best Results)</span>
                        </label>
                        <label className="flex min-h-[170px] cursor-pointer flex-col items-center justify-center gap-2 rounded-[10px] border-2 border-dashed border-[#3c444e] text-center transition hover:border-[#f00059] hover:bg-[#f00059]/5" htmlFor="resume-upload">
                            <input className="hidden" id="resume-upload" type="file" accept=".pdf,.doc,.docx" onChange={handleResume} />
                            <span className="text-[#f00059]"><UploadIcon /></span>
                            <strong className="max-w-[90%] overflow-hidden text-ellipsis whitespace-nowrap text-[.8rem]">{form.resume ? form.resume.name : "Click to upload or drag & drop"}</strong>
                            <small className="text-[.7rem] text-[#8c929b]">PDF or DOCX (Max 5MB)</small>
                        </label>

                        <div className="my-[27px] flex items-center gap-4 text-[.68rem] text-[#9da2a9] before:h-px before:flex-1 before:bg-[#2a313a] after:h-px after:flex-1 after:bg-[#2a313a]"><span>OR</span></div>

                        <label className="mb-2.5 text-[.78rem] font-bold text-[#e2e4e8]" htmlFor="self-description">Quick Self-Description</label>
                        <textarea
                            id="self-description"
                            className="box-border min-h-[126px] w-full resize-none rounded-[9px] border border-transparent bg-[#1d222a] p-4 text-[.78rem] leading-5 text-[#e9ebee] outline-none transition placeholder:text-[#6f757e] focus:border-[#f00059]/65 focus:shadow-[0_0_0_3px_rgba(240,0,89,.1)]"
                            value={form.selfDescription}
                            onChange={(event) => updateField("selfDescription", event.target.value)}
                            placeholder="Briefly describe your experience, key skills, and years of experience if you don’t have a resume handy..."
                        />

                        <div className={`mt-6 flex items-start gap-2.5 rounded-[7px] border px-3.5 py-3 text-[.7rem] leading-[1.35] ${message ? "border-[#f00059]/45 bg-[#f00059]/[.09] text-[#f7d5e2]" : "border-[#273b69] bg-[#12203d] text-[#d6def2]"}`} role="status">
                            <span className={message ? "text-[#f00059]" : "text-[#68a8ff]"}>●</span>
                            {message || "Either a Resume or a Self Description is required to generate a personalized plan."}
                        </div>
                    </div>
                </section>
            </div>

            <footer className="flex flex-col items-stretch justify-between gap-5 border-t border-[#2a313a] px-5 py-[18px] text-[.72rem] text-[#8c929b] sm:flex-row sm:items-center sm:px-9 sm:py-5">
                <span>AI-Powered Strategy Generation <i className="mx-1.5 not-italic text-[#5e6670]">•</i> Approx 30s</span>
                <button type="submit" className="inline-flex min-h-[50px] w-full items-center justify-center gap-2.5 rounded-[9px] border-0 bg-gradient-to-r from-[#ee0057] to-[#ed075f] px-6 font-sans text-[.86rem] font-bold text-white shadow-[0_8px_22px_rgba(240,0,89,.26)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_26px_rgba(240,0,89,.36)] active:translate-y-0 sm:w-auto"><SparkleIcon /> Generate My Interview Strategy</button>
            </footer>
        </form>
    );
};

export default InterviewPlanForm;