import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getHomeTextThunk } from "../thunks/homeTextThunk";

export interface IHomeText {
	homeText: {
		text: string;
		visible: boolean;
	};
}

export const initialState = {
	homeText: {
		text: "Actuellement disponible pour travailler !",
		visible: true,
	},
};

const homeTextSlice = createSlice({
	name: "homeText",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(
			getHomeTextThunk.fulfilled,
			(state, { payload }: PayloadAction<any>) => {
				console.log(payload);
				state.homeText = payload.result;
			}
		);
	},
});

// eslint-disable-next-line no-empty-pattern
export const {} = homeTextSlice.actions;

export default homeTextSlice.reducer;
