import { navigate } from 'gatsby';
import React from 'react';
import styled, { keyframes } from 'styled-components';
import BookTab from '../common/book-tab/BookTab';

const Drawer = ({isDrawerOpen, closeDrawer}) => {

	const handleNavigation = (pagePath) => {
		if (isDrawerOpen != null) {
			closeDrawer();
			navigate(pagePath);
		}
	};


	return (
		<DrawerWrapper className={isDrawerOpen != null ? (isDrawerOpen ? 'open' : 'closing') : ''}>
			{isDrawerOpen && (
				<Drawercontent>
					<BookTab onClick={()=> handleNavigation(null)} right={0} />
					<div onClick={()=> handleNavigation('/')}>Main</div>
					<div onClick={()=> handleNavigation('/ProfilePage')}>drugie</div>
				</Drawercontent>
			)}
			
		</DrawerWrapper>
	);
};
export default Drawer;

const bounceAnimation = keyframes`
	0%  { top: -100% }
	50% { top: 0 }
	60% { top: -40px }
	70% { top: 0 }
	80% { top: -20px }
	100% {  top: 0 }
`;

const closeAnimation = keyframes`
	0%  { top: 0 }
	100% {  top: -100% }
`;


const DrawerWrapper = styled.div`
	height: 0;
    position: absolute;
    top: -100%;
    right: 0;
	width: 100vw;
	height: 100vh;
	background-color: #59598f;
    z-index: 3;
	animation: none;
	&.open {
		animation: ${bounceAnimation} 1.2s forwards;
	}
	&.closing {
		animation: ${closeAnimation} 0.5s forwards;
	}
`;
const Drawercontent = styled.div``;