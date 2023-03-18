import { createAsyncThunk } from "@reduxjs/toolkit";
import { Actions } from "../actions";
import { getHomeTextService } from "../../services";

export const getHomeTextThunk = createAsyncThunk<unknown, void, any>(
	Actions.GET_HOME_TEXT,
	async (_, { rejectWithValue }) => {
		const service = getHomeTextService();

		try {
			const response = await fetch(service.address, service.parameters);

			return await response.json();
		} catch (e: any) {
			return rejectWithValue(e);
		}
	}
);
