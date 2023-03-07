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
			{isSuccess && top5 ? (
				shortenedArr(top5).map((title, index) =>
					index % 2 === 0 ? (
						<T
							key={index}
							href={shortenedArr(top5)[index + 1]}
							target={'_blank'}
						>
							"{title}"
						</T>
					) : null
				)
			) : category !== '' ? (
				<T>
					SOMETHING WENT WRONG! <br />
					<br /> Make sure the entered subreddit is valid.
				</T>
			) : (
				<T>
					Select a category from the menu below or use the search bar:
				</T>
			)}
			{isLoading && category !== '' ? (
				<>
					<Lbg></Lbg>
					<L>
						LOADING <br /> ...
					</L>
				</>
			) : null}
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

	a {
		text-decoration: none;
		color: var(--dark);
	}
`;

const T = styled.a`
	margin-top: 2rem;
	transition: all 0.5s ease-in-out;
	cursor: pointer;
	:hover {
		transform: scale(1.1);
		margin: 2.7rem;
		color: var(--pink);
	}
`;

const Lbg = styled.div`
	position: absolute;
	justify-self: center;
	align-self: center;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.7);
`;

const L = styled.h1`
	position: absolute;
	text-align: center;
	color: var(--pink);
`;
