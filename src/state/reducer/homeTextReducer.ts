import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getHomeTextThunk } from "../thunks/homeTextThunk";

export interface IHomeText {
	text: string;
	visible: boolean;
}

const homeTextSlice = createSlice({
	name: "homeText",
	initialState: [] as IHomeText[],
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(
			getHomeTextThunk.fulfilled,
			(state, { payload }: PayloadAction<any>) => {
				payload.result.forEach((message: IHomeText) => {
					state.push({
						text: message.text,
						visible: message.visible,
					});
				});
			}
		);
	},
});

// eslint-disable-next-line no-empty-pattern
export const {} = homeTextSlice.actions;

export default homeTextSlice.reducer;
