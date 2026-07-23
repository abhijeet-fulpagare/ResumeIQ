const ChevronIcon = ({ open }) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}>
        <path d="m6 9 6 6 6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
    </svg>
);

const InterviewQuestions = ({ questions, type, expandedQuestion, onToggle }) => {
    const title = type === "technical" ? "Technical Questions" : "Behavioral Questions";

    return (
        <section className="min-w-0 p-5 sm:p-7 md:p-8">
            <div className="mb-5 flex items-center gap-3 border-b border-[#2a313a] pb-4">
                <h1 className="text-base font-bold text-[#f7f7f8] sm:text-lg">{title}</h1>
                <span className="rounded-full border border-[#2a313a] bg-[#1d222a] px-2.5 py-1 text-[.65rem] text-[#8c929b]">{questions.length} questions</span>
            </div>
            <div className="space-y-2">
                {questions.map((item, index) => {
                    const isOpen = expandedQuestion === index;
                    return (
                        <article key={item.question} className="overflow-hidden rounded-lg border border-[#2a313a] bg-[#1b2230] transition hover:border-[#3c444e]">
                            <button type="button" onClick={() => onToggle(index)} className="flex min-h-14 w-full items-center gap-3 px-3 py-3 text-left sm:px-4">
                                <span className="shrink-0 rounded bg-[#f00059]/10 px-2 py-1 text-[.62rem] font-bold text-[#f00059]">Q{String(index + 1).padStart(2, "0")}</span>
                                <span className="min-w-0 flex-1 text-[.76rem] font-semibold leading-5 text-[#e9ebee] sm:text-[.8rem]">{item.question}</span>
                                <span className="shrink-0 text-[#8c929b]"><ChevronIcon open={isOpen} /></span>
                            </button>
                            {isOpen && (
                                <div className="border-t border-[#2a313a] px-4 pb-4 pt-3 text-[.74rem] leading-5 text-[#aeb3bb]">
                                    <p><span className="font-semibold text-[#f00059]">Intention:</span> {item.intention}</p>
                                    <p className="mt-2"><span className="font-semibold text-[#c276e8]">Suggested answer:</span> {item.answer}</p>
                                </div>
                            )}
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default InterviewQuestions;