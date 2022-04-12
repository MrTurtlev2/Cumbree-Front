import React from 'react';
import styled from 'styled-components';
import BgImage from '../images/radishBackground.webp';

const MainPage = () => {
	return (
		<MainWrapper>
			to jest main page
			{/* <BgImageComponent /> */}
			to jest main page
			to jest main page
			to jest main page
			to jest main page
			to jest main page
			to jest main page
			to jest main page
			to jest main page
			to jest main page
			to jest main page

			to jest main pageto jest main page
			to jest main page
			to jest main page
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
`;