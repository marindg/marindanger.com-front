import { BallCanvas } from "../components/canvas";
import { SectionWrapper } from "../hoc";
import { skills } from "../constants";

const Skill = () => {
	return (
		<div className="flex flex-row flex-wrap justify-center gap-10">
			{skills.map((skill) => (
				<div className="w-28 h-28" key={skill.name}>
					<BallCanvas icon={skill.icon} />
				</div>
			))}
		</div>
	);
};

export default SectionWrapper(Skill, "skill");
