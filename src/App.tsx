import Router from "./router/Router";
import { Loader } from "./components";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./state/store";
import { getProjectThunk } from "./state/thunks";
import { useEffect, useState } from "react";

const App = () => {
	const [loadingFetch, setLoadingFetch] = useState(true);

	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		dispatch(getProjectThunk()).then((reponse: any) => {
			if (reponse.meta.requestStatus === "fulfilled") {
				setLoadingFetch(false);
			}
		});

		// eslint-disable-next-line
	}, [dispatch]);

	return loadingFetch ? <Loader /> : <Router />;
};

export default App;
