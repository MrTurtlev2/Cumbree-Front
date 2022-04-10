import React from 'react';
import styled from 'styled-components';
import Layout from '../components/common/Layout';
import TopBar from '../components/menu/TopBar';
import BgImage from '../images/radishBackground.webp';

const IndexPage = () => {
	return (


		<Layout>
			<TopBar />
			<MainWrapper>
				<BgImageComponent />
			</MainWrapper>
		</Layout>
	);
};

export default IndexPage;

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