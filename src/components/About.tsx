import { Mail, Download } from "lucide-react";

const About = () => {
	return (
		<div
			id="About"
			className="flex flex-col-reverse md:flex-row md:w-full  md:my-32 my-10"
		>
			<div className="flex flex-col md:w-full ">
				<h1 className="text-5xl md:text-6xl font-bold text-center  mt-4 md:mt-0">
					Hello, I'm <span className="text-accent">David</span>
				</h1>

				<p className="my-4 md:text-2xl text-md text-center ">
					I am a web developer specializing in React and Django.
					Passionate about building modern, efficient, and
					user-friendly web applications. Contact me if you need a
					reliable partner for your next project.
				</p>

				<div className="flex flex-col md:justify-center md:flex-row gap-4 mt-4">
					<a
						href="mailto:dmore.software@gmail.com"
						className=" btn w-full md:w-[200px] btn-neutral "
					>
						<Mail className="w-5 h-5" />
						Contact me
					</a>
					<a
						href="/cv.pdf"
						className=" btn w-full btn-accent md:w-[200px] "
						target="_blank"
						rel="noopener noreferrer"
					>
						<Download className="w-5 h-5 " />
						Download CV
					</a>
				</div>
			</div>
		</div>
	);
};
export default About;
