import { createAsyncThunk } from "@reduxjs/toolkit";
import { Actions } from "../actions";
import { getSkillService } from "../../services";

export const getSkillThunk = createAsyncThunk<unknown, void, any>(
	Actions.GET_SKILLS,
	async (_, { rejectWithValue }) => {
		const service = getSkillService();

		try {
			const response = await fetch(service.address, service.parameters);

			return await response.json();
		} catch (e: any) {
			return rejectWithValue(e);
		}
	}
);
