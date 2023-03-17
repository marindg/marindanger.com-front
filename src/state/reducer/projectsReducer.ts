import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getProjectThunk } from "../thunks/projectsThunk";

export interface IProject {
	_id: string | null;
	name: string | null;
	shortDescription: string | null;
	longDescription: string | null;
	image: string | null;
	color: string[] | null;
	order: number | null;
	startDate: Date | null;
	endDate: Date | null;
	client: IClient | null;
	technologies: string[] | null;
	visible: boolean | null;
}

export interface IClient {
	name: string;
	shortDescription: string;
	longDescription: string;
	image: string;
	url: string;
}

export interface IProjects {
	allProjects: IProject[] | undefined;
}

export const initialState = {
	Projects: undefined,
};

const projectsSlice = createSlice({
	name: "projects",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(
			getProjectThunk.fulfilled,
			(state, { payload }: PayloadAction<any>) => {
				state.Projects = payload;
			}
		);
	},
});

// eslint-disable-next-line no-empty-pattern
export const {} = projectsSlice.actions;

export default projectsSlice.reducer;
