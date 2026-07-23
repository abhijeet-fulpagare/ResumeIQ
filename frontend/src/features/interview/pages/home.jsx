import InterviewPlanForm from "../components/InterviewPlanForm";
import PreviousReportsSidebar from "../components/PreviousReportsSidebar";

const Home = () => {
	return (
		<main className="min-h-screen bg-[radial-gradient(circle_at_50%_-30%,#20232c_0,#0b0d11_43%,#080a0d_100%)] px-3.5 py-9 font-sans text-[#f7f7f8] sm:px-6 sm:py-14 lg:py-[55px]">
			<div className="mx-auto w-full max-w-[1320px]">
				<header className="mb-7 text-center sm:mb-10 lg:ml-[280px]">
					<h1 className="font-['Manrope'] text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-[1.12] tracking-[-1.5px]">Create Your Custom <span className="bg-gradient-to-r from-[#f00059] to-[#c276e8] bg-clip-text text-transparent">Interview Plan</span></h1>
					<p className="mt-3.5 text-base leading-6 text-[#8c929b]">Let our AI analyze the job requirements and your unique profile to build a<br className="hidden sm:inline" /> winning strategy.</p>
				</header>
				<section className="mb-6 rounded-[18px] border border-[#2a313a] bg-[#14181d]/90 px-4 py-4 shadow-[0_22px_70px_rgba(0,0,0,.2)] lg:ml-[280px]">
					<div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
						<div>
							<p className="text-[.62rem] font-semibold uppercase tracking-[1.2px] text-[#8c929b]">Generate Resume</p>
							<h2 className="mt-1 text-sm font-bold text-[#f7f7f8]">Convert any saved interview report into an ATS-friendly resume PDF.</h2>
						</div>
						<span className="w-fit rounded-full bg-[#f00059]/10 px-2.5 py-1 text-[.65rem] font-bold text-[#f00059]">AI Resume PDF</span>
					</div>
				</section>
				<div className="grid items-start gap-6 lg:grid-cols-[250px_minmax(0,1fr)]">
					<PreviousReportsSidebar />
					<InterviewPlanForm />
				</div>
			</div>
		</main>
	);
};

export default Home;
