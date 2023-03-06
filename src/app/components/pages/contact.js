import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setPage } from '../../features/pagesSlice';

export const Contact = () => {
	const { page } = useSelector((state) => state.pages);
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(setPage('home'));
	};

	const Email = (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='50'
			height='50'
			fill='currentColor'
			viewBox='0 0 16 16'
		>
			<path d='M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z' />
		</svg>
	);

	const Twitter = (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='50'
			height='50'
			fill='currentColor'
			viewBox='0 0 16 16'
		>
			<path d='M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z' />
		</svg>
	);

	const GitHub = (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='50'
			height='50'
			fill='currentColor'
			viewBox='0 0 16 16'
		>
			<path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z' />
		</svg>
	);

	return (
		<Container page={page}>
			<h1>CONTACT</h1>
			<Icos>
				<a href='mailto:email@gmail.com'>{Email}</a>
				<a href='https://twitter.com/refrai_n' target={'_blank'}>
					{Twitter}
				</a>
				<a href='https://github.com/refrain-n' target={'_blank'}>
					{GitHub}
				</a>
			</Icos>
			<X
				onClick={handleClick}
				xmlns='http://www.w3.org/2000/svg'
				width='56'
				height='56'
				fill='currentColor'
				className='bi bi-x-circle-fill'
				viewBox='0 0 16 16'
			>
				<path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z' />
			</X>
		</Container>
	);
};

const Container = styled.div`
	background: linear-gradient(
		135deg,
		rgba(255, 255, 255, 0.1),
		rgba(255, 255, 255, 0)
	);
	backdrop-filter: blur(10px);
	width: 100%;
	height: 100%;
	position: fixed;
	z-index: 9999;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: ${(props) => (props.page === 'contact' ? 'flex' : 'none')};
	text-align: center;
	flex-direction: column;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
`;

const X = styled.svg`
	position: absolute;
	top: 1;
	right: 1;
	margin-bottom: 80vh;
	cursor: pointer;
	transition: all 0.5s ease-in-out;
		:hover {
			transform: scale(1.5);
		}
`;

const Icos = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 5rem;
	a {
		color: var(--dark);
		transition: all 0.5s ease-in-out;
		:hover {
			transform: scale(1.5);
		}
	}
`;
