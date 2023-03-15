import "./NavlinkStyle.css";
import { navLinkProps } from "../../containers/Navbar";

type navLinkComponentProps = {
	navLinkProps: navLinkProps;
	activeLink: string;
};

const NavlinkComponent = (props: navLinkComponentProps) => {
	return (
		<div className="link">
			<span
				className={`link-text ${
					props.navLinkProps.text === props.activeLink ? "section-active" : ""
				}`}
			>
				{props.navLinkProps.text}
			</span>
		</div>
	);
};
export default NavlinkComponent;
