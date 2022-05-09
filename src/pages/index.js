import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import DishTile from '../components/common/dish/DishTile';
import Layout from '../components/common/Layout';
import { getRecipesAsync, selectRecipes, searchRecipe } from '../features/recipesSlice';

const IndexPage = () => {

	const recipesArray = useSelector(selectRecipes);
	const dispatch = useDispatch();

	useEffect(()=> {
		dispatch(getRecipesAsync());
	}, []);

	
	const searchRecipes = (e) => {
		let a = recipesArray.filter(v => v.title.toLowerCase().includes(e));
		console.log(a);
		return a;
	};

	
	return (
		<Layout>
			<PageWrapper>
				<input type='text' onChange={(e) => searchRecipes(e.target.value)} />
				<TilesWrapper>
					{recipesArray.map((item)=> <DishTile key={item.id} item={item} />)}
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