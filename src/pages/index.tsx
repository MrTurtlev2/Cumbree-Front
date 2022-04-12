import React, { useState } from 'react';
import Layout from '../components/common/Layout';
import Drawer from '../components/menu/Drawer';
import TopBar from '../components/menu/TopBar';
import MainPage from './MainPage';
import ProfilePage from './ProfilePage';

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
		<Layout>
			<TopBar onClick={() => setDrawerOpen(!isDrawerOpen)} />
			<Drawer isDrawerOpen={isDrawerOpen} setPage={changePage} />

			{returnPage()}
			
		</Layout>
	);
};

export default IndexPage;