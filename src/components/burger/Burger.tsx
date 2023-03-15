import "./burgerStyle.css";

interface burgerProps extends React.HTMLAttributes<HTMLDivElement> {
	open: boolean;
}

const BurgerComponent = (props: burgerProps) => {
	return (
		<div {...props} id="burger_parent" className={props.open ? "open" : ""}>
			<span />
			<span />
			<span />
		</div>
	);
};
export default BurgerComponent;
