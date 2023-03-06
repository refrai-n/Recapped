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

	return (
		<Container page={page}>
			<h1>CONTACT</h1>
			<Desc>
				.....
			</Desc>
			<More>
				Made by{' '}
				<a href='https://github.com/refrain-n' target={'_blank'}>
					<Pink> Refrain</Pink>
				</a>{' '}
			</More>
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
	backdrop-filter: blur(8px);
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
`;

const Desc = styled.a`
	font-size: 1.3rem;
	margin: 1rem;
`;

const More = styled.a`
	position: absolute;
	font-size: 1.2rem;
	margin: 1rem;
	margin-top: 80vh;
	a {
		text-decoration: none;
	}
`;

const Pink = styled.span`
	color: var(--pink);
`;
