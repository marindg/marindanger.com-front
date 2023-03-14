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
					{/* <StarsCanvas /> */}
				</div>
				<Footer />
			</div>
		</BrowserRouter>
	);
};

export default Router;
