import { frontSkills, backSkills, toolSkills } from "../data/data";

const sectionStyle = "mb-8";
const titleStyle = "text-xl font-semibold mb-4 text-center";
const gridStyle = "flex flex-wrap justify-center gap-6";

const SkillGrid = ({
	skills,
}: {
	skills: { name: string; image: string }[];
}) => (
	<div className={gridStyle}>
		{skills.map((skill) => (
			<div
				key={skill.name}
				className="flex flex-col items-center bg-base-200 rounded-lg shadow p-4 w-28"
			>
				<img
					src={skill.image}
					alt={skill.name}
					className="w-12 h-12 object-contain mb-2"
				/>
				<span className="text-sm font-medium text-center">
					{skill.name}
				</span>
			</div>
		))}
	</div>
);

export default function Skills() {
	return (
		<div
        id="Skills" 
        className="max-w-4xl mx-auto py-10">
			<h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
			<div className="grid md:grid-cols-3 gap-8">
				<div className={sectionStyle}>
					<h3 className={titleStyle}>Frontend</h3>
					<SkillGrid skills={frontSkills} />
				</div>
				<div className={sectionStyle}>
					<h3 className={titleStyle}>Backend</h3>
					<SkillGrid skills={backSkills} />
				</div>
				<div className={sectionStyle}>
					<h3 className={titleStyle}>Tools</h3>
					<SkillGrid skills={toolSkills} />
				</div>
			</div>
		</div>
	);
}
