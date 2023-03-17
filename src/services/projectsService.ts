export const getProjectService = () => {
	const hote = "http://api.marindanger.com";

	// const address: RequestInfo = `${process.env.REACT_APP_URL_API}/projects/findAll`;
	const address: RequestInfo = `${hote}/projects/findAll`;

	const parameters: RequestInit = {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			// Host: `${process.env.REACT_APP_URL_API}`,
			Host: `${hote}`,
		},
		mode: "cors",
	};

	const request = {
		address: address,
		parameters: parameters,
	};

	return request;
};
