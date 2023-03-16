import "./NavlinkStyle.css";
import { navLinkProps } from "../../containers/Navbar";

interface navLinkComponentProps extends React.HTMLAttributes<HTMLDivElement> {
	navLinkProps: navLinkProps;
	activeLink: string;
}
const NavlinkComponent = (props: navLinkComponentProps) => {
	return (
		<div className={`link ${props.className}`}>
			<a
				className={`link-text ${
					props.navLinkProps.text === props.activeLink ? "section-active" : ""
				}`}
				href={`/#${props.navLinkProps.link}`}
			>
				{props.navLinkProps.text}
			</a>
		</div>
	);
};
export default NavlinkComponent;
