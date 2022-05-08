import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import DishTile from '../components/common/dish/DishTile';
import Layout from '../components/common/Layout';
import { getRecipesAsync, selectRecipes } from '../features/recipesSlice';

const IndexPage = () => {

	const recipesArray = useSelector(selectRecipes);
	const dispatch = useDispatch();

	useEffect(()=> {
		dispatch(getRecipesAsync());
	}, []);
	
	return (
		<Layout>
			<PageWrapper>
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