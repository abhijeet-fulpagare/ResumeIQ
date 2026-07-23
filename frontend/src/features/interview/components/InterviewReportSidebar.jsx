const navItems = [
    { id: "technical", label: "Technical Questions", icon: "<>" },
    { id: "behavioral", label: "Behavioral Questions", icon: "□" },
    { id: "roadmap", label: "Road Map", icon: "➤" },
];

const InterviewReportSidebar = ({ activeSection, onSelect }) => (
    <aside className="border-b border-[#2a313a] bg-[#12171d] p-4 md:border-b-0 md:border-r md:p-5">
        <p className="mb-3 px-2 text-[.62rem] font-semibold uppercase tracking-[1.2px] text-[#8c929b]">Sections</p>
        <nav className="space-y-1">
            {navItems.map((item) => (
                <button
                    key={item.id}
                    type="button"
                    onClick={() => onSelect(item.id)}
                    className={`flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-left text-[.74rem] transition ${activeSection === item.id ? "bg-[#f00059]/10 font-semibold text-[#f00059]" : "text-[#8c929b] hover:bg-[#1d222a] hover:text-[#e9ebee]"}`}
                >
                    <span className="w-3 text-center text-[.72rem] text-current">{item.icon}</span>
                    {item.label}
                </button>
            ))}
        </nav>
    </aside>
);

export default InterviewReportSidebar;