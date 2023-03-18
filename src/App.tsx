import Router from "./router/Router";
import { Loader } from "./components";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./state/store";
import {
	getProjectThunk,
	getExperienceThunk,
	getSkillThunk,
	getHomeTextThunk,
} from "./state/thunks";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Actions } from "./state/actions";
import { experiences } from "./constants";

const App = () => {
	const [loadingFetch, setLoadingFetch] = useState(true);

	const dispatch = useDispatch<AppDispatch>();

	const { loading } = useSelector(({ loading }: any) => ({
		loading:
			loading[Actions.GET_EXPERIENCES] ||
			loading[Actions.GET_HOME_TEXT] ||
			loading[Actions.GET_PROJECTS] ||
			loading[Actions.GET_SKILLS],
	}));

	useEffect(() => {
		dispatch(getProjectThunk());
		dispatch(getExperienceThunk());
		dispatch(getHomeTextThunk());
		dispatch(getSkillThunk());
		// eslint-disable-next-line
	}, [dispatch]);

	useEffect(() => {
		loading ? setLoadingFetch(true) : setLoadingFetch(false);
		// eslint-disable-next-line
	}, [loading]);

	console.log(loadingFetch);

	return loadingFetch ? <Loader /> : <Router />;
};

export default App;
