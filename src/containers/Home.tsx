import { motion } from "framer-motion";
import { styles } from "../styles";
import { Texthover } from "../components";
import { homeSubText } from "../constants";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Home = () => {
	const [isScrollVisible, setIsScrollVisible] = useState(true);

	const homeTextFetched = useSelector((state: any) => state.homeText);

	const homeText: string = homeTextFetched[0].text;

	const handleClick = (link: string) => {
		window.open(link, "_blank");
	};

	useEffect(() => {
		setTimeout(() => {
			setIsScrollVisible(false);
		}, 5000);
	}, []);

	const onOverSection = () => {
		setIsScrollVisible(true);
		setTimeout(() => {
			setIsScrollVisible(false);
		}, 5000);
	};

	return (
		<section
			id="home"
			className="relative w-full h-screen mx-auto overflow-hidden"
		>
			<div
				className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}
				onMouseOver={() => onOverSection()}
			>
				<div className="flex flex-col justify-center items-center mt-5">
					<div className="w-5 h-5 rounded-full bg-bluedark" />
					<div className="w-1 sm:h-80 h-40 blue-gradient-down" />
				</div>
				<div>
					<h1
						className={`${styles.homeHeadText} text-tertiary font-bold font-calibre`}
					>
						Bienvenue, je suis&nbsp;
						<span
							className="cursor-pointer whitespace-nowrap"
							onClick={() => handleClick("https://marindanger.com")}
						>
							<span className="text-secondary">M</span>
							<span className="text-secondary">a</span>
							<span className="text-secondary">r</span>
							<span className="text-[red] before:content-['ı'] before:absolute before:text-tertiary">
								i
							</span>
							<span className="text-secondary">n</span>
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

				<Texthover
					text={homeText}
					className="jobdispo font-fira sm:text-4xl text-2xl absolute rotate-[25deg] top-1/2 w-2/3 max-w-sm left-1/4 "
				/>
			</div>

			{isScrollVisible ? (
				<div className="absolute bottom-10 w-full flex justify-center items-center">
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
			) : (
				<></>
			)}
		</section>
	);
};

export default Home;
