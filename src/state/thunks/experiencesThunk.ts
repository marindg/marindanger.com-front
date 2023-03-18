import { createAsyncThunk } from "@reduxjs/toolkit";
import { Actions } from "../actions";
import { getExperienceService } from "../../services";

export const getExperienceThunk = createAsyncThunk<unknown, void, any>(
	Actions.GET_EXPERIENCES,
	async (_, { rejectWithValue }) => {
		const service = getExperienceService();

		try {
			const response = await fetch(service.address, service.parameters);

			return await response.json();
		} catch (e: any) {
			return rejectWithValue(e);
		}
	}
);
