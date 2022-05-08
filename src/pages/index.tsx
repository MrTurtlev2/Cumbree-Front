import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
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
				to jest index 
				{recipesArray.map((item)=> <span key={item.id}>{item.title}</span>)}
			</PageWrapper>			
		</Layout>
	);
};

export default IndexPage;

const PageWrapper = styled.div`
	opacity: 1;
`;