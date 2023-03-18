import { combineReducers } from "@reduxjs/toolkit";

import projects from "./projectsReducer";
import experiences from "./experiencesReducer";
import skills from "./skillsReducer";
import homeText from "./homeTextReducer";
import loading from "./loadingReducer";

const appReducer = combineReducers({
	projects,
	skills,
	homeText,
	experiences,
	loading,
});

const rootReducer = (state: any, action: any) => {
	return appReducer(state, action);
};
export default rootReducer;
