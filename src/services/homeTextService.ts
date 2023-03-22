import { Routes } from "../state/routes";

export const getHomeTextService = () => {
	const hote = "https://api.marindanger.com";

	// const address: RequestInfo = `${process.env.REACT_APP_URL_API}/projects/findAll`;
	const address: RequestInfo = `${hote}${Routes.GET_HOME_TEXT}`;

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
