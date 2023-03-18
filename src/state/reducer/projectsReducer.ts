import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getProjectThunk } from "../thunks/projectsThunk";

export interface IProject {
	_id: string;
	name: string;
	shortDescription?: string | undefined;
	longDescription: string;
	imageUrl: string;
	date?: string | undefined;
	technologies: string[];
}

export interface IProjects {
	projects: IProject[] | undefined;
}

export const initialState = {
	projects: undefined,
};

const projectsSlice = createSlice({
	name: "projects",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(
			getProjectThunk.fulfilled,
			(state, { payload }: PayloadAction<any>) => {
				state.projects = payload.result;
			}
		);
	},
});

// eslint-disable-next-line no-empty-pattern
export const {} = projectsSlice.actions;

export default projectsSlice.reducer;
