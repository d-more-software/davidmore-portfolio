import { Mail, Linkedin, Github } from "lucide-react";


const Footer = () => {
	return (
		<footer className="bg-base-200 py-6 mt-10">
			<div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
				<div className="text-sm text-base-content text-center md:text-left">
					© {new Date().getFullYear()} David More. All rights
					reserved.
				</div>
				<div className="flex gap-6 items-center">
					<a
						href="https://www.linkedin.com/in/david-more/"
						target="_blank"
						rel="noopener noreferrer"
						className="btn btn-ghost btn-circle"
						aria-label="LinkedIn"
					>
						<Linkedin className="w-5 h-5" />
					</a>
					<a
						href="https://github.com/d-more-software"
						target="_blank"
						rel="noopener noreferrer"
						className="btn btn-ghost btn-circle"
						aria-label="GitHub"
					>
						<Github className="w-5 h-5" />
					</a>
					<a
						href="mailto:dmore.software@gmail.com"
						className="btn btn-ghost btn-circle"
						aria-label="Email"
					>
						<Mail className="w-5 h-5" />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
