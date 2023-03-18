import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getSkillThunk } from "../thunks/skillsThunk";

export interface ISkill {
	id: string | undefined;
	name: string | undefined;
	imageUrl: string | undefined;
}

const skillsSlice = createSlice({
	name: "skills",
	initialState: [] as ISkill[],
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(
			getSkillThunk.fulfilled,
			(state, { payload }: PayloadAction<any>) => {
				payload.result.forEach((skill: ISkill) => {
					state.push({
						id: skill.id,
						name: skill.name,
						imageUrl: skill.imageUrl,
					});
				});
			}
		);
	},
});

// eslint-disable-next-line no-empty-pattern
export const {} = skillsSlice.actions;

export default skillsSlice.reducer;
