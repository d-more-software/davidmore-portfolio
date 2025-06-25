import { Mail, Download } from "lucide-react";

const About = () => {
	return (
		<div
			id="About"
			className="flex flex-col-reverse md:flex-row md:w-full md:my-32 my-10"
		>
			<div className="flex flex-col md:w-full">
				<h1 className="text-5xl md:text-6xl font-bold text-center mt-4 md:mt-0">
					Hello, I'm <span className="text-accent">David</span>
				</h1>

				<p className="my-4 md:text-2xl text-md text-center">
					I’m a full-stack web developer operating through{" "}
					<strong>D-MORE SOFTWARE LTD</strong>, a UK-based company
					registered in England and Wales. I specialize in React and
					Django. I am available for both full-time (CDI) positions and
					freelance remote projects. Open to collaborating with
					companies worldwide to build modern web applications using
					React and Django.
				</p>

				<p className="md:text-2xl text-md text-center mt-2">
					If you're looking for a reliable technical partner for your
					next project, feel free to reach out or download my CV
					below.
				</p>

				<div className="flex flex-col md:justify-center md:flex-row gap-4 mt-6">
					<a
						href="mailto:dmore.software@gmail.com"
						className="btn w-full md:w-[200px] btn-neutral"
					>
						<Mail className="w-5 h-5" />
						Contact me
					</a>
					<a
						href="/cv.pdf"
						className="btn w-full btn-accent md:w-[200px]"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Download className="w-5 h-5" />
						Download CV
					</a>
				</div>
			</div>
		</div>
	);
};

export default About;
