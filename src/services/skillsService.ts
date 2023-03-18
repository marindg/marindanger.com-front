import { Routes } from "../state/routes";

export const getSkillService = () => {
	const hote = "http://api.marindanger.com";

	// console.log(process.env.REACT_APP_URL_API);
	// const address: RequestInfo = `${process.env.REACT_APP_URL_API}/projects/findAll`;
	const address: RequestInfo = `${hote}${Routes.GET_SKILLS}`;

	const parameters: RequestInit = {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			// Host: `${process.env.REACT_APP_URL_API}`,
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
