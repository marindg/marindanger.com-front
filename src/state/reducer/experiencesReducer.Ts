import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getExperienceThunk } from "../thunks";

export interface IExperience {
	id: string;
	education: boolean;
	title: string;
	company_name: string;
	icon: string;
	iconBg: string;
	date: string;
	points?: string[];
}

const experiencesSlice = createSlice({
	name: "experiences",
	initialState: [] as IExperience[],
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(
			getExperienceThunk.fulfilled,
			(state, { payload }: PayloadAction<any>) => {
				payload.result.forEach((experience: IExperience) => {
					state.push({
						id: experience.id,
						education: experience.education,
						title: experience.title,
						company_name: experience.company_name,
						icon: experience.icon,
						iconBg: experience.iconBg,
						date: experience.date,
						points: experience.points,
					});
				});
			}
		);
	},
});

// eslint-disable-next-line no-empty-pattern
export const {} = experiencesSlice.actions;

export default experiencesSlice.reducer;
