import { BrowserRouter } from "react-router-dom";

import {
	Home,
	About,
	Contact,
	Experience,
	Navbar,
	Project,
	Skill,
	Footer,
} from "../containers";

import { StarsCanvas } from "../components/canvas";

const Router = () => {
	return (
		<BrowserRouter>
			<div className="relative z-0 bg-gradient ">
				<Navbar />
				<Home />
				<About />
				<Skill />
				<Experience />
				<Project />
				<div className="relative z-0">
					<Contact />
					<StarsCanvas />
				</div>
				<Footer />
			</div>
		</BrowserRouter>
	);
};

export default Router;
