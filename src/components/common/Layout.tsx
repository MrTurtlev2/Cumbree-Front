import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from '../../constants/theme';

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
	background-color: ${({ theme }) => theme.colors.white};
	display: flex;
	flex-direction: column;
	width: 100%;
`;