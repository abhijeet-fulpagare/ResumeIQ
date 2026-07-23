import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useInterview from "../hooks/interview.hooks";
import { generateResumePdf } from "../services/interview.api";

const formatReportDate = (date) => {
    if (!date) return "Recently created";

    return new Intl.DateTimeFormat("en", {
        month: "short",
        day: "numeric",
        year: "numeric",
    }).format(new Date(date));
};

const PreviousReportsSidebar = () => {
    const navigate = useNavigate();
    const {
        previousReports,
        previousReportsLoading,
        previousReportsError,
        loadPreviousReports,
    } = useInterview();
    const [generatingResumeId, setGeneratingResumeId] = useState(null);
    const [resumeMessage, setResumeMessage] = useState("");

    useEffect(() => {
        loadPreviousReports();
    }, [loadPreviousReports]);

    const handleGenerateResume = async (reportId) => {
        try {
            setGeneratingResumeId(reportId);
            setResumeMessage("");

            const pdfBlob = await generateResumePdf(reportId);
            const downloadUrl = window.URL.createObjectURL(pdfBlob);
            const link = document.createElement("a");

            link.href = downloadUrl;
            link.download = `resume_${reportId}.pdf`;
            document.body.appendChild(link);
            link.click();
            link.remove();
            window.URL.revokeObjectURL(downloadUrl);
        } catch (error) {
            setResumeMessage(error.response?.data?.message || "Failed to generate resume PDF.");
        } finally {
            setGeneratingResumeId(null);
        }
    };

    return (
        <aside className="h-fit rounded-[14px] border border-[#2a313a] bg-[#14181d]/95 p-4 shadow-[0_22px_70px_rgba(0,0,0,.2)] lg:sticky lg:top-6">
            <div className="mb-4 flex items-center justify-between border-b border-[#2a313a] pb-3">
                <div>
                    <p className="text-[.62rem] font-semibold uppercase tracking-[1.2px] text-[#8c929b]">Your history</p>
                    <h2 className="mt-1 text-sm font-bold text-[#f7f7f8]">Previous Reports</h2>
                </div>
                <span className="rounded-full bg-[#f00059]/10 px-2 py-1 text-[.65rem] font-bold text-[#f00059]">{previousReports.length}</span>
            </div>

            {previousReportsLoading && <p className="py-5 text-center text-xs text-[#8c929b]">Loading reports...</p>}

            {!previousReportsLoading && previousReportsError && (
                <p className="rounded-md border border-[#f00059]/30 bg-[#f00059]/10 p-3 text-xs leading-5 text-[#ff8aad]">{previousReportsError}</p>
            )}

            {!previousReportsLoading && !previousReportsError && !previousReports.length && (
                <div className="rounded-md border border-dashed border-[#3c444e] px-3 py-5 text-center">
                    <p className="text-xs font-semibold text-[#e9ebee]">No reports yet</p>
                    <p className="mt-1 text-[.68rem] leading-4 text-[#8c929b]">Your generated interview plans will appear here.</p>
                </div>
            )}

            {!previousReportsLoading && !previousReportsError && previousReports.length > 0 && (
                <div className="space-y-2">
                    {previousReports.map((report) => (
                        <div
                            key={report._id}
                            className="rounded-lg border border-[#2a313a] bg-[#1b2230] p-3 transition hover:-translate-y-0.5 hover:border-[#f00059]/60 hover:bg-[#202936]"
                        >
                            <div className="flex items-start justify-between gap-2">
                                <button
                                    type="button"
                                    onClick={() => navigate(`/interview/${report._id}`)}
                                    className="flex-1 text-left"
                                >
                                    <span className="line-clamp-2 text-[.76rem] font-semibold leading-4 text-[#e9ebee]">{report.title || "Interview Strategy"}</span>
                                </button>
                                <span className="shrink-0 text-[.7rem] font-bold text-[#49c66c]">{report.matchScore ?? "--"}%</span>
                            </div>
                            <p className="mt-2 text-[.65rem] text-[#8c929b]">{formatReportDate(report.createdAt)}</p>
                            <button
                                type="button"
                                onClick={() => handleGenerateResume(report._id)}
                                disabled={generatingResumeId === report._id}
                                className="mt-3 inline-flex items-center rounded-md bg-[#f00059] px-2.5 py-1.5 text-[.68rem] font-semibold text-white transition hover:bg-[#ff2a78] disabled:cursor-not-allowed disabled:bg-[#6f1230]"
                            >
                                {generatingResumeId === report._id ? "Generating..." : "Generate Resume"}
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {resumeMessage && (
                <p className="mt-3 rounded-md border border-[#f00059]/30 bg-[#f00059]/10 p-2 text-[.68rem] leading-4 text-[#ff8aad]">{resumeMessage}</p>
            )}
        </aside>
    );
};

export default PreviousReportsSidebar;