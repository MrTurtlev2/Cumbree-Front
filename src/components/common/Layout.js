import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../constants/theme';
import Drawer from '../menu/Drawer';
import TopBar from '../menu/TopBar';
import './layout.css';
import {changeDrawerState} from '../../features/drawerSlice';

const Layout = ({children}) => {

	const drawerState = useSelector((state) => state.drawerState.value);
	const dispatch = useDispatch();

	console.log(drawerState);

	return (
		<ThemeProvider theme={theme}>
			<Drawer isDrawerOpen={drawerState} closeDrawer={() => dispatch(changeDrawerState(false))} />
			<StyledMain>
				<TopBar onClick={() => dispatch(changeDrawerState(true))} right={0} left='auto' />
				<PageContainer>
					{children}
				</PageContainer>
			</StyledMain>
		</ThemeProvider>
	);
};
export default Layout;

const StyledMain = styled.main`
	/* background-color: ${({ theme }) => theme.colors.white}; */
	background-color: bisque;
	height: 100%;
	display: flex;
	flex-direction: column;
	width: 100%;
	overflow-x: hidden;
	font-family: 'Quicksand', sans-serif !important;
	@media(max-width: 750px) {
		width: 100vw;
	}
`;
const PageContainer = styled.div`
	padding-top: 70px;
`;