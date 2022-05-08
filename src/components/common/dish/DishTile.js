import React from 'react';
import styled from 'styled-components';
import dishImage from '../../../images/dish.jpg';
import clockImage from '../../../images/clock.png';
import BookTabSmall from '../book-tab/BookTabSmall';


const DishTile = ({item}) => {
	return (
		<TileWrapper>
			<BookTabSmall left={10} right='auto' />
			<BookTabSmall left={70} right='auto' />
			<TileImageWrapper>
				<TileImage />
			</TileImageWrapper>
			<TileBottom>
				<TileType>{item?.type}</TileType>
				<TileTitle>{item?.title}</TileTitle>
				<Line />
				<ControllsWrapper>
					<Control>
						<img src={clockImage} />
						{item?.time}min</Control>
					<Control>Like</Control>
				</ControllsWrapper>
			</TileBottom>
		</TileWrapper>
	);
};

export default DishTile;

const TileWrapper = styled.div`
    margin-bottom: 30px;
    position: relative;
`;
const TileImageWrapper = styled.div`
    height: 130px;
`;
const TileImage = styled.div`
    background-image: url(${dishImage});
    border-radius: 8px 8px 0 0;
    height: 100%;
    background-position: center;
`;

const TileBottom = styled.div`
    display: flex;
    flex-direction: column;
    background-color:  ${({ theme }) => theme.colors.white};
    border-radius: 0 0 8px 8px;
    text-align: center;
    padding-top: 15px;
    background-color: #f6e4e3;
    background-image: linear-gradient(to top, #f6e4e3 0%, #fff 45%);
`;
const TileType = styled.div`
    color: #FE6868;
    font-weight: ${({ theme }) => theme.weight.bold};
    font-size: ${({ theme }) => theme.size.vsmall};
    
`;

const TileTitle = styled.div`
    margin: 10px 0 35px 0;
    font-weight: ${({ theme }) => theme.weight.bold};
    font-size: ${({ theme }) => theme.size.big};
    text-transform: uppercase;
`;
const Line = styled.div`
   width: 87%;
   height: 2px;
   background-color: ${({ theme }) => theme.colors.lightGrey};
   align-self: center;
`;
const ControllsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 35px 15px 35px;
`;
const Control = styled.div`
    color: ${({ theme }) => theme.colors.grey};
    align-items: center;
    display: flex;
`;
