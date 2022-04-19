import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import BookTab from './BookTab';

const Drawer = ({isDrawerOpen, setPage, closeDrawer}) => {

	const [isDrawerClosing, setDrawerClosing] = useState(false);

	const handleNavigation = (pageNumber) => {
		if (pageNumber == null) {
			closeDrawer();
			setDrawerClosing(true);
		}
		else if (isDrawerOpen) {
			setPage(pageNumber);
			closeDrawer();
			setDrawerClosing(true);
		}
	};
	
	// const handleAnimationClass = () => {
	// 	if (isDrawerClosing)
	// 		return 'closing';
	// 	if (isDrawerOpen) {
	// 		// setDrawerClosing(false);
	// 		return 'open';
	// 	}
	// };


	return (
		<DrawerWrapper className={isDrawerOpen && 'open'}>
			{/* <DrawerWrapper className={isDrawerClosing ? 'closing' : (isDrawerOpen && 'open')}>
		<DrawerWrapper className={handleAnimationClass()}> */}
			{isDrawerOpen && (
				<Drawercontent>
					<BookTab onClick={()=> handleNavigation(null)}/>
					<div onClick={()=> handleNavigation(0)}>Main</div>
					<div onClick={()=> handleNavigation(1)}>drugie</div>
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
    z-index: 1;
	&.open {
		animation: ${bounceAnimation} 1.2s forwards;
	}
	&.closing {
		animation: ${closeAnimation} 1.2s forwards;
	}
`;
const Drawercontent = styled.div``;