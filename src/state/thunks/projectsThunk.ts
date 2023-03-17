import { createAsyncThunk } from "@reduxjs/toolkit";
import { Actions } from "../actions";
import { getProjectService } from "../../services";

export const getProjectThunk = createAsyncThunk<unknown, void, any>(
	Actions.GET_PROJECTS,
	async (_, { rejectWithValue }) => {
		const service = getProjectService();

		try {
			const response = await fetch(service.address, service.parameters);
			console.log(response);
			return await response.json();
		} catch (e: any) {
			return rejectWithValue(e);
		}
	}
);
