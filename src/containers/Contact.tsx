import { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import { CosmonautCanvas } from "../components/canvas";
import { paperPlane, loadingSvg } from "../assets";

import { sendMailService } from "../services";

const Contact = () => {
	const [form, setForm] = useState({
		firstName: "",
		lastName: "",
		mail: "",
		subject: "",
		text: "",
	});

	const [loading, setLoading] = useState(false);

	const handleChange = (e: any) => {
		const { target } = e;
		const { name, value } = target;

		setForm({
			...form,
			[name]: value,
		});
	};

	const handleSubmit = async (e: any) => {
		const request = sendMailService(form);
		try {
			const response = await fetch(request.address, request.parameters);

			return await response.json();
		} catch (e: any) {
			// return rejectWithValue(e);
			console.log(e);
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
							name="firstName"
							value={form.firstName}
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
						className="max-w-[4em] self-end"
						onClick={handleSubmit}
					>
						<div className="bg-primary hover:bg-[var(--grey-light)]  py-2 px-5 rounded-full shadow-card w-fit">
							{loading ? (
								<img
									src={loadingSvg}
									alt="Envoyer"
									className="object-contain w-full h-full object-contain"
								/>
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
