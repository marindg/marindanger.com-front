import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getProjectThunk } from "../thunks/projectsThunk";

export interface IProject {
	id: string;
	name: string;
	shortDescription?: string | undefined;
	longDescription: string;
	imageUrl: string;
	date?: string | undefined;
	technologies: string[];
}

const projectsSlice = createSlice({
	name: "projects",
	initialState: [] as IProject[],
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(
			getProjectThunk.fulfilled,
			(state, { payload }: PayloadAction<any>) => {
				payload.result.forEach((project: IProject) => {
					state.push({
						id: project.id,
						name: project.name,
						shortDescription: project.shortDescription,
						longDescription: project.longDescription,
						imageUrl: project.imageUrl,
						date: project.date,
						technologies: project.technologies,
					});
				});
			}
		);
	},
});

// eslint-disable-next-line no-empty-pattern
export const {} = projectsSlice.actions;

export default projectsSlice.reducer;
