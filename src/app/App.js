import styled from 'styled-components';
import { Navbar } from './components/navbar/Navbar';
import { CurrentText } from './components/currenttext/CurrentText';
import { Searchbar } from './components/searchbar/Searchbar';
import { Top5 } from './components/top5/Top5';
import { Categories } from './components/categories/Categories';

import React from 'react';

const App = () => {
	return (
		<Container>
			<Navbar />
			<Searchbar />
			<CurrentText />
			<Top5 />
			<Categories />
		</Container>
	);
};

const Container = styled.div`
	margin: 0;
`;

export default App;
