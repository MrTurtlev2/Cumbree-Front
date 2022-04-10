import React from 'react';
import styled from 'styled-components';
import Layout from '../components/common/Layout';
import BookTab from '../components/menu/BookTab';
import TopBar from '../components/menu/TopBar';


const IndexPage = () => {
	return (


		<Layout>
			<TopBar />
			<BookTab />
		</Layout>


	);
};

export default IndexPage;
