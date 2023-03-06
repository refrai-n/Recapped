import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';


export const CurrentText = () => {
	const {category} = useSelector((store)=> store.category);
	return (
		<Container>
			<T>Recent Top 5 posts from <Mint>r/{category}</Mint>: </T>
		</Container>
	);
};

const Container = styled.div`
	margin: 2rem;
	text-align: center;
`;
const T = styled.p`
	font-size: 1.5rem;
`;

const Mint = styled.span`
	color: var(--pink);
`;