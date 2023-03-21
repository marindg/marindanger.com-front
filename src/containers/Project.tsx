import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { IProject } from "../state/reducer/projectsReducer";

interface IProjectCardProps extends IProject {
	index: number;
}

const ProjectCard = ({ index, ...project }: IProjectCardProps) => {
	return (
		<motion.div variants={fadeIn("left", "smooth", index * 0.9, 0.75)}>
			<div className="bg-[var(--grey-light)] shadow-cardProject p-5 rounded-2xl sm:w-[360px] w-full max-w-xs min-h-max">
				<div className="relative w-full h-[150px]">
					<img
						src={project.imageUrl}
						alt={`project_image_${project.name}`}
						className="w-full h-full object-contain"
					/>
				</div>

				<div className="mt-5">
					<h2 className="text-tertiary font-bold text-[25px]">
						{project.name}
					</h2>
					<p className="mt-2 text-secondary text-[14px] leading-6">
						{project.longDescription}
					</p>
				</div>

				<div className="mt-4 flex flex-wrap gap-2">
					{project.technologies.map((el: string, i: number) => (
						<p
							key={i}
							className={`font-fira text-[12px] text-tertiary rounded-[20px] px-1 py-1 shadow-cardLight `}
						>
							#{el}
						</p>
					))}
				</div>
			</div>
		</motion.div>
	);
};

const Projects = () => {
	const projects = useSelector((state: any) => state.projects);

	return (
		<>
			<motion.div variants={textVariant(0.2)}>
				<p className={styles.sectionSubText}>Mon travail</p>
				<h2 className={styles.sectionHeadText}>Mes projets.</h2>
			</motion.div>
			<div className="flex xl:flex-row flex-col">
				<motion.p
					variants={fadeIn("left", "", 0.1, 0.2)}
					className="mt-4 text-secondary text-[17px] xl:max-w-screen-md leading-8"
				>
					Les projets suivants ont été réalisés durant ma formation de
					développeur, mes experiences professionnelles ou mon temps libre.
				</motion.p>
			</div>

			<div className="mt-20 flex flex-wrap xl:items-center justify-center gap-7">
				{projects.map((project: IProject, index: number) => (
					<ProjectCard key={`project-${index}`} {...project} index={index} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Projects, "project");
