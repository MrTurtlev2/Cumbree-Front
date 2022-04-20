import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/common/Layout';
import Drawer from '../components/menu/Drawer';
import TopBar from '../components/menu/TopBar';
import MainPage from './MainPage';
import ProfilePage from './ProfilePage';
import { store } from '../app/store';
import { Provider } from 'react-redux';

const IndexPage = () => {

	const [isDrawerOpen, setDrawerOpen] = useState(false);

	const [pageIndex, setPageIndex] = useState(0);

	const changePage = (i : number) => {
		setPageIndex(i);
	};

	const returnPage = () => {
		switch(pageIndex) {
		case 0 : return <MainPage />;
		case 1 : return <ProfilePage />;
		}
	};

	return (
		<Provider store={store}>
			<Layout>

				<Drawer isDrawerOpen={isDrawerOpen} setPage={changePage} closeDrawer={()=>setDrawerOpen(false)} />

				<PageWrapper className={isDrawerOpen ? 'open' : ''}>
					<TopBar onClick={() => setDrawerOpen(!isDrawerOpen)} />
					{returnPage()}
				</PageWrapper>
			
			</Layout>
		</Provider>
	);
};

export default IndexPage;

const PageWrapper = styled.div`
	transform: rotate(0deg);
	transition: all 0.5s;
	opacity: 1;
	/* &.open {
		/* transform: rotate(-6deg); */
		//opacity: 0.5;
		/* transform: scale(0.5, 0.5) */
		//transform: translate(10px,100px);
	// } 
	
`;