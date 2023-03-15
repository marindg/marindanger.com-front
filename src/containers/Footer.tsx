import { styles } from "../styles";

const Footer = () => {
	const handleClick = () => {
		window.open("https://linkedin.com/in/marin-danger", "_blank");
	};

	return (
		<div
			className={`${styles.paddingX} w-full flex items-center py-5  top-0 z-20 bg-primary`}
		>
			<div className="w-full flex justify-between items-center mx-auto">
				<p className="sm:text-[14px] text-[9px] pr-5 text-center">
					marindanger.com
				</p>
				<p className="sm:text-[14px] text-[9px] pr-5 text-center">
					marindanger.com ©2023 All rights reserved.
				</p>
				<p
					onClick={handleClick}
					className="cursor-pointer sm:text-[14px] text-[9px] text-center"
				>
					Réalisation Marin Danger
				</p>
			</div>
		</div>
	);
};

export default Footer;
