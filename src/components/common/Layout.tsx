import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../constants/theme';
import './layout.css';

const Layout = ({children}) => {

	return (
		<ThemeProvider theme={theme}>
			<StyledMain>
				{children}
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
	font-family: 'Quicksand', sans-serif !important;
`;