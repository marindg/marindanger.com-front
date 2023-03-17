import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import logo from "../assets/logo/logo.svg";
import { Burger, Resume, Navlink } from "../components";

import { useOnClickOutside, useScrollspy } from "../assets";

export type navLinkProps = {
	id: number;
	text: string;
	link: string;
};

const navLinks: navLinkProps[] = [
	// { id: 1, text: "Accueil", link: "home" },
	{ id: 2, text: "A propos", link: "about" },
	{ id: 3, text: "Experiences", link: "experience" },
	{ id: 4, text: "Projets", link: "project" },
	{ id: 5, text: "Me contacter", link: "contact" },
];

const Navbar = () => {
	const [active, setActive] = useState("");
	const [toggle, setToggle] = useState(false);

	const activeNavbar = useRef() as React.MutableRefObject<HTMLInputElement>;
	useOnClickOutside(activeNavbar, () => setToggle(false));

	const activeSection = useScrollspy(
		navLinks.map((el) => el.link),
		100
	);

	useEffect(() => {
		if (activeSection) {
			setActive(activeSection);
		}
	}, [activeSection]);

	return (
		<nav
			className={`${styles.paddingX} w-screen flex items-center py-1 fixed top-0 z-20 bg-greylight shadow-nav`}
		>
			<div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
				<Link
					to="/"
					className="flex items-center gap-4"
					onClick={() => {
						setActive("");
						window.scrollTo(0, 0);
					}}
				>
					<img src={logo} alt="logo" className="w-20 h-full object-contain" />
				</Link>
				<ul className="list-none hidden md:flex flex-row gap-4 justify-center items-center">
					{navLinks.map((link: navLinkProps, i: number) => {
						return (
							<li
								key={i}
								className={`${
									active === link.link ? "text-tertiary" : "text-secondary"
								} text-[18px] font-medium cursor-pointer`}
								onClick={() => setActive(link.link)}
							>
								<Navlink
									navLinkProps={link}
									activeLink={active}
									className="font-fira"
								/>
							</li>
						);
					})}
					<Resume className="font-fira" />
				</ul>

				<div
					ref={activeNavbar}
					className="md:hidden flex flex-1 justify-end items-center"
				>
					<Burger open={toggle} onClick={() => setToggle(!toggle)} />

					<div
						className={`${
							!toggle ? "hidden" : "flex"
						}  p-6 justify-start items-center bg-greylight shadow-navMobile absolute top-0 right-0 mx-0 my-0 min-w-[200px] max-w-[250px] h-screen z-10 `}
					>
						<ul className="list-none flex justify-end items-start flex-col gap-4">
							{navLinks.map((link: navLinkProps, i: number) => {
								return (
									<li
										key={i}
										className={`${
											active === link.link ? "text-tertiary" : "text-secondary"
										}  font-medium cursor-pointer text-[20px]`}
										onClick={() => {
											setToggle(!toggle);
											setActive(link.link);
										}}
									>
										<Navlink
											navLinkProps={link}
											activeLink={active}
											className="font-fira"
										/>
									</li>
								);
							})}
							<Resume className="mt-10 font-fira" />
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
