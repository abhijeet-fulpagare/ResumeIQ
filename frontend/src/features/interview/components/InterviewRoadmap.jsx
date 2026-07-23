const InterviewRoadmap = ({ preparationPlan = [] }) => (
    <section className="min-w-0 p-5 sm:p-7 md:p-8">
        <div className="mb-5 border-b border-[#2a313a] pb-4">
            <h1 className="text-base font-bold text-[#f7f7f8] sm:text-lg">Preparation Road Map</h1>
            <p className="mt-1 text-[.74rem] text-[#8c929b]">A focused plan to close your skill gaps before the interview.</p>
        </div>
        <div className="relative space-y-3 before:absolute before:bottom-5 before:left-[17px] before:top-5 before:w-px before:bg-[#2a313a] sm:space-y-4">
            {preparationPlan.map((plan) => (
                <article key={plan.day} className="relative flex gap-3 sm:gap-4">
                    <div className="z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#f00059]/40 bg-[#1d222a] text-[.68rem] font-bold text-[#f00059]">
                        {String(plan.day).padStart(2, "0")}
                    </div>
                    <div className="min-w-0 flex-1 rounded-lg border border-[#2a313a] bg-[#1b2230] p-4 transition hover:border-[#3c444e]">
                        <p className="text-[.62rem] font-semibold uppercase tracking-[1px] text-[#f00059]">Day {plan.day}</p>
                        <h2 className="mt-1 text-[.82rem] font-bold leading-5 text-[#e9ebee] sm:text-[.88rem]">{plan.focus}</h2>
                        <ul className="mt-3 space-y-2">
                            {plan.tasks.map((task) => (
                                <li key={task} className="flex gap-2 text-[.72rem] leading-5 text-[#aeb3bb]">
                                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#c276e8]" />
                                    <span>{task}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </article>
            ))}
            {!preparationPlan.length && <p className="pl-12 text-sm text-[#8c929b]">No preparation plan is available yet.</p>}
        </div>
    </section>
);

export default InterviewRoadmap;