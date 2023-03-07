import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../../features/pagesSlice';

export const BurgerMenu = () => {
	const dispatch = useDispatch();
	const {isOpen} = useSelector(state=> state.burgerMenu);
	const setAbout = () => {
		dispatch(setPage('about'));
	};

	const setContact = () => {
		dispatch(setPage('contact'));
	};
	return (
		<Container isOpen={isOpen}>
				<I onClick={setAbout} className='page'>
					about
				</I>
				<I onClick={setContact} className='page'>
					contact
				</I>
		</Container>
	);
};

const Container = styled.div`
 	transition: all 0.3s ease;
	position: absolute;
	left: -50%;
	right: -50%;
	background: linear-gradient(
		135deg,
		rgba(255, 255, 255, 0.1),
		rgba(255, 255, 255, 0)
	);
	backdrop-filter: blur(10px);
	display: ${props=> props.isOpen ? 'flex': 'none'};
	flex-direction: column;
	margin: 0 auto;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 10rem;
`;

const I = styled.li`
	list-style: none;
	font-weight: 600;
	font-size: 1.8rem;
	color: var(--dark);
	text-decoration: none;
	transition: all;
	cursor: pointer;
	margin-top: 1rem;
	transition: all 0.5s ease-in-out;
		:hover {
			transform: scale(1.5);
		}
`;
