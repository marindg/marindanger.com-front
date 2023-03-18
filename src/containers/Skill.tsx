import { useSelector } from "react-redux";
import { BallCanvas } from "../components/canvas";
import { SectionWrapper } from "../hoc";
import { ISkill } from "../state/reducer/skillsReducer";

const Skill = () => {
	const skills = useSelector((state: any) => state.skills);

	return (
		<div className="flex flex-row flex-wrap justify-center gap-10">
			{skills.map((skill: ISkill, i: number) => (
				<div className="w-28 h-28" key={i}>
					<BallCanvas icon={skill.imageUrl} />
					<p className="text-center text-secondary font-fira text-[17px] max-w-3xl leading-[30px]">
						{skill.name}
					</p>
				</div>
			))}
		</div>
	);
};

export default SectionWrapper(Skill, "skill");
