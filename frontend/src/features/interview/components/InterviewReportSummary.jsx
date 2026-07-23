const severityStyles = {
    high: "border-[#f00059]/20 bg-[#f00059]/10 text-[#ff6a98]",
    medium: "border-[#b47728]/30 bg-[#8b5a1c]/20 text-[#f1ad37]",
    low: "border-[#2d7c55]/30 bg-[#16442f]/40 text-[#58ce8a]",
};

const InterviewReportSummary = ({ score, skillGaps }) => (
    <aside className="border-t border-[#2a313a] bg-[#12171d] p-5 md:border-l md:border-t-0">
        <p className="text-[.62rem] font-semibold uppercase tracking-[1.2px] text-[#8c929b]">Match Score</p>
        <div className="mx-auto mt-2 flex h-[92px] w-[92px] items-center justify-center rounded-full border-[3px] border-[#49c66c] text-center shadow-[0_0_0_5px_rgba(73,198,108,.06)]">
            <div><strong className="block text-2xl leading-6 text-[#e9ebee]">{score}</strong><span className="text-[.6rem] text-[#8c929b]">%</span></div>
        </div>
        <p className="mt-4 text-center text-[.68rem] text-[#49c66c]">Strong match for this role</p>
        <div className="my-4 border-t border-[#2a313a]" />
        <p className="mb-3 text-[.62rem] font-semibold uppercase tracking-[1.2px] text-[#8c929b]">Skill Gaps</p>
        <div className="space-y-2">
            {skillGaps.map((gap) => (
                <div key={gap.skill} className={`rounded-md border px-2 py-1.5 text-[.65rem] leading-4 ${severityStyles[gap.severity] || severityStyles.medium}`}>
                    {gap.skill}
                </div>
            ))}
        </div>
    </aside>
);

export default InterviewReportSummary;