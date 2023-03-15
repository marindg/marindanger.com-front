import { motion } from "framer-motion";
import { styles } from "../styles";

const Home = () => {
	return (
		<section id="home" className="relative w-full h-screen mx-auto">
			<div
				className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}
			>
				<div className="flex flex-col justify-center items-center mt-5">
					<div className="w-5 h-5 rounded-full bg-bluedark" />
					<div className="w-1 sm:h-80 h-40 blue-gradient-down" />
				</div>
				<div>
					<h1 className={`${styles.homeHeadText} text-tertiary`}>
						Bonjour je suis <span className="text-secondary">Marin</span>
					</h1>
					<p className={`${styles.homeSubText} mt-2 text-tertiary`}>
						Developpeur fullstack.
					</p>
				</div>
			</div>

			<div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
				<a href="#about">
					<div className="w-[35px] h-[64px] rounded-3xl border-4 border-bluedark flex justify-conter items-start p-2">
						<motion.div
							animate={{ y: [0, 24, 0] }}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								repeatType: "loop",
							}}
							className="w-3 h-3 rounded-full bg-secondary mb-1"
						/>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Home;
