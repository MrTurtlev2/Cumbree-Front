import React from 'react';
import styled, { keyframes } from 'styled-components';
import BookTab from './BookTab';

const Drawer = ({isDrawerOpen, setPage, closeDrawer}) => {

	return (
		<DrawerWrapper className={isDrawerOpen ? 'open' : ''}>
			{isDrawerOpen && (
				<Drawercontent>
					<BookTab onClick={closeDrawer}/>
					<div onClick={()=>{setPage(0); closeDrawer();}}>Main</div>
					<div onClick={()=>{setPage(1); closeDrawer();}}>drugie</div>
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
`;
const Drawercontent = styled.div``;