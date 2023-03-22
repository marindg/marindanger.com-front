import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook } from "react-redux";
import { useSelector as useReduxSelector } from "react-redux";
import rootReducer from "./reducer";

const store = configureStore({
	reducer: rootReducer,
	devTools: false,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
