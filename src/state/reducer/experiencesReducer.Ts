import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getExperienceThunk } from "../thunks";

export interface IExperience {
	_id: string;
	education: boolean;
	title: string;
	company_name: string;
	icon: string;
	iconBg: string;
	date: string;
	points?: string[];
}

export interface IExperience {
	experiences: IExperience[];
}

export const initialState = {
	experiences: undefined,
};

const experiencesSlice = createSlice({
	name: "experiences",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(
			getExperienceThunk.fulfilled,
			(state, { payload }: PayloadAction<any>) => {
				state.experiences = payload.result;
			}
		);
	},
});

// eslint-disable-next-line no-empty-pattern
export const {} = experiencesSlice.actions;

export default experiencesSlice.reducer;
