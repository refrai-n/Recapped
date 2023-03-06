import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { getTop5 } from '../../features/Top5Slice';

export const Top5 = () => {
	const text = 'The quick brown fox jumps over the lazy dog';
	const top5 = useSelector((state) => state.top5.data);
	const { category } = useSelector((store) => store.category);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTop5(category));
	}, [category, dispatch]);

	
	return (
		<Container>
		  {top5 && top5.length > 0 ? (
			top5.map((title, index) => (
			  <T key={index}>{title}</T>
			))
		  ) : (
			<T>NO DATA AVAILABLE</T>
		  )}
		</Container>
	  );
	};

const Container = styled.div`
	color: var(--dark);
	text-align: center;
	display: flex;
	flex-direction: column;
	margin-top: 2rem;
	justify-content: center;
	align-items: center;
	font-style: normal;
	font-weight: 400;
	font-size: 40px;
	line-height: 40px;
	margin-bottom: 4rem;
`;

const T = styled.a``;
