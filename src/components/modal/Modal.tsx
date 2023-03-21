import "./modalStyle.css";
import { validate, error, information } from "../../assets";

export interface modalProps extends React.HTMLAttributes<HTMLDivElement> {
	open: boolean;
	message: string;
	icon?: "validate" | "error" | undefined;
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

	const ModalOpen = () =>
		props.open ? (
			<div
				className={`${
					props.open ? "opacity-100 scale-100" : "opacity-0 scale-0"
				} transition-all duration-3000 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 fixed z-[1055] bg-tertiary rounded-[20px] shadow-lg w-1/3 min-w-[280px] flex flex-col justify-center items-center py-6 px-5 shadow-cardBlue`}
			>
				<img
					src={icon(props)}
					className="w-[20%] h-[20%] object-contain py-5"
				/>
				<h3 className="font-fira text-primary max-w-[80%]">{props.message}</h3>
			</div>
		) : (
			<></>
		);

	return <ModalOpen />;
};

export default Modal;
