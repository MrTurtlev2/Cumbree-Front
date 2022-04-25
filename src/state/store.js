import { configureStore } from '@reduxjs/toolkit';
import recipesReducer  from '../features/recipesSlice';
import drawerReducer from '../features/drawerSlice';

export const store = configureStore({
	reducer: {
		recipes: recipesReducer,
		drawerState: drawerReducer,
	},
});