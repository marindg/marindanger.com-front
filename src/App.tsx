import Router from "./router/Router";

import { useDispatch } from "react-redux";
import { AppDispatch } from "./state/store";
import { getProjectThunk } from "./state/thunks";
import { useEffect, useState } from "react";

const App = () => {
	const [loadingFetch, setLoadingFetch] = useState(true);

	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(getProjectThunk());

		// eslint-disable-next-line
	}, [dispatch]);

	


	return <Router />;
};

export default App;
