import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import BgImage from '../images/radishBackground.webp';
import { getRecipesAsync, selectRecipes, deleteRecipe } from '../features/recipesSlice';

const ProfilePage = () => {

	const recipesArray = useSelector(selectRecipes);
	const dispatch = useDispatch();

	useEffect(()=> {
		dispatch(getRecipesAsync());
	}, []);


	return (
		<MainWrapper>
			{/* <BgImageComponent /> */}

			Profile page :DDDD
			Profile page :DDDD
			Profile page :DDDD
			Profile page :DDDD
			Profile page :DDDD
			Profile page :DDDD
			Profile page :DDDD
			Profile page :DDDD
			Profile page :DDDD
			Profile page :DDDD
			Profile page :DDDD
			{recipesArray.map((item)=> <span key={item.id}>{item.title}</span>)}

		</MainWrapper>
	);
};

export default ProfilePage;


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