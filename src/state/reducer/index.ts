import { combineReducers } from "@reduxjs/toolkit";

import projectsReducer from "../reducer/projectsReducer";

const appReducer = combineReducers({
	projectsReducer,
});

const rootReducer = (state: any, action: any) => {
	return appReducer(state, action);
};
export default rootReducer;
