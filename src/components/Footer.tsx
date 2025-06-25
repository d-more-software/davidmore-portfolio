import { Mail, Linkedin, Github } from "lucide-react";

const Footer = () => {
	return (
		<footer className="bg-base-200 py-6 mt-10 text-sm text-base-content">
			<div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4 text-center md:text-left">
				<div>
					<p>
						© {new Date().getFullYear()} D-MORE SOFTWARE LTD. All rights reserved.
					</p>
					<p className="mt-1">
						Registered in England and Wales – Company No.   16539177
					</p>
					<p className="mt-1">
						Registered office: 71-75 Shelton Street, London WC2H 9JQ, UK
					</p>
				</div>
				<div className="flex gap-6 items-center">
					<a
						href="https://www.linkedin.com/in/david-more-soft/"
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
