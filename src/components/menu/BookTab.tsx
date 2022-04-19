import React from 'react';
import styled from 'styled-components';
import BurgerMaenu from '../../images/BurgerManu';

const BookTab = ({onClick}) => {
	return (
		<BookTabWrapper onClick={onClick}>
			<BookTabSquare>
				<BurgerMaenu />
			</BookTabSquare>
			<TriangleWrapper>
				<Triangle />
				<Triangle className='right' />
			</TriangleWrapper>
		</BookTabWrapper>
	);
};

export default BookTab;

const BookTabWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 80px;
    position: absolute;
    top: 0;
    right: 0;
`;

const BookTabSquare = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.white};
    height: 70px;
    width: 80px;
`;

const TriangleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    background-color: transparent;
    position: relative;
`;
const Triangle = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 32px 70px 0 0;
    border-color: #FFF transparent transparent transparent;
    &.right {
        right: 0;
        left: auto;
        border-width: 32px 0 0 70px;
    }
`;