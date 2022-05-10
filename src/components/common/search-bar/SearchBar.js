import React, { useState } from 'react';
import styled from 'styled-components';
import searchImage from '../../../images/searchIcon.png';

function SearchBar({value, onChange, placeholder}) {

	const [isOpen, setOpen] = useState(false);

	return (
		<SearcherWrapper>
			<Searcher className={isOpen && 'open'} type="text" value={value} onChange={onChange} placeholder={placeholder} />
			<SearcherCircle onClick={() => setOpen(!isOpen)}>
				<SearchImg src={searchImage} />
			</SearcherCircle>			
		</SearcherWrapper>
	);
}

export default SearchBar;


const SearcherWrapper = styled.div`
	position: relative;
	width: fit-content;
`;
const Searcher = styled.input`
	outline: none;
	border-radius: 37px;
	border: 2px solid #F48F8F;
	transition: all 0.5s;
	width: 0;
	height: 45px;
    padding: 0 22px;
	&.open {
		width: 230px;
	}
`;
const SearcherCircle = styled.div`
	height: 46px;
	width: 46px;
	background-color: #008037;
	border-radius: 50%;
	position: absolute;
	top: 0;
	right: 0;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const SearchImg = styled.img`
	height: 35px;
	width: 35px;
`;