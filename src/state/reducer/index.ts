import { combineReducers } from "@reduxjs/toolkit";

import projects from "../reducer/projectsReducer";
import experiences from "../reducer/experiencesReducer";
import skills from "../reducer/skillsReducer";
import homeText from "../reducer/homeTextReducer";

const appReducer = combineReducers({
	projects,
	skills,
	homeText,
	experiences,
});

const rootReducer = (state: any, action: any) => {
	return appReducer(state, action);
};
export default rootReducer;
