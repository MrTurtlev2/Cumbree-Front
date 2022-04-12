import React from 'react';
import styled from 'styled-components';

const Drawer = ({isDrawerOpen, setPage}) => {

	return (
		<DrawerWrapper className={isDrawerOpen ? 'open' : ''}>
			{isDrawerOpen && (
				<Drawercontent>
					<div onClick={()=>setPage(0)}>Main</div>
					<div onClick={()=>setPage(1)}>drugie</div>
				</Drawercontent>
			)}
			
		</DrawerWrapper>
	);
};
export default Drawer;

const DrawerWrapper = styled.div`
	height: 100vh;
    position: absolute;
    top: 0;
    right: 0;
	width: 0px;
	background-color: blue;
	transition: all 0.3s;
    z-index: 1;
	&.open {
		width: 300px;
	}
`;
const Drawercontent = styled.div`

`;