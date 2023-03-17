import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = (props: any, index: number) => {
	return (
		<motion.div variants={fadeIn("left", "smooth", index * 5, 0.75)}>
			<div className="bg-[var(--grey-light)] shadow-cardProject p-5 rounded-2xl sm:w-[360px] w-full max-w-xs min-h-max">
				<div className="relative w-full h-[150px]">
					<img
						src={props.image}
						alt={`project_image_${props.name}`}
						className="w-full h-full object-contain"
					/>

					{/* <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
						<div
							onClick={() => window.open("https://google.fr", "_blank")}
							className=" w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
						>
							<img
								src={github}
								alt="source code"
								className="w-1/2 h-1/2 object-contain"
							/>
						</div>
					</div> */}
				</div>

				<div className="mt-5">
					<h2 className="text-tertiary font-bold text-[25px]">{props.name}</h2>
					<p className="mt-2 text-secondary text-[14px] leading-6">
						{props.longDescription}
					</p>
				</div>

				<div className="mt-4 flex flex-wrap gap-2">
					{props.technologies.map((el: string, i: number) => (
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

			<div className="mt-20 flex flex-wrap gap-7">
				{projects.map((project, index) => (
					<ProjectCard key={`project-${index}`} index={index} {...project} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Projects, "project");
