import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import DishTile from '../components/common/dish/DishTile';
import Layout from '../components/common/Layout';
import { getRecipesAsync, selectRecipes } from '../features/recipesSlice';

const IndexPage = () => {

	const recipesArray = useSelector(selectRecipes);
	const dispatch = useDispatch();
	let filter;

	useEffect(()=> {
		dispatch(getRecipesAsync());
	}, []);


	
	const searchRecipes = (value) => {
		filter = recipesArray.filter(item => item.title.toLowerCase().includes(value));
		setFiltered(filter);
	};

	const [filteredRecipes, setFiltered] = useState(recipesArray);
	

	console.log(filteredRecipes);

	return (
		<Layout>
			<PageWrapper>
				<input type='text' onChange={(e) => searchRecipes(e.target.value)} />
				<TilesWrapper>
					{filteredRecipes.map((item)=> <DishTile key={item.id} item={item} />)}
					{filteredRecipes.length == 0 && <p>rfrfrf</p>}
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