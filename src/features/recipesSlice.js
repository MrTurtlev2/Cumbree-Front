import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
	recipes: [],
};
const API = 'https://6123fff0124d880017568573.mockapi.io';

export const getRecipesAsync = createAsyncThunk(
	'recipes/getRecipesAsync', async () => {
		const data = await axios.get(`${API}/rest`);
		return data.data;
	}
);


export const recipesSlice = createSlice({
	name: 'recipes',
	initialState,
	reducers: {
		deleteRecipe: (state, {payload}) => {
			state.recipes = state.recipes.filter((recipe) => payload != recipe.id ) ;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getRecipesAsync.pending, (state, action) => {
			// state.recipes = action.payload;
				// console.log('pending');
			})
			.addCase(getRecipesAsync.fulfilled, (state, action) => {
				state.recipes = action.payload;
				console.log(action);
				// console.log('fulfield');
			})
			.addCase(getRecipesAsync.rejected, (state, action) => {
				// state.recipes = action.payload;
				// console.log('rejected');
			});
	},
});

export const { deleteRecipe } = recipesSlice.actions;

export const selectRecipes = state => state.recipes.recipes;

export default recipesSlice.reducer;