import { navigate } from 'gatsby';
import React from 'react';
import styled, { keyframes } from 'styled-components';
import BookTab from '../common/book-tab/BookTab';
import profImg from '../../images/profileImage.png';

const Drawer = ({isDrawerOpen, closeDrawer}) => {

	const handleNavigation = (pagePath) => {
		if (isDrawerOpen != null) {
			closeDrawer();
			navigate(pagePath);
		}
	};


	return (
		<DrawerWrapper className={isDrawerOpen != null ? (isDrawerOpen ? 'open' : 'closing') : ''}>
			<DrawerTop>
				<BookTab onClick={()=> handleNavigation(null)} right={0} />
				<ProfileWrapper>
					<Profile src={profImg} />
				</ProfileWrapper>
			</DrawerTop>
			<DrawerBody>
				<NameBar><span>Karolina Krawczyk</span></NameBar>
				<NavigationButton onClick={()=> handleNavigation('/')}>Wszystkie Przepisy</NavigationButton>
				<NavigationButton onClick={()=> handleNavigation('/ProfilePage')}>Ulubione</NavigationButton>
				<NavigationButton onClick={()=> handleNavigation('/ProfilePage')}>Inne</NavigationButton>
			</DrawerBody>
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
const closeAnimation = keyframes`
	0%  { top: 0 }
	100% {  top: -100% }
`;


const DrawerWrapper = styled.div`
	height: 0;
    position: absolute;
    top: -100%;
    right: 0;
	width: 100vw;
	height: 100vh;
	background-color:  ${({ theme }) => theme.colors.white};
    z-index: 3;
	&.open {
		animation: ${bounceAnimation} 1.2s forwards;
	}
	&.closing {
		animation: ${closeAnimation} 0.5s forwards;
	}
`;
const DrawerTop = styled.div`
	background-color: #F6E4E3;
	height: 150px;
	position: relative ;
`;
const ProfileWrapper = styled.div`
	background-color:  ${({ theme }) => theme.colors.white};
	height: 140px;
	width: 140px;
	position: absolute;
	bottom: 0;
	left: 50%;
    transform: translate(-50%, 50%);
	border-radius: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Profile = styled.img`
	height: 110px;
	width: 110px;
	border-radius: 100%;
`;
const DrawerBody = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 70px 50px 0 50px;
	align-items: center;
`;
const NameBar = styled.div`
	background-color: #CFEBDB;
	border: 3px solid #9ED5B5;
	border-radius: 37px;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 15px 35px;
	width: 100%;
`;
const NavigationButton = styled.div`
	color: #FE6868;
	text-align: center;
	border-bottom: 3px solid #DCDCDC;
	width: 100%;
    padding: 26px 0px;
	font-weight: ${({ theme }) => theme.weight.bold};

	:first-of-type {
		margin-top: 50px !important;
		padding-top: 50px;
	}
`;