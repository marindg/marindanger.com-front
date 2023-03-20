import { Routes } from "../state/routes";

type IMail = {
	name: string;
	mail: string;
	text: string;
};

export const sendMailService = (mail: IMail) => {
	const hote = "http://api.marindanger.com";

	const address: RequestInfo = `${hote}${Routes.SEND_MAIL}`;

	const parameters: RequestInit = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			body: JSON.stringify({
				name: mail.name,
				mail: mail.mail,
				text: mail.text,
			}),
			// origin: "*",
			Host: `${hote}`,
		},
		mode: "no-cors",
		// mode: "no-cors",
	};

	const request = {
		address: address,
		parameters: parameters,
	};

	return request;
};
