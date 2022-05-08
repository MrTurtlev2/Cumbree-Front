import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isDrawerOpen: null,
};


export const drawerSlice = createSlice({
	name: 'drawerState',
	initialState,
	reducers: {
		changeDrawerState: (state, {payload}) => {
			state.value = payload;
		},
	},
});

export const { changeDrawerState } = drawerSlice.actions;

export default drawerSlice.reducer;

