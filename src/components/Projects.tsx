import { projects } from "../data/data";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
	return (
		<section id="Projects" className="max-w-5xl mx-auto py-12">
			<h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
			<div className="grid gap-8 md:grid-cols-2">
				{projects.map((project) => (
					<div
						key={project.id}
						className="bg-base-200 rounded-xl shadow-lg flex flex-col overflow-hidden h-[480px] w-full"
					>
						<div className="w-full h-48 flex-shrink-0">
							<img
								src={project.image}
								alt={project.title}
								className="w-full h-full object-cover object-center"
							/>
						</div>
						<div className="flex-1 flex flex-col p-6">
							<h3 className="text-xl font-semibold mb-2">
								{project.title}
							</h3>
							<p className="mb-3 text-base line-clamp-3 overflow-auto">
								{project.description}
							</p>
							<pre className="mb-3 text-xs bg-base-300 rounded p-2 whitespace-pre-wrap overflow-auto max-h-20">
								{project.technologies || project.technologies}
							</pre>
							<div className="mt-auto flex gap-4">
								<a
									href={
										project.demoLink.startsWith("http")
											? project.demoLink
											: `https://${project.demoLink}`
									}
									target="_blank"
									rel="noopener noreferrer"
									className="btn btn-sm btn-accent flex items-center gap-2"
								>
									<ExternalLink className="w-4 h-4" />
									Demo
								</a>
								<a
									href={project.repoLink.trim()}
									target="_blank"
									rel="noopener noreferrer"
									className="btn btn-sm btn-outline flex items-center gap-2"
								>
									<Github className="w-4 h-4" />
									Code
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
