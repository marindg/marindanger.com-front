import {
	createSlice,
	AsyncThunk,
	isPending,
	isFulfilled,
	isRejected,
} from "@reduxjs/toolkit";

type GenericAsyncThunk = AsyncThunk<unknown, unknown, any>;
type PendingAction = ReturnType<GenericAsyncThunk["pending"]>;
type FulfilledAction = ReturnType<GenericAsyncThunk["fulfilled"]>;
type RejectedAction = ReturnType<GenericAsyncThunk["rejected"]>;

interface LoadingState {
	[requestName: string]: boolean;
}

const initialState: LoadingState = {};

const loadingSlice = createSlice({
	name: "loading",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addMatcher<FulfilledAction>(isFulfilled, (state, { type }) => {
				state[type.replace(/\/[a-z]*$/, "")] = false;
			})
			.addMatcher<RejectedAction>(isRejected, (state, { type }) => {
				state[type.replace(/\/[a-z]*$/, "")] = false;
			})
			.addMatcher<PendingAction>(isPending, (state, { type }) => {
				state[type.replace(/\/[a-z]*$/, "")] = true;
			});
	},
});

export default loadingSlice.reducer;
