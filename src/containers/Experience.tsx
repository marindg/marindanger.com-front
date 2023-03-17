import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { education } from "../assets";

const ExperienceCard = ({ experience }: any) => {
	if (experience.education) {
		return (
			<VerticalTimelineElement
				contentStyle={{
					background: "var(--color-secondary)",
					color: "var(--color-tertiary)",
					boxShadow: "1px 5px 10px 0px rgba(0, 0, 35, 0.7)",
				}}
				contentArrowStyle={{ borderRight: " transparent" }}
				date={experience.date}
				iconStyle={{
					background: "var(--color-tertiary)",
					boxShadow: "0 0 0 2px var(--color-secondary)",
				}}
				icon={
					<div className="flex justify-center items-center w-full h-full">
						<img
							src={education}
							alt={experience.company_name}
							className="w-[80%] h-[80%] object-contain"
						/>
					</div>
				}
			>
				<div>
					<h3 className="text-tertiary text-[24px] font-bold">
						{experience.title}
					</h3>
					<p
						className="text-primary text-[16px] font-semibold"
						style={{ margin: 0 }}
					>
						{experience.company_name}
					</p>
				</div>

				<ul className="mt-5 list-disc ml-5 space-y-2">
					{experience.points.map((point: any, index: number) => (
						<li
							key={`experience-point-${index}`}
							className="text-white-100 text-[14px] pl-1 tracking-wider"
						>
							{point}
						</li>
					))}
				</ul>
			</VerticalTimelineElement>
		);
	} else {
		return (
			<VerticalTimelineElement
				contentStyle={{
					background: "none",
					color: "var(--color-primary)",
					boxShadow: "1px 5px 10px 0px rgba(0, 0, 35, 0.7)",
				}}
				contentArrowStyle={{ borderRight: " transparent" }}
				date={experience.date}
				dateClassName="text-tertiary"
				iconStyle={{
					background: experience.iconBg,
					boxShadow: "0 0 0 2px var(--color-primary)",
				}}
				icon={
					<div className="flex justify-center items-center w-full h-full">
						<img
							src={experience.icon}
							alt={experience.company_name}
							className="w-[80%] h-[80%] object-contain"
						/>
					</div>
				}
			>
				<div>
					<h3 className="text-tertiary text-[24px] font-bold">
						{experience.title}
					</h3>
					<p
						className="text-secondary text-[16px] font-semibold"
						style={{ margin: 0 }}
					>
						{experience.company_name}
					</p>
				</div>

				<ul className="mt-5 list-disc ml-5 space-y-2">
					{experience.points.map((point: any, index: number) => (
						<li
							key={`experience-point-${index}`}
							className="text-[14px] pl-1 tracking-wider"
						>
							{point}
						</li>
					))}
				</ul>
			</VerticalTimelineElement>
		);
	}
};

const Experience = () => {
	return (
		<>
			<motion.div variants={textVariant(0.2)}>
				<p className={styles.sectionSubText}>Mon passé professionnel</p>
				<h2 className={styles.sectionHeadText}>Mes expériences.</h2>
			</motion.div>

			<div className="mt-20 flex flex-col">
				<VerticalTimeline lineColor="var(--color-primary)">
					{experiences.map((experience, index) => (
						<ExperienceCard
							key={`experience-${index}`}
							experience={experience}
						/>
					))}
				</VerticalTimeline>
			</div>
		</>
	);
};

export default SectionWrapper(Experience, "experience");
