import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import BgImage from '../images/radishBackground.webp';
import { getRecipesAsync, selectRecipes, deleteRecipe } from '../features/recipesSlice';
import { navigate } from 'gatsby';

const MainPage = () => {

	const recipesArray = useSelector(selectRecipes);
	const dispatch = useDispatch();

	useEffect(()=> {
		dispatch(getRecipesAsync());
	}, []);


	return (
		<MainWrapper>
			{/* <BgImageComponent /> */}
			{recipesArray.map((item)=> <span key={item.id}>{item.title}</span>)}
			rrgeg
			<div onClick={()=>dispatch(deleteRecipe(1))}>usuń</div>
			<div onClick={()=>navigate('/ProfilePage')}>usuń</div>
		</MainWrapper>
	);
};

export default MainPage;


const BgImageComponent = styled.div`
	background-image: url(${BgImage});
	height: 570px;
	width: 100vw;
	background-repeat: no-repeat, repeat;
	-webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
`;

const MainWrapper = styled.div`
	height: 2000px;
	overflow-y: auto;
	@media(max-width: 750px) {
		padding-top: 50px;
	}
`;