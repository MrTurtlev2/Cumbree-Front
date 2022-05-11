import React from 'react';
import styled from 'styled-components';

const BookTabSmall = ({onClick, left, right, text, iconUrl}) => {
	return (
		<BookTabWrapper onClick={onClick} left={left} right={right}>
			<BookTabSquare>
				{iconUrl && <BookTabImage src={iconUrl} />}
				<span>{text}</span>
			</BookTabSquare>
			<TriangleWrapper>
				<Triangle />
				<Triangle className='right' />
			</TriangleWrapper>
		</BookTabWrapper>
	);
};

export default BookTabSmall;

const BookTabWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 50px;
    position: absolute;
    left: ${(props) => props?.left}px;
    right: ${(props) => props?.right}px;
    top: 0;
`;
const BookTabSquare = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.white};
    height: 50px;
    width: 50px;
    padding-top: 5;
    text-align: center;
    span {
        width: 45px;
        font-size: 10px;
    }
`;
const BookTabImage = styled.img`
    height: 35px;
    width: 35px;
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
    border-width: 25px 50px 0 0;
    border-color: #FFF transparent transparent transparent;
    &.right {
        right: 0;
        left: auto;
        border-width: 25px 0 0 50px;
    }
`;