import "./loaderStyle.css";
import { ReactComponent as Logo } from "../../assets/logo/logo.svg";

const Loader = () => {
	return (
		<div className="relative w-full h-screen mx-auto overflow-hidden bg-gradient flex justify-center items-center">
			<Logo />
		</div>
	);
};

export default Loader;
