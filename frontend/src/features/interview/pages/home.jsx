import InterviewPlanForm from "../components/InterviewPlanForm";

const Home = () => {
	return (
		<main className="min-h-screen bg-[radial-gradient(circle_at_50%_-30%,#20232c_0,#0b0d11_43%,#080a0d_100%)] px-3.5 py-9 font-sans text-[#f7f7f8] sm:px-6 sm:py-14 lg:py-[55px]">
			<div className="mx-auto w-full max-w-[1110px]">
				<header className="mb-7 text-center sm:mb-10">
					<h1 className="font-['Manrope'] text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-[1.12] tracking-[-1.5px]">Create Your Custom <span className="bg-gradient-to-r from-[#f00059] to-[#c276e8] bg-clip-text text-transparent">Interview Plan</span></h1>
					<p className="mt-3.5 text-base leading-6 text-[#8c929b]">Let our AI analyze the job requirements and your unique profile to build a<br className="hidden sm:inline" /> winning strategy.</p>
				</header>
				<InterviewPlanForm />
			</div>
		</main>
	);
};

export default Home;
