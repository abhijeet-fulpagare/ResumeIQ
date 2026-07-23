import { getInterviewReport } from "../services/interviewReport.service";
import useInterviewReport from "../hooks/useInterviewReport";
import InterviewQuestions from "../components/InterviewQuestions";
import InterviewReportSidebar from "../components/InterviewReportSidebar";
import InterviewReportSummary from "../components/InterviewReportSummary";
import InterviewRoadmap from "../components/InterviewRoadmap";

const Interview = ({ report = getInterviewReport() }) => {
	const {
		activeSection,
		expandedQuestion,
		selectSection,
		toggleQuestion,
	} = useInterviewReport();

	const questions = activeSection === "behavioral"
		? report.behavioralQuestions
		: report.technicalQuestions;

	return (
		<main className="min-h-screen bg-[radial-gradient(circle_at_50%_-30%,#20232c_0,#0b0d11_43%,#080a0d_100%)] p-1 font-sans text-[#f7f7f8] sm:p-4">
			<div className="mx-auto grid min-h-[calc(100vh-2rem)] w-full max-w-[1500px] grid-cols-1 overflow-hidden border border-[#2a313a] bg-[#14181d]/95 shadow-[0_22px_70px_rgba(0,0,0,.28)] md:grid-cols-[170px_minmax(0,1fr)_185px]">
				<InterviewReportSidebar activeSection={activeSection} onSelect={selectSection} />
				{activeSection === "roadmap" ? (
					<InterviewRoadmap preparationPlan={report.preparationPlan} />
				) : (
					<InterviewQuestions questions={questions} type={activeSection} expandedQuestion={expandedQuestion} onToggle={toggleQuestion} />
				)}
				<InterviewReportSummary score={report.matchScore} skillGaps={report.skillGaps} />
			</div>
		</main>
	);
};

export default Interview;
