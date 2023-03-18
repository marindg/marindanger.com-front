import { Routes } from "../state/routes";

type IMail = {
	firstName: string;
	lastName: string;
	mail: string;
	subject: string;
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
				firstName: mail.firstName,
				lastName: mail.lastName,
				mail: mail.mail,
				subject: mail.subject,
				text: mail.text,
			}),
			mode: "no-cors",
			Host: `${hote}`,
		},
		// mode: "no-cors",
	};

	const request = {
		address: address,
		parameters: parameters,
	};

	return request;
};
