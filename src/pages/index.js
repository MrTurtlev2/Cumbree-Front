import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import DishTile from '../components/common/dish/DishTile';
import Layout from '../components/common/Layout';
import { getRecipesAsync, selectRecipes } from '../features/recipesSlice';

const IndexPage = () => {

	const recipesArray = useSelector(selectRecipes);
	const dispatch = useDispatch();
	const [search, setSearch] = useState('');

	const filteredRecipes = search ? recipesArray.filter(recipe => recipe.title.toLowerCase().includes(search)) : recipesArray;

	useEffect(()=> {
		dispatch(getRecipesAsync());
	}, []);

	const searchRecipes = (e) => {
		setSearch(e.target.value);
	};

	return (
		<Layout>
			<PageWrapper>
				<input type='text' value={search} onChange={searchRecipes} />
				<TilesWrapper>
					{filteredRecipes.map((item)=> <DishTile key={item.id} item={item} />)}
					{filteredRecipes.length == 0 && <p>Nie znaleziono przepisów</p>}
				</TilesWrapper>
			</PageWrapper>			
		</Layout>
	);
};

export default IndexPage;

const PageWrapper = styled.div`
	opacity: 1;
	overflow-y: auto;
`;
const TilesWrapper = styled.div`
	padding: 50px 35px;
`;