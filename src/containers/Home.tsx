import { motion } from "framer-motion";
import { styles } from "../styles";
import { Texthover } from "../components";
import { homeSubText } from "../constants";
import React from "react";

const SubText: React.FC = () => {
	homeSubText.split("").forEach((letter: String, index: number) => {
		return (
			<React.Fragment>
				<span
					className="loader_letter animate-[flash_10s_linear_infinite]"
					key={index}
					style={{ animationDelay: `0.${index}s` }}
				>
					{letter}
				</span>
			</React.Fragment>
		);
	});

	// for (let i = 0; i < homeSubText.length; i++) {
	// 	console.log(homeSubText.length);
	// 	return (
	// 		<React.Fragment>
	// 			<span
	// 				className="loader_letter animate-[flash_10s_linear_infinite]"
	// 				key={i}
	// 				style={{ animationDelay: `0.${i}s` }}
	// 			>
	// 				{homeSubText[i]}
	// 			</span>
	// 		</React.Fragment>
	// 	);
	// }
};

const Home = () => {
	const handleClick = (link: string) => {
		window.open(link, "_blank");
	};

	const homeSubTextWord = homeSubText.trim().split(" ");

	// const getSpan = (word: string) => {
	// 	const letters = word.split("");

	// 	return letters.map((letter: string, index: number) => {
	// 		return (
	// 			<span
	// 				className="loader_letter animate-[flash_10s_linear_infinite]"
	// 				key={index}
	// 				style={{ animationDelay: `0.${index}s` }}
	// 			>
	// 				{letter}
	// 			</span>
	// 		);
	// 	});
	// };

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
						Bonjour, je suis{" "}
						<span
							className="cursor-pointer"
							onClick={() =>
								handleClick(
									"https://fr.wikipedia.org/wiki/Marin_%28profession%29#"
								)
							}
						>
							<span className="text-bluedark">M</span>
							<span className="text-bluedark">a</span>
							<span className="text-bluedark">r</span>
							<span className="text-[red] before:content-['ı'] before:absolute before:text-tertiary">
								i
							</span>
							<span className="text-bluedark">n</span>
						</span>
						.
					</h1>
					<p
						className={`${styles.homeSubText} mt-2 text-tertiary cursor-pointer`}
						onClick={() =>
							handleClick(
								"https://www.w3schools.com/whatis/whatis_fullstack.asp"
							)
						}
					>
						{homeSubText
							.trim()
							.split("")
							.map((letter: string, index: number) => {
								console.log(index);
								return (
									<span
										className="loader_letter"
										key={index}
										style={{
											animationDelay: `${index / 10}s`,
											animationName: "flash",
											animationDuration: "6s",
											animationIterationCount: "infinite",
											color: "transparent",
										}}
									>
										{letter}
										&nbsp;
									</span>
								);
							})}
					</p>
				</div>
			</div>

			<div>
				<Texthover
					text="Actuellement disponible pour travailler !"
					className="jobdispo font-fira sm:text-4xl text-2xl absolute sm:top-1/4 top-1/2 sm:right-40 right-20 sm:w-[25%] w-[60%] rotate-[25deg]"
				/>
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
