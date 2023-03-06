import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { getTop5 } from '../../features/Top5Slice';

export const Top5 = () => {
	const top5 = useSelector((state) => state.top5.data);
	const isLoading = useSelector((state) => state.top5.isLoading);
	const isSuccess = useSelector((state) => state.top5.isSuccess);
	const isRejected = useSelector((state) => state.top5.isRejected);
	const { category } = useSelector((store) => store.category);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getTop5(category));
	}, [category, dispatch]);

	const shortenedArr = (arr) => {
		if (arr) {
			return arr.map((title) => {
				if (title.length > 64) {
					return `${title[0].toUpperCase() + title.slice(1, 64)}...`;
				} else {
					return (
						title[0].toUpperCase() + title.slice(1, title.length)
					);
				}
			});
		} else {
			return [];
		}
	};

	return (
		<Container>
			{category !== '...' && isSuccess ? (
				shortenedArr(top5).map((title, index) => (
					<T key={index}>"{title}"</T>
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
	justify-content: center;
	align-items: center;
	font-style: normal;
	font-weight: 400;
	font-size: 40px;
	line-height: 40px;
	margin-bottom: 4rem;
`;

const T = styled.a`
	margin-top: 2rem;
`;