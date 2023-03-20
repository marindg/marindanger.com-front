import { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import { CosmonautCanvas } from "../components/canvas";
import { paperPlane } from "../assets";

import { sendMailService } from "../services";
import { LoaderSend, Modal } from "../components";

const Contact = () => {
	const [form, setForm] = useState({
		name: "name from front",
		mail: "mail@gmail.com",
		text: "text from front",
	});

	const [loading, setLoading] = useState(false);
	const [openModal, setOpenModal] = useState(true);

	const handleChange = (e: any) => {
		const { target } = e;
		const { name, value } = target;

		setForm({
			...form,
			[name]: value,
		});
	};

	const handleSubmit = async () => {
		setLoading(true);
		const request = sendMailService(form);
		// console.log(request);
		try {
			const response = await fetch(request.address, request.parameters).then(
				() => setLoading(false)
			);

			// return await response.json();
		} catch (e: any) {
			console.log(e);
			setLoading(false);
		}
	};

	return (
		<div
			className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
		>
			<motion.div
				variants={slideIn("left", "tween", 0.2, 1)}
				className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
			>
				<p className={styles.sectionSubText}>Restons connecté</p>
				<h3 className={styles.sectionHeadText}>Me contacter.</h3>

				<form className="mt-12 flex flex-col gap-8">
					<label className="flex flex-col">
						<input
							type="text"
							name="name"
							value={form.name}
							onChange={handleChange}
							placeholder="Prénom"
							className="bg-primary py-4 px-6 placeholder:text-tertiary text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>

					<label className="flex flex-col">
						<input
							type="email"
							name="mail"
							value={form.mail}
							onChange={handleChange}
							placeholder="Email"
							className="bg-primary py-4 px-6 placeholder:text-tertiary text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>
					<label className="flex flex-col">
						<textarea
							rows={7}
							name="text"
							value={form.text}
							onChange={handleChange}
							placeholder="Message"
							className="bg-primary py-4 px-6 placeholder:text-tertiary text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>
					<div
						// type="submit"
						className="max-w-[4em] self-end "
						onClick={() => handleSubmit()}
					>
						<div className="bg-primary hover:bg-[var(--grey-light)]  py-2 px-5 rounded-full shadow-card w-fit h-[2.7em]">
							{loading ? (
								<LoaderSend />
							) : (
								<img
									src={paperPlane}
									alt="Envoyer"
									className="object-contain w-full h-full object-contain"
								/>
							)}
						</div>
					</div>
				</form>
			</motion.div>

			<Modal
				open={openModal}
				message="le message a bien été envoyé. Je vous recontacterai dans les plus brefs délais."
				icon="error"
			/>
			<motion.div
				variants={slideIn("right", "tween", 0.2, 0.85)}
				className="xl:flex-1"
			>
				<CosmonautCanvas />
			</motion.div>
		</div>
	);
};

export default SectionWrapper(Contact, "contact");
