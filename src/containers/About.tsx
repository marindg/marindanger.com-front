import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { profile } from "../assets";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }: any) => (
	<Tilt className="xl:w-1/4 w-full max-w-xs rounded-[20px] ">
		<motion.div
			variants={fadeIn("right", "spring", index * 0.75, 0.9)}
			className="w-full p-[1px] rounded-[20px] shadow-cardLight "
		>
			<div className="rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
				<img
					src={icon}
					alt={title}
					className="w-16 h-16 object-contain filterImgPrimary"
				/>

				<h3 className="text-primary text-[20px] font-fira font-bold text-center">
					{title}
				</h3>
			</div>
		</motion.div>
	</Tilt>
);

const About = () => {
	return (
		<>
			<motion.div variants={textVariant(0.2)}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>A propos.</h2>
			</motion.div>

			<div className="flex xl:flex-row flex-col">
				<motion.p
					variants={fadeIn("left", "", 0.1, 0.2)}
					className="mt-4 text-secondary text-[17px] xl:max-w-screen-md leading-8"
				>
					Bonjour, je m'appelle Marin et suis développeur web français. Ce que
					j'aime faire est de créer des choses, particulièrement des outils et
					sites internet. Après des études à la Sorbonne, j'ai intégré un
					cabinet d'audit avant de travailler dans des directions financières.
					J'étais tellement absorbé par Excel que j'ai créé mes premières macros
					et appris le langage Visual Basic. Aujourd'hui, après avoir approfondi
					mes compétences et appris de nouveaux langages, j'ai décidé de changer
					de métier afin de vivre de ma passion qu'est le code.
				</motion.p>
				<motion.div
					variants={fadeIn("right", "", 0.1, 0.2)}
					className="mt-4 w-full flex justify-center"
				>
					<Tilt className="xs:w-[250px] rounded-[20px] max-w-sm w-full bg-[rgba(255,255,255,0.5)]">
						<motion.div
							variants={fadeIn("right", "spring", 0.2, 2)}
							className="w-full blue p-[1px] rounded-[20px] shadow-card"
						>
							<img
								src={profile}
								alt="Marin DANGER"
								className="rounded-[20px]"
							/>
						</motion.div>
					</Tilt>
				</motion.div>
			</div>

			<div className="mt-20 flex flex-wrap justify-center gap-7">
				{services.map((service, index) => {
					return (
						<ServiceCard
							key={service.text}
							index={index}
							title={service.text}
							icon={service.icon}
						/>
					);
				})}
			</div>
		</>
	);
};

export default SectionWrapper(About, "about");
