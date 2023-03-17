import "./loaderStyle.css";
// import { ReactComponent as Logo } from "../../assets/logo/logo.svg";
import { logo } from "../../assets";

const Loader = () => {
	return (
		<div className="loader screen">
			<img src={logo} alt="Chargement" />
		</div>
	);
};

export default Loader;
