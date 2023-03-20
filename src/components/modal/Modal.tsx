import "./modalStyle.css";
import { validate, error, information } from "../../assets";

interface modalProps extends React.HTMLAttributes<HTMLDivElement> {
	open: boolean;
	message: string;
	icon?: "validate" | "error";
}

const Modal = (props: modalProps) => {
	const icon = (props: modalProps) => {
		switch (props.icon) {
			case "validate":
				return validate;
			case "error":
				return error;
			default:
				return information;
		}
	};

	console.log(icon);

	return (
		<div className="absolute left-1/3  bg-white rounded shadow-lg w-1/3 ">
			<img
				src={icon(props)}
				className="w-[30%] h-[30%] object-contain color-[blue]"
			/>
			<h3>{props.message}</h3>
		</div>
	);
};

export default Modal;
