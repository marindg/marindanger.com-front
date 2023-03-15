import { BallCanvas } from "../components/canvas";
import { SectionWrapper } from "../hoc";
import { skills } from "../constants";

const Skill = () => {
	return (
		<div className="flex flex-row flex-wrap justify-center gap-10">
			{skills.map((skill, i) => (
				<div className="w-28 h-28" key={i}>
					<BallCanvas icon={skill.icon} />
					<p className="text-center text-secondary font-fira text-[17px] max-w-3xl leading-[30px]">
						{skill.name}
					</p>
				</div>
			))}
		</div>
	);
};

export default SectionWrapper(Skill, "skill");
