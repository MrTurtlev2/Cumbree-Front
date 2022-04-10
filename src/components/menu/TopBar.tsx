import React from 'react';
import styled from 'styled-components';
import BookTab from './BookTab';

const TopBar = () => {
	return (
		<TopBarWrapper>
            Brązowy ryż
			{/* <BookTab /> */}
		</TopBarWrapper>
	);
};

export default TopBar;

const TopBarWrapper = styled.div`
    display: flex;
    background-color: ${({ theme }) => theme.colors.pink};
    height: 70px;
    box-shadow: -54px 1px 22px -13px rgb(66 68 90);
`;